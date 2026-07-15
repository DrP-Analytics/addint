# ADDINT — Addiction Intelligence

**What's in the street drug supply, where it is, and what it changes at the bedside.**

ADDINT is an open-source, physician-curated early-warning layer for US clinicians.
It fuses public drug-supply surveillance — laboratory drug checking (CFSRE NPS
Discovery), international early-warning systems (EUDA, UNODC), federal data
(CDC, SAMHSA, Federal Register, openFDA), and community drug-checking programs —
into short, geography-filtered alert cards: **WHAT / SO WHAT / WHERE / SOURCE.**

## How it works
1. **Ingest** — `fetchers/` pull public feeds nightly via GitHub Actions (`.github/workflows/fetch.yml`), writing `site/signals.js`.
2. **Curate** — a physician reviews signals and promotes only items that change clinical management into `site/alerts.js`. Editing that file *is* publishing.
3. **Display** — `site/index.html` renders severity-coded cards with a persistent state filter. Static hosting (GitHub Pages); no accounts, no tracking.

## Editorial rules
- An **ALERT** must change bedside management; otherwise it is a **WATCH** or **CONTEXT** item.
- Online-discussion signals are never promoted without physical (laboratory) corroboration.
- Every card links its primary source. ADDINT never identifies sources of supply.
- Drug-checking percentages are sample statistics, not prevalence.

## Reproduce / run locally
```
cd fetchers && pip install requests && python run_all.py
# then open site/index.html in a browser
```

## Data sources & credits
CFSRE NPS Discovery · EUDA · UNODC EWA · CDC (SUDORS, DOSE, VSRR) · SAMHSA ·
Federal Register · openFDA · NDEWS · NEMSIS/ONDCP · community drug-checking
programs (StreetCheck, Toronto DCS, WEDINOS). All content © respective sources;
ADDINT summaries CC-BY 4.0; code MIT.

## Disclaimer
ADDINT is an informational surveillance summary, not medical advice and not a
substitute for local health department guidance, poison control, or clinical
judgment.

Maintained by Dr. P.
