
// ============================================================
// MD. EMON HASSAN — PERSONAL ACADEMIC WEBSITE
// Edit this file to update your information and research.
// Keep quotation marks, commas and brackets in place.
// ============================================================

const PROFILE = {
  name: "Md. Emon Hassan",
  shortName: "Emon Hassan",
  role: "M.S. Student in Physics · Research Assistant",
  location: "Pabna University of Science and Technology, Bangladesh",
  email: "emon.200702@s.pust.ac.bd",
  photo: "assets/profile.png",
  cv: "",
  statTools: "10+",
  currentTheme: "Nb-based perovskite hydrides for hydrogen storage"
};

const LINKS = [
  ["Email", "mailto:emon.200702@s.pust.ac.bd"],
  ["Google Scholar", "https://scholar.google.com/citations?user=D8O3IMoAAAAJ"],
  ["ORCID", "https://orcid.org/0009-0009-6252-3038"],
  ["ResearchGate", "https://www.researchgate.net/profile/Emon-Hassan-2"],
  ["LinkedIn", "https://www.linkedin.com/in/md-emon-hassan-076572438/"]
];

const ABOUT = [
  "I am an M.S. student in Physics at Pabna University of Science and Technology (PUST), Bangladesh, and a Research Assistant at the Materials Research Lab. My research interests lie in condensed matter physics and computational materials science, particularly the application of density functional theory (DFT) to understand and predict the properties of functional materials.",
  "My current M.S. thesis focuses on the structural stability, hydrogen storage performance and physical properties of Nb-based perovskite hydrides XNbH3 (X = K, Rb, Cs). I am also interested in thermoelectric materials, lead-free perovskites, photovoltaics and magnetic materials.",
  "I aim to contribute to research on advanced functional materials and sustainable energy technologies through reliable first-principles calculations, computational modelling and scientific collaboration."
];

const ABOUT_FACTS = [
  ["Research field", "Condensed Matter Physics"],
  ["Core method", "First-principles DFT"],
  ["Current focus", "Hydrogen Storage Materials"]
];

const HERO_SPECIALTIES = [
  "Density Functional Theory",
  "Hydrogen Storage",
  "Thermoelectric Materials"
];

const EDUCATION = [
  {
    period: "Ongoing · Expected April 2027",
    degree: "M.S. in Physics",
    institution: "Pabna University of Science and Technology",
    location: "Pabna, Bangladesh",
    description: "Thesis: Comprehensive theoretical investigation of structural stability, hydrogen storage performance and physical properties of Nb-based perovskite hydrides XNbH3 (X = K, Rb, Cs).",
    highlights: [
      "CGPA 3.76 / 4.00 (up to 1st semester)",
      "M.S. research in progress"
    ],
    current: true
  },
  {
    period: "2020 – 2026",
    degree: "B.Sc. (Honours) in Physics",
    institution: "Pabna University of Science and Technology",
    location: "Pabna, Bangladesh",
    description: "Undergraduate thesis on the pressure-dependent structural, mechanical, electronic, optical and thermoelectric properties of the intermetallic compound Hf5Si3.",
    highlights: [
      "CGPA 3.61 / 4.00",
      "160 credits",
      "Thesis grade A+"
    ],
    current: false
  }
];

const INTERESTS = [
  {
    number: "01",
    title: "Computational Materials Science",
    description: "Predicting and understanding the structural, electronic, optical, mechanical and thermodynamic properties of functional materials.",
    tags: ["Materials modelling", "Structure–property relations"]
  },
  {
    number: "02",
    title: "Density Functional Theory",
    description: "First-principles calculations, structural optimization, electronic structure and physical-property analysis using DFT.",
    tags: ["WIEN2k", "Quantum ESPRESSO", "VASP"]
  },
  {
    number: "03",
    title: "Hydrogen Storage Materials",
    description: "Metal hydrides, hydrogen storage capacity, formation energetics, thermodynamic stability and hydrogen desorption.",
    tags: ["Perovskite hydrides", "Hydrogen energy"]
  },
  {
    number: "04",
    title: "Thermoelectric Materials",
    description: "Electronic transport, Seebeck coefficient, electrical conductivity, thermal conductivity and thermoelectric performance.",
    tags: ["Boltzmann transport", "Phonons"]
  },
  {
    number: "05",
    title: "Perovskites & Photovoltaics",
    description: "Lead-free perovskites, optoelectronic properties, solar-cell device modelling and photovoltaic performance.",
    tags: ["SCAPS-1D", "COMSOL"]
  },
  {
    number: "06",
    title: "Magnetic & Functional Materials",
    description: "Computational exploration of magnetic ordering, electronic structure and doping-dependent materials properties.",
    tags: ["Magnetism", "Electronic structure"]
  }
];

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

const EXPERIENCE = [
  {
    period: "Current",
    category: "RESEARCH POSITION",
    title: "Materials Research Lab (MRL), PUST",
    role: "Research Assistant",
    description: "Contributing to computational materials research, first-principles simulations, physical-property analysis and scientific research activities."
  },
  {
    period: "M.S. thesis · Ongoing",
    category: "HYDROGEN STORAGE",
    title: "Nb-Based Perovskite Hydrides XNbH3",
    role: "First-principles research",
    description: "Investigating the structural stability, hydrogen storage capacity, electronic structure, optical response, lattice dynamics and thermodynamic properties of KNbH3, RbNbH3 and CsNbH3 using density functional theory."
  },
  {
    period: "Research projects",
    category: "FUNCTIONAL MATERIALS",
    title: "Computational Investigation of Advanced Materials",
    role: "DFT and materials modelling",
    description: "Studying the structural, electronic, optical, magnetic and thermoelectric properties of intermetallic compounds, perovskites and energy-related materials."
  },
  {
    period: "Research projects",
    category: "SOLAR ENERGY",
    title: "Lead-Free Perovskite Photovoltaics",
    role: "Device-level simulation",
    description: "Investigating lead-free perovskite materials and photovoltaic device performance using SCAPS-1D and COMSOL."
  }
];

const TALKS = [
  {
    date: "27–28 June 2026",
    kind: "POSTER PRESENTATION",
    event: "EFAST 2026 · PUST and UniMAP",
    title: "Multifunctional properties of lead-free Na2ZrTeO6 double perovskite for high-temperature and optoelectronic applications"
  },
  {
    date: "11–12 December 2025",
    kind: "ORAL PRESENTATION",
    event: "10th Bangladesh Crystallographic Association Conference · BUET",
    title: "Pressure-tuned properties of the binary intermetallic compound Hf5Si3"
  },
  {
    date: "14–15 November 2025",
    kind: "ORAL PRESENTATION",
    event: "2nd ICRAST · University of Rajshahi",
    title: "Pressure-induced properties of Hf5Si3 for high-temperature applications"
  },
  {
    date: "20 April 2025",
    kind: "POSTER PRESENTATION",
    event: "Conference on Computational Physics and Material Science · University of Rajshahi",
    title: "Structural, mechanical, optical and thermoelectric properties of Hf5Si3 under pressure"
  },
  {
    date: "6–7 February 2025",
    kind: "POSTER PRESENTATION",
    event: "National Conference on Physics 2025 · University of Rajshahi",
    title: "Photovoltaic characteristics of Cu2ZnGeSe4"
  }
];

const SKILLS = {
  "First-Principles & DFT": [
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
  "Device Simulation": [
    "SCAPS-1D",
    "COMSOL Multiphysics"
  ],
  "Programming & Computing": [
    "Fortran 90",
    "C++",
    "Bash",
    "Linux"
  ],
  "Analysis & Scientific Writing": [
    "OriginLab",
    "MATLAB",
    "LaTeX",
    "Overleaf",
    "Zotero"
  ]
};

const CONTACT_TEXT =
  "I welcome academic collaboration, research discussions and postgraduate research opportunities in computational materials science, hydrogen storage and sustainable energy materials.";

const FOOTER_TEXT =
  "M.S. Student in Physics · Pabna University of Science and Technology, Bangladesh.";
