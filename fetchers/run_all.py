"""Run every fetcher, merge, save. Each fetcher fails independently (graceful degradation)."""
import common, federal_register, openfda

signals = []
for mod in (federal_register, openfda):
    try:
        signals += mod.fetch()
    except Exception as e:
        print(mod.__name__, "failed:", e)
common.save(signals)
