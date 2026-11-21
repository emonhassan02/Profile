/* =====================================================================
   CONTENT.JS  -  Apnar website er shob lekha ekhane.
   Shudhu "quotes" er bhitore lekha change korben. Comma (,) ar bracket
   [ ] { } muche felben na. Save kore GitHub e push korlei site update hobe.
   Chemical formula normal vabe likhun (Hf5Si3), site nijei subscript korbe.
   ===================================================================== */


/* ---------------------------------------------------------------------
   SECTION 1: PERSONAL INFO  (bam pashe profile card + page title)
   --------------------------------------------------------------------- */
const PROFILE = {
  name: "Md Emon Hassan",
  authorName: "Md. Emon Hassan",       // publication e ei nam bold hobe (CV er moto likhun)
  pageTitle: "Md Emon Hassan | Condensed Matter Physics Researcher",
  navName: "Emon Hassan",              // upore navbar e
  navSub: "Physics researcher",
  role: "MS Research Student, Materials Research Lab",
  location: "Pabna University of Science and Technology, Bangladesh",
  email: "emon.200702@s.pust.ac.bd",
  photo: "assets/profile.png",         // apnar photo ei naam e assets folder e rakhun
  cv: "assets/Emon_Hassan_CV.pdf",     // CV ei naam e assets folder e rakhun
  badges: ["MS student", "Open to PhD positions"],
  stat3Value: "3.76",                  // profile card er 3rd number
  stat3Label: "MS CGPA"
};


/* ---------------------------------------------------------------------
   SECTION 2: LINKS  (profile card er button)
   Link na thakle "" (khali) rakhun, button hide hoye jabe.
   --------------------------------------------------------------------- */
const LINKS = [
  ["Email",         "mailto:emon.200702@s.pust.ac.bd"],
  ["Google Scholar", ""],     // <-- apnar Google Scholar link ekhane paste korun
  ["ORCID",         "https://orcid.org/0009-0009-6252-3038"],
  ["LinkedIn",      ""],      // <-- apnar LinkedIn link
  ["ResearchGate",  ""]       // <-- apnar ResearchGate link
];


/* ---------------------------------------------------------------------
   SECTION 3: ABOUT  (prottek "..." ekta paragraph. <b>bold</b> use kora jay)
   --------------------------------------------------------------------- */
const ABOUT = [
  "I am a condensed matter physicist in training. I use <b>density functional theory</b> to find materials that turn heat and sunlight into electricity, then test the best candidates with <b>hydrothermal synthesis</b> and <b>solar-cell device models</b>.",
  "My MS thesis studies Bi-based Zintl compounds for thermoelectric energy harvesting. I am looking for a research group in advanced materials and sustainable energy where I can keep working on this."
];


/* ---------------------------------------------------------------------
   SECTION 4: EDUCATION  (notun degree hole ekta { ... }, add korun)
   --------------------------------------------------------------------- */
const EDUCATION = [
  {
    years: "2026 to 2027",
    degree: "MS in Physics",
    place: "Pabna University of Science and Technology",
    text: "Thesis: structural stability, electronic structure and thermoelectric performance of Bi-based Zintl-phase compounds XCaBi (X = K, Rb, Cs) for sustainable energy harvesting.",
    pills: ["CGPA 3.76 / 4.00 (semester 1)", "Expected June 2027"]
  },
  {
    years: "2020 to 2026",
    degree: "BSc in Physics",
    place: "Pabna University of Science and Technology",
    text: "Thesis: pressure-induced structural, mechanical, electronic, optical and thermoelectric properties of the binary intermetallic compound Hf5Si3 for high-temperature applications.",
    pills: ["CGPA 3.61 / 4.00", "160 credits"]
  }
];


/* ---------------------------------------------------------------------
   SECTION 5: RESEARCH EXPERIENCE  (job + project)
   badge = chhoto label (Current appointment / Ongoing)
   --------------------------------------------------------------------- */
const EXPERIENCE = [
  {
    title: "Materials Research Lab, PUST",
    badge: "Current appointment",
    when: "Feb 2025 to now",
    role: "Research Assistant",
    text: "Runs DFT and device simulations, maintains lab computing systems, and coaches junior students 18 hours a week."
  },
  {
    title: "Zintl-phase thermoelectrics (MS thesis)",
    badge: "Ongoing",
    when: "2026 to now",
    role: "WIEN2k, first-principles",
    text: "Dynamical and mechanical stability, electronic and optical properties, and thermoelectric performance of KCaBi, RbCaBi and CsCaBi."
  },
  {
    title: "SrSnX3 and M2LiGaI6 absorbers",
    badge: "Ongoing",
    when: "2025 to now",
    role: "Synthesis, DFT and SCAPS-1D",
    text: "Hydrothermal synthesis with XRD and UV-Vis, DFT band gaps and effective masses, then solar-cell models with different ETL and HTL layers to find the most efficient stack."
  }
];


/* ---------------------------------------------------------------------
   SECTION 6: RESEARCH INTERESTS  ["Title", "short description"]
   --------------------------------------------------------------------- */
const INTERESTS = [
  ["Thermoelectric materials", "Turning waste heat into electricity."],
  ["First-principles and DFT", "WIEN2k, VASP, Quantum ESPRESSO, CASTEP."],
  ["Perovskites", "Lead-free oxides and halides."],
  ["Photovoltaics", "Solar-cell modelling with SCAPS-1D and COMSOL."],
  ["Hydrogen storage", "Candidate materials for clean fuel."],
  ["Magnetic materials", "Doping effects on magnetism and transport."]
];


/* ---------------------------------------------------------------------
   SECTION 7: PUBLICATIONS
   Notun paper: ekta { ... }, block copy kore ekdom upore boshan.
   y = year | t = title | a = authors | j = journal | doi = DOI | i = impact factor
   Under review hole doi ar i muche din ar  s: 1  likhun.
   --------------------------------------------------------------------- */
const PUBS = [
  {
    y: 2026,
    t: "Tuning the structural and physical properties of Hf5Si3 intermetallic compound under pressure: Insights for next-generation high-temperature technology",
    a: "Md. Emon Hassan, Md. Riad Khan, Zihad Hossain, Md. Khairul Alam, Mohammad Abdur Rashid, Md. Lokman Ali",
    j: "Scientific Reports 16, 24463",
    doi: "10.1038/s41598-026-52144-z",
    i: "4.9"
  },
  {
    y: 2026,
    t: "First-principles investigation of CuBiSeCl2: A quaternary halide chalcogenide material for advanced optoelectronic and thermoelectric energy harvesting and conversion technologies",
    a: "Zihad Hossain, Md. Riad Khan, Sanzida Naznin Mim, Md. Emon Hassan, Mohammad Abdur Rashid, Md. Lokman Ali",
    j: "Materials Advances 7(3), 1704–1720",
    doi: "10.1039/d5ma01386k",
    i: "5.8"
  },
  {
    y: 2026,
    t: "Device-level engineering and optimization of high-efficiency lead-free NaSiCl3 perovskite solar cells using SCAPS-1D and COMSOL",
    a: "Md. Redwan Alam Hridoy, Zihad Hossain, Md. Riad Khan, Prarthona Shaha, Md. Emon Hassan, Most. Meftaul Zannati Kemi, Md. Lokman Ali",
    j: "Materials Advances",
    doi: "10.1039/d6ma01128d",
    i: "5.8"
  },
  {
    y: 2025,
    t: "Doping effect of antimony on BaFeO3 perovskite oxide: Optical, electronic, magnetic and thermoelectric properties",
    a: "Md. Riad Khan, Sanzida Naznin Mim, Zihad Hossain, Md. Emon Hassan, Md. Saiful Alam, Mohammad Abdur Rashid, Md. Lokman Ali",
    j: "RSC Advances 15(45), 38158–38175",
    doi: "10.1039/d5ra06101f",
    i: "6.1"
  },
  {
    y: 2026,
    s: 1,
    t: "High throughput investigation with bandgap and figure of merit correction of the lead-free halide double perovskites M2LiGaI6 (M = Rb, Cs) for thermoelectric, photovoltaic and photocatalytic hydrogen evolution applications",
    a: "Md. Riad Khan, Zihad Hossain, Md. Emon Hassan, Md. Redwan Alam Hridoy, Dayal Chandra Roy, Md. Hasnat Shariar Shanto, Most. Meftaul Zannati Kemi, Mohammad Abdur Rashid, Md. Lokman Ali",
    j: "Journal of Materials Chemistry C"
  }
];


/* ---------------------------------------------------------------------
   SECTION 8: CONFERENCES  ["date", "event", "presentation title"]
   Notun conference ekdom upore add korun (newest first).
   --------------------------------------------------------------------- */
const TALKS = [
  ["27–28 Jun 2026", "Poster at EFAST 2026 (PUST and UniMAP)", "Multifunctional properties of lead-free Na2ZrTeO6 double perovskite for high temperature and optoelectronic applications"],
  ["11–12 Dec 2025", "Oral at the 10th Bangladesh Crystallographic Association Conference, BUET", "Pressure-tuned properties of the binary intermetallic compound Hf5Si3"],
  ["14–15 Nov 2025", "Oral at the 2nd ICRAST, University of Rajshahi", "Pressure-induced properties of Hf5Si3 for high-temperature applications"],
  ["20 Apr 2025", "Poster at the Conference on Computational Physics and Material Science, University of Rajshahi", "Structural, mechanical, optical and thermoelectric properties of Hf5Si3 under pressure"],
  ["6–7 Feb 2025", "Poster at the National Conference on Physics 2025, University of Rajshahi", "Photovoltaic characteristics of Cu2ZnGeSe4"]
];


/* ---------------------------------------------------------------------
   SECTION 9: SKILLS  ("Group name": ["skill 1", "skill 2"])
   --------------------------------------------------------------------- */
const SKILLS = {
  "Computational codes": ["VASP", "WIEN2k", "Quantum ESPRESSO", "CASTEP", "SCAPS-1D", "COMSOL", "Phonopy", "BoltzTraP"],
  "Programming": ["Fortran 90", "C++", "Bash"],
  "Analysis and plotting": ["MATLAB", "OriginLab", "VESTA", "XCrySDen"],
  "Writing": ["LaTeX", "Overleaf", "Zotero"]
};


/* ---------------------------------------------------------------------
   SECTION 10: CONTACT + FOOTER
   --------------------------------------------------------------------- */
const CONTACT_TEXT = "For collaborations or research openings, write to";
const FOOTER_TEXT = "Department of Physics, Pabna University of Science and Technology.";
