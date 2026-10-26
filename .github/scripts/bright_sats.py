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
        # Newly launched Starlinks fly low (still raising their orbits) in a tight line.
        # Keep the satellites from the 4 most recent launches that are still below ~450 km.
        sl = list(tles(get("https://celestrak.org/NORAD/elements/gp.php?GROUP=starlink&FORMAT=tle")))
        print(len(sl), "Starlink elements")
        low = [(n, l1, l2) for n, l1, l2 in sl if float(l2[52:63]) > 15.45]
        # A train is a launch with several satellites still low together; single low
        # satellites are usually old ones re-entering, not a visible line.
        count = {}
        for n, l1, l2 in low:
            count[l1[9:14]] = count.get(l1[9:14], 0) + 1
        launches = sorted([k for k, c in count.items() if c >= 5], reverse=True)[:4]
        for n, l1, l2 in low:
            if l1[9:14] in launches:
                trains.append({"name": n, "launch": l1[9:14].strip(), "tle1": l1, "tle2": l2})
        print("recent launches", launches)
    except Exception as e:
        print("failed starlink", e)
    if not any(s["key"] == "ISS" for s in out):
        raise SystemExit("No ISS elements, keeping the old file")
    with open("assets/bright-sats.json", "w", encoding="utf-8") as f:
        json.dump({"updated": datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"), "sats": out, "starlink": trains}, f, indent=1)
    print("Saved", len(out), "named and", len(trains), "new Starlink")


if __name__ == "__main__":
    main()
