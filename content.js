/* =====================================================================
   CONTENT.JS - website er shob lekha ekhane (CV er hubohu lekha).
   Shudhu "quotes" er bhitore edit korun. Comma (,) ar bracket [ ] { } muchben na.
   Formula normal likhun (Hf5Si3), site nijei subscript korbe.
   LinkedIn / ResearchGate / Google Scholar er link LINKS e "" er jaygay paste korun.
   ===================================================================== */

/* true dile Date of Birth, phone number ar referee der phone site e dekhabe.
   Public site e false rakha nirapod. */
const SHOW_PRIVATE = false;


const PROFILE = {
  name: "Md. Emon Hassan",
  author: "Md. Emon Hassan", // This name will be bold in publications
  pageTitle: "Md. Emon Hassan | Condensed Matter Physics Researcher",

  roles: [
    "Condensed Matter Physics",
    "Computational Materials Science",
    "First-Principles Studies and DFT",
    "Thermoelectric Materials",
    "Photovoltaics and Solar Cell Modelling"
  ],

  affil: "Department of Physics",
  univ: "Pabna University of Science and Technology, Pabna-6600, Bangladesh",

  email: "emon.200702@s.pust.ac.bd",
  phone: "+880 1707521785",
  dob: "18/12/2001",
  cgpa: "3.76",

  photo: "assets/profile.png",
  cv: "assets/Emon_Hassan_CV.pdf",

  objective: "I aspire to pursue a research career at a reputable institution, specialising in Condensed Matter Physics, collaborating with researchers, and contributing to research on advanced materials and sustainable energy technologies."
};


/* [label, text, link]  link "" hole button hide hoye jabe */
const LINKS = [
  ["LinkedIn", "LinkedIn", ""],
  ["ResearchGate", "ResearchGate Profile", ""],
  ["ORCID", "0009-0009-6252-3038", "https://orcid.org/0009-0009-6252-3038"],
  ["Google Scholar", "Google Scholar Profile", ""]
];

const EDU = [
  {
    d: "01/02/2026 – Present",
    deg: "Master of Science (M.S.), Physics",
    pl: "Pabna University of Science and Technology (PUST), Pabna-6600, Bangladesh.",
    m: ["Final grade: 3.76 out of 4.00 (up to the 1st Semester)", "Credit System: Semester", "Credits: 44", "Expected Year of Completion: June 2027"],
    tl: "Ongoing Thesis Title",
    th: "Theoretical Investigation of Structural Stability Assessment, Electronic Structure, and Thermoelectric Performance of Bi-Based Zintl-Phase Compounds XCaBi (X= K, Rb, Cs) for Sustainable Energy Harvesting"
  },
  {
    d: "01/03/2020 – 26/01/2026",
    deg: "Bachelor of Science (B.Sc.), Physics",
    pl: "Pabna University of Science and Technology (PUST), Pabna-6600, Bangladesh.",
    m: ["Final grade: 3.61/4.00", "Credit System: Semester", "Credits: 160", "Passing Year: 2026"],
    tl: "Thesis Title",
    th: "Pressure-Induced Structural, Mechanical, Electronic, Optical, and Thermoelectric Properties of the Binary Intermetallic Compound Hf5Si3 for Advanced High-Temperature Applications",
    /*v: ["Undergraduate Academic Documents", "https://drive.google.com/drive/1oRBnwqciNwdWACJRIq?usp=sharing"]
  }
];

/* y year | t title | a authors | j journal | doi | i impact factor | s:1 = submitted manuscript
   Notun paper ekdom upore copy kore boshan. */
const PUBS = [
  {
    y: 2026,
    t: "Tuning the structural and physical properties of Hf5Si3 intermetallic compound under pressure: Insights for next-generation high-temperature technology",
    a: "Md. Emon Hassan, Md. Riad Khan, Zihad Hossain, Md. Khairul Alam, Mohammad Abdur Rashid, Md. Lokman Ali",
    j: "Scientific Reports 16, 24463 (2026)",
    doi: "10.1038/s41598-026-52144-z", i: "4.9"
  },
  {
    y: 2026,
    t: "First-principles investigation of CuBiSeCl2: A quaternary halide chalcogenide material for advanced optoelectronic and thermoelectric energy harvesting and conversion technologies",
    a: "Zihad Hossain, Md. Riad Khan, Sanzida Naznin Mim, Md. Emon Hassan, Mohammad Abdur Rashid, Md. Lokman Ali",
    j: "Materials Advances 7(3), 1704–1720 (2026)",
    doi: "10.1039/d5ma01386k", i: "5.8"
  },
  {
    y: 2026,
    t: "Device-level engineering and optimization of high-efficiency lead-free NaSiCl3 perovskite solar cells using SCAPS-1D and COMSOL",
    a: "Md. Redwan Alam Hridoy, Zihad Hossain, Md. Riad Khan, Prarthona Shaha, Md. Emon Hassan, Most. Meftaul Zannati Kemi, Md. Lokman Ali",
    j: "Materials Advances, 2026",
    doi: "10.1039/d6ma01128d", i: "5.8"
  },
  {
    y: 2025,
    t: "Doping effect of antimony on BaFeO3 perovskite oxide: Optical, electronic, magnetic and thermoelectric properties",
    a: "Md. Riad Khan, Sanzida Naznin Mim, Zihad Hossain, Md. Emon Hassan, Md. Saiful Alam, Mohammad Abdur Rashid, Md. Lokman Ali",
    j: "RSC Advances 15(45), 38158–38175 (2025)",
    doi: "10.1039/d5ra06101f", i: "6.1"
  },
  {
    y: 2026, s: 1,
    t: "High Throughput Investigation with Bandgap and Figure of Merit Correction of the Lead-Free Halide Double Perovskites M2LiGaI6 (M = Rb, Cs) for Thermoelectric, Photovoltaic and Photocatalytic Hydrogen Evolution Applications",
    a: "Md. Riad Khan, Zihad Hossain, Md. Emon Hassan, Md. Redwan Alam Hridoy, Dayal Chandra Roy, Md. Hasnat Shariar Shanto, Most. Meftaul Zannati Kemi, Mohammad Abdur Rashid, Md. Lokman Ali",
    j: "Journal of Materials Chemistry C, 2026"
  }
];

/* k type | d date | e event | t title | a authors | o organized by */
const TALKS = [
  { k: "Oral Presentation", d: "11–12 December 2025",
    e: "10th Conference of Bangladesh Crystallographic Association (BCA), Bangladesh University of Engineering and Technology (BUET), Dhaka, Bangladesh.",
    t: "Pressure-Tuned Structural, Mechanical, Electronic, Optical, and Thermoelectric Properties of the Binary Intermetallic Compound Hf5Si3: Potential for High-Temperature Applications",
    a: "Md. Emon Hassan, Md. Riad Khan, Md. Khairul Alam, and Md. Lokman Ali",
    o: "Bangladesh Crystallographic Association & Department of Physics, BUET." },
  { k: "Oral Presentation", d: "14–15 November 2025",
    e: "2nd International Conference on Recent Advances in Science and Technology (ICRAST), University of Rajshahi, Rajshahi, Bangladesh.",
    t: "Pressure-Induced Structural, Mechanical, Electronic, Optical, and Thermoelectric Properties of the Binary Intermetallic Compound Hf5Si3 for Advanced High-Temperature Applications",
    a: "Md. Emon Hassan, Md. Riad Khan, Md. Khairul Alam, and Md. Lokman Ali",
    o: "Faculty of Science, University of Rajshahi." },
  { k: "Poster Presentation", d: "27–28 June 2026",
    e: "International Conference on Emerging Frontiers in Advanced Sciences and Technologies (EFAST 2026), Pabna University of Science and Technology (PUST) & Universiti Malaysia Perlis (UniMAP), Hybrid Conference.",
    t: "Multifunctional Properties of Lead-Free Na2ZrTeO6 Double Perovskite for High Temperature and Optoelectronic Applications: A First-Principles Investigation",
    a: "Md. Emon Hassan, Md. Riad Khan, Sanzida Naznin Mim, Md. Khairul Alam, and Md. Lokman Ali",
    o: "Faculty of Science, and Life and Earth Science Pabna University of Science and Technology (PUST) Bangladesh & Centre of Excellence for Advanced Computing Universiti Malaysia Perlis (UniMAP) Malaysia" },
  { k: "Poster Presentation", d: "20 April 2025",
    e: "Conference on Computational Physics and Material Science, University of Rajshahi, Rajshahi, Bangladesh.",
    t: "Structural, Mechanical, Optical and Thermoelectric Properties of Binary Intermetallic Compound Hf5Si3 Under Pressure",
    a: "Md. Emon Hassan, Md. Riad Khan, Md. Khairul Alam, and Md. Lokman Ali",
    o: "Condensed Matter Physics Lab Alumni, University of Rajshahi" },
  { k: "Poster Presentation", d: "6–7 February 2025",
    e: "National Conference on Physics-2025, University of Rajshahi, Rajshahi, Bangladesh.",
    t: "Photovoltaic Characteristics of Cu2ZnGeSe4: Toward High-Efficiency Lead-Free Optoelectronics",
    a: "Md. Emon Hassan, Zihad Hossain, and Md. Lokman Ali",
    o: "Bangladesh Physical Society, University of Rajshahi" }
];

const INTERESTS = ["Condensed Matter Physics", "Computational Materials Science", "First-Principles Studies and DFT", "Thermoelectric Materials", "Hydrogen Storage Materials", "Perovskite and Double-Perovskite Materials", "Photovoltaics; Solar Cell Modeling and Simulation", "Magnetic Materials"];

/* d date | t title | x text | a advisor */
const RES = [
  { d: "2026 – Present",
    t: "Theoretical Investigation of Structural Stability Assessment, Electronic Structure, and Thermoelectric Performance of Bi-Based Zintl-Phase Compounds XCaBi (X= K, Rb, Cs) for Sustainable Energy Harvesting.",
    x: "Investigating the dynamical and mechanical stability, electronic structure, and thermoelectric properties of Zintl-phase ACaBi (A = K, Rb, Cs) using first-principles calculations within the WIEN2k framework. The study focuses on evaluating their structural stability, electronic properties, optical properties and thermoelectric performance for potential energy applications.",
    a: "Dr. Md. Lokman Ali, Associate Professor, Department of Physics, Pabna University of Science and Technology, Pabna-6600, Bangladesh." },
  { d: "2025 – Present",
    t: "Experimental Synthesis and High-Throughput Investigation of Emerging Chalcogenide SrSnX3 (X = S, Se) and Double Perovskites M2LiGaI6 (M = Rb, Cs).",
    x: "Performed Hydrothermal technique for material synthesis, characterization of the synthesis material using XRD, UV-Vis and DFT simulations using WIEN2K, VASP to determine the semiconductor bandgap and calculate electron/hole effective masses, electron affinity, and dielectric constant. Used these parameters as inputs for SCAPS-1D solar-cell device modeling to evaluate performance with different ETL/HTL combinations and identify the highest-efficiency device configuration.",
    a: "Dr. Md. Lokman Ali, Associate Professor, Department of Physics, Pabna University of Science and Technology, Pabna-6600, Bangladesh." }
];

const WORK = [
  { d: "04/02/2025 – Current",
    t: "Research Assistant, Materials Research Lab(MRL), Pabna University of Science and Technology, Pabna-6600, Bangladesh.",
    x: "I am a versatile and responsible individual with experience in computer system maintenance, supplier coordination, and technical support. I am also experienced in computational materials research, using software such as WIEN2k, Quantum ESPRESSO, VASP, CASTEP, and SCAPS-1D, along with programming and data analysis for scientific work. In addition, I coach juniors for 18 hours per week, focusing on skill development, teamwork, and discipline." }
];

const SKILLS = {
  "Computational Codes": ["VASP", "WIEN2k", "Quantum ESPRESSO", "CASTEP", "SCAPS-1D", "COMSOL Multiphysics", "Phonopy", "BoltzTraP"],
  "Programming & Scripting": ["Fortran 90", "C++", "Bash/Shell Scripting"],
  "Data Analysis & Visualization": ["MATLAB", "OriginLab", "VESTA", "XCrySDen"],
  "Scientific Documentation": ["LaTeX", "Overleaf", "Zotero", "Technical Documentation"],
  "Office Applications": ["Microsoft Word", "Excel", "PowerPoint", "Access"]
};

const MEMBER = [
  ["2026–Present", "Student Member, Materials Research Society (MRS)."],
  ["2026–Present", "Student Member, American Physical Society (APS)."],
  ["2026–Present", "Student Member, American Chemical Society (ACS)."],
  ["2026–Present", "Student Member, Royal Society of Chemistry (RSC)."],
  ["2026–Present", "Student Member, Energy Institute (EI)."]
];

const CERT = { d: "2026", t: "Medium of Instruction (MOI) Certificate, Pabna University of Science and Technology (PUST), Pabna, Bangladesh.", x: "Certificate confirming English as the medium of instruction throughout the academic program." };

const REFS = [
  { n: "Dr. Md. Lokman Ali", r: "Associate Professor, Department of Physics, Pabna University of Science and Technology, Pabna-6600, Bangladesh.",
    t: "Served as my academic supervisor during both my B.Sc. (Honours) and M.S. studies in Physics and guided and trained me in computational simulation work.",
    ph: "+880 01747929123", em: "lokman.ali@pust.ac.bd" },
  { n: "Dr. Md. Khairul Alam", r: "Professor, Department of Physics, Pabna University of Science and Technology, Pabna-6600, Bangladesh.",
    t: "Supervised me during both my B.Sc. (Honours) and M.S. studies in Physics.",
    ph: "+880 01712659746", em: "khairul_phy@pust.ac.bd" }
];

const FOOTER_TEXT = "Department of Physics, Pabna University of Science and Technology.";
