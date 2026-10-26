"""Earth observation data for the lab's UAE experiments.

  thennow   Landsat (late 1990s) and Sentinel-2 (now) true colour of the same places
  mangrove  one clear Sentinel-2 scene per autumn since 2017 over Abu Dhabi's eastern mangroves, with NDVI
  spot      recent Sentinel-2 chips of UAE places for the "spot the city" game, plus a UAE outline

Data: Copernicus Sentinel-2 L2A (Earth Search, AWS open data) and USGS Landsat Collection 2 L2
(Microsoft Planetary Computer). Usage: python eo.py [all|thennow|mangrove|spot]
"""
import json
import math
import os
import sys
import urllib.request

import numpy as np
import rasterio
from PIL import Image
from pystac_client import Client
from rasterio.enums import Resampling
from rasterio.warp import transform_bounds
from rasterio.windows import from_bounds

OUT = "assets/eo"
ES = "https://earth-search.aws.element84.com/v1"
PC = "https://planetarycomputer.microsoft.com/api/stac/v1"


def size_for(bbox, width):
    lat = (bbox[1] + bbox[3]) / 2
    h = width * (bbox[3] - bbox[1]) / ((bbox[2] - bbox[0]) * math.cos(math.radians(lat)))
    return width, int(round(h))


def read_band(href, bbox, w, h, scale, offset):
    with rasterio.open(href) as src:
        b = transform_bounds("EPSG:4326", src.crs, *bbox)
        win = from_bounds(*b, transform=src.transform)
        dn = src.read(1, window=win, out_shape=(h, w), resampling=Resampling.bilinear, boundless=True, fill_value=0)
    valid = dn > 0
    return np.where(valid, dn * scale + offset, np.nan), valid.mean()


def s2_band(item, key, bbox, w, h):
    a = item.assets[key]
    rb = (a.extra_fields.get("raster:bands") or [{}])[0]
    offset = rb.get("offset", 0.0)
    if item.properties.get("earthsearch:boa_offset_applied"):
        offset = 0.0  # Earth Search already removed the -0.1 offset from these files
    return read_band(a.href, bbox, w, h, rb.get("scale", 0.0001), offset)


def ls_band(item, key, bbox, w, h):
    return read_band(item.assets[key].href, bbox, w, h, 0.0000275, -0.2)


def stretch(rgb):
    """Percentile stretch shared by the three bands, with a gentle gamma, so different sensors look alike."""
    v = rgb[np.isfinite(rgb)]
    lo, hi = np.percentile(v, 1), np.percentile(v, 99.3)
    x = np.clip((np.nan_to_num(rgb, nan=lo) - lo) / max(hi - lo, 1e-6), 0, 1) ** 0.85
    return (x * 255).round().astype(np.uint8)


def save_rgb(arr, path):
    Image.fromarray(stretch(arr), "RGB").save(path, quality=86, optimize=True)


def s2_search(bbox, dates=None, cloud=5, n=25):
    cat = Client.open(ES)
    kw = dict(collections=["sentinel-2-l2a"], bbox=bbox, query={"eo:cloud_cover": {"lt": cloud}},
              sortby=[{"field": "properties.datetime", "direction": "desc"}], max_items=n)
    if dates:
        kw["datetime"] = dates
    return list(cat.search(**kw).items())


def s2_rgb(bbox, w, dates=None, cloud=5):
    w, h = size_for(bbox, w)
    for it in s2_search(bbox, dates, cloud):
        r, cov = s2_band(it, "red", bbox, w, h)
        if cov < 0.995:
            continue
        g = s2_band(it, "green", bbox, w, h)[0]
        b = s2_band(it, "blue", bbox, w, h)[0]
        return it, np.dstack([r, g, b])
    return None, None


# ---------------------------------------------------------------- then and now
SITES = [
    {"id": "palm", "en": "Palm Jumeirah", "ar": "نخلة جميرا", "bbox": [55.085, 25.070, 55.195, 25.150]},
    {"id": "saadiyat", "en": "Saadiyat Island", "ar": "جزيرة السعديات", "bbox": [54.380, 24.500, 54.490, 24.580]},
    {"id": "yas", "en": "Yas Island", "ar": "جزيرة ياس", "bbox": [54.560, 24.440, 54.660, 24.520]},
    {"id": "downtown", "en": "Downtown Dubai", "ar": "وسط مدينة دبي", "bbox": [55.235, 25.165, 55.325, 25.230]},
]


def thennow():
    import planetary_computer as pc
    d = f"{OUT}/thennow"
    os.makedirs(d, exist_ok=True)
    cat = Client.open(PC, modifier=pc.sign_inplace)
    meta = []
    for s in SITES:
        bbox = s["bbox"]
        w, h = size_for(bbox, 900)
        then = None
        items = cat.search(collections=["landsat-c2-l2"], bbox=bbox, datetime="1996-01-01/2000-12-31",
                           query={"eo:cloud_cover": {"lt": 5}, "platform": {"in": ["landsat-5", "landsat-7"]}},
                           sortby=[{"field": "properties.datetime", "direction": "desc"}], max_items=30).items()
        for it in items:
            r, cov = ls_band(it, "red", bbox, w, h)
            if cov < 0.99:
                continue
            g = ls_band(it, "green", bbox, w, h)[0]
            b = ls_band(it, "blue", bbox, w, h)[0]
            save_rgb(np.dstack([r, g, b]), f"{d}/{s['id']}-then.jpg")
            then = {"id": it.id, "date": it.properties["datetime"][:10], "sensor": it.properties.get("platform")}
            break
        it, rgb = s2_rgb(bbox, 900)
        save_rgb(rgb, f"{d}/{s['id']}-now.jpg")
        now = {"id": it.id, "date": it.properties["datetime"][:10], "sensor": "sentinel-2"}
        print(s["id"], then, now)
        meta.append({**s, "w": w, "h": h, "then": then, "now": now})
    with open(f"{d}/meta.json", "w") as f:
        json.dump(meta, f, indent=1, ensure_ascii=False)


# ---------------------------------------------------------------- mangroves
MANGROVE = [54.395, 24.405, 54.505, 24.480]  # Abu Dhabi eastern mangroves and Mangrove National Park


def mangrove():
    d = f"{OUT}/mangrove"
    os.makedirs(d, exist_ok=True)
    w, h = size_for(MANGROVE, 760)
    years = []
    for y in range(2017, 2027):
        found = None
        for it in sorted(s2_search(MANGROVE, f"{y}-10-01/{y}-12-31", cloud=3, n=30), key=lambda i: i.properties.get("eo:cloud_cover", 99)):
            r, cov = s2_band(it, "red", MANGROVE, w, h)
            if cov < 0.995:
                continue
            nir = s2_band(it, "nir", MANGROVE, w, h)[0]
            g = s2_band(it, "green", MANGROVE, w, h)[0]
            b = s2_band(it, "blue", MANGROVE, w, h)[0]
            found = (it, r, g, b, nir)
            break
        if not found:
            print("no scene for", y)
            continue
        it, r, g, b, nir = found
        print("  boa_offset_applied:", it.properties.get("earthsearch:boa_offset_applied"),
              "red p5/50/95:", np.nanpercentile(r, [5, 50, 95]).round(3), "nir:", np.nanpercentile(nir, [5, 50, 95]).round(3))
        ok = (nir + r > 0.02) & (nir > 0) & (r > 0)
        ndvi = np.where(ok, (nir - r) / np.maximum(nir + r, 1e-6), -1)
        ndvi = np.clip(np.nan_to_num(ndvi, nan=-1), -1, 1)
        save_rgb(np.dstack([r, g, b]), f"{d}/{y}-rgb.jpg")
        # NDVI stored as 0-255 for -1..1 so the page can colour and threshold it
        Image.fromarray(np.clip((ndvi + 1) / 2 * 255, 0, 255).round().astype(np.uint8), "L").save(f"{d}/{y}-ndvi.png", optimize=True)
        px_km2 = ((MANGROVE[2] - MANGROVE[0]) * 111.32 * math.cos(math.radians(24.44)) / w) * ((MANGROVE[3] - MANGROVE[1]) * 110.57 / h)
        veg = ndvi > 0.3
        years.append({"year": y, "id": it.id, "date": it.properties["datetime"][:10], "green_km2": round(float(veg.sum() * px_km2), 3),
                      "mean_ndvi": round(float(ndvi[veg].mean()) if veg.any() else 0, 3)})
        print(years[-1])
    with open(f"{d}/meta.json", "w") as f:
        json.dump({"bbox": MANGROVE, "w": w, "h": h, "years": years}, f, indent=1)


# ---------------------------------------------------------------- spot the city
SPOTS = [
    ("burj", "Downtown Dubai and the Burj Khalifa", "برج خليفة", 25.1972, 55.2744),
    ("palm", "Palm Jumeirah", "نخلة جميرا", 25.1124, 55.1390),
    ("mosque", "Sheikh Zayed Grand Mosque", "جامع الشيخ زايد الكبير", 24.4128, 54.4750),
    ("liwa", "Liwa Oasis", "واحة ليوا", 23.1300, 53.7800),
    ("hafeet", "Jebel Hafeet", "جبل حفيت", 24.0600, 55.7800),
    ("hatta", "Hatta Dam", "سد حتا", 24.8100, 56.1250),
    ("jais", "Jebel Jais", "جبل جيس", 25.9450, 56.1500),
    ("dxb", "Dubai International Airport", "مطار دبي الدولي", 25.2532, 55.3657),
    ("yas", "Yas Island", "جزيرة ياس", 24.4800, 54.6050),
    ("masdar", "Masdar City", "مدينة مصدر", 24.4267, 54.6150),
    ("sirbaniyas", "Sir Bani Yas Island", "جزيرة صير بني ياس", 24.3200, 52.6000),
    ("khorfakkan", "Khor Fakkan", "خورفكان", 25.3400, 56.3450),
    ("wathba", "Al Wathba Wetland Reserve", "محمية الوثبة للأراضي الرطبة", 24.2600, 54.6100),
    ("world", "The World Islands", "جزر العالم", 25.2250, 55.1700),
    ("qudra", "Al Qudra Lakes", "بحيرات القدرة", 24.8300, 55.3700),
    ("corniche", "Abu Dhabi Corniche", "كورنيش أبوظبي", 24.4760, 54.3350),
    ("uaq", "Umm Al Quwain lagoon", "خور أم القيوين", 25.5500, 55.6000),
    ("fujairah", "Fujairah", "الفجيرة", 25.1300, 56.3400),
]


def spot():
    d = f"{OUT}/spot"
    os.makedirs(d, exist_ok=True)
    out = []
    half = 0.03
    for sid, en, ar, lat, lon in SPOTS:
        bbox = [lon - half / math.cos(math.radians(lat)), lat - half, lon + half / math.cos(math.radians(lat)), lat + half]
        it, rgb = s2_rgb(bbox, 600, cloud=3)
        if it is None:
            print("no scene for", sid)
            continue
        save_rgb(rgb, f"{d}/{sid}.jpg")
        out.append({"id": sid, "en": en, "ar": ar, "lat": lat, "lon": lon, "date": it.properties["datetime"][:10]})
        print(sid, it.id)
    with open(f"{d}/meta.json", "w") as f:
        json.dump(out, f, indent=1, ensure_ascii=False)
    # UAE outline from Natural Earth (public domain), simplified
    from shapely.geometry import mapping, shape
    url = "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_10m_admin_0_countries.geojson"
    gj = json.load(urllib.request.urlopen(url))
    feats = {}
    for f in gj["features"]:
        a3 = f["properties"].get("ADM0_A3")
        if a3 in ("ARE", "OMN", "SAU", "QAT"):
            g = shape(f["geometry"]).simplify(0.004, preserve_topology=True)
            feats[a3] = json.loads(json.dumps(mapping(g)), parse_float=lambda x: round(float(x), 4))
    with open(f"{OUT}/uae.json", "w") as f:
        json.dump(feats, f, separators=(",", ":"))


if __name__ == "__main__":
    os.environ.setdefault("AWS_NO_SIGN_REQUEST", "YES")
    job = sys.argv[1] if len(sys.argv) > 1 else "all"
    for name, fn in (("spot", spot), ("thennow", thennow), ("mangrove", mangrove)):
        if job in ("all", name):
            fn()
