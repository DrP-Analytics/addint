"""Opioid/OUD-relevant drug recalls and safety enforcement from openFDA (public domain)."""
import requests

API = "https://api.fda.gov/drug/enforcement.json"
TERMS = "naloxone+buprenorphine+methadone+naltrexone+opioid"

def fetch():
    out = []
    try:
        r = requests.get(API, params={
            "search": f"product_description:({TERMS})",
            "sort": "report_date:desc", "limit": 10}, timeout=30)
        for d in r.json().get("results", []):
            rd = d.get("report_date","")
            date = f"{rd[:4]}-{rd[4:6]}-{rd[6:8]}" if len(rd) == 8 else rd
            out.append({
                "source": "openFDA enforcement",
                "date": date,
                "title": (d.get("product_description","")[:160] + " — " +
                          d.get("reason_for_recall","")[:120]),
                "url": "https://www.fda.gov/safety/recalls-market-withdrawals-safety-alerts",
                "geography": [d.get("state") or "US"],
                "note": d.get("classification","") + ", " + d.get("status",""),
            })
    except Exception as e:
        print("openfda error:", e)
    return out
