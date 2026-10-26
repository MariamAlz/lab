"""Save orbital elements for satellites people can see by eye to assets/bright-sats.json.

The ISS, China's Tiangong station and Hubble by catalogue number, plus Starlink satellites
launched in the last few weeks, which still fly in a bright line ("train") before spreading out.
"""
import datetime
import json
import time
import urllib.request

UA = {"User-Agent": "lab.mariamalzaabi.ae satellite spotter"}
NAMED = [(25544, "ISS", "International Space Station"), (48274, "Tiangong", "China's space station"), (20580, "Hubble", "Hubble Space Telescope")]


def get(url):
    with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60) as r:
        return r.read().decode("utf-8", "replace")


def tles(text):
    lines = [l.rstrip() for l in text.strip().splitlines() if l.strip()]
    for i in range(0, len(lines) - 2, 3):
        if lines[i + 1].startswith("1 ") and lines[i + 2].startswith("2 "):
            yield lines[i].strip(), lines[i + 1], lines[i + 2]


def main():
    out = []
    for cat, key, label in NAMED:
        try:
            for name, l1, l2 in tles(get("https://celestrak.org/NORAD/elements/gp.php?CATNR=%d&FORMAT=tle" % cat)):
                out.append({"key": key, "name": label, "norad": cat, "tle1": l1, "tle2": l2})
        except Exception as e:
            print("failed", key, e)
        time.sleep(0.5)
    trains = []
    try:
        for name, l1, l2 in tles(get("https://celestrak.org/NORAD/elements/gp.php?GROUP=last-30-days&FORMAT=tle")):
            if name.startswith("STARLINK"):
                trains.append({"name": name, "launch": l1[9:14].strip(), "tle1": l1, "tle2": l2})
    except Exception as e:
        print("failed starlink", e)
    if not any(s["key"] == "ISS" for s in out):
        raise SystemExit("No ISS elements, keeping the old file")
    with open("assets/bright-sats.json", "w", encoding="utf-8") as f:
        json.dump({"updated": datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"), "sats": out, "starlink": trains}, f, indent=1)
    print("Saved", len(out), "named and", len(trains), "new Starlink")


if __name__ == "__main__":
    main()
