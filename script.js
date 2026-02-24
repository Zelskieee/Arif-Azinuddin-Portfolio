// ========== EMAILJS CONFIGURATION ==========
emailjs.init("mMer3rnqTxT5ZF7v-"); // Replace with your EmailJS User ID

// ========== CERTIFICATE IMAGES ==========
const certificateImages = [
  "assets/images/sijil/data-mining.jpeg",
  "assets/images/sijil/data-structure.png",
  "assets/images/sijil/power-bi.jpg",
  "assets/images/sijil/pbi-beginner.jpg",
  "assets/images/sijil/sas-basic.png",
  "assets/images/sijil/sas-overview.png",
  "assets/images/sijil/cisco.png",
  "assets/images/sijil/seminarwarisan.jpg",
  "assets/images/sijil/IMG_20260209_191109_103.jpg",
  "assets/images/sijil/IMG_20260209_191108_662.jpg",
  "assets/images/sijil/sijil-tamat-intern.jpg",
];

// ========== PROJECTS DATA ==========
// Ordered newest to oldest
const projects = [
  {
    id: 1,
    title: "CNC Menu and Ordering",
    date: "February 2026",
    type: "E-Commerce Website",
    category: "web",
    icon: "fa-shopping-cart",
    description: `Developed a modern, responsive e-commerce website featuring a structured product catalog, best-seller highlights, detailed product pages, and a dynamic shopping cart with quantity controls. Integrated a WhatsApp-based ordering system with automated message formatting and cart clearing, optimizing the checkout flow and enhancing user convenience across devices.`,
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design", "WhatsApp API"],
    github: "https://github.com/wanai220118/cnc-menu-and-ordering",
    liveUrl: "https://cheezncream.netlify.app/",
    screenshots: [
      "assets/images/project/cmo-1.png",
      "assets/images/project/cmo-2.png",
      "assets/images/project/cmo-3.png",
      "assets/images/project/cmo-4.png",
      "assets/images/project/cmo-5.png",
      "assets/images/project/cmo-6.png",
    ],
  },
  {
    id: 2,
    title: "ZenFlow Tracker – Mobile Fitness Application",
    date: "February 2026",
    type: "Mobile Application (React Native)",
    category: "mobile",
    icon: "fa-running",
    description: `Built a cross-platform fitness tracking app using React Native and Expo with offline-first architecture via AsyncStorage. Implemented exercise routines, timers, progress analytics, statistics dashboards, and data export, increasing usability for long-term tracking. Integrated video-based exercise guidance and clean UI components for improved user engagement.`,
    tech: ["React Native", "Expo", "AsyncStorage", "JavaScript"],
    github: "https://github.com/wanai220118/ZenFlow_Tracker",
    screenshots: [
      "assets/images/project/et-1.png",
      "assets/images/project/et-2.png",
      "assets/images/project/et-3.png",
    ],
  },
  {
    id: 3,
    title: "Sistem Pengurusan Peguam Syarie (Web-Based)",
    date: "August 2025 – January 2026",
    type: "Web Application",
    category: "web",
    icon: "fa-gavel",
    description: `Developed a PHP–MySQL system supporting four user roles (User, Sub-Admin, Admin, Court) with role-based access control. Automated application, renewal, appeal, payment, interview, and approval workflows, significantly reducing manual processing. Designed a structured, auditable process aligned with real-world certification requirements.`,
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "XAMPP"],
    github: "https://github.com/wanai220118/Sistem-Pengurusan-Peguam-Syarie",
    liveUrl: "https://apps.maidam.gov.my/syarie/login.php",
    screenshots: [
      "assets/images/project/sps-1.png",
      "assets/images/project/sps-2.png",
      "assets/images/project/sps-3.png",
      "assets/images/project/sps-4.png",
      "assets/images/project/sps-5.png",
      "assets/images/project/sps-6.png",
    ],
  },
  {
    id: 4,
    title: "Cheez n' Cream – Admin Mobile Application",
    date: "December 2025",
    type: "Mobile Application (Flutter & Firebase)",
    category: "mobile",
    icon: "fa-mobile-alt",
    description: `Developed a Flutter admin app with real-time Firebase Firestore synchronization for products, orders, customers, and expenses. Implemented secure authentication, live dashboards, PDF report generation, and daily sales summaries. Delivered a modern, animated UI with real-time analytics to support business decision-making.`,
    tech: ["Flutter", "Firebase", "Firestore", "Dart"],
    github: "https://github.com/wanai220118/cheez_admin_app",
    screenshots: [
      "assets/images/project/cnc-1.png",
      "assets/images/project/cnc-2.png",
      "assets/images/project/cnc-3.png",
      "assets/images/project/cnc-4.png",
      "assets/images/project/cnc-5.png",
      "assets/images/project/cnc-6.png",
    ],
  },
  {
    id: 5,
    title: "Personal Portfolio Website",
    date: "November 2025",
    type: "Web Application",
    category: "web",
    icon: "fa-globe",
    description: `Designed and deployed a responsive portfolio website showcasing projects, skills, certificates, and contact features. Implemented light/dark mode, animations, SEO optimization, interactive modals, and GitHub Pages deployment.`,
    tech: ["HTML", "CSS", "JavaScript", "GitHub Pages", "SEO"],
    github: "https://github.com/wanai220118/wanai220118.github.io",
    screenshots: [
      "assets/images/project/pf-1.png",
      "assets/images/project/pf-2.png",
      "assets/images/project/pf-3.png",
    ],
  },
  {
    id: 6,
    title: "GlowGuide – E-Commerce & Consultation Mobile App",
    date: "October 2024 – June 2025",
    type: "Mobile & Web Application",
    category: "mobile",
    icon: "fa-shopping-bag",
    description: `Built an Android application (Java) integrating product purchasing and online consultation booking. Developed a Laravel-based admin panel for managing users, products, orders, and bookings. Implemented real-time data synchronization and user-friendly UI to improve customer experience. Demo: https://www.youtube.com/watch?v=BB_3NAu6uUw`,
    tech: ["Java", "Android Studio", "Laravel", "Firebase", "MySQL"],
    github: "https://github.com/wanai220118/GlowGuide_MobileApp",
    screenshots: [
      "assets/images/project/gg-1.png",
      "assets/images/project/gg-2.png",
      "assets/images/project/gg-3.png",
      "assets/images/project/gg-4.png",
      "assets/images/project/gg-5.png",
      "assets/images/project/gg-6.png",
    ],
  },
  {
    id: 10,
    title: "Image-Based Detection of Rice Leaf Diseases Using Deep CNN Models",
    date: "June 2025",
    type: "Machine Learning",
    category: "ai",
    icon: "fa-brain",
    description: `Implemented deep convolutional neural network (CNN) models to classify and detect rice leaf diseases from image data. Applied image preprocessing, training, and evaluation to develop an automated disease detection system with high accuracy.`,
    tech: ["Python", "TensorFlow", "CNN", "Image Processing"],
    github: "https://github.com/wanai220118/Image-Based-Detection-of-Rice-Leaf-Diseases-Using-Deep-CNN-Models",
    screenshots: ["assets/images/project/rice.png"],
  },
  {
    id: 11,
    title: "Predicting Diabetes with Classification Algorithm",
    date: "May 2025",
    type: "Machine Learning",
    category: "ai",
    icon: "fa-heartbeat",
    description: `Built a predictive model using classification algorithms like Random Forest, Logistic Regression, and K-Nearest Neighbors (KNN) on a diabetes dataset. Applied data preprocessing, feature selection, and model evaluation techniques to improve prediction accuracy.`,
    tech: ["Python", "Scikit-learn", "Pandas", "Machine Learning"],
    github: "https://github.com/wanai220118/Predicting-Diabetes-with-Classification-Algorithm",
    screenshots: ["assets/images/project/diabetes.png"],
  },
  {
    id: 12,
    title: "Evaluating Shortest Path Solutions",
    date: "April 2025",
    type: "Algorithm Analysis",
    category: "data",
    icon: "fa-route",
    description: `Analyzed and compared various shortest path algorithms such as Dijkstra's, Breadth First Search and Depth First Search for performance and efficiency. Evaluated algorithmic complexity and accuracy across different graph structures and datasets.`,
    tech: ["Python", "Algorithms", "Data Structures", "Graph Theory"],
    github: "https://github.com/wanai220118/Evaluating-Shortest-Path-Solutions-A-Performance-Comparison-of-Dijkstra-BFS-and-DFS-Algorithms",
    screenshots: [
      "assets/images/project/bfs.png",
      "assets/images/project/dfs.png",
      "assets/images/project/dijkstra.png",
    ],
  },
  {
    id: 7,
    title: "FRIENDS_WebApp",
    date: "January 2025",
    type: "Full-Stack Web Application",
    category: "web",
    icon: "fa-users",
    description: `Developed a full-stack ASP.NET Core MVC web application with complete CRUD functionality for managing friends, favorite songs, food records, and photo galleries. Implemented secure user authentication and authorization using ASP.NET Identity, ensuring protected access to personal data. Designed a responsive, visually engaging UI with custom themes, gradient backgrounds, toast notifications, and nostalgic branding to enhance usability and user engagement. Demo: https://drive.google.com/file/d/18Czle85TwMlA12vscL_5cU6MsdjK5IO9/view?usp=sharing`,
    tech: ["ASP.NET Core", "MVC", "C#", "ASP.NET Identity", "Entity Framework"],
    github: "https://github.com/wanai220118/FRIENDS_WebApp",
    screenshots: ["assets/images/project/friends.png"],
  },
  {
    id: 13,
    title: "Analyzing Air Quality And Health Impact In India",
    date: "January 2025",
    type: "Data Analytics",
    category: "data",
    icon: "fa-wind",
    description: `Used Power BI and DAX formulas to analyze and visualize air quality data. Applied various analytics methods (descriptive to prescriptive) to assess health implications.`,
    tech: ["Power BI", "DAX", "Data Analytics", "Visualization"],
    github: "#",
    documents: [
      { label: "View PDF", url: "assets/pdf/g3report_datascience.pdf", icon: "fa-file-pdf" },
    ],
    screenshots: [],
  },
  {
    id: 8,
    title: "E-KOOP Inventory Web Based System",
    date: "July 2024",
    type: "Web Application",
    category: "web",
    icon: "fa-warehouse",
    description: `Developed a database-driven inventory management system to track products, stock levels, suppliers, transactions, and reorder points, improving inventory accuracy and control. Designed and managed a relational database schema, ensuring data integrity, efficient queries, and seamless updates across inventory operations.`,
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    github: "https://github.com/SerenaNYX/e-koop_system",
    screenshots: ["assets/images/project/ekoop.png"],
  },
  {
    id: 9,
    title: "Tic-Tac-Toe Game App",
    date: "June 2024",
    type: "Desktop Application",
    category: "web",
    icon: "fa-gamepad",
    description: `Built an interactive Tic-Tac-Toe game using Java, implementing complete game logic, win/draw detection, and turn-based controls. Designed GUI components to deliver a smooth and intuitive gameplay experience.`,
    tech: ["Java", "Swing", "GUI", "Game Development"],
    github: "https://github.com/wanai220118/Tic-Tac-Toe_Game_Application",
    screenshots: ["assets/images/project/ttt.png"],
  },
  {
    id: 14,
    title: "SOHO & Campus Network Design",
    date: "June 2024",
    type: "Network Design",
    category: "network",
    icon: "fa-network-wired",
    description: `Designed a secure and efficient network for small offices or home offices, including a guest network for visitors to ensure security and privacy for internal resources. Developed a comprehensive campus-wide network for a college, focusing on scalability, security, and connectivity to support academic, administrative, and guest services across the campus.`,
    tech: ["Cisco Packet Tracer", "Network Design", "VLAN", "Security"],
    github: "#",
    documents: [
      { label: "View PKT (Campus)", url: "assets/campusnetworkdesignforacollege-part2-group2-28s4-29.pkt", icon: "fa-file-alt" },
      { label: "View PKT (Project)", url: "assets/projectv8.pkt", icon: "fa-file-alt" },
      { label: "View PDF", url: "assets/pdf/reportcomputernetworkG1.pdf", icon: "fa-file-pdf" },
    ],
    screenshots: [],
  },
  {
    id: 15,
    title: "Scripting & Server-Client Messaging in Virtual Machine",
    date: "January 2024",
    type: "Systems Programming",
    category: "network",
    icon: "fa-server",
    description: `Executed server-client messaging and backup operations in a virtual environment using Kali Linux and Ubuntu. Demonstrated basic scripting and communication protocols within virtual machines.`,
    tech: ["Linux", "Shell Scripting", "Networking", "Virtual Machines"],
    github: "#",
    documents: [
      { label: "View PDF", url: "assets/pdf/g12reportpdfver.pdf", icon: "fa-file-pdf" },
    ],
    screenshots: [],
  },
  {
    id: 16,
    title: "Depth First Search (Graph: Map Coloring)",
    date: "December 2023",
    type: "Algorithm Implementation",
    category: "data",
    icon: "fa-map",
    description: `Utilized Depth First Search (DFS) to traverse and color the regions of a map (represented as a graph) such that no two adjacent regions share the same color. Demonstrated concepts from graph theory, particularly node adjacency and traversal algorithms, to solve the classic map coloring problem effectively.`,
    tech: ["Python", "Algorithms", "Graph Theory", "DFS"],
    github: "#",
    documents: [
      { label: "View PDF", url: "assets/pdf/DS-G17.pdf", icon: "fa-file-pdf" },
    ],
    screenshots: [],
  },
  {
    id: 17,
    title: "Network Setting In Virtual Machine",
    date: "October 2023",
    type: "System Configuration",
    category: "network",
    icon: "fa-desktop",
    description: `Configured a virtual network environment using Oracle VirtualBox and Ubuntu OS. Applied key concepts of OS structure and demonstrated essential skills in virtual machine operations.`,
    tech: ["VirtualBox", "Ubuntu", "Networking", "System Admin"],
    github: "#",
    documents: [
      { label: "View PDF", url: "assets/pdf/a1_g29.pdf", icon: "fa-file-pdf" },
    ],
    screenshots: [],
  },
];

// ========== RENDER PROJECTS ==========
let currentFilter = "all";
let currentLanguage = localStorage.getItem("portfolioLang") || "bm";
let taglineRunId = 0;

const i18n = {
  bm: {
    pageTitle: "Arif Azinuddin | Pembangun Sistem",
    taglines: ["Pembangun Sistem", "Pembangun Aplikasi Mudah Alih", "Peminat Data"],
    projectTypeMap: {
      "E-Commerce Website": "Laman Web E-Dagang",
      "Mobile Application (React Native)": "Aplikasi Mudah Alih (React Native)",
      "Web Application": "Aplikasi Web",
      "Mobile Application (Flutter & Firebase)": "Aplikasi Mudah Alih (Flutter & Firebase)",
      "Mobile & Web Application": "Aplikasi Mudah Alih & Web",
      "Machine Learning": "Pembelajaran Mesin",
      "Algorithm Analysis": "Analisis Algoritma",
      "Full-Stack Web Application": "Aplikasi Web Full-Stack",
      "Data Analytics": "Analitik Data",
      "Desktop Application": "Aplikasi Desktop",
      "Network Design": "Reka Bentuk Rangkaian",
      "Systems Programming": "Pengaturcaraan Sistem",
      "Algorithm Implementation": "Pelaksanaan Algoritma",
      "System Configuration": "Konfigurasi Sistem",
    },
    documentLabelMap: {
      "View PDF": "Lihat PDF",
      "View PKT (Campus)": "Lihat PKT (Kampus)",
      "View PKT (Project)": "Lihat PKT (Projek)",
    },
    ui: {
      navHome: "Utama",
      navAbout: "Tentang",
      navExperience: "Pengalaman",
      navSkills: "Kemahiran",
      navProjects: "Projek",
      navReferences: "Rujukan",
      resume: "Resume",
      heroDesc:
        "Bersemangat dalam membina penyelesaian digital yang berfungsi dan berfokuskan pengguna, dengan pengalaman merentas projek web, mudah alih, dan berasaskan data. Saya menghubungkan inovasi teknikal dengan pengalaman pengguna yang cemerlang.",
      getInTouch: "Hubungi Saya",
      viewProjects: "Lihat Projek",
      aboutTitle: "Tentang Saya",
      aboutSubtitle: "Pembangun sistem berdedikasi yang bersemangat menyelesaikan masalah dunia sebenar",
      aboutP1:
        "Hai, saya Arif Azinuddin, seorang pembangun sistem berdedikasi dengan pengalaman menyeluruh dalam pembangunan web dan aplikasi mudah alih full-stack. Saya gemar menyelesaikan masalah dunia sebenar melalui kod yang kemas, cekap, dan reka bentuk intuitif.",
      aboutP2:
        "Kepakaran saya merangkumi pelbagai bahasa pengaturcaraan dan rangka kerja, membolehkan saya membina penyelesaian berskala yang mengutamakan fungsi serta pengalaman pengguna. Saya sentiasa belajar dan menyesuaikan diri dengan teknologi baharu untuk menghasilkan penyelesaian terkini.",
      statLanguages: "Bahasa",
      statProjects: "Projek",
      statCertificates: "Sijil",
      expTitle: "Pengalaman & Pendidikan",
      expSubtitle: "Perjalanan profesional dan latar belakang akademik saya",
      tabWork: "Pengalaman Kerja",
      tabEducation: "Pendidikan",
      tabCertificates: "Sijil",
      skillsTitle: "Kemahiran Teknikal",
      skillsSubtitle: "Set kemahiran menyeluruh untuk membina aplikasi moden",
      skillLanguages: "Bahasa Pengaturcaraan",
      skillFrameworks: "Rangka Kerja",
      skillTools: "Alat & Teknologi",
      skillIdes: "IDE & Platform",
      skillSoft: "Kemahiran Insaniah",
      softCommunication: "Komunikasi",
      softTeamwork: "Kerja Berpasukan",
      softProblemSolving: "Penyelesaian Masalah",
      softLeadership: "Kepimpinan",
      softAdaptability: "Kebolehsuaian",
      projectsTitle: "Projek Pilihan",
      projectsSubtitle: "Sorotan kerja dan pencapaian terkini saya",
      filterAll: "Semua Projek",
      filterWeb: "Web",
      filterMobile: "Mudah Alih",
      filterAI: "AI/ML",
      filterData: "Analitik Data",
      filterNetwork: "Rangkaian",
      filterDesign: "Reka Bentuk",
      referencesTitle: "Rujukan",
      referencesSubtitle: "Rujukan profesional yang boleh memberi maklum balas tentang kerja dan peribadi saya",
      professionalReferences: "Rujukan Profesional",
      contactInformation: "Maklumat Hubungan",
      referenceNote1: "Beliau merupakan penyelia latihan industri saya.",
      referenceNote2: "Beliau merupakan penyelia projek tahun akhir saya, bertajuk GlowGuide Mobile Application.",
      referenceNote3: "Beliau merupakan penyelia akademik saya sepanjang pengajian ijazah.",
      contactEmail: "E-mel",
      footerRights: "Hak cipta terpelihara.",
      liveView: "Lihat Langsung",
      viewOnGithub: "Lihat di GitHub",
    },
  },
  en: {
    pageTitle: "Arif Azinuddin | System Developer",
    taglines: ["System Developer", "Mobile App Builder", "Data Enthusiast"],
    projectTypeMap: {},
    documentLabelMap: {},
    ui: {
      navHome: "Home",
      navAbout: "About",
      navExperience: "Experience",
      navSkills: "Skills",
      navProjects: "Projects",
      navReferences: "References",
      resume: "Resume",
      heroDesc:
        "Passionate about creating functional, user-centered digital solutions with experience across web, mobile, and data-driven projects. I bridge technical innovation and exceptional user experience.",
      getInTouch: "Get In Touch",
      viewProjects: "View Projects",
      aboutTitle: "About Me",
      aboutSubtitle: "Dedicated system developer with a passion for solving real-world problems",
      aboutP1:
        "Hi, I'm Arif Azinuddin, a dedicated system developer with comprehensive experience in full-stack web and mobile development. I thrive on solving real-world problems through clean, efficient code and intuitive design.",
      aboutP2:
        "My expertise spans across multiple programming languages and frameworks, allowing me to build scalable solutions that prioritize both functionality and user experience. I'm constantly learning and adapting to new technologies to deliver cutting-edge solutions.",
      statLanguages: "Languages",
      statProjects: "Projects",
      statCertificates: "Certificates",
      expTitle: "Experience & Education",
      expSubtitle: "My professional journey and academic background",
      tabWork: "Work Experience",
      tabEducation: "Education",
      tabCertificates: "Certificates",
      skillsTitle: "Technical Skills",
      skillsSubtitle: "A comprehensive toolkit for building modern applications",
      skillLanguages: "Languages",
      skillFrameworks: "Frameworks",
      skillTools: "Tools & Technologies",
      skillIdes: "IDEs & Platforms",
      skillSoft: "Soft Skills",
      softCommunication: "Communication",
      softTeamwork: "Teamwork",
      softProblemSolving: "Problem-Solving",
      softLeadership: "Leadership",
      softAdaptability: "Adaptability",
      projectsTitle: "Featured Projects",
      projectsSubtitle: "A showcase of my recent work and achievements",
      filterAll: "All Projects",
      filterWeb: "Web",
      filterMobile: "Mobile",
      filterAI: "AI/ML",
      filterData: "Data Analytics",
      filterNetwork: "Network",
      filterDesign: "Design",
      referencesTitle: "References",
      referencesSubtitle: "Professional references who can speak to my work and character",
      professionalReferences: "Professional References",
      contactInformation: "Contact Information",
      referenceNote1: "He was my industrial training supervisor.",
      referenceNote2: "He was the supervisor for my final year project, titled GlowGuide Mobile Application.",
      referenceNote3: "He was my academic supervisor throughout my degree program.",
      contactEmail: "Email",
      footerRights: "All rights reserved.",
      liveView: "Live view",
      viewOnGithub: "View on GitHub",
    },
  },
};

function getUIText(key) {
  return i18n[currentLanguage]?.ui?.[key] || i18n.bm.ui[key] || key;
}

function translateProjectType(type) {
  if (currentLanguage === "en") return type;
  return i18n.bm.projectTypeMap[type] || type;
}

function translateDocumentLabel(label) {
  if (currentLanguage === "en") return label;
  return i18n.bm.documentLabelMap[label] || label;
}

function setText(selector, value) {
  const el = document.querySelector(selector);
  if (el) el.textContent = value;
}

function setHtml(selector, value) {
  const el = document.querySelector(selector);
  if (el) el.innerHTML = value;
}

function applyLanguage(lang = "bm") {
  currentLanguage = lang === "en" ? "en" : "bm";
  const t = i18n[currentLanguage].ui;

  document.documentElement.lang = currentLanguage === "bm" ? "ms" : "en";
  document.title = i18n[currentLanguage].pageTitle;
  localStorage.setItem("portfolioLang", currentLanguage);

  setText(".nav-links li:nth-child(1) a", t.navHome);
  setText(".nav-links li:nth-child(2) a", t.navAbout);
  setText(".nav-links li:nth-child(3) a", t.navExperience);
  setText(".nav-links li:nth-child(4) a", t.navSkills);
  setText(".nav-links li:nth-child(5) a", t.navProjects);
  setText(".nav-links li:nth-child(6) a", t.navReferences);
  setHtml(".nav-links li:nth-child(7) a", '<i class="fas fa-download"></i> ' + t.resume);

  setText(".hero-description", t.heroDesc);
  setHtml(".hero-buttons .btn-primary", '<i class="fas fa-envelope"></i> ' + t.getInTouch);
  setHtml(".hero-buttons .btn-secondary", '<i class="fas fa-briefcase"></i> ' + t.viewProjects);

  setText("#about .section-header h2", t.aboutTitle);
  setText("#about .section-header p", t.aboutSubtitle);
  setText("#about .about-text p:nth-child(1)", t.aboutP1);
  setText("#about .about-text p:nth-child(2)", t.aboutP2);
  setText("#about .stat-card:nth-child(1) p", t.statLanguages);
  setText("#about .stat-card:nth-child(2) p", t.statProjects);
  setText("#about .stat-card:nth-child(3) p", t.statCertificates);

  setText("#experience .section-header h2", t.expTitle);
  setText("#experience .section-header p", t.expSubtitle);
  setHtml('.tab-btn[data-tab="work"]', '<i class="fas fa-briefcase"></i> ' + t.tabWork);
  setHtml('.tab-btn[data-tab="education"]', '<i class="fas fa-graduation-cap"></i> ' + t.tabEducation);
  setHtml('.tab-btn[data-tab="certificates"]', '<i class="fas fa-certificate"></i> ' + t.tabCertificates);

  setText("#skills .section-header h2", t.skillsTitle);
  setText("#skills .section-header p", t.skillsSubtitle);
  setText("#skills .skill-card:nth-child(1) h3", t.skillLanguages);
  setText("#skills .skill-card:nth-child(2) h3", t.skillFrameworks);
  setText("#skills .skill-card:nth-child(3) h3", t.skillTools);
  setText("#skills .skill-card:nth-child(4) h3", t.skillIdes);
  setText("#skills .skill-card:nth-child(5) h3", t.skillSoft);
  setText("#skills .skill-card:nth-child(5) .skill-tag:nth-child(1)", t.softCommunication);
  setText("#skills .skill-card:nth-child(5) .skill-tag:nth-child(2)", t.softTeamwork);
  setText("#skills .skill-card:nth-child(5) .skill-tag:nth-child(3)", t.softProblemSolving);
  setText("#skills .skill-card:nth-child(5) .skill-tag:nth-child(4)", t.softLeadership);
  setText("#skills .skill-card:nth-child(5) .skill-tag:nth-child(5)", t.softAdaptability);

  setText("#projects .section-header h2", t.projectsTitle);
  setText("#projects .section-header p", t.projectsSubtitle);
  setHtml('.filter-btn[data-filter="all"]', '<i class="fas fa-th"></i> ' + t.filterAll);
  setHtml('.filter-btn[data-filter="web"]', '<i class="fas fa-globe"></i> ' + t.filterWeb);
  setHtml('.filter-btn[data-filter="mobile"]', '<i class="fas fa-mobile-alt"></i> ' + t.filterMobile);
  setHtml('.filter-btn[data-filter="ai"]', '<i class="fas fa-brain"></i> ' + t.filterAI);
  setHtml('.filter-btn[data-filter="data"]', '<i class="fas fa-chart-bar"></i> ' + t.filterData);
  setHtml('.filter-btn[data-filter="network"]', '<i class="fas fa-network-wired"></i> ' + t.filterNetwork);
  setHtml('.filter-btn[data-filter="design"]', '<i class="fas fa-pen-nib"></i> ' + t.filterDesign);

  setText("#contact .section-header h2", t.referencesTitle);
  setText("#contact .section-header p", t.referencesSubtitle);
  setHtml("#contact .contact-form-wrapper h3", '<i class="fas fa-address-book"></i> ' + t.professionalReferences);
  setHtml("#contact .contact-info-wrapper h3", '<i class="fas fa-address-card"></i> ' + t.contactInformation);
  setHtml(
    "#contact .reference-card:nth-child(1) .reference-note",
    '<i class="fas fa-info-circle"></i> ' + t.referenceNote1
  );
  setHtml(
    "#contact .reference-card:nth-child(2) .reference-note",
    '<i class="fas fa-info-circle"></i> ' + t.referenceNote2
  );
  setHtml(
    "#contact .reference-card:nth-child(3) .reference-note",
    '<i class="fas fa-info-circle"></i> ' + t.referenceNote3
  );
  setText("#contact .contact-info-card:nth-child(1) h4", t.contactEmail);

  const footer = document.querySelector("footer p");
  const yearEl = document.getElementById("copyrightYear");
  const yearText = yearEl ? yearEl.textContent : "2025";
  if (footer) {
    footer.innerHTML = `&copy; <span id="copyrightYear">${yearText}</span> Arif Azinuddin. ${t.footerRights}`;
  }

  const langToggle = document.getElementById("langToggle");
  if (langToggle) {
    langToggle.textContent = currentLanguage.toUpperCase();
    langToggle.setAttribute(
      "aria-label",
      currentLanguage === "bm" ? "Tukar ke English" : "Switch to Bahasa Melayu"
    );
    langToggle.title = currentLanguage === "bm" ? "Switch to English" : "Tukar ke Bahasa Melayu";
  }

  restartTaglineAnimation();
  renderProjects(currentFilter);
}

function renderProjects(filter = "all") {
  const projectsGrid = document.getElementById("projectsGrid");
  projectsGrid.innerHTML = "";

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  filteredProjects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";
    projectCard.onclick = () => openProjectModal(project.id);

    const thumbnailHtml =
      project.screenshots.length > 0
        ? `<img src="${project.screenshots[0]}" alt="${project.title}" class="project-thumbnail">`
        : `<div class="project-thumbnail project-thumbnail--empty" aria-hidden="true"><i class="fas ${project.icon}"></i></div>`;
    projectCard.innerHTML = `
            <div class="project-header">
                <i class="fas ${project.icon}"></i>
                <h3>${project.title}</h3>
            </div>
            <div class="project-body">
                ${thumbnailHtml}
                <p>${project.description.substring(0, 120)}...</p>
                <div class="project-date">
                    <i class="far fa-calendar"></i>
                    <span>${project.date}</span>
                </div>
                <div class="project-type">
                    <i class="fas fa-tag"></i>
                    <span>${translateProjectType(project.type)}</span>
                </div>
            </div>
        `;

    projectsGrid.appendChild(projectCard);
  });
}

// ========== PROJECT FILTERS ==========
const filterBtns = document.querySelectorAll(".filter-btn");
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");
    currentFilter = filter;
    renderProjects(filter);
  });
});

// ========== PROJECT MODAL ==========
function openProjectModal(projectId) {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return;

  document.getElementById("modalTitle").textContent = project.title;
  document.getElementById(
    "modalDate"
  ).innerHTML = `<i class="far fa-calendar"></i> ${project.date}`;
  document.getElementById(
    "modalType"
  ).innerHTML = `<i class="fas fa-tag"></i> ${translateProjectType(project.type)}`;
  document.getElementById("modalDescription").textContent = project.description;

  const linksContainer = document.getElementById("modalLinks");
  linksContainer.innerHTML = "";
  if (project.documents && project.documents.length > 0) {
    project.documents.forEach((doc) => {
      const a = document.createElement("a");
      a.href = doc.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.className = "modal-btn";
      a.innerHTML = `<i class="fas ${doc.icon}"></i> ${translateDocumentLabel(doc.label)}`;
      linksContainer.appendChild(a);
    });
  }
  if (project.liveUrl) {
    const liveLink = document.createElement("a");
    liveLink.href = project.liveUrl;
    liveLink.target = "_blank";
    liveLink.rel = "noopener noreferrer";
    liveLink.className = "modal-btn modal-btn-live";
    liveLink.innerHTML = `<i class="fas fa-external-link-alt"></i> ${getUIText("liveView")}`;
    linksContainer.appendChild(liveLink);
  }
  if (project.github && project.github !== "#") {
    const githubLink = document.createElement("a");
    githubLink.href = project.github;
    githubLink.target = "_blank";
    githubLink.rel = "noopener noreferrer";
    githubLink.className = "modal-btn";
    githubLink.innerHTML = `<i class="fab fa-github"></i> ${getUIText("viewOnGithub")}`;
    linksContainer.appendChild(githubLink);
  }

  const screenshotsDiv = document.getElementById("modalScreenshots");
  screenshotsDiv.innerHTML = "";
  screenshotsDiv.style.display = project.screenshots.length > 0 ? "" : "none";
  project.screenshots.forEach((screenshot) => {
    const img = document.createElement("img");
    img.src = screenshot;
    img.alt = project.title;
    screenshotsDiv.appendChild(img);
  });

  const techDiv = document.getElementById("modalTech");
  techDiv.innerHTML = "";
  project.tech.forEach((tech) => {
    const span = document.createElement("span");
    span.textContent = tech;
    techDiv.appendChild(span);
  });

  document.getElementById("projectModal").style.display = "block";
  document.body.style.overflow = "hidden";
}

// ========== CERTIFICATE MODAL ==========
function viewCertificate(certId) {
  const index = parseInt(certId.replace("cert", ""), 10) - 1;
  if (index < 0 || index >= certificateImages.length) return;
  const certImage = certificateImages[index];
  const imgEl = document.getElementById("certFullImage");
  const modalEl = document.getElementById("certificateModal");
  if (!imgEl || !modalEl) return;
  imgEl.src = certImage;
  imgEl.alt = "Certificate";
  modalEl.style.display = "block";
  document.body.style.overflow = "hidden";
}

function viewCertificateByPath(imageSrc) {
  document.getElementById("certFullImage").src = imageSrc;
  document.getElementById("certFullImage").alt = "Certificate";
  document.getElementById("certificateModal").style.display = "block";
  document.body.style.overflow = "hidden";
}

// ========== RHB PHOTO GALLERY ==========
const rhbGalleries = {
  "rhb-mentor": {
    title: "RHB X-CEL Star Mentoring Programme FY2023: Midpoint Check-in",
    images: [
      "assets/images/rhb/mentor/IMG-20230722-WA0020.jpg",
      "assets/images/rhb/mentor/IMG_20230721_112440.jpg",
      "assets/images/rhb/mentor/IMG-20230722-WA0021.jpg",
      "assets/images/rhb/mentor/IMG-20230722-WA0025.jpg",
      "assets/images/rhb/mentor/IMG_20230721_133445.jpg",
    ],
  },
  "rhb-award": {
    title: "Majlis Anugerah Biasiswa RHB X-Cel Star",
    images: [
      "assets/images/rhb/award/KAL_9318.JPG",
      "assets/images/rhb/award/KAL_9413.JPG",
      "assets/images/rhb/award/KAL_9321.JPG",
      "assets/images/rhb/award/IMG_20230222_152104.jpg",
      "assets/images/rhb/award/IMG_20230222_164618.jpg",
    ],
  },
  "rhb-english": {
    title: "RHB X-Cel Star English Communications & Confidence Training",
    images: [
      "assets/images/rhb/english-training/DIN_6356.JPG",
      "assets/images/rhb/english-training/DIN_6054.JPG",
      "assets/images/rhb/english-training/DIN_6153.JPG",
      "assets/images/rhb/english-training/DIN_6163.JPG",
      "assets/images/rhb/english-training/DIN_6258.JPG",
      "assets/images/rhb/english-training/DIN_6337.JPG",
      "assets/images/rhb/english-training/selfi.jpg",
    ],
  },
};

function openRHBGallery(galleryId) {
  const gallery = rhbGalleries[galleryId];
  if (!gallery) return;
  document.getElementById("galleryModalTitle").textContent = gallery.title;
  const grid = document.getElementById("galleryGrid");
  grid.innerHTML = "";
  gallery.images.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = gallery.title;
    img.loading = "lazy";
    grid.appendChild(img);
  });
  document.getElementById("galleryModal").style.display = "block";
  document.body.style.overflow = "hidden";
}

// ========== CLOSE MODALS ==========
document.querySelectorAll(".modal-close").forEach((closeBtn) => {
  closeBtn.onclick = function () {
    document.querySelectorAll(".modal").forEach((modal) => {
      modal.style.display = "none";
    });
    document.body.style.overflow = "auto";
  };
});

window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
    document.body.style.overflow = "auto";
  }
};

// ========== THEME TOGGLE ==========
const themeToggle = document.getElementById("themeToggle");
const langToggle = document.getElementById("langToggle");
const body = document.body;
const themeIcon = themeToggle.querySelector("i");

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark-mode");
  themeIcon.classList.replace("fa-moon", "fa-sun");
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDark = body.classList.contains("dark-mode");

  themeIcon.style.transform = "rotate(360deg)";
  setTimeout(() => {
    themeIcon.classList.replace(
      isDark ? "fa-moon" : "fa-sun",
      isDark ? "fa-sun" : "fa-moon"
    );
    themeIcon.style.transform = "rotate(0deg)";
  }, 150);

  localStorage.setItem("theme", isDark ? "dark" : "light");
});

if (langToggle) {
  langToggle.addEventListener("click", () => {
    const nextLanguage = currentLanguage === "bm" ? "en" : "bm";
    applyLanguage(nextLanguage);
  });
}

// ========== MOBILE MENU ==========
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const menuIcon = menuToggle.querySelector("i");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-times");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuIcon.classList.add("fa-bars");
    menuIcon.classList.remove("fa-times");
  });
});

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    if (href !== "#" && href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);

      if (target) {
        const offsetTop = target.offsetTop - 70;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
  });
});

// ========== SCROLL ANIMATIONS (mobile-friendly IntersectionObserver) ==========
const fadeElements = document.querySelectorAll(".fade-in");

// Generous options so sections (especially Projects) reliably appear on scroll on mobile:
// - threshold 0: trigger as soon as any pixel is visible
// - rootMargin: expand bottom so we trigger earlier (e.g. 80px before element enters viewport)
const observerOptions = {
  threshold: 0,
  rootMargin: "0px 0px 80px 0px",
  root: null,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

function observeFadeElements() {
  fadeElements.forEach((element) => {
    observer.observe(element);
  });
}

// Fallback: if a fade-in is already in view on load/resize (e.g. short viewport), make it visible.
// Fixes Projects not appearing when observer fires before layout is stable on mobile.
function revealVisibleFadeElements() {
  const vh = window.innerHeight;
  fadeElements.forEach((el) => {
    if (el.classList.contains("visible")) return;
    const rect = el.getBoundingClientRect();
    const top = rect.top;
    const bottom = rect.bottom;
    if (top < vh * 0.9 && bottom > vh * 0.1) {
      el.classList.add("visible");
    }
  });
}

observeFadeElements();
// Run after layout (e.g. after projects grid is rendered) so #projects has correct height
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    requestAnimationFrame(() => {
      revealVisibleFadeElements();
      setTimeout(revealVisibleFadeElements, 100);
    });
  });
} else {
  requestAnimationFrame(() => {
    revealVisibleFadeElements();
    setTimeout(revealVisibleFadeElements, 100);
  });
}
window.addEventListener("resize", () => {
  requestAnimationFrame(revealVisibleFadeElements);
});

// ========== SCROLL TO TOP ==========
const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener(
  "scroll",
  () => {
    if (window.pageYOffset > 300) {
      scrollTopBtn.classList.add("visible");
    } else {
      scrollTopBtn.classList.remove("visible");
    }
  },
  { passive: true }
);

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ========== ACTIVE NAV LINK ==========
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener(
  "scroll",
  () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.pageYOffset >= sectionTop - 100) {
        current = section.getAttribute("id");
      }
    });
    navItems.forEach((item) => {
      item.classList.remove("active");
      if (item.getAttribute("href") === `#${current}`) {
        item.classList.add("active");
      }
    });
  },
  { passive: true }
);

// ========== MULTI-TEXT TYPING ANIMATION ==========
const tagline = document.querySelector(".tagline");
function restartTaglineAnimation() {
  if (!tagline) return;

  const runId = ++taglineRunId;
  const texts = i18n[currentLanguage].taglines;
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let isPaused = false;

  tagline.textContent = "";

  function typeWriter() {
    if (runId !== taglineRunId) return;
    const currentText = texts[textIndex];

    if (isPaused) {
      setTimeout(typeWriter, 2000);
      isPaused = false;
      return;
    }

    if (!isDeleting && charIndex < currentText.length) {
      tagline.textContent += currentText.charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, 100);
    } else if (isDeleting && charIndex > 0) {
      tagline.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typeWriter, 50);
    } else if (!isDeleting && charIndex === currentText.length) {
      isPaused = true;
      isDeleting = true;
      setTimeout(typeWriter, 2000);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(typeWriter, 500);
    }
  }

  setTimeout(typeWriter, 600);
}

// ========== TABS ==========
const tabBtns = document.querySelectorAll(".tab-btn");
const tabPanes = document.querySelectorAll(".tab-pane");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetTab = btn.getAttribute("data-tab");

    tabBtns.forEach((b) => b.classList.remove("active"));
    tabPanes.forEach((pane) => pane.classList.remove("active"));

    btn.classList.add("active");
    document.getElementById(targetTab).classList.add("active");
  });
});

// ========== ANIMATED COUNTER ==========
const animateCounter = (element, start, end, duration) => {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const value = Math.floor(progress * (end - start) + start);

    if (end > 5) {
      element.textContent = value + "+";
    } else {
      element.textContent = value.toFixed(2);
    }

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};

const statCards = document.querySelectorAll(".stat-card h3");
const statObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const targetCount = parseFloat(entry.target.getAttribute("data-count"));
        if (!isNaN(targetCount)) {
          animateCounter(entry.target, 0, targetCount, 2000);
          statObserver.unobserve(entry.target);
        }
      }
    });
  },
  { threshold: 0.5 }
);

statCards.forEach((card) => {
  statObserver.observe(card);
});

// ========== CONTACT FORM WITH EMAILJS ==========
// (Form removed – section is now References; keep listener only if form exists)
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const submitBtn = contactForm.querySelector(".btn-submit");
    const originalBtnText = submitBtn ? submitBtn.innerHTML : "";
    if (submitBtn) {
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      submitBtn.disabled = true;
    }

    const templateParams = {
      from_name: document.getElementById("name")?.value || "",
      from_email: document.getElementById("email")?.value || "",
      subject: document.getElementById("subject")?.value || "",
      message: document.getElementById("message")?.value || "",
      to_name: "Tuan Khalidah Syazwana",
    };

    emailjs
      .send("service_kv1i1mi", "template_sqkolz9", templateParams)
      .then(function (response) {
        formStatus.textContent = "✓ Message sent successfully!";
        formStatus.className = "form-status success";
        contactForm.reset();
        setTimeout(() => (formStatus.style.display = "none"), 5000);
      })
      .catch(function (error) {
        formStatus.textContent = "✗ Failed to send message. Please try again.";
        formStatus.className = "form-status error";
        console.error("EmailJS Error:", error);
        setTimeout(() => (formStatus.style.display = "none"), 5000);
      })
      .finally(() => {
        if (submitBtn) {
          submitBtn.innerHTML = originalBtnText;
          submitBtn.disabled = false;
        }
      });
  });
}

// ========== PARTICLES BACKGROUND (reduced on mobile for performance) ==========
function createParticles() {
  const particlesContainer = document.getElementById("particles");
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const particleCount = isMobile ? 12 : 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.style.position = "absolute";
    particle.style.width = Math.random() * 3 + 1 + "px";
    particle.style.height = particle.style.width;
    particle.style.background = "var(--primary)";
    particle.style.borderRadius = "50%";
    particle.style.opacity = Math.random() * 0.25 + 0.05;
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    if (!isMobile) {
      particle.style.animation = `floatParticle ${
        Math.random() * 10 + 10
      }s linear infinite`;
    }
    particlesContainer.appendChild(particle);
  }
}

// ========== CLOSE MENU ON OUTSIDE CLICK ==========
document.addEventListener("click", (e) => {
  if (navLinks.classList.contains("active")) {
    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
      navLinks.classList.remove("active");
      menuIcon.classList.add("fa-bars");
      menuIcon.classList.remove("fa-times");
    }
  }
});

// ========== ESC KEY HANDLER ==========
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
      menuIcon.classList.add("fa-bars");
      menuIcon.classList.remove("fa-times");
    }
    document.querySelectorAll(".modal").forEach((modal) => {
      modal.style.display = "none";
    });
    document.body.style.overflow = "auto";
  }
});

// ========== FOOTER COPYRIGHT YEAR ==========
function updateCopyrightYear() {
  const copyrightEl = document.getElementById("copyrightYear");
  if (copyrightEl) {
    const year = new Date().getFullYear();
    copyrightEl.textContent = year === 2025 ? "2025" : `2025 - ${year}`;
  }
}

// ========== APPLE CUSTOM CURSOR ==========
function initAppleCursor() {
  if (!document.body.classList.contains("apple-orientation")) return;

  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!finePointer) return;

  const cursor = document.getElementById("appleCursor");
  if (!cursor) return;

  const interactiveSelector = [
    "a",
    "button",
    "input",
    "textarea",
    "select",
    "[role='button']",
    ".btn-primary",
    ".btn-secondary",
    ".icon-btn",
    ".tab-btn",
    ".filter-btn",
    ".social-btn",
    ".project-card",
    ".skill-card",
    ".certificate-card",
    ".reference-card",
    ".scroll-top",
    ".modal-close",
  ].join(",");

  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;
  let targetX = x;
  let targetY = y;

  function animateCursor() {
    x += (targetX - x) * 0.24;
    y += (targetY - y) * 0.24;
    cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    requestAnimationFrame(animateCursor);
  }

  document.addEventListener(
    "pointermove",
    (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      cursor.classList.add("visible");
    },
    { passive: true }
  );

  document.addEventListener("pointerdown", () => {
    cursor.classList.add("pressed");
  });

  document.addEventListener("pointerup", () => {
    cursor.classList.remove("pressed");
  });

  document.addEventListener("pointerover", (e) => {
    const isInteractive = !!e.target.closest(interactiveSelector);
    cursor.classList.toggle("hover", isInteractive);
  });

  document.addEventListener("pointerleave", () => {
    cursor.classList.remove("visible", "hover", "pressed");
  });

  window.addEventListener("blur", () => {
    cursor.classList.remove("visible", "hover", "pressed");
  });

  requestAnimationFrame(animateCursor);
}

// ========== INITIALIZE ==========
function initPortfolio() {
  updateCopyrightYear();
  applyLanguage(currentLanguage);
  createParticles();
  initAppleCursor();
  const projectsSection = document.getElementById("projects");
  if (projectsSection && projectsSection.classList.contains("fade-in")) {
    observer.observe(projectsSection);
  }
  requestAnimationFrame(revealVisibleFadeElements);
  setTimeout(revealVisibleFadeElements, 150);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPortfolio);
} else {
  initPortfolio();
}

// ========== CONSOLE SIGNATURE ==========
console.log(
  "%c👋 Hello there!",
  "font-size: 20px; font-weight: bold; color: #6366f1;"
);
console.log(
  "%cThanks for checking out my portfolio!",
  "font-size: 14px; color: #ec4899;"
);
console.log(
  "%cFeel free to reach out if you'd like to collaborate!",
  "font-size: 12px; color: #64748b;"
);
