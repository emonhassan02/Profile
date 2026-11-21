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
  role: "Research Assistant, Materials Research Lab",
  location: "Pabna University of Science and Technology, Bangladesh",
  email: "emon.200702@s.pust.ac.bd",
  photo: "assets/profile.jpg",         // apnar photo ei naam e assets folder e rakhun
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
   SECTION 3: CAREER OBJECTIVE  (CV er hubohu lekha)
   --------------------------------------------------------------------- */
const ABOUT = [
  "I aspire to pursue a research career at a reputable institution, specializing in Condensed Matter Physics, collaborating with researchers, and contributing to research in advanced materials and sustainable energy technologies."
];


/* ---------------------------------------------------------------------
   SECTION 4: EDUCATION  (notun degree hole ekta { ... }, add korun)
   years = date | degree | place | text = thesis | pills = grade, credit ityadi
   --------------------------------------------------------------------- */
const EDUCATION = [
  {
    years: "01/02/2026 – Present",
    degree: "Master of Science (M.S.), Physics",
    place: "Pabna University of Science and Technology (PUST), Pabna-6600, Bangladesh.",
    text: "Ongoing Thesis Title: Theoretical Investigation of Structural Stability Assessment, Electronic Structure, and Thermoelectric Performance of Bi-Based Zintl-Phase Compounds XCaBi (X= K, Rb, Cs) for Sustainable Energy Harvesting",
    pills: ["Final grade: 3.76 out of 4.00 (up to the 1st Semester)", "Credit System: Semester", "Credits: 44", "Expected Year of Completion: June 2027"]
  },
  {
    years: "01/03/2020 - 26/01/2026",
    degree: "Bachelor of Science (B.Sc.), Physics",
    place: "Pabna University of Science and Technology (PUST), Pabna-6600, Bangladesh.",
    text: "Thesis Title: Pressure-Induced Structural, Mechanical, Electronic, Optical, and Thermoelectric Properties of the Binary Intermetallic Compound Hf5Si3 for Advanced High-Temperature Applications",
    pills: ["Final grade: 3.61/4.00", "Credit System: Semester", "Credits: 160", "Passing Year: 2026"]
  }
];


/* ---------------------------------------------------------------------
   SECTION 5: RESEARCH EXPERIENCE (CV er "Research Experience")
   title = project title | badge = chhoto label | when = date
   role = advisor line | text = description
   --------------------------------------------------------------------- */
const EXPERIENCE = [
  {
    title: "Theoretical Investigation of Structural Stability Assessment, Electronic Structure, and Thermoelectric Performance of Bi-Based Zintl-Phase Compounds XCaBi (X= K, Rb, Cs) for Sustainable Energy Harvesting.",
    badge: "Present",
    when: "2026 – Present",
    role: "Advisor: Dr. Md. Lokman Ali, Associate Professor, Department of Physics, Pabna University of Science and Technology, Pabna-6600, Bangladesh.",
    text: "Investigating the dynamical and mechanical stability, electronic structure, and thermoelectric properties of Zintl-phase ACaBi (A = K, Rb, Cs) using first-principles calculations within the WIEN2k framework. The study focuses on evaluating their structural stability, electronic properties,optical properties and thermoelectric performance for potential energy applications."
  },
  {
    title: "Experimental Synthesis and High-Throughput Investigation of Emerging Chalcogenide SrSnX3 (X = S, Se) and Double Perovskites M2LiGaI6 (M = Rb, Cs).",
    badge: "Present",
    when: "2025 – Present",
    role: "Advisor: Dr. Md. Lokman Ali, Associate Professor, Department of Physics, Pabna University of Science and Technology, Pabna-6600, Bangladesh.",
    text: "Performed Hydrothermal technique for material synthesis, characterization of the synthesis material using XRD, UV-Vis and DFT simulations using WIEN2K, VASP to determine the semiconductor bandgap and calculate electron/hole effective masses, electron affinity, and dielectric constant. Used these parameters as inputs for SCAPS-1D solar-cell device modeling to evaluate performance with different ETL/HTL combinations and identify the highest-efficiency device configuration."
  }
];


/* ---------------------------------------------------------------------
   SECTION 5B: WORK EXPERIENCES (CV er "Work Experiences")
   --------------------------------------------------------------------- */
const WORK = [
  {
    title: "Research Assistant, Materials Research Lab(MRL), Pabna University of Science and Technology, Pabna-6600, Bangladesh.",
    badge: "Current",
    when: "04/02/2025 – Current",
    role: "",
    text: "I am a versatile and responsible individual with experience in computer system maintenance, supplier coordination, and technical support. I am also experienced in computational materials research, using software such as WIEN2k, Quantum ESPRESSO, VASP, CASTEP, and SCAPS-1D, along with programming and data analysis for scientific work. In addition, I coach juniors for 18 hours per week, focusing on skill development, teamwork, and discipline."
  }
];


/* ---------------------------------------------------------------------
   SECTION 6: RESEARCH INTERESTS  ["Title", ""]  (CV er hubohu list)
   --------------------------------------------------------------------- */
const INTERESTS = [
  ["Condensed Matter Physics", ""],
  ["Computational Materials Science", ""],
  ["First-Principles Studies and DFT", ""],
  ["Thermoelectric Materials", ""],
  ["Hydrogen Storage Materials", ""],
  ["Perovskite and Double-Perovskite Materials", ""],
  ["Photovoltaics; Solar Cell Modeling and Simulation", ""],
  ["Magnetic Materials", ""]
];


/* ---------------------------------------------------------------------
   SECTION 7: PUBLICATIONS (CV er hubohu)
   Notun paper: ekta { ... }, block copy kore ekdom upore boshan.
   y = year | t = title | a = authors | j = journal | doi = DOI | i = impact factor
   Submitted manuscript hole doi ar i muche din ar  s: 1  likhun.
   --------------------------------------------------------------------- */
const PUBS = [
  {
    y: 2026,
    t: "Tuning the structural and physical properties of Hf5Si3 intermetallic compound under pressure: Insights for next-generation high-temperature technology.",
    a: "Md. Emon Hassan, Md. Riad Khan, Zihad Hossain, Md. Khairul Alam, Mohammad Abdur Rashid, Md. Lokman Ali",
    j: "Scientific Reports 16, 24463 (2026)",
    doi: "10.1038/s41598-026-52144-z",
    i: "4.9 (2025)"
  },
  {
    y: 2026,
    t: "First-principles investigation of CuBiSeCl2: A quaternary halide chalcogenide material for advanced optoelectronic and thermoelectric energy harvesting and conversion technologies.",
    a: "Zihad Hossain, Md. Riad Khan, Sanzida Naznin Mim, Md. Emon Hassan, Mohammad Abdur Rashid, and Md. Lokman Ali",
    j: "Materials Advances 7(3), 1704–1720 (2026)",
    doi: "10.1039/d5ma01386k",
    i: "5.8 (2025)"
  },
  {
    y: 2026,
    t: "Device-level engineering and optimization of high-efficiency lead-free NaSiCl3 perovskite solar cells using SCAPS-1D and COMSOL.",
    a: "Md. Redwan Alam Hridoy, Zihad Hossain, Md. Riad Khan, Prarthona Shaha, Md. Emon Hassan, Most. Meftaul Zannati Kemi, and Md. Lokman Ali",
    j: "Materials Advances, 2026",
    doi: "10.1039/d6ma01128d",
    i: "5.8 (2025)"
  },
  {
    y: 2025,
    t: "Doping effect of antimony on BaFeO3 perovskite oxide: Optical, electronic, magnetic and thermoelectric properties.",
    a: "Md. Riad Khan, Sanzida Naznin Mim, Zihad Hossain, Md. Emon Hassan, Md. Saiful Alam, Mohammad Abdur Rashid, and Md. Lokman Ali",
    j: "RSC Advances 15(45), 38158–38175 (2025)",
    doi: "10.1039/d5ra06101f",
    i: "6.1 (2025)"
  },
  {
    y: 2026,
    s: 1,
    t: "High Throughput Investigation with Bandgap and Figure of Merit Correction of the Lead-Free Halide Double Perovskites M2LiGaI6 (M = Rb, Cs) for Thermoelectric, Photovoltaic and Photocatalytic Hydrogen Evolution Applications",
    a: "Md. Riad Khan, Zihad Hossain, Md. Emon Hassan, Md. Redwan Alam Hridoy, Dayal Chandra Roy, Md. Hasnat Shariar Shanto, Most. Meftaul Zannati Kemi, Mohammad Abdur Rashid, and Md. Lokman Ali",
    j: "Journal of Materials Chemistry C, 2026"
  }
];


/* ---------------------------------------------------------------------
   SECTION 8: CONFERENCES & SEMINARS (CV er hubohu)
   d = date | type = Oral/Poster | e = conference | t = presentation title
   a = authors | o = organized by
   --------------------------------------------------------------------- */
const TALKS = [
  { d: "11–12 December 2025", type: "Oral Presentation",
    e: "10th Conference of Bangladesh Crystallographic Association (BCA), Bangladesh University of Engineering and Technology (BUET), Dhaka, Bangladesh.",
    t: "Pressure-Tuned Structural, Mechanical, Electronic, Optical, and Thermoelectric Properties of the Binary Intermetallic Compound Hf5Si3: Potential for High-Temperature Applications",
    a: "Md. Emon Hassan, Md. Riad Khan, Md. Khairul Alam, and Md. Lokman Ali",
    o: "Bangladesh Crystallographic Association & Depertment of Physics,BUET." },
  { d: "14–15 November 2025", type: "Oral Presentation",
    e: "2nd International Conference on Recent Advances in Science and Technology (ICRAST), University of Rajshahi, Rajshahi, Bangladesh.",
    t: "Pressure-Induced Structural, Mechanical, Electronic, Optical, and Thermoelectric Properties of the Binary Intermetallic Compound Hf5Si3 for Advanced High-Temperature Applications",
    a: "Md. Emon Hassan, Md. Riad Khan, Md. Khairul Alam, and Md. Lokman Ali",
    o: "Faculty of Science, University of Rajshahi." },
  { d: "27–28 June 2026", type: "Poster Presentation",
    e: "International Conference on Emerging Frontiers in Advanced Sciences and Technologies (EFAST 2026), Pabna University of Science and Technology (PUST) & Universiti Malaysia Perlis (UniMAP), Hybrid Conference.",
    t: "Multifunctional Properties of Lead-Free Na2ZrTeO6 Double Perovskite for High Temperature and Optoelectronic Applications: A First-Principles Investigation",
    a: "Md. Emon Hassan, Md. Riad Khan, Sanzida Naznin Mim, Md. Khairul Alam, and Md. Lokman Ali",
    o: "Faculty of Science, and Life and Earth Science Pabna University of Science and Technology (PUST) Bangladesh & Centre of Excellence for Advanced Computing Universiti Malaysia Perlis (UniMAP) Malaysia" },
  { d: "20 April 2025", type: "Poster Presentation",
    e: "Conference on Computational Physics and Material Science, University of Rajshahi, Rajshahi, Bangladesh.",
    t: "Structural, Mechanical, Optical and Thermoelectric Properties of Binary Intermetallic Compound Hf5Si3 Under Pressure",
    a: "Md. Emon Hassan, Md. Riad Khan, Md. Khairul Alam, and Md. Lokman Ali",
    o: "Condensed Matter Physics Lab Alumni, University of Rajshahi" },
  { d: "6–7 February 2025", type: "Poster Presentation",
    e: "National Conference on Physics-2025, University of Rajshahi, Rajshahi, Bangladesh.",
    t: "Photovoltaic Characteristics of Cu2ZnGeSe4: Toward High-Efficiency Lead-Free Optoelectronics",
    a: "Md. Emon Hassan, Zihad Hossain, and Md. Lokman Ali",
    o: "Bangladesh Physical Society, University of Rajshahi" }
];


/* ---------------------------------------------------------------------
   SECTION 9: SKILLS (CV er "Computer skills")
   --------------------------------------------------------------------- */
const SKILLS = {
  "Computational Codes": ["VASP", "WIEN2k", "Quantum ESPRESSO", "CASTEP", "SCAPS-1D", "COMSOL Multiphysics", "Phonopy", "BoltzTraP"],
  "Programming & Scripting": ["Fortran 90", "C++", "Bash/Shell Scripting"],
  "Data Analysis & Visualization": ["MATLAB", "OriginLab", "VESTA", "XCrySDen"],
  "Scientific Documentation": ["LaTeX", "Overleaf", "Zotero", "Technical Documentation"],
  "Office Applications": ["Microsoft Word", "Excel", "PowerPoint", "Access"]
};


/* ---------------------------------------------------------------------
   SECTION 9B: MEMBERSHIPS, CERTIFICATE, ASSOCIATIONS, RECOMMENDATIONS
   --------------------------------------------------------------------- */
const MEMBERSHIPS = [
  ["2026–Present", "Student Member, Materials Research Society (MRS)."],
  ["2026–Present", "Student Member, American Physical Society (APS)."],
  ["2026–Present", "Student Member, American Chemical Society (ACS)."],
  ["2026–Present", "Student Member, Royal Society of Chemistry (RSC)."],
  ["2026–Present", "Student Member, Energy Institute (EI)."]
];

const CERTS = [
  ["2026", "Medium of Instruction (MOI) Certificate, Pabna University of Science and Technology (PUST), Pabna, Bangladesh.",
   "Certificate confirming English as the medium of instruction throughout the academic program."]
];

/* ["Naam", "likhar text", "link (na thakle khali)"]  */
const ASSOC = [
  ["ResearchGate", "ResearchGate Profile", ""],            // <-- ResearchGate link paste korun
  ["ORCID", "0009-0009-6252-3038", "https://orcid.org/0009-0009-6252-3038"],
  ["Google Scholar", "Google Scholar Profile", ""]          // <-- Google Scholar link paste korun
];

/* Referee der phone number public site e deoa hoy ni (privacy). Email ache. */
const RECS = [
  { name: "Dr. Md. Lokman Ali",
    post: "Associate Professor, Department of Physics, Pabna University of Science and Technology, Pabna-6600, Bangladesh.",
    text: "Served as my academic supervisor during both my B.Sc. (Honours) and M.S. studies in Physics and guided and trained me in computational simulation work.",
    email: "lokman.ali@pust.ac.bd" },
  { name: "Dr. Md. Khairul Alam",
    post: "Professor, Department of Physics, Pabna University of Science and Technology, Pabna-6600, Bangladesh.",
    text: "Supervised me during both my B.Sc. (Honours) and M.S. studies in Physics.",
    email: "khairul_phy@pust.ac.bd" }
];


/* ---------------------------------------------------------------------
   SECTION 10: CONTACT + FOOTER
   --------------------------------------------------------------------- */
const CONTACT_TEXT = "For collaborations or research openings, write to";
const FOOTER_TEXT = "Department of Physics, Pabna University of Science and Technology.";
