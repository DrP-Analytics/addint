"""DEA scheduling actions + SAMHSA/OTP rulemaking from the Federal Register API (public domain)."""
import requests

API = "https://www.federalregister.gov/api/v1/documents.json"

def fetch():
    out = []
    queries = [
        {"conditions[term]": '"controlled substance" scheduling',
         "conditions[agencies][]": "drug-enforcement-administration"},
        {"conditions[term]": '"opioid treatment program" OR methadone OR buprenorphine'},
    ]
    for q in queries:
        params = {"per_page": 10, "order": "newest",
                  "fields[]": ["title","publication_date","html_url","type","agency_names"]}
        params.update(q)
        try:
            r = requests.get(API, params=params, timeout=30)
            for d in r.json().get("results", []):
                out.append({
                    "source": "Federal Register",
                    "date": d.get("publication_date",""),
                    "title": d.get("title","")[:220],
                    "url": d.get("html_url",""),
                    "geography": ["US"],
                    "note": ", ".join(d.get("agency_names",[])[:2]) + " — " + d.get("type",""),
                })
        except Exception as e:
            print("federal_register error:", e)
    return out
