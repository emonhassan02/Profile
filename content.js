
// ============================================================
// MD. EMON HASSAN — PERSONAL ACADEMIC WEBSITE
// EDIT THIS FILE TO UPDATE YOUR PERSONAL INFORMATION.
// Keep quotation marks, commas and brackets intact.
// ============================================================


// ------------------------------------------------------------
// 1. PERSONAL INFORMATION
// ------------------------------------------------------------

const PROFILE = {
  name: "Md. Emon Hassan",
  authorName: "Md. Emon Hassan",

  pageTitle: "Md. Emon Hassan | Academic Research Portfolio",
  navName: "Emon Hassan",
  navSub: "Physics Researcher",

  role: "M.S. Student in Physics | Research Assistant",
  location: "Pabna University of Science and Technology, Bangladesh",

  email: "emon.200702@s.pust.ac.bd",

  photo: "assets/profile.png",

  // Upload a public CV PDF to assets and then add its exact path here.
  // Example: "assets/Emon_Hassan_CV.pdf"
  cv: "",

  badges: [
    "M.S. Student",
    "Computational Materials Science",
    "Open to PhD Opportunities"
  ],

  statPublications: "4",
  statConferences: "5",
  statThirdValue: "3.61",
  statThirdLabel: "B.Sc. CGPA"
};


// ------------------------------------------------------------
// 2. PROFESSIONAL LINKS
// ------------------------------------------------------------

const LINKS = [
  ["Email", "mailto:emon.200702@s.pust.ac.bd"],
  ["Google Scholar", "https://scholar.google.com/citations?user=D8O3IMoAAAAJ"],
  ["ORCID", "https://orcid.org/0009-0009-6252-3038"],
  ["ResearchGate", "https://www.researchgate.net/profile/Emon-Hassan-2"],
  ["LinkedIn", "https://www.linkedin.com/in/md-emon-hassan-076572438/"]
];


// ------------------------------------------------------------
// 3. ABOUT ME
// ------------------------------------------------------------

const ABOUT = [
  "I am an M.S. student in Physics at Pabna University of Science and Technology (PUST), Bangladesh, and a Research Assistant at the Materials Research Lab. My academic interests lie in condensed matter physics and computational materials science, particularly the application of density functional theory (DFT) to understand and predict the properties of functional materials.",

  "My current M.S. thesis focuses on the structural stability, hydrogen storage performance and physical properties of Nb-based perovskite hydrides XNbH3 (X = K, Rb, Cs). I am also interested in thermoelectric materials, lead-free perovskites, photovoltaics and magnetic materials.",

  "I aim to contribute to research on advanced functional materials and sustainable energy technologies through reliable first-principles calculations, computational modelling and scientific collaboration."
];


// ------------------------------------------------------------
// 4. QUICK RESEARCH KEYWORDS
// ------------------------------------------------------------

const QUICK_INTERESTS = [
  "Density Functional Theory",
  "Hydrogen Storage",
  "Thermoelectric Materials",
  "Computational Materials Science",
  "Perovskites",
  "Sustainable Energy"
];


// ------------------------------------------------------------
// 5. EDUCATION
// ------------------------------------------------------------

const EDUCATION = [
  {
    years: "Ongoing",
    degree: "M.S. in Physics",
    institution: "Pabna University of Science and Technology",
    location: "Pabna, Bangladesh",
    description: "M.S. thesis: Comprehensive theoretical investigation of structural stability, hydrogen storage performance and physical properties of Nb-based perovskite hydrides XNbH3 (X = K, Rb, Cs).",
    details: [
      "CGPA: 3.76 / 4.00 (up to 1st semester)",
      "Expected completion: April 2027"
    ],
    current: true
  },
  {
    years: "2020 – 2026",
    degree: "B.Sc. (Honours) in Physics",
    institution: "Pabna University of Science and Technology",
    location: "Pabna, Bangladesh",
    description: "Undergraduate thesis on the pressure-dependent structural, mechanical, electronic, optical and thermoelectric properties of Hf5Si3.",
    details: [
      "CGPA: 3.61 / 4.00",
      "Completed 160 credits",
      "Thesis grade: A+"
    ],
    current: false
  }
];


// ------------------------------------------------------------
// 6. RESEARCH EXPERIENCE AND PROJECTS
// ------------------------------------------------------------

const EXPERIENCE = [
  {
    title: "Materials Research Lab (MRL), PUST",
    role: "Research Assistant",
    period: "Current",
    type: "Research Position",
    description: "Working on computational materials research, first-principles simulations, physical-property analysis and scientific research activities."
  },
  {
    title: "Nb-Based Perovskite Hydrides XNbH3",
    role: "M.S. Thesis Research",
    period: "Ongoing",
    type: "Hydrogen Storage",
    description: "Investigating structural stability, hydrogen storage capacity, electronic structure, optical response, lattice dynamics and thermodynamic properties of KNbH3, RbNbH3 and CsNbH3 using density functional theory."
  },
  {
    title: "Computational Investigation of Functional Materials",
    role: "First-Principles Research",
    period: "Research Projects",
    type: "DFT and Materials Design",
    description: "Studying the structural, electronic, optical, magnetic and thermoelectric properties of intermetallic compounds, perovskites and energy-related materials."
  },
  {
    title: "Lead-Free Perovskite Photovoltaics",
    role: "Computational Device Modelling",
    period: "Research Projects",
    type: "Solar Energy",
    description: "Investigating lead-free perovskite materials and photovoltaic device performance using SCAPS-1D and COMSOL."
  }
];


// ------------------------------------------------------------
// 7. RESEARCH INTERESTS
// ------------------------------------------------------------

const INTERESTS = [
  {
    icon: "01",
    title: "Computational Materials Science",
    description: "First-principles modelling and prediction of structural, electronic, optical, mechanical and thermodynamic properties of functional materials."
  },
  {
    icon: "02",
    title: "Density Functional Theory",
    description: "Electronic-structure calculations, structural optimization, energy calculations and physical-property analysis using DFT."
  },
  {
    icon: "03",
    title: "Hydrogen Storage Materials",
    description: "Theoretical investigation of metal hydrides, hydrogen storage capacity, thermodynamic stability and hydrogen desorption."
  },
  {
    icon: "04",
    title: "Thermoelectric Materials",
    description: "Understanding electronic transport, Seebeck coefficient, electrical conductivity, thermal conductivity and thermoelectric performance."
  },
  {
    icon: "05",
    title: "Perovskites and Photovoltaics",
    description: "Lead-free perovskite materials, electronic and optical properties, solar-cell device simulation and photovoltaic performance."
  },
  {
    icon: "06",
    title: "Magnetic and Functional Materials",
    description: "Computational exploration of magnetic ordering, electronic structure and structure-property relationships in functional materials."
  }
];


// ------------------------------------------------------------
// 8. PUBLICATIONS
// Add new papers at the beginning of this list.
// status: "published" or "under-review"
// ------------------------------------------------------------

const PUBLICATIONS = [
  {
    year: 2026,
    title: "Tuning the structural and physical properties of Hf5Si3 intermetallic compound under pressure: Insights for next-generation high-temperature technology",
    authors: "Md. Emon Hassan, Md. Riad Khan, Zihad Hossain, Md. Khairul Alam, Mohammad Abdur Rashid, and Md. Lokman Ali",
    journal: "Scientific Reports, 16, 24463",
    doi: "10.1038/s41598-026-52144-z",
    status: "published"
  },
  {
    year: 2026,
    title: "First-principles investigation of CuBiSeCl2: A quaternary halide chalcogenide material for advanced optoelectronic and thermoelectric energy harvesting and conversion technologies",
    authors: "Zihad Hossain, Md. Riad Khan, Sanzida Naznin Mim, Md. Emon Hassan, Mohammad Abdur Rashid, and Md. Lokman Ali",
    journal: "Materials Advances, 7(3), 1704–1720",
    doi: "10.1039/D5MA01386K",
    status: "published"
  },
  {
    year: 2026,
    title: "Device-level engineering and optimization of high-efficiency lead-free NaSiCl3 perovskite solar cells using SCAPS-1D and COMSOL",
    authors: "Md. Redwan Alam Hridoy, Zihad Hossain, Md. Riad Khan, Prarthona Shaha, Md. Emon Hassan, Most. Meftaul Zannati Kemi, and Md. Lokman Ali",
    journal: "Materials Advances",
    doi: "10.1039/D6MA01128D",
    status: "published"
  },
  {
    year: 2025,
    title: "Doping effect of antimony on BaFeO3 perovskite oxide: Optical, electronic, magnetic and thermoelectric properties",
    authors: "Md. Riad Khan, Sanzida Naznin Mim, Zihad Hossain, Md. Emon Hassan, Md. Saiful Alam, Mohammad Abdur Rashid, and Md. Lokman Ali",
    journal: "RSC Advances, 15(45), 38158–38175",
    doi: "10.1039/D5RA06101F",
    status: "published"
  },
  {
    year: 2026,
    title: "High-throughput investigation with band-gap and figure-of-merit correction of the lead-free halide double perovskites M2LiGaI6 (M = Rb, Cs) for thermoelectric, photovoltaic and photocatalytic hydrogen evolution applications",
    authors: "Md. Riad Khan, Zihad Hossain, Md. Emon Hassan, Md. Redwan Alam Hridoy, Dayal Chandra Roy, Md. Hasnat Shariar Shanto, Most. Meftaul Zannati Kemi, Mohammad Abdur Rashid, and Md. Lokman Ali",
    journal: "Journal of Materials Chemistry C",
    doi: "",
    status: "under-review"
  }
];


// ------------------------------------------------------------
// 9. CONFERENCES AND PRESENTATIONS
// ------------------------------------------------------------

const TALKS = [
  {
    date: "27–28 June 2026",
    event: "EFAST 2026, PUST and UniMAP",
    type: "Poster Presentation",
    title: "Multifunctional properties of lead-free Na2ZrTeO6 double perovskite for high-temperature and optoelectronic applications"
  },
  {
    date: "11–12 December 2025",
    event: "10th Bangladesh Crystallographic Association Conference, BUET",
    type: "Oral Presentation",
    title: "Pressure-tuned properties of the binary intermetallic compound Hf5Si3"
  },
  {
    date: "14–15 November 2025",
    event: "2nd ICRAST, University of Rajshahi",
    type: "Oral Presentation",
    title: "Pressure-induced properties of Hf5Si3 for high-temperature applications"
  },
  {
    date: "20 April 2025",
    event: "Conference on Computational Physics and Material Science, University of Rajshahi",
    type: "Poster Presentation",
    title: "Structural, mechanical, optical and thermoelectric properties of Hf5Si3 under pressure"
  },
  {
    date: "6–7 February 2025",
    event: "National Conference on Physics 2025, University of Rajshahi",
    type: "Poster Presentation",
    title: "Photovoltaic characteristics of Cu2ZnGeSe4"
  }
];


// ------------------------------------------------------------
// 10. TECHNICAL SKILLS
// ------------------------------------------------------------

const SKILLS = {
  "First-Principles and DFT": [
    "WIEN2k",
    "Quantum ESPRESSO",
    "VASP",
    "CASTEP"
  ],

  "Materials Modelling": [
    "Phonopy",
    "BoltzTraP2",
    "VESTA",
    "XCrySDen",
    "Materials Studio"
  ],

  "Solar-Cell and Device Simulation": [
    "SCAPS-1D",
    "COMSOL Multiphysics"
  ],

  "Programming and Computing": [
    "Fortran 90",
    "C++",
    "Bash",
    "Linux"
  ],

  "Data Analysis and Scientific Writing": [
    "OriginLab",
    "MATLAB",
    "LaTeX",
    "Overleaf",
    "Zotero"
  ]
};


// ------------------------------------------------------------
// 11. CONTACT AND FOOTER
// ------------------------------------------------------------

const CONTACT_TEXT =
  "I welcome opportunities for academic collaboration, research discussions and postgraduate research. Please feel free to contact me by email.";

const FOOTER_TEXT =
  "M.S. Student in Physics · Pabna University of Science and Technology, Bangladesh.";
