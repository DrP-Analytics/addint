// ADDINT curated alerts — edited by the physician curator. Newest first.
// severity: "alert" (management changes now) | "watch" (corroborated, monitor) | "info" (context)
// where: state codes, "US" (national), or "INTL" (approaching / international signal)
const ALERTS = [
{
  id: "2026-07-medetomidine",
  date: "2026-07-12",
  severity: "watch",
  title: "Medetomidine has largely displaced xylazine in the fentanyl supply",
  what: "CFSRE drug-checking data show xylazine positivity in fentanyl samples fell from 97% to 21% between Q1 2024 and Q4 2025, while medetomidine rose from negligible to 88%. First flagged in Chicago and Philadelphia; now the dominant alpha-2 adulterant nationally.",
  soWhat: "Expect profound bradycardia and hypotension unresponsive to naloxone (the opioid component still responds — give it). Anticipate a distinct withdrawal syndrome resembling dexmedetomidine withdrawal (autonomic instability, hypertension, agitation); alpha-2 agonist tapers have been used. Xylazine test strips do not detect medetomidine.",
  where: ["IL","PA","US"],
  substances: ["medetomidine","fentanyl"],
  source: { name: "CFSRE NPS Discovery public alert & Q4 2025 drug checking report", url: "https://www.cfsre.org/nps-discovery/public-alerts" }
},
{
  id: "2026-07-orphines",
  date: "2026-07-12",
  severity: "watch",
  title: "New opioid class ('orphines', incl. N-propionitrile chlorphine) in fatal overdoses",
  what: "Following China's July 2025 class-wide nitazene ban, orphine-class synthetic opioids have appeared in the US supply. CFSRE has identified N-propionitrile chlorphine (cychlorphine) in 25 fatal-overdose blood specimens, most from late 2025 to early 2026, with orphine positivity now rising as nitazene positivity falls.",
  soWhat: "Treat as high-potency opioid: naloxone works but repeated or higher dosing may be needed; observe longer. Fentanyl test strips will NOT detect orphines — a negative strip does not mean a safe or fentanyl-free product. Send comprehensive toxicology when unusual overdoses cluster.",
  where: ["US"],
  substances: ["N-propionitrile chlorphine","orphines","nitazenes"],
  source: { name: "CFSRE public alert, Jan 2026; UNODC EWA note, Feb 2026", url: "https://www.cfsre.org/nps-discovery/public-alerts/increase-in-fatal-overdoses-linked-to-novel-synthetic-opioid-n-propionitrile-chlorphine-cychlorphine" }
},
{
  id: "2026-07-nitazene-fakes",
  date: "2026-07-12",
  severity: "watch",
  title: "Counterfeit pharmaceutical tablets containing nitazene opioids (international signal)",
  what: "The EU Early Warning System reports increasing detections of counterfeit medicines (sold as benzodiazepines or oxycodone) that contain nitazene-class opioids. Primary concern is spread among opioid-naive users, including young people buying 'pills' through social apps.",
  soWhat: "An opioid toxidrome in a patient who insists they took 'a Xanax' or 'a Perc' bought online is consistent with this pattern. Counsel adolescent patients and families: any pill not from a pharmacy may contain a synthetic opioid. Naloxone counseling is appropriate for non-opioid drug users too.",
  where: ["INTL"],
  substances: ["nitazenes","counterfeit tablets"],
  source: { name: "EUDA European Drug Report 2026 — NPS chapter", url: "https://www.euda.europa.eu/publications/european-drug-report/2026/new-psychoactive-substances_en" }
},
{
  id: "2026-07-benzodope",
  date: "2026-07-12",
  severity: "watch",
  title: "Designer benzodiazepines (bromazolam, phenazolam) co-adulterating the opioid supply",
  what: "CFSRE quarterly drug-checking continues to find designer benzodiazepines — bromazolam and, more recently, phenazolam — alongside fentanyl and other opioids in street samples nationwide.",
  soWhat: "After naloxone reverses the opioid component, benzodiazepine sedation persists: patient remains somnolent with improved respirations. Avoid escalating naloxone for residual sedation; monitor airway. Standard urine benzodiazepine immunoassays often miss designer analogs.",
  where: ["US"],
  substances: ["bromazolam","phenazolam","fentanyl"],
  source: { name: "CFSRE NPS Discovery Q4 2025 drug checking report", url: "https://www.cfsre.org/images/content/reports/drug_checking/2025_Q4_Drug_Checking_Quarterly_Report_CFSRE_NPS_Discovery.pdf" }
},
{
  id: "2026-07-carfentanil",
  date: "2026-07-12",
  severity: "watch",
  title: "Carfentanil and para-fluorofentanyl more prevalent than nitazenes in recent samples",
  what: "In Q4 2025 CFSRE drug-checking, fentanyl analogs — carfentanil and para-fluorofentanyl — were detected more frequently than nitazene analogs, continuing carfentanil's resurgence in the US supply.",
  soWhat: "Carfentanil-involved overdoses may need repeated naloxone dosing and prolonged observation; cluster patterns (multiple simultaneous overdoses at one location) suggest a high-potency batch. Alert your local EMS/health department when clusters appear.",
  where: ["US"],
  substances: ["carfentanil","para-fluorofentanyl"],
  source: { name: "CFSRE NPS Discovery Q4 2025 drug checking report", url: "https://www.cfsre.org/images/content/reports/drug_checking/2025_Q4_Drug_Checking_Quarterly_Report_CFSRE_NPS_Discovery.pdf" }
},
{
  id: "2026-07-local-anesthetics",
  date: "2026-07-12",
  severity: "info",
  title: "Local anesthetics (lidocaine, procaine, tetracaine) increasingly cut into fentanyl",
  what: "CFSRE reports local anesthetics rising in prevalence as fentanyl adulterants through 2025, alongside the shift from xylazine to medetomidine.",
  soWhat: "Mostly a marker of supply churn, but heavy local-anesthetic loads can contribute to sodium-channel toxicity (dysrhythmia, seizure) in high-volume use. Consider it in unexplained wide-complex rhythms in people who use fentanyl.",
  where: ["US"],
  substances: ["lidocaine","procaine","tetracaine","fentanyl"],
  source: { name: "CFSRE NPS Discovery drug checking trend reports", url: "https://www.cfsre.org/nps-discovery/drug-checking" }
},
{
  id: "2026-07-dawn-context",
  date: "2026-07-12",
  severity: "info",
  title: "Context: national ED drug surveillance (DAWN) discontinued June 2025",
  what: "SAMHSA discontinued new data collection for the Drug Abuse Warning Network — the only national ED drug-mention surveillance system — effective June 13, 2025. US early-warning capacity now depends more heavily on nonprofit laboratory networks and community drug checking.",
  soWhat: "Expect longer national blind spots between supply shifts and official statistics. Local signals (your ED, your medical examiner, regional drug checking) are now the fastest information you have — report unusual patterns to your health department and poison center.",
  where: ["US"],
  substances: [],
  source: { name: "SAMHSA DAWN program notice", url: "https://www.samhsa.gov/data/data-we-collect/dawn-drug-abuse-warning-network" }
}
];
