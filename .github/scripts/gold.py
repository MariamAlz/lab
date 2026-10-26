"""Store the latest gold and silver spot prices (USD per troy ounce) for the gold calculator's offline fallback."""
import json, datetime, urllib.request

def get(sym):
    req = urllib.request.Request(f"https://api.gold-api.com/price/{sym}", headers={"User-Agent": "mariams-lab"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return float(json.load(r)["price"])

out = {"xau_usd_oz": get("XAU"), "xag_usd_oz": get("XAG"),
       "updated": datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"), "source": "gold-api.com"}
with open("assets/gold.json", "w") as f:
    json.dump(out, f)
print(out)
