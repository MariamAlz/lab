"""Save orbital elements (TLEs) of satellites owned by the UAE to assets/uae-sats.json.

Owner and status come from CelesTrak's satellite catalogue; elements from CelesTrak GP.
Also saves a small world land outline (Natural Earth 110m) for the map, if missing.
"""
import csv
import datetime
import io
import json
import os
import re
import time
import urllib.request

UA = {"User-Agent": "lab.mariamalzaabi.ae UAE in orbit"}
# Not shown: the Hope probe orbits Mars, and defence and commercial radar satellites are left out on purpose.
SKIP = re.compile(r"HOPE|AL-AMAL|FALCON EYE|ICEYE|LEONAV")


def get(url):
    with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60) as r:
        return r.read().decode("utf-8", "replace")


def main():
    cat = None
    for url in ("https://celestrak.org/pub/satcat.csv", "https://celestrak.org/satcat/satcat.csv",
                "https://celestrak.org/satcat/records.php?GROUP=active&FORMAT=csv"):
        try:
            cat = list(csv.DictReader(io.StringIO(get(url))))
            print("catalogue from", url, len(cat), "rows")
            break
        except Exception as e:  # the catalogue has moved before; try the next place
            print("failed", url, e)
    if not cat:
        raise SystemExit("No satellite catalogue")
    uae = [r for r in cat if r.get("OWNER") == "UAE" and r.get("OBJECT_TYPE") == "PAY" and not r.get("DECAY_DATE")]
    print(len(uae), "UAE payloads on orbit:", [(r["OBJECT_NAME"], r["NORAD_CAT_ID"], r.get("OPS_STATUS_CODE")) for r in uae])
    out = []
    for r in uae:
        if SKIP.search(r["OBJECT_NAME"]):
            continue
        try:
            tle = get("https://celestrak.org/NORAD/elements/gp.php?CATNR=%s&FORMAT=tle" % r["NORAD_CAT_ID"]).strip().splitlines()
        except Exception as e:
            print("no elements for", r["OBJECT_NAME"], e)
            continue
        time.sleep(0.5)
        if len(tle) < 3 or not tle[1].startswith("1 "):
            print("no elements for", r["OBJECT_NAME"])
            continue
        out.append({"name": r["OBJECT_NAME"], "norad": int(r["NORAD_CAT_ID"]), "launch": r.get("LAUNCH_DATE"),
                    "status": r.get("OPS_STATUS_CODE"), "tle1": tle[1].strip(), "tle2": tle[2].strip()})
    if len(out) < 3:
        raise SystemExit("Only %d satellites found, keeping the old file" % len(out))
    with open("assets/uae-sats.json", "w", encoding="utf-8") as f:
        json.dump({"updated": datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"), "sats": out}, f, indent=1)
    print("Saved", len(out))
    if not os.path.exists("assets/land110.json"):
        gj = json.loads(get("https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_land.geojson"))
        polys = []
        for f in gj["features"]:
            g = f["geometry"]
            for p in ([g["coordinates"]] if g["type"] == "Polygon" else g["coordinates"]):
                polys.append([[round(x, 2), round(y, 2)] for x, y in p[0]])
        with open("assets/land110.json", "w") as f:
            json.dump(polys, f, separators=(",", ":"))


if __name__ == "__main__":
    main()
