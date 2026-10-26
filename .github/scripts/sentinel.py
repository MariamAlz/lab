"""Fetch a cloud-free Sentinel-2 scene of Abu Dhabi and save six bands as small PNGs.

Each PNG holds surface reflectance 0 to 0.4 mapped linearly to 0-255, the same scale
for every band, so the page can mix bands and compute indices like NDVI in the browser.
Data: Copernicus Sentinel-2 L2A via the Earth Search STAC catalogue (AWS open data).
"""
import json
import os

import numpy as np
import rasterio
from PIL import Image
from pystac_client import Client
from rasterio.enums import Resampling
from rasterio.warp import transform_bounds
from rasterio.windows import from_bounds

BBOX = (54.30, 24.38, 54.52, 24.53)  # Abu Dhabi island, mangroves and the eastern lagoons
W = 880
H = round(W * (BBOX[3] - BBOX[1]) * 111.0 / ((BBOX[2] - BBOX[0]) * 101.4))
BANDS = {"blue": "B2", "green": "B3", "red": "B4", "nir": "B8", "swir16": "B11", "swir22": "B12"}
OUT = "assets/s2"


def read(item, key):
    asset = item.assets[key]
    rb = (asset.extra_fields.get("raster:bands") or [{}])[0]
    scale, offset = rb.get("scale", 0.0001), rb.get("offset", 0.0)
    if item.properties.get("earthsearch:boa_offset_applied"):
        offset = 0.0  # Earth Search already removed the -0.1 offset from these files
    with rasterio.open(asset.href) as src:
        b = transform_bounds("EPSG:4326", src.crs, *BBOX)
        win = from_bounds(*b, transform=src.transform)
        dn = src.read(1, window=win, out_shape=(H, W), resampling=Resampling.bilinear, boundless=True, fill_value=0)
    valid = dn > 0
    return np.where(valid, dn * scale + offset, np.nan), valid.mean()


def main():
    os.environ.setdefault("AWS_NO_SIGN_REQUEST", "YES")
    cat = Client.open("https://earth-search.aws.element84.com/v1")
    items = cat.search(collections=["sentinel-2-l2a"], bbox=BBOX, query={"eo:cloud_cover": {"lt": 2}},
                       sortby=[{"field": "properties.datetime", "direction": "desc"}], max_items=12).item_collection()
    for item in items:
        red, cover = read(item, "red")
        print(item.id, item.properties.get("eo:cloud_cover"), round(cover, 3), "boa_offset_applied:",
              item.properties.get("earthsearch:boa_offset_applied"), "red p5/50/95:", np.nanpercentile(red, [5, 50, 95]).round(3))
        if cover < 0.995:
            continue
        os.makedirs(OUT, exist_ok=True)
        for key, name in BANDS.items():
            refl = red if key == "red" else read(item, key)[0]
            img = np.clip(np.nan_to_num(refl, nan=0) / 0.4 * 255, 0, 255).round().astype(np.uint8)
            Image.fromarray(img, "L").save(f"{OUT}/{key}.png", optimize=True)
        meta = {"id": item.id, "date": item.properties["datetime"][:10], "cloud": item.properties.get("eo:cloud_cover"),
                "bbox": BBOX, "width": W, "height": H, "scale": 0.4, "bands": BANDS}
        with open(f"{OUT}/meta.json", "w") as f:
            json.dump(meta, f, indent=1)
        print("Saved", item.id)
        return
    raise SystemExit("No scene fully covers the area")


if __name__ == "__main__":
    main()
