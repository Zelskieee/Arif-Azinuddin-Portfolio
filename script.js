// ========== PROJECTS DATA ==========
// Ordered newest to oldest
const projects = [
  {
    id: 1,
    title: "MyAduan Johor",
    type: "Web System & Mobile Application",
    category: "project",
    icon: "fa-solid fa-gavel fa-bounce",
    logo: "assets/img/project/maj.png",
    date: "2025 - 2026",
    description: "System Analyst, Project Coordinator, and System Tester",
    screenshots: [],
    tech: ["Project Coordination", "System Testing", "Requirement Analysis"],
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: 2,
    title: "Senai Airport AODS Phase 2",
    type: "Web System",
    category: "project",
    icon: "fa-solid fa-plane fa-bounce",
    logo: "assets/img/project/senai.jpg",
    date: "2024 - 2025",
    description: "System Analyst, Project Coordinator, and System Tester",
    screenshots: [],
    tech: ["System Analysis", "UAT", "Documentation"],
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: 3,
    title: "Didi & Friends Playtown",
    type: "Mobile Game",
    category: "project",
    icon: "fa-solid fa-gamepad fa-bounce",
    logo: "assets/img/project/didiplay.png",
    date: "2024",
    description: "Game Tester",
    screenshots: [],
    tech: ["Game Testing", "Bug Reporting", "QA"],
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: 4,
    title: "Didi & Friends Classroom",
    type: "Mobile Game",
    category: "project",
    icon: "fa-solid fa-gamepad fa-bounce",
    logo: "assets/img/project/didiclass.jpg",
    date: "2024",
    description: "Game Tester",
    screenshots: [],
    tech: ["Test Scenario", "Regression Testing", "Mobile QA"],
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: 5,
    title: "Johor Calisthenics Community",
    type: "Website",
    category: "project",
    icon: "fa-solid fa-dumbbell fa-bounce",
    logo: "assets/img/project/jcc.png",
    date: "2025",
    description: "Project Coordinator",
    screenshots: [],
    tech: ["Project Coordination", "Client Communication", "Website Planning"],
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: 6,
    title: "Native Discovery",
    type: "Website",
    category: "project",
    icon: "fa-solid fa-dumbbell fa-bounce",
    logo: "assets/img/project/native.png",
    date: "2024",
    description: "Project Coordinator",
    screenshots: [],
    tech: ["Project Coordination", "Client Communication", "Website Planning"],
    liveUrl: "",
    githubUrl: "",
  },
    {
    id: 7,
    title: "Tech Medini",
    type: "Website",
    category: "project",
    icon: "fa-solid fa-dumbbell fa-bounce",
    logo: "assets/img/project/medini.png",
    date: "2024",
    description: "Website Tester",
    screenshots: [],
    tech: ["Project Coordination", "Client Communication", "Website Planning"],
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: 8,
    title: "Waqaf An-Nur Super App",
    type: "Web System & Mobile Application",
    category: "project",
    icon: "fa-solid fa-dumbbell fa-bounce",
    logo: "assets/img/project/waqaf.png",
    date: "2024",
    description: "System Analyst",
    screenshots: [],
    tech: ["Project Coordination", "Client Communication", "Website Planning"],
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: 9,
    title: "Sistem Kompang Johor",
    type: "Web System",
    category: "sme",
    icon: "fa-solid fa-drum fa-bounce",
    logo: "assets/img/project/hazim.png",
    date: "2026",
    description: "System Analyst, System Developer and System Tester",
    screenshots: ["assets/img/project/kompangjohor.png"],
    tech: ["Web Development", "System Testing", "Requirement Analysis"],
    liveUrl: "https://kompangjohor.com",
    githubUrl: "",
  },
];

// ========== RENDER PROJECTS ==========
let currentFilter = "project";
let currentLanguage = "en";
try {
  const savedLang = localStorage.getItem("portfolioLang");
  if (savedLang === "bm" || savedLang === "en") {
    currentLanguage = savedLang;
  }
} catch (_error) {
  currentLanguage = "en";
}
let taglineRunId = 0;

const i18n = {
  bm: {
    pageTitle: "Arif Azinuddin | Penganalisis Sistem",
    taglines: ["Penganalisis Sistem", "Pengurus Projek", "Penyelaras Projek", "Penguji Sistem", "Pembangun Sistem SME"],
    ui: {
      navHome: "Utama",
      navExperience: "Pengalaman",
      navTools: "Alat",
      navProjects: "Projek",
      navReferences: "Rujukan",
      navFightMe: "Lawan Saya",
      heroDesc:
        "Bersemangat dalam membangunkan penyelesaian digital yang praktikal dan berfokus kepada pengguna dengan pengalaman sebagai Penganalisis Sistem. Saya menghubungkan keperluan sistem dengan pelaksanaan teknikal sambil menyokong pasukan untuk merealisasikan hasil akhir sistem.",
      getInTouch: "Hubungi Saya",
      viewProjects: "Lihat Projek",
      expTitle: "Pengalaman & Pendidikan",
      expSubtitle: "Perjalanan kerjaya dan latar belakang akademik saya",
      tabWork: "Pengalaman Kerja",
      tabEducation: "Pendidikan",
      tabCertificates: "Sijil",
      toolsTitle: "Alat Teknikal",
      toolsSubtitle: "Set alatan menyeluruh untuk membina aplikasi moden",
      skillLanguages: "Bahasa Pengaturcaraan",
      skillManagement: "Pengurusan Projek",
      skillTools: "Alat & Teknologi",
      skillIdes: "IDE & Platform",
      skillSoft: "Kemahiran Insaniah",
      softCommunication: "Komunikasi",
      softTeamwork: "Kerja Berpasukan",
      softProblemSolving: "Penyelesaian Masalah",
      softLeadership: "Kepimpinan",
      softAdaptability: "Kebolehsuaian",
      projectsTitle: "Projek Pilihan",
      projectsSubtitle: "Senarai kerja saya",
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
      contactInformation: "Tandatangan Digital",
      signatureIntro: "Lukis apa sahaja, tambah nama dan mesej, kemudian eksport sebagai kenangan.",
      signatureNamePlaceholder: "Nama anda",
      signatureEmailPlaceholder: "E-mel anda (pilihan)",
      signatureMessagePlaceholder: "Tulis mesej anda di sini",
      signatureHint: "Gunakan tetikus atau sentuhan untuk melukis bebas di kanvas.",
      signatureClear: "Padam",
      signatureSend: "Eksport",
      signatureNeedInput: "Sila tulis mesej atau lukis tandatangan dahulu.",
      signatureSending: "Menghantar mesej...",
      signatureSuccess: "Terima kasih. Mesej dan tandatangan anda telah dihantar.",
      signatureError: "Tidak berjaya dihantar. Sila cuba lagi.",
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
    pageTitle: "Arif Azinuddin | System Analyst",
    taglines: ["System Analyst", "Project Manager", "Project Coordinator", "System Tester", "SME System Developer"],
    projectTypeMap: {},
    documentLabelMap: {},
    ui: {
      navHome: "Home",
      navExperience: "Experience",
      navTools: "Tools",
      navProjects: "Projects",
      navReferences: "References",
      navFightMe: "Fight Me",
      heroDesc:
        "Passionate about building practical, user-centered digital solutions with experience as a System Analyst. I bridge business needs with technical implementation while supporting teams to deliver reliable and meaningful systems.",
      getInTouch: "Get In Touch",
      viewProjects: "View Projects",
      expTitle: "Experience & Education",
      expSubtitle: "My career journey and academic background",
      tabWork: "Work Experience",
      tabEducation: "Education",
      tabCertificates: "Certificates",
      toolsTitle: "Technical Tools",
      toolsSubtitle: "A comprehensive toolkit for building modern applications",
      skillLanguages: "Languages",
      skillManagement: "Project Management",
      skillTools: "Tools & Technologies",
      skillIdes: "Integrated Development Environment",
      skillSoft: "Soft Skills",
      softCommunication: "Communication",
      softTeamwork: "Teamwork",
      softProblemSolving: "Problem-Solving",
      softLeadership: "Leadership",
      softAdaptability: "Adaptability",
      projectsTitle: "Featured Projects",
      projectsSubtitle: "A list of my recent work",
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
      contactInformation: "Drawing Space",
      signatureIntro: "Draw anything, add your name and message, then export it as a keepsake.",
      signatureNamePlaceholder: "Your name",
      signatureEmailPlaceholder: "Your email (optional)",
      signatureMessagePlaceholder: "Write your message here",
      signatureHint: "Use mouse or touch to draw freely on the canvas.",
      signatureClear: "Clear",
      signatureSend: "Export",
      signatureNeedInput: "Please write a message or draw a signature first.",
      signatureSending: "Sending message...",
      signatureSuccess: "Thanks. Your message and signature were sent.",
      signatureError: "Failed to send. Please try again.",
      referenceNote1: "Academic Advisor",
      referenceNote2: "FYP Supervisor",
      referenceNote3: "Faculty Supervisor During Internship",
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
  return i18n.bm.projectTypeMap?.[type] || type;
}

function translateDocumentLabel(label) {
  if (currentLanguage === "en") return label;
  return i18n.bm.documentLabelMap?.[label] || label;
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
  try {
    localStorage.setItem("portfolioLang", currentLanguage);
  } catch (_error) {
    // Ignore storage write failures (e.g., privacy mode); UI still updates.
  }

  setText('.nav-links a[href="#home"]', t.navHome);
  setText('.nav-links a[href="#experience"]', t.navExperience);
  setText('.nav-links a[href="#tools"]', t.navTools);
  setText('.nav-links a[href="#projects"]', t.navProjects);
  setText('.nav-links a[href="#contact"]', t.navReferences);
  setHtml("#openTicTacToe", '<i class="fas fa-gamepad"></i> ' + t.navFightMe);

  setText(".hero-description", t.heroDesc);
  setHtml(".hero-buttons .btn-primary", '<i class="fas fa-envelope"></i> ' + t.getInTouch);
  setHtml(".hero-buttons .btn-secondary", '<i class="fas fa-briefcase"></i> ' + t.viewProjects);

  setText("#experience .section-header h2", t.expTitle);
  setText("#experience .section-header p", t.expSubtitle);

  setText("#tools .section-header h2", t.toolsTitle);
  setText("#tools .section-header p", t.toolsSubtitle);
  setText("#tools .skill-card:nth-child(1) h3", t.skillManagement);
  setText("#tools .skill-card:nth-child(2) h3", t.skillTools);
  setText("#tools .skill-card:nth-child(3) h3", t.skillLanguages);
  setText("#tools .skill-card:nth-child(4) h3", t.skillIdes);
  setText("#tools .skill-card:nth-child(5) h3", t.skillSoft);
  setText("#tools .skill-card:nth-child(5) .skill-tag:nth-child(1)", t.softProblemSolving);

  setText("#contact .section-header h2", t.referencesTitle);
  setText("#contact .section-header p", t.referencesSubtitle);
  setHtml("#contact .contact-form-wrapper h3", '<i class="fas fa-address-book"></i> ' + t.professionalReferences);
  setHtml("#contact .contact-info-wrapper h3", '<i class="fas fa-signature"></i> ' + t.contactInformation);
  setText("#signatureIntro", t.signatureIntro);
  setText("#signatureHint", t.signatureHint);
  setHtml("#clearSignature", '<i class="fas fa-eraser"></i> ' + t.signatureClear);
  setHtml(
    "#signatureExportImage",
    `<i class="fas fa-image"></i> ${currentLanguage === "bm" ? "Eksport PNG" : "Export PNG"}`
  );
  setHtml(
    "#signatureExportPdf",
    `<i class="fas fa-file-pdf"></i> ${currentLanguage === "bm" ? "Eksport PDF" : "Export PDF"}`
  );
  const signatureNameInput = document.getElementById("signatureName");
  if (signatureNameInput) signatureNameInput.placeholder = t.signatureNamePlaceholder;
  const signatureMessageInput = document.getElementById("signatureMessage");
  if (signatureMessageInput) signatureMessageInput.placeholder = t.signatureMessagePlaceholder;
  setHtml(
    "#referenceNoteAcademic1",
    '<i class="fas fa-info-circle"></i> ' + t.referenceNote1
  );
  setHtml(
    "#referenceNoteAcademic2",
    '<i class="fas fa-info-circle"></i> ' + t.referenceNote2
  );
  setHtml(
    "#referenceNoteAcademic3",
    '<i class="fas fa-info-circle"></i> ' + t.referenceNote3
  );
  setText("#contact .contact-info-card:nth-child(1) h4", t.contactEmail);

  const footer = document.querySelector("footer p");
  const yearEl = document.getElementById("copyrightYear");
  const yearText = yearEl ? yearEl.textContent : "2025";
  if (footer) {
    footer.innerHTML = `<span id="copyrightYear">${yearText}</span> Arif Azinuddin. ${t.footerRights}`;
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

const langToggleBtn = document.getElementById("langToggle");
if (langToggleBtn) {
  langToggleBtn.addEventListener("click", () => {
    applyLanguage(currentLanguage === "bm" ? "en" : "bm");
  });
}

function renderProjects(filter = "all") {
  const projectsGrid = document.getElementById("projectsGrid");
  projectsGrid.innerHTML = "";

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  filteredProjects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";

    const thumbnailHtml =
      Array.isArray(project.screenshots) && project.screenshots.length > 0
        ? `<img src="${project.screenshots[0]}" alt="${project.title}" class="project-thumbnail">`
        : "";
    const headerLogoHtml = project.logo
      ? `<img src="${project.logo}" alt="${project.title} logo" class="project-header-logo">`
      : "";
    const shortDescription =
      project.description.length > 120
        ? `${project.description.substring(0, 120)}...`
        : project.description;
    const isSmeProject = project.category === "sme";
    const hasSmeLink = isSmeProject && !!project.liveUrl;
    const titleHtml = hasSmeLink
      ? `<h3><a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-title-link">${project.title}</a></h3>`
      : `<h3>${project.title}</h3>`;
    const smeLinkHtml = hasSmeLink
      ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-sme-link"><i class="fas fa-up-right-from-square"></i> ${getUIText("liveView")}</a>`
      : "";

    projectCard.innerHTML = `
            <div class="project-header">
                ${headerLogoHtml}
                ${titleHtml}
            </div>
            <div class="project-body">
                ${thumbnailHtml}
                <p>${shortDescription}</p>
                <div class="project-date">
                    <i class="fa-solid fa-route"></i>
                    <span>${project.date}</span>
                </div>
                <div class="project-type">
                    <i class="fa-solid fa-computer"></i>
                    <span>${translateProjectType(project.type)}</span>
                </div>
                ${smeLinkHtml}
            </div>
        `;

    projectsGrid.appendChild(projectCard);
  });
}

function openProjectModal(projectId) {
  const project = projects.find((item) => item.id === projectId);
  if (!project) return;

  const projectModal = document.getElementById("projectModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDate = document.getElementById("modalDate");
  const modalType = document.getElementById("modalType");
  const modalScreenshots = document.getElementById("modalScreenshots");
  const modalDescription = document.getElementById("modalDescription");
  const modalTech = document.getElementById("modalTech");
  const modalLinks = document.getElementById("modalLinks");
  if (
    !projectModal ||
    !modalTitle ||
    !modalDate ||
    !modalType ||
    !modalScreenshots ||
    !modalDescription ||
    !modalTech ||
    !modalLinks
  ) {
    return;
  }

  modalTitle.textContent = project.title;
  modalDate.innerHTML = `<i class="fa-solid fa-route"></i> ${project.date || "-"}`;
  modalType.innerHTML = `<i class="fa-solid fa-computer"></i> ${translateProjectType(project.type || "-")}`;
  modalDescription.textContent = project.description || "";

  if (Array.isArray(project.screenshots) && project.screenshots.length > 0) {
    modalScreenshots.innerHTML = project.screenshots
      .map((src) => `<img src="${src}" alt="${project.title}" class="modal-screenshot">`)
      .join("");
  } else {
    modalScreenshots.innerHTML = `<div class="project-thumbnail project-thumbnail--empty" aria-hidden="true"><i class="fas ${project.icon}"></i></div>`;
  }

  if (Array.isArray(project.tech) && project.tech.length > 0) {
    modalTech.innerHTML = project.tech
      .map((item) => `<span class="skill-tag">${item}</span>`)
      .join("");
  } else {
    modalTech.innerHTML = "";
  }

  const links = [];
  if (project.liveUrl) {
    links.push(
      `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="modal-btn"><i class="fas fa-up-right-from-square"></i> ${getUIText("liveView")}</a>`
    );
  }
  if (project.githubUrl) {
    links.push(
      `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="modal-btn"><i class="fab fa-github"></i> ${getUIText("viewOnGithub")}</a>`
    );
  }
  modalLinks.innerHTML = links.join("");

  projectModal.style.display = "block";
  document.body.style.overflow = "hidden";
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

// ========== FIGHT ME GAMES ==========
const tictactoeOpenBtn = document.getElementById("openTicTacToe");
const tictactoeModal = document.getElementById("ticTacToeModal");
const fightMeTitleEl = document.getElementById("fightMeTitle");
const fightMePrevBtn = document.getElementById("fightMePrevGame");
const fightMeNextBtn = document.getElementById("fightMeNextGame");
const gamePanelTicTacToe = document.getElementById("gamePanelTicTacToe");
const gamePanelFleabag = document.getElementById("gamePanelFleabag");
const gamePanelDamHaji = document.getElementById("gamePanelDamHaji");

const tictactoeBoardEl = document.getElementById("tictactoeBoard");
const tictactoeStatusEl = document.getElementById("tictactoeStatus");
const tictactoeRestartBtn = document.getElementById("tictactoeRestart");
const tictactoeWinLineEl = document.getElementById("tictactoeWinLine");
const tttUserScoreEl = document.getElementById("tttUserScore");
const tttBotScoreEl = document.getElementById("tttBotScore");

const fleabagCanvas = document.getElementById("fleabagCanvas");
const fleabagStatusEl = document.getElementById("fleabagStatus");
const fleabagWindIndicatorEl = document.getElementById("fleabagWindIndicator");
const fleabagFleabagHpEl = document.getElementById("fleabagFleabagHp");
const fleabagMuttHpEl = document.getElementById("fleabagMuttHp");
const fleabagFleabagHpBarEl = document.getElementById("fleabagFleabagHpBar");
const fleabagMuttHpBarEl = document.getElementById("fleabagMuttHpBar");
const fleabagChargeFillEl = document.getElementById("fleabagChargeFill");
const fleabagThrowHintEl = document.getElementById("fleabagThrowHint");
const fleabagFinishFlagEl = document.getElementById("fleabagFinishFlag");
const fleabagBotUsageEl = document.getElementById("fleabagBotUsage");
const fleabagThrowBtn = document.getElementById("fleabagThrowBtn");
const fleabagRestartBtn = document.getElementById("fleabagRestart");
const fleabagPowerOptions = document.getElementById("fleabagPowerOptions");
const fleabagUserScoreEl = document.getElementById("fleabagUserScore");
const fleabagBotScoreEl = document.getElementById("fleabagBotScore");
const damhajiBoardEl = document.getElementById("damhajiBoard");
const damhajiStatusEl = document.getElementById("damhajiStatus");
const damhajiRestartBtn = document.getElementById("damhajiRestart");
const damhajiUserScoreEl = document.getElementById("damhajiUserScore");
const damhajiBotScoreEl = document.getElementById("damhajiBotScore");

const fightMeGames = [
  {
    id: "tictactoe",
    titleHtml: '<i class="fas fa-robot"></i> Tic Tac Toe vs Arif Azinuddin',
    panelEl: gamePanelTicTacToe,
  },
  {
    id: "fleabag",
    titleHtml: '<i class="fas fa-dog"></i> Fleabag vs Arif Azinuddin (Mutt)',
    panelEl: gamePanelFleabag,
  },
  {
    id: "damhaji",
    titleHtml: '<i class="fas fa-chess-board"></i> Dam Haji vs Arif Azinuddin',
    panelEl: gamePanelDamHaji,
  },
];

let activeFightMeGameIndex = 0;
let tttUserScore = 0;
let tttBotScore = 0;
let fleabagUserScore = 0;
let fleabagBotScore = 0;
let damhajiUserScore = 0;
let damhajiBotScore = 0;

function tttUpdateScoreboard() {
  if (tttUserScoreEl) tttUserScoreEl.textContent = String(tttUserScore);
  if (tttBotScoreEl) tttBotScoreEl.textContent = String(tttBotScore);
}

function fleabagUpdateScoreboard() {
  if (fleabagUserScoreEl) fleabagUserScoreEl.textContent = String(fleabagUserScore);
  if (fleabagBotScoreEl) fleabagBotScoreEl.textContent = String(fleabagBotScore);
}

function setFightMeActiveGame(index) {
  if (!fightMeGames.length) return;
  activeFightMeGameIndex = ((index % fightMeGames.length) + fightMeGames.length) % fightMeGames.length;

  fightMeGames.forEach((game, idx) => {
    if (!game.panelEl) return;
    game.panelEl.classList.toggle("is-hidden", idx !== activeFightMeGameIndex);
  });

  const activeGame = fightMeGames[activeFightMeGameIndex];
  if (fightMeTitleEl) fightMeTitleEl.innerHTML = activeGame.titleHtml;
}

function goToNextFightMeGame() {
  setFightMeActiveGame(activeFightMeGameIndex + 1);
}

function goToPrevFightMeGame() {
  setFightMeActiveGame(activeFightMeGameIndex - 1);
}

const tttHuman = "X";
const tttBot = "O";
const tttWinLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let tttBoard = Array(9).fill("");
let tttGameOver = false;
let tttBotThinking = false;

function tttSetStatus(text) {
  if (tictactoeStatusEl) tictactoeStatusEl.textContent = text;
}

function tttRenderBoard() {
  if (!tictactoeBoardEl) return;
  const cells = tictactoeBoardEl.querySelectorAll(".tictactoe-cell");
  cells.forEach((cell, idx) => {
    const value = tttBoard[idx];
    cell.textContent = value;
    cell.disabled = !!value || tttGameOver || tttBotThinking;
    cell.classList.toggle("is-human", value === tttHuman);
    cell.classList.toggle("is-bot", value === tttBot);
  });
}

function tttGetWinningLine(board, symbol) {
  return tttWinLines.find((line) => line.every((idx) => board[idx] === symbol)) || null;
}

function tttGetGameState(board) {
  if (tttGetWinningLine(board, tttBot)) return "bot";
  if (tttGetWinningLine(board, tttHuman)) return "human";
  if (!board.includes("")) return "draw";
  return "ongoing";
}

function tttDrawWinLine(winLine) {
  if (!tictactoeBoardEl || !tictactoeWinLineEl || !winLine) return;

  const cells = [...tictactoeBoardEl.querySelectorAll(".tictactoe-cell")];
  const firstCell = cells[winLine[0]];
  const lastCell = cells[winLine[2]];
  if (!firstCell || !lastCell) return;

  const boardRect = tictactoeBoardEl.getBoundingClientRect();
  const firstRect = firstCell.getBoundingClientRect();
  const lastRect = lastCell.getBoundingClientRect();

  const x1 = firstRect.left - boardRect.left + firstRect.width / 2;
  const y1 = firstRect.top - boardRect.top + firstRect.height / 2;
  const x2 = lastRect.left - boardRect.left + lastRect.width / 2;
  const y2 = lastRect.top - boardRect.top + lastRect.height / 2;

  const dx = x2 - x1;
  const dy = y2 - y1;
  const distance = Math.hypot(dx, dy);
  const angle = (Math.atan2(dy, dx) * 180) / Math.PI;

  tictactoeWinLineEl.style.left = `${x1}px`;
  tictactoeWinLineEl.style.top = `${y1}px`;
  tictactoeWinLineEl.style.transform = `rotate(${angle}deg)`;
  tictactoeWinLineEl.style.width = `${distance}px`;
  tictactoeWinLineEl.classList.add("visible");
}

function tttHideWinLine() {
  if (!tictactoeWinLineEl) return;
  tictactoeWinLineEl.classList.remove("visible");
  tictactoeWinLineEl.style.width = "0";
}

function tttGetAvailableMoves(board) {
  const moves = [];
  for (let i = 0; i < board.length; i++) {
    if (board[i] === "") moves.push(i);
  }
  return moves;
}

function tttMinimax(board, isBotTurn) {
  const state = tttGetGameState(board);
  if (state === "bot") return { score: 10 };
  if (state === "human") return { score: -10 };
  if (state === "draw") return { score: 0 };

  const moves = tttGetAvailableMoves(board);
  let bestMove = -1;
  let bestScore = isBotTurn ? -Infinity : Infinity;

  for (const move of moves) {
    board[move] = isBotTurn ? tttBot : tttHuman;
    const result = tttMinimax(board, !isBotTurn);
    board[move] = "";

    if (isBotTurn) {
      if (result.score > bestScore) {
        bestScore = result.score;
        bestMove = move;
      }
    } else if (result.score < bestScore) {
      bestScore = result.score;
      bestMove = move;
    }
  }

  return { move: bestMove, score: bestScore };
}

function tttFindBestBotMove() {
  // Small opening preference for faster response before full minimax.
  if (tttBoard.every((c) => c === "") && tttBoard[4] === "") return 4;
  return tttMinimax([...tttBoard], true).move;
}

function tttFinishGame(result) {
  tttGameOver = true;
  if (result === "bot") {
    tttBotScore += 1;
    tttUpdateScoreboard();
    tttSetStatus("Arif Azinuddin (O) wins.");
    tttDrawWinLine(tttGetWinningLine(tttBoard, tttBot));
  } else if (result === "human") {
    tttUserScore += 1;
    tttUpdateScoreboard();
    tttSetStatus("You win. Great move.");
    tttDrawWinLine(tttGetWinningLine(tttBoard, tttHuman));
  } else {
    tttSetStatus("Draw game.");
    tttHideWinLine();
  }
  tttRenderBoard();
}

function tttBotTurn() {
  if (tttGameOver) return;
  tttBotThinking = true;
  tttRenderBoard();

  setTimeout(() => {
    const move = tttFindBestBotMove();
    if (move === -1) {
      tttBotThinking = false;
      tttRenderBoard();
      return;
    }

    // Only legal move on an empty cell.
    if (tttBoard[move] !== "") {
      tttBotThinking = false;
      tttRenderBoard();
      return;
    }
    tttBoard[move] = tttBot;

    const state = tttGetGameState(tttBoard);
    if (state === "ongoing") {
      tttSetStatus("Your move. Arif Azinuddin is waiting.");
    } else {
      tttFinishGame(state);
    }

    tttBotThinking = false;
    tttRenderBoard();
  }, 260);
}

function tttHandleCellClick(event) {
  const cell = event.target.closest(".tictactoe-cell");
  if (!cell || tttGameOver || tttBotThinking) return;

  const idx = Number(cell.dataset.index);
  if (!Number.isInteger(idx) || tttBoard[idx]) return;

  tttBoard[idx] = tttHuman;
  tttRenderBoard();

  const state = tttGetGameState(tttBoard);
  if (state === "human") {
    tttFinishGame("human");
    return;
  }
  if (state === "draw") {
    tttFinishGame("draw");
    return;
  }

  tttSetStatus("Arif is thinking...");
  tttBotTurn();
}

function tttResetGame() {
  tttBoard = Array(9).fill("");
  tttGameOver = false;
  tttBotThinking = false;
  tttSetStatus("Your move. Arif Azinuddin plays fair.");
  tttHideWinLine();
  tttRenderBoard();
}

const damhajiSize = 8;
const damhajiHuman = "human";
const damhajiBot = "bot";
const damhajiKingRow = {
  [damhajiHuman]: 0,
  [damhajiBot]: damhajiSize - 1,
};

let damhajiBoard = Array(damhajiSize * damhajiSize).fill(null);
let damhajiTurn = damhajiHuman;
let damhajiSelectedCell = -1;
let damhajiLegalMoves = [];
let damhajiGameOver = false;
let damhajiBotThinking = false;
let damhajiBotTimer = 0;

function damhajiToIndex(row, col) {
  return row * damhajiSize + col;
}

function damhajiToRowCol(index) {
  return { row: Math.floor(index / damhajiSize), col: index % damhajiSize };
}

function damhajiInside(row, col) {
  return row >= 0 && row < damhajiSize && col >= 0 && col < damhajiSize;
}

function damhajiIsDarkCell(row, col) {
  return (row + col) % 2 === 1;
}

function damhajiGetDirections(piece) {
  if (!piece) return [];
  if (piece.king) return [[-1, -1], [-1, 1], [1, -1], [1, 1]];
  return piece.player === damhajiHuman ? [[-1, -1], [-1, 1]] : [[1, -1], [1, 1]];
}

function damhajiBuildInitialBoard() {
  const board = Array(damhajiSize * damhajiSize).fill(null);
  for (let row = 0; row < damhajiSize; row += 1) {
    for (let col = 0; col < damhajiSize; col += 1) {
      if (!damhajiIsDarkCell(row, col)) continue;
      const idx = damhajiToIndex(row, col);
      if (row <= 2) {
        board[idx] = { player: damhajiBot, king: false };
      } else if (row >= damhajiSize - 3) {
        board[idx] = { player: damhajiHuman, king: false };
      }
    }
  }
  return board;
}

function damhajiApplyMoveToBoard(board, move) {
  const next = board.slice();
  const piece = next[move.from];
  if (!piece) return next;

  next[move.from] = null;
  (move.captures || []).forEach((capturedIndex) => {
    next[capturedIndex] = null;
  });

  const { row: targetRow } = damhajiToRowCol(move.to);
  const shouldPromote = !piece.king && targetRow === damhajiKingRow[piece.player];
  next[move.to] = {
    player: piece.player,
    king: piece.king || shouldPromote,
  };
  return next;
}

function damhajiFindCapturesFrom(board, fromIndex, piece) {
  const all = [];

  function dfs(currentBoard, currentIndex, captures, path) {
    const dirs = damhajiGetDirections(piece);
    let foundNextCapture = false;

    dirs.forEach(([dr, dc]) => {
      const { row, col } = damhajiToRowCol(currentIndex);
      const midRow = row + dr;
      const midCol = col + dc;
      const landingRow = row + dr * 2;
      const landingCol = col + dc * 2;
      if (!damhajiInside(midRow, midCol) || !damhajiInside(landingRow, landingCol)) return;

      const midIndex = damhajiToIndex(midRow, midCol);
      const landingIndex = damhajiToIndex(landingRow, landingCol);
      const middlePiece = currentBoard[midIndex];
      if (!middlePiece || middlePiece.player === piece.player) return;
      if (currentBoard[landingIndex]) return;

      foundNextCapture = true;
      const movedBoard = currentBoard.slice();
      movedBoard[currentIndex] = null;
      movedBoard[midIndex] = null;
      movedBoard[landingIndex] = piece;

      dfs(
        movedBoard,
        landingIndex,
        captures.concat(midIndex),
        path.concat(landingIndex)
      );
    });

    if (!foundNextCapture && captures.length > 0) {
      all.push({
        from: fromIndex,
        to: currentIndex,
        captures,
        path,
        isCapture: true,
      });
    }
  }

  dfs(board, fromIndex, [], []);
  return all;
}

function damhajiGetLegalMoves(board, player) {
  const captureMoves = [];
  const normalMoves = [];

  for (let i = 0; i < board.length; i += 1) {
    const piece = board[i];
    if (!piece || piece.player !== player) continue;

    const captures = damhajiFindCapturesFrom(board, i, piece);
    if (captures.length > 0) {
      captureMoves.push(...captures);
      continue;
    }

    const dirs = damhajiGetDirections(piece);
    dirs.forEach(([dr, dc]) => {
      const { row, col } = damhajiToRowCol(i);
      const nr = row + dr;
      const nc = col + dc;
      if (!damhajiInside(nr, nc)) return;
      const targetIdx = damhajiToIndex(nr, nc);
      if (board[targetIdx]) return;
      normalMoves.push({
        from: i,
        to: targetIdx,
        captures: [],
        path: [targetIdx],
        isCapture: false,
      });
    });
  }

  return captureMoves.length > 0 ? captureMoves : normalMoves;
}

function damhajiGetMaterialCount(board, player) {
  let men = 0;
  let kings = 0;
  board.forEach((piece) => {
    if (!piece || piece.player !== player) return;
    if (piece.king) kings += 1;
    else men += 1;
  });
  return { men, kings };
}

function damhajiEvaluateBoard(board) {
  let score = 0;
  for (let i = 0; i < board.length; i += 1) {
    const piece = board[i];
    if (!piece) continue;
    const { row } = damhajiToRowCol(i);
    const progression =
      piece.player === damhajiBot
        ? row
        : (damhajiSize - 1 - row);
    const value = piece.king ? 182 : 100 + progression * 4;
    score += piece.player === damhajiBot ? value : -value;
  }

  const botMobility = damhajiGetLegalMoves(board, damhajiBot).length;
  const humanMobility = damhajiGetLegalMoves(board, damhajiHuman).length;
  score += (botMobility - humanMobility) * 2;

  return score;
}

function damhajiMinimax(board, turn, depth, alpha, beta) {
  const botMoves = damhajiGetLegalMoves(board, damhajiBot);
  const humanMoves = damhajiGetLegalMoves(board, damhajiHuman);
  const botPieces = damhajiGetMaterialCount(board, damhajiBot);
  const humanPieces = damhajiGetMaterialCount(board, damhajiHuman);
  const botTotal = botPieces.men + botPieces.kings;
  const humanTotal = humanPieces.men + humanPieces.kings;

  if (botTotal === 0 || botMoves.length === 0) {
    return { score: -10000 - depth };
  }
  if (humanTotal === 0 || humanMoves.length === 0) {
    return { score: 10000 + depth };
  }

  if (depth <= 0) {
    return { score: damhajiEvaluateBoard(board) };
  }

  const moves = turn === damhajiBot ? botMoves : humanMoves;
  if (moves.length === 0) {
    return { score: turn === damhajiBot ? -9000 - depth : 9000 + depth };
  }

  if (turn === damhajiBot) {
    let bestScore = -Infinity;
    let bestMove = null;
    for (let i = 0; i < moves.length; i += 1) {
      const move = moves[i];
      const next = damhajiApplyMoveToBoard(board, move);
      const result = damhajiMinimax(next, damhajiHuman, depth - 1, alpha, beta);
      if (result.score > bestScore) {
        bestScore = result.score;
        bestMove = move;
      }
      alpha = Math.max(alpha, bestScore);
      if (beta <= alpha) break;
    }
    return { score: bestScore, move: bestMove };
  }

  let bestScore = Infinity;
  let bestMove = null;
  for (let i = 0; i < moves.length; i += 1) {
    const move = moves[i];
    const next = damhajiApplyMoveToBoard(board, move);
    const result = damhajiMinimax(next, damhajiBot, depth - 1, alpha, beta);
    if (result.score < bestScore) {
      bestScore = result.score;
      bestMove = move;
    }
    beta = Math.min(beta, bestScore);
    if (beta <= alpha) break;
  }
  return { score: bestScore, move: bestMove };
}

function damhajiChooseBotMove() {
  const moves = damhajiGetLegalMoves(damhajiBoard, damhajiBot);
  if (!moves.length) return null;
  if (moves.length === 1) return moves[0];

  const depth = moves.length <= 6 ? 7 : 6;
  let bestScore = -Infinity;
  let bestMoves = [];

  moves.forEach((move) => {
    const next = damhajiApplyMoveToBoard(damhajiBoard, move);
    const result = damhajiMinimax(next, damhajiHuman, depth - 1, -Infinity, Infinity);
    if (result.score > bestScore) {
      bestScore = result.score;
      bestMoves = [move];
    } else if (result.score === bestScore) {
      bestMoves.push(move);
    }
  });

  if (!bestMoves.length) return moves[0];
  return bestMoves[Math.floor(Math.random() * bestMoves.length)];
}

function damhajiSetStatus(text) {
  if (damhajiStatusEl) damhajiStatusEl.textContent = text;
}

function damhajiUpdateScoreboard() {
  if (damhajiUserScoreEl) damhajiUserScoreEl.textContent = String(damhajiUserScore);
  if (damhajiBotScoreEl) damhajiBotScoreEl.textContent = String(damhajiBotScore);
}

function damhajiSetTurnStatus() {
  if (damhajiGameOver) return;
  if (damhajiTurn === damhajiBot) {
    damhajiSetStatus("Arif Azinuddin is calculating...");
    return;
  }
  const captureMandatory = damhajiLegalMoves.some((move) => move.isCapture);
  if (captureMandatory) {
    damhajiSetStatus("Your turn (White). Capture is mandatory.");
  } else {
    damhajiSetStatus("Your turn (White).");
  }
}

function damhajiRenderBoard() {
  if (!damhajiBoardEl) return;

  if (!damhajiBoardEl.dataset.ready) {
    damhajiBoardEl.innerHTML = "";
    for (let row = 0; row < damhajiSize; row += 1) {
      for (let col = 0; col < damhajiSize; col += 1) {
        const idx = damhajiToIndex(row, col);
        const cell = document.createElement("button");
        cell.type = "button";
        cell.className = `damhaji-cell ${damhajiIsDarkCell(row, col) ? "damhaji-cell--dark" : "damhaji-cell--light"}`;
        cell.dataset.index = String(idx);
        cell.setAttribute("aria-label", `Dam Haji cell ${idx + 1}`);
        damhajiBoardEl.appendChild(cell);
      }
    }
    damhajiBoardEl.dataset.ready = "1";
  }

  const selectableMoves = damhajiSelectedCell >= 0
    ? damhajiLegalMoves.filter((move) => move.from === damhajiSelectedCell)
    : [];
  const hintTargets = new Set(selectableMoves.map((move) => move.to));
  const captureTargets = new Set(
    selectableMoves.filter((move) => move.isCapture).map((move) => move.to)
  );

  damhajiBoardEl.querySelectorAll(".damhaji-cell").forEach((cell) => {
    const idx = Number(cell.dataset.index);
    const piece = damhajiBoard[idx];
    const isSelected = idx === damhajiSelectedCell;
    const isHint = hintTargets.has(idx);
    const isCaptureHint = captureTargets.has(idx);

    cell.classList.toggle("damhaji-cell--selected", isSelected);
    cell.classList.toggle("damhaji-cell--hint", isHint);
    cell.classList.toggle("damhaji-cell--capture", isCaptureHint);
    cell.innerHTML = "";

    if (piece) {
      const pieceEl = document.createElement("span");
      pieceEl.className = `damhaji-piece ${
        piece.player === damhajiHuman ? "damhaji-piece--human" : "damhaji-piece--bot"
      } ${piece.king ? "damhaji-piece--king" : ""}`.trim();
      if (piece.king) {
        const kingIconEl = document.createElement("img");
        kingIconEl.className = "damhaji-king-icon";
        kingIconEl.src = "assets/img/songkok.png";
        kingIconEl.alt = "King";
        pieceEl.appendChild(kingIconEl);
      }
      cell.appendChild(pieceEl);
    }
  });
}

function damhajiCheckAndHandleWinner() {
  const humanMoves = damhajiGetLegalMoves(damhajiBoard, damhajiHuman);
  const botMoves = damhajiGetLegalMoves(damhajiBoard, damhajiBot);
  const humanPieces = damhajiGetMaterialCount(damhajiBoard, damhajiHuman);
  const botPieces = damhajiGetMaterialCount(damhajiBoard, damhajiBot);
  const humanCount = humanPieces.men + humanPieces.kings;
  const botCount = botPieces.men + botPieces.kings;

  if (botCount === 0 || botMoves.length === 0) {
    damhajiGameOver = true;
    damhajiUserScore += 1;
    damhajiUpdateScoreboard();
    damhajiSetStatus("You win. Arif Azinuddin has no legal move.");
    damhajiRenderBoard();
    return true;
  }
  if (humanCount === 0 || humanMoves.length === 0) {
    damhajiGameOver = true;
    damhajiBotScore += 1;
    damhajiUpdateScoreboard();
    damhajiSetStatus("Arif Azinuddin wins. You have no legal move.");
    damhajiRenderBoard();
    return true;
  }
  return false;
}

function damhajiExecuteMove(move) {
  damhajiBoard = damhajiApplyMoveToBoard(damhajiBoard, move);
  damhajiSelectedCell = -1;
  damhajiTurn = damhajiTurn === damhajiHuman ? damhajiBot : damhajiHuman;
  damhajiLegalMoves = damhajiGetLegalMoves(damhajiBoard, damhajiTurn);
  damhajiRenderBoard();
}

function damhajiHandleBotTurn() {
  if (damhajiGameOver || damhajiTurn !== damhajiBot || damhajiBotThinking) return;
  damhajiBotThinking = true;
  damhajiSetTurnStatus();

  damhajiBotTimer = window.setTimeout(() => {
    const move = damhajiChooseBotMove();
    damhajiBotThinking = false;
    if (!move) {
      damhajiCheckAndHandleWinner();
      return;
    }
    damhajiExecuteMove(move);
    if (!damhajiCheckAndHandleWinner()) {
      damhajiSetTurnStatus();
    }
  }, 260);
}

function damhajiHandleCellClick(event) {
  if (damhajiGameOver || damhajiBotThinking || damhajiTurn !== damhajiHuman) return;
  const cell = event.target.closest(".damhaji-cell");
  if (!cell) return;

  const idx = Number(cell.dataset.index);
  if (!Number.isInteger(idx)) return;
  const piece = damhajiBoard[idx];

  const movesFromSelected = damhajiSelectedCell >= 0
    ? damhajiLegalMoves.filter((move) => move.from === damhajiSelectedCell)
    : [];
  const selectedMove = movesFromSelected.find((move) => move.to === idx);
  if (selectedMove) {
    damhajiExecuteMove(selectedMove);
    if (!damhajiCheckAndHandleWinner()) {
      damhajiSetTurnStatus();
      damhajiHandleBotTurn();
    }
    return;
  }

  if (piece && piece.player === damhajiHuman) {
    const hasMoves = damhajiLegalMoves.some((move) => move.from === idx);
    if (hasMoves) {
      damhajiSelectedCell = idx;
      damhajiRenderBoard();
      return;
    }
  }

  damhajiSelectedCell = -1;
  damhajiRenderBoard();
}

function damhajiResetGame() {
  if (damhajiBotTimer) {
    window.clearTimeout(damhajiBotTimer);
    damhajiBotTimer = 0;
  }
  damhajiBoard = damhajiBuildInitialBoard();
  damhajiTurn = damhajiHuman;
  damhajiSelectedCell = -1;
  damhajiGameOver = false;
  damhajiBotThinking = false;
  damhajiLegalMoves = damhajiGetLegalMoves(damhajiBoard, damhajiTurn);
  damhajiRenderBoard();
  damhajiSetTurnStatus();
}

const fleabagPhysics = {
  gravity: 0.32,
  scale: 0.17,
};

const fleabagBaseShot = { damage: 16, radius: 6, speedMultiplier: 1 };
const fleabagPowerModes = ["multi", "bigball", "heal"];

let fleabagChargeStartAt = 0;
let fleabagCharging = false;
let fleabagChargeFrame = 0;
let fleabagHumanChargePower = 0.15;
let fleabagVisualLoopFrame = 0;

const muttImage = new Image();
let muttImageReady = false;
muttImage.onload = () => {
  muttImageReady = true;
  fleabagDrawArena();
};
muttImage.src = "assets/img/arif-passport.PNG";

const fleabagBackgroundImage = new Image();
let fleabagBackgroundReady = false;
fleabagBackgroundImage.onload = () => {
  fleabagBackgroundReady = true;
  fleabagDrawArena();
};
fleabagBackgroundImage.src = "assets/img/fightme-bg.png";

let fleabagState = {
  turn: "human",
  gameOver: false,
  busy: false,
  wind: 0,
  projectile: null,
  selectedPowerMode: null,
  fleabagHp: 100,
  muttHp: 100,
  lastShot: null,
  powerUses: {
    multi: 0,
    bigball: 0,
    heal: 0,
  },
  botPowerUses: {
    multi: 0,
    bigball: 0,
    heal: 0,
  },
  emote: null,
  finishFlagLoser: null,
  winner: "",
};

function fleabagSetStatus(text) {
  if (fleabagStatusEl) fleabagStatusEl.textContent = text;
}

function fleabagGetModeMaxUses() {
  return 5;
}

function fleabagGetRemainingUses(mode) {
  const used = fleabagState.powerUses[mode] || 0;
  return Math.max(0, fleabagGetModeMaxUses() - used);
}

function fleabagGetBotRemainingUses(mode) {
  const used = fleabagState.botPowerUses[mode] || 0;
  return Math.max(0, fleabagGetModeMaxUses() - used);
}

function fleabagCanUseMode(mode) {
  if (mode === "multi" || mode === "bigball" || mode === "heal") {
    return fleabagGetRemainingUses(mode) > 0;
  }
  return true;
}

function fleabagFindNextAvailableMode() {
  const preferred = ["multi", "bigball", "heal"];
  return preferred.find((mode) => fleabagCanUseMode(mode)) || null;
}

function fleabagConsumeModeUse(mode) {
  if (!fleabagState.powerUses[mode] && fleabagState.powerUses[mode] !== 0) return;
  fleabagState.powerUses[mode] += 1;
}

function fleabagConsumeBotModeUse(mode) {
  if (!fleabagState.botPowerUses[mode] && fleabagState.botPowerUses[mode] !== 0) return;
  fleabagState.botPowerUses[mode] += 1;
}

function fleabagGetHealAmount() {
  const uses = fleabagState.powerUses.heal || 0;
  return Math.max(10, 50 - uses * 10);
}

function fleabagGetBotHealAmount() {
  const uses = fleabagState.botPowerUses.heal || 0;
  return Math.max(10, 50 - uses * 10);
}

function fleabagSetCharacterEmote(target, text) {
  fleabagState.emote = {
    target,
    text,
    until: performance.now() + 1300,
  };
  fleabagEnsureVisualLoop();
}

function fleabagShowOutcomeEmote(thrower, didHit) {
  const opponent = thrower === "human" ? "mutt" : "fleabag";
  fleabagSetCharacterEmote(opponent, didHit ? "auch😭" : "haha😂");
}

function fleabagEnsureVisualLoop() {
  if (fleabagVisualLoopFrame) return;
  const frame = () => {
    const now = performance.now();
    const hasEmote = !!(fleabagState.emote && fleabagState.emote.until > now);
    const hasFlag = !!fleabagState.finishFlagLoser;
    const isModalOpen = !!(tictactoeModal && tictactoeModal.style.display === "block");

    fleabagDrawArena();

    if ((hasEmote || hasFlag) && isModalOpen) {
      fleabagVisualLoopFrame = requestAnimationFrame(frame);
      return;
    }
    fleabagVisualLoopFrame = 0;
  };

  fleabagVisualLoopFrame = requestAnimationFrame(frame);
}

function fleabagGetSelectedMode() {
  return fleabagPowerModes.includes(fleabagState.selectedPowerMode)
    ? fleabagState.selectedPowerMode
    : null;
}

function fleabagGetChargedPowerValue(charge, speedMultiplier) {
  const clampedCharge = Math.max(0.15, Math.min(1, charge));
  return (34 + clampedCharge * 72) * speedMultiplier;
}

function fleabagGetDamageForShot(baseDamage, charge, damageMultiplier) {
  return Math.round(baseDamage * (0.7 + Math.max(0.2, Math.min(1, charge))) * damageMultiplier);
}

function fleabagUpdateWindIndicator() {
  if (!fleabagWindIndicatorEl) return;
  const amount = Math.abs(fleabagState.wind).toFixed(2);
  const arrow = fleabagState.wind >= 0 ? "->" : "<-";
  fleabagWindIndicatorEl.textContent = `Wind: ${arrow} ${amount}`;
}

function fleabagUpdateHealthHud() {
  const fleabagPercent = Math.max(0, Math.min(100, fleabagState.fleabagHp));
  const muttPercent = Math.max(0, Math.min(100, fleabagState.muttHp));

  if (fleabagFleabagHpEl) fleabagFleabagHpEl.textContent = String(fleabagState.fleabagHp);
  if (fleabagMuttHpEl) fleabagMuttHpEl.textContent = String(fleabagState.muttHp);
  if (fleabagFleabagHpBarEl) fleabagFleabagHpBarEl.style.width = `${fleabagPercent}%`;
  if (fleabagMuttHpBarEl) fleabagMuttHpBarEl.style.width = `${muttPercent}%`;
}

function fleabagUpdatePowerButtons() {
  if (!fleabagPowerOptions) return;
  fleabagPowerOptions.querySelectorAll(".fleabag-power-btn").forEach((btn) => {
    const mode = String(btn.dataset.power || "multi");
    const left = fleabagGetRemainingUses(mode);
    const healAmount = fleabagGetHealAmount();
    const baseLabel =
      mode === "multi"
        ? `<i class="fa-solid fa-2 fa-beat-fade"></i> 2x Throw`
        : mode === "bigball"
          ? `<i class="fa-solid fa-bowling-ball fa-beat-fade"></i> Big Ball`
          : `<i class="fa-solid fa-heart-circle-plus fa-beat-fade"></i> Heal +${left > 0 ? healAmount : 0}`;
    btn.innerHTML = `${baseLabel} (${left})`;
    btn.disabled = left <= 0;
  });
}

function fleabagUpdateBotUsageHud() {
  if (!fleabagBotUsageEl) return;
  const usedMulti = fleabagState.botPowerUses.multi || 0;
  const usedBigBall = fleabagState.botPowerUses.bigball || 0;
  const usedHeal = fleabagState.botPowerUses.heal || 0;
  fleabagBotUsageEl.textContent = `Bot power uses - 2x: ${usedMulti}/5 | BigBall: ${usedBigBall}/5 | Heal: ${usedHeal}/5`;
}

function fleabagSetChargeUi(progress) {
  const clamped = Math.max(0, Math.min(1, progress));
  if (fleabagChargeFillEl) fleabagChargeFillEl.style.width = `${Math.round(clamped * 100)}%`;
}

function fleabagShowFinishFlag(loserName) {
  fleabagState.finishFlagLoser = loserName === "Mutt" ? "mutt" : "fleabag";
  if (fleabagFinishFlagEl) {
    fleabagFinishFlagEl.classList.add("is-hidden");
  }
  fleabagEnsureVisualLoop();
}

function fleabagHideFinishFlag() {
  fleabagState.finishFlagLoser = null;
  if (fleabagFinishFlagEl) {
    fleabagFinishFlagEl.classList.add("is-hidden");
  }
}

function fleabagGetArena() {
  if (!fleabagCanvas) return null;
  const width = fleabagCanvas.width;
  const height = fleabagCanvas.height;
  const groundY = Math.round(height * 0.8);
  return {
    width,
    height,
    groundY,
    fleabagX: 72,
    muttX: width - 72,
    launchY: groundY - 28,
    hitRadius: 24,
  };
}

function fleabagDrawWindArrow(ctx, arena) {
  const centerY = 36;
  const startX = arena.width / 2 - 45;
  const lineLength = 90;
  const direction = fleabagState.wind >= 0 ? 1 : -1;
  const scaled = Math.min(1, Math.abs(fleabagState.wind) / 0.35);
  const activeLength = lineLength * (0.35 + scaled * 0.65);
  const endX = startX + activeLength * direction;

  ctx.strokeStyle = "#0f172a";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(startX, centerY);
  ctx.lineTo(endX, centerY);
  ctx.stroke();

  ctx.fillStyle = "#0f172a";
  ctx.beginPath();
  ctx.moveTo(endX, centerY);
  ctx.lineTo(endX - 8 * direction, centerY - 6);
  ctx.lineTo(endX - 8 * direction, centerY + 6);
  ctx.closePath();
  ctx.fill();
}

function fleabagDrawMutt(ctx, arena) {
  const x = arena.muttX;
  const y = arena.launchY;
  const imageW = 54;
  const imageH = 54;

  if (muttImageReady) {
    ctx.drawImage(muttImage, x - imageW / 2, y - imageH + 18, imageW, imageH);
    return;
  }

  ctx.font = "700 30px system-ui, -apple-system, Segoe UI, sans-serif";
  ctx.fillStyle = "#0f172a";
  ctx.fillText("M", x - 11, y + 10);
}

function fleabagDrawArena() {
  if (!fleabagCanvas) return;
  const ctx = fleabagCanvas.getContext("2d");
  const arena = fleabagGetArena();
  if (!ctx || !arena) return;

  ctx.clearRect(0, 0, arena.width, arena.height);

  if (fleabagBackgroundReady) {
    ctx.drawImage(fleabagBackgroundImage, 0, 0, arena.width, arena.groundY);
    ctx.fillStyle = "rgba(255,255,255,0.18)";
    ctx.fillRect(0, 0, arena.width, arena.groundY);
  } else {
    ctx.fillStyle = "rgba(255,255,255,0.2)";
    ctx.fillRect(0, 0, arena.width, arena.groundY);
  }
  ctx.fillStyle = "rgba(0,0,0,0.14)";
  ctx.fillRect(0, arena.groundY, arena.width, arena.height - arena.groundY);

  ctx.strokeStyle = "rgba(15, 23, 42, 0.25)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, arena.groundY);
  ctx.lineTo(arena.width, arena.groundY);
  ctx.stroke();
  fleabagDrawWindArrow(ctx, arena);

  ctx.fillStyle = "#1e293b";
  ctx.font = "700 16px system-ui, -apple-system, Segoe UI, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(
    `Wind ${fleabagState.wind >= 0 ? "->" : "<-"} ${Math.abs(fleabagState.wind).toFixed(2)}`,
    arena.width / 2,
    24
  );
  ctx.textAlign = "start";
  ctx.fillText("Fleabag (You)", arena.fleabagX - 30, arena.groundY + 30);
  ctx.fillText("Arif Azi (Mutt)", arena.muttX - 85, arena.groundY + 30);

  ctx.font = "36px serif";
  ctx.fillText("🐱", arena.fleabagX - 14, arena.launchY + 10);
  fleabagDrawMutt(ctx, arena);

  const now = performance.now();
  if (fleabagState.emote && fleabagState.emote.until > now) {
    const isFleabag = fleabagState.emote.target === "fleabag";
    const emoteX = isFleabag ? arena.fleabagX - 22 : arena.muttX - 22;
    const emoteY = arena.launchY - 36;
    ctx.font = "700 20px system-ui, -apple-system, Segoe UI, sans-serif";
    ctx.fillStyle = "#0f172a";
    ctx.fillText(fleabagState.emote.text, emoteX, emoteY);
  }

  if (fleabagState.finishFlagLoser) {
    const t = now / 180;
    const waveY = Math.sin(t) * 3;
    const loserX = fleabagState.finishFlagLoser === "fleabag" ? arena.fleabagX : arena.muttX;
    ctx.font = "28px serif";
    ctx.fillText("🏳️;(", loserX - 12, arena.launchY - 48 + waveY);
  }

  if (fleabagState.projectile) {
    ctx.beginPath();
    ctx.fillStyle = "#7c3aed";
    ctx.arc(
      fleabagState.projectile.x,
      fleabagState.projectile.y,
      fleabagState.projectile.radius || 7,
      0,
      Math.PI * 2
    );
    ctx.fill();
  }
}

function fleabagCreateProjectile(startX, startY, angleDeg, power, direction, radius, damage) {
  const angleRad = (angleDeg * Math.PI) / 180;
  const baseVx = Math.cos(angleRad) * power * fleabagPhysics.scale * direction;
  const baseVy = -Math.sin(angleRad) * power * fleabagPhysics.scale;

  return {
    x: startX,
    y: startY,
    vx: baseVx,
    vy: baseVy,
    radius,
    damage,
  };
}

function fleabagUpdateProjectile() {
  const arena = fleabagGetArena();
  if (!arena || !fleabagState.projectile) return "miss";

  const p = fleabagState.projectile;
  p.x += p.vx;
  p.y += p.vy;
  p.vx += fleabagState.wind * 0.03;
  p.vy += fleabagPhysics.gravity;

  const targetX = fleabagState.turn === "human" ? arena.muttX : arena.fleabagX;
  const targetY = arena.launchY;
  const distance = Math.hypot(p.x - targetX, p.y - targetY);
  if (distance <= arena.hitRadius + (p.radius || 0) * 0.3) return "hit";

  if (p.x < -20 || p.x > arena.width + 20 || p.y > arena.height + 20) return "miss";
  if (p.y >= arena.groundY) return "miss";
  return "flying";
}

function fleabagAnimateProjectile(onDone) {
  function frame() {
    const state = fleabagUpdateProjectile();
    fleabagDrawArena();

    if (state === "flying") {
      requestAnimationFrame(frame);
      return;
    }

    fleabagState.projectile = null;
    fleabagDrawArena();
    if (onDone) onDone(state);
  }

  requestAnimationFrame(frame);
}

function fleabagCompleteTurn(result) {
  const thrower = fleabagState.turn;

  if (result === "hit") {
    const shotDamage = fleabagState.lastShot ? fleabagState.lastShot.damage : 15;

    if (fleabagState.turn === "human") {
      fleabagState.muttHp = Math.max(0, fleabagState.muttHp - shotDamage);
      fleabagShowOutcomeEmote(thrower, true);
      if (fleabagState.muttHp <= 0) {
        fleabagState.gameOver = true;
        fleabagState.winner = "Fleabag";
        fleabagUserScore += 1;
        fleabagUpdateScoreboard();
        fleabagSetStatus("Fleabag wins. Mutt HP is 0.");
        fleabagShowFinishFlag("Mutt");
      } else {
        fleabagSetStatus(`Hit! Mutt takes ${shotDamage} damage.`);
      }
    } else {
      fleabagState.fleabagHp = Math.max(0, fleabagState.fleabagHp - shotDamage);
      fleabagShowOutcomeEmote(thrower, true);
      if (fleabagState.fleabagHp <= 0) {
        fleabagState.gameOver = true;
        fleabagState.winner = "Mutt";
        fleabagBotScore += 1;
        fleabagUpdateScoreboard();
        fleabagSetStatus("Arif Azinuddin (Mutt) wins.");
        fleabagShowFinishFlag("Fleabag");
      } else {
        fleabagSetStatus(`Mutt hits you for ${shotDamage} damage.`);
      }
    }

    fleabagUpdateHealthHud();
    if (fleabagState.gameOver) {
      fleabagState.busy = false;
      return;
    }

    fleabagState.wind = Number((Math.random() * 0.7 - 0.35).toFixed(2));
    fleabagUpdateWindIndicator();
    fleabagDrawArena();

    if (thrower === "human") {
      fleabagState.turn = "bot";
      fleabagState.busy = false;
      setTimeout(() => {
        if (!fleabagState.gameOver) {
          fleabagSetStatus("Arif Azinuddin (Mutt) is calculating...");
          fleabagBotThrow();
        }
      }, 420);
    } else {
      fleabagState.turn = "human";
      fleabagState.busy = false;
      fleabagSetStatus("Your turn.");
    }
    return;
  }

  fleabagState.wind = Number((Math.random() * 0.7 - 0.35).toFixed(2));
  fleabagUpdateWindIndicator();
  fleabagDrawArena();

  if (thrower === "human") {
    fleabagShowOutcomeEmote(thrower, false);
    fleabagState.turn = "bot";
    fleabagState.busy = false;
    fleabagSetStatus("You missed. Mutt is calculating...");
    setTimeout(() => fleabagBotThrow(), 420);
  } else {
    fleabagShowOutcomeEmote(thrower, false);
    fleabagState.turn = "human";
    fleabagState.busy = false;
    fleabagSetStatus("Mutt missed. Your turn.");
  }
}

function fleabagLandingDistanceToTarget(angle, power, direction, targetX, startX, startY) {
  let x = startX;
  let y = startY;
  const angleRad = (angle * Math.PI) / 180;
  let vx = Math.cos(angleRad) * power * fleabagPhysics.scale * direction;
  let vy = -Math.sin(angleRad) * power * fleabagPhysics.scale;
  let iterations = 0;
  const arena = fleabagGetArena();
  if (!arena) return Infinity;

  while (y < arena.groundY && iterations < 1800) {
    x += vx;
    y += vy;
    vx += fleabagState.wind * 0.03;
    vy += fleabagPhysics.gravity;
    iterations += 1;
  }

  return Math.abs(x - targetX);
}

function fleabagFindBestBotShot() {
  const arena = fleabagGetArena();
  if (!arena) return { angle: 45, power: 70, mode: "normal", damage: 16, radius: 6 };

  let best = { angle: 45, power: 70, mode: "normal", error: Infinity };

  const botModesToTry = ["normal"];
  if (fleabagGetBotRemainingUses("bigball") > 0) botModesToTry.push("bigball");

  botModesToTry.forEach((mode) => {
    const speedMultiplier = mode === "bigball" ? 1.08 : 1;
    for (let angle = 15; angle <= 75; angle += 1) {
      for (let power = 34; power <= 110; power += 1) {
        const shotPower = power * speedMultiplier;
        const error = fleabagLandingDistanceToTarget(
          angle,
          shotPower,
          -1,
          arena.fleabagX,
          arena.muttX,
          arena.launchY
        );
        if (error < best.error) {
          best = { angle, power: shotPower, mode, error };
        }
      }
    }
  });

  const jitter = Math.random() * 2 - 1;
  const isBigBall = best.mode === "bigball";
  return {
    angle: Math.max(15, Math.min(75, Math.round(best.angle + jitter))),
    power: Math.max(30, Math.min(120, Math.round(best.power + jitter))),
    mode: best.mode,
    damage: isBigBall ? fleabagBaseShot.damage * 2 : fleabagBaseShot.damage,
    radius: isBigBall ? 13 : fleabagBaseShot.radius,
  };
}

function fleabagFireShot(shotConfig, onComplete) {
  const arena = fleabagGetArena();
  if (!arena) return;
  fleabagState.lastShot = { damage: shotConfig.damage };
  fleabagState.projectile = fleabagCreateProjectile(
    shotConfig.from === "mutt" ? arena.muttX : arena.fleabagX,
    arena.launchY,
    shotConfig.angle,
    shotConfig.power,
    shotConfig.direction,
    shotConfig.radius,
    shotConfig.damage
  );
  fleabagAnimateProjectile(onComplete);
}

function fleabagUseHumanHeal() {
  if (fleabagState.gameOver || fleabagState.busy || fleabagState.turn !== "human") return;
  if (!fleabagCanUseMode("heal")) {
    fleabagSetStatus("Heal is depleted.");
    return;
  }
  const healAmount = fleabagGetHealAmount();
  fleabagConsumeModeUse("heal");
  fleabagState.fleabagHp = Math.min(100, fleabagState.fleabagHp + healAmount);
  fleabagUpdateHealthHud();
  fleabagUpdatePowerButtons();
  fleabagSetActivePowerButton(null);
  fleabagSetStatus(`Fleabag used Heal +${healAmount}.`);
  fleabagState.selectedPowerMode = null;
  fleabagState.turn = "bot";
  setTimeout(() => fleabagBotThrow(), 380);
}

function fleabagReleaseHumanThrow() {
  const arena = fleabagGetArena();
  if (!arena || fleabagState.gameOver || fleabagState.busy || fleabagState.turn !== "human") return;

  let mode = fleabagGetSelectedMode();
  if (!fleabagCanUseMode(mode)) {
    mode = fleabagFindNextAvailableMode();
    fleabagState.selectedPowerMode = mode;
    fleabagSetActivePowerButton(mode);
  }

  fleabagState.busy = true;
  const isBigBall = mode === "bigball";
  const isMulti = mode === "multi";
  if (mode) {
    fleabagConsumeModeUse(mode);
    fleabagUpdatePowerButtons();
    fleabagState.selectedPowerMode = null;
    fleabagSetActivePowerButton(null);
  }
  if (mode && !fleabagCanUseMode(mode)) {
    const nextMode = fleabagFindNextAvailableMode();
    fleabagState.selectedPowerMode = nextMode;
    fleabagSetActivePowerButton(nextMode);
  }
  const speedMultiplier = isBigBall ? 1.06 : 1;
  const damageMultiplier = isBigBall ? 2 : 1;
  const radius = isBigBall ? 13 : fleabagBaseShot.radius;
  const power = fleabagGetChargedPowerValue(fleabagHumanChargePower, speedMultiplier);
  const damage = fleabagGetDamageForShot(fleabagBaseShot.damage, fleabagHumanChargePower, damageMultiplier);

  fleabagSetStatus(
    `Fleabag throws (${isBigBall ? "Big Ball" : isMulti ? "2x Throw" : "Normal Throw"}, charge ${Math.round(
      fleabagHumanChargePower * 100
    )}%).`
  );

  const firstShot = { from: "fleabag", angle: 42, power, direction: 1, radius, damage };
  if (!isMulti) {
    fleabagFireShot(firstShot, fleabagCompleteTurn);
    return;
  }

  const secondPower = power * 0.94;
  const secondShot = { from: "fleabag", angle: 41, power: secondPower, direction: 1, radius, damage };
  let humanAnyHit = false;
  fleabagFireShot(firstShot, (result) => {
    if (result === "hit") humanAnyHit = true;
    fleabagSetStatus("Second throw...");
    fleabagFireShot(secondShot, (secondResult) => {
      if (secondResult === "hit") humanAnyHit = true;
      fleabagCompleteTurn(humanAnyHit ? "hit" : "miss");
    });
  });
}

function fleabagStartCharging() {
  if (fleabagState.gameOver || fleabagState.busy || fleabagState.turn !== "human" || fleabagCharging) return;
  fleabagCharging = true;
  fleabagChargeStartAt = performance.now();
  fleabagHumanChargePower = 0.15;
  fleabagSetChargeUi(fleabagHumanChargePower);
  if (fleabagThrowHintEl) fleabagThrowHintEl.textContent = "Charging...";

  const chargeDurationMs = 1400;
  const frame = () => {
    if (!fleabagCharging) return;
    const elapsed = performance.now() - fleabagChargeStartAt;
    fleabagHumanChargePower = Math.max(0.15, Math.min(1, elapsed / chargeDurationMs));
    fleabagSetChargeUi(fleabagHumanChargePower);
    fleabagChargeFrame = requestAnimationFrame(frame);
  };
  fleabagChargeFrame = requestAnimationFrame(frame);
}

function fleabagStopChargingAndThrow() {
  if (!fleabagCharging) return;
  fleabagCharging = false;
  cancelAnimationFrame(fleabagChargeFrame);
  if (fleabagThrowHintEl) fleabagThrowHintEl.textContent = "Hold Throw to charge power, then release.";
  fleabagReleaseHumanThrow();
  setTimeout(() => fleabagSetChargeUi(0), 120);
}

function fleabagBotThrow() {
  const arena = fleabagGetArena();
  if (!arena || fleabagState.gameOver || fleabagState.busy || fleabagState.turn !== "bot") return;

  fleabagState.busy = true;
  const canBotHeal = fleabagGetBotRemainingUses("heal") > 0;
  if (canBotHeal && fleabagState.muttHp <= 40 && Math.random() < 0.35) {
    const healAmount = fleabagGetBotHealAmount();
    fleabagConsumeBotModeUse("heal");
    fleabagState.muttHp = Math.min(100, fleabagState.muttHp + healAmount);
    fleabagUpdateHealthHud();
    fleabagUpdateBotUsageHud();
    fleabagState.turn = "human";
    fleabagState.busy = false;
    fleabagSetStatus(`Mutt used Heal +${healAmount}.`);
    return;
  }

  const shot = fleabagFindBestBotShot();
  const canBotMulti = fleabagGetBotRemainingUses("multi") > 0;
  const isMulti = canBotMulti && Math.random() < 0.28;
  if (isMulti) {
    fleabagConsumeBotModeUse("multi");
  }
  if (shot.mode === "bigball") {
    fleabagConsumeBotModeUse("bigball");
  }
  fleabagUpdateBotUsageHud();
  fleabagSetStatus(
    `Arif Azinuddin (Mutt) throws (${
      isMulti ? "2x Throw" : shot.mode === "bigball" ? "Big Ball" : "Normal Throw"
    }).`
  );

  const firstShot = {
    from: "mutt",
    angle: shot.angle,
    power: shot.power,
    direction: -1,
    radius: shot.radius,
    damage: shot.damage,
  };
  if (!isMulti) {
    fleabagFireShot(firstShot, fleabagCompleteTurn);
    return;
  }

  const secondShot = {
    from: "mutt",
    angle: Math.max(15, Math.min(75, shot.angle + (Math.random() > 0.5 ? 1 : -1))),
    power: shot.power * 0.94,
    direction: -1,
    radius: shot.radius,
    damage: shot.damage,
  };
  let botAnyHit = false;
  fleabagFireShot(firstShot, (result) => {
    if (result === "hit") botAnyHit = true;
    fleabagSetStatus("Mutt second throw...");
    fleabagFireShot(secondShot, (secondResult) => {
      if (secondResult === "hit") botAnyHit = true;
      fleabagCompleteTurn(botAnyHit ? "hit" : "miss");
    });
  });
}

function fleabagSetActivePowerButton(modeValue) {
  if (!fleabagPowerOptions) return;
  fleabagPowerOptions.querySelectorAll(".fleabag-power-btn").forEach((btn) => {
    const buttonMode = String(btn.dataset.power || "multi");
    const isDisabled = !fleabagCanUseMode(buttonMode);
    btn.classList.toggle("active", modeValue && buttonMode === modeValue && !isDisabled);
    btn.disabled = isDisabled;
  });
}

function fleabagResetGame() {
  fleabagState = {
    turn: "human",
    gameOver: false,
    busy: false,
    wind: Number((Math.random() * 0.7 - 0.35).toFixed(2)),
    projectile: null,
    selectedPowerMode: null,
    fleabagHp: 100,
    muttHp: 100,
    lastShot: null,
    powerUses: {
      multi: 0,
      bigball: 0,
      heal: 0,
    },
    botPowerUses: {
      multi: 0,
      bigball: 0,
      heal: 0,
    },
    emote: null,
    finishFlagLoser: null,
    winner: "",
  };
  fleabagCharging = false;
  cancelAnimationFrame(fleabagChargeFrame);
  if (fleabagVisualLoopFrame) {
    cancelAnimationFrame(fleabagVisualLoopFrame);
    fleabagVisualLoopFrame = 0;
  }
  fleabagSetActivePowerButton(null);
  fleabagUpdatePowerButtons();
  fleabagUpdateBotUsageHud();
  fleabagSetChargeUi(0);
  fleabagUpdateWindIndicator();
  fleabagUpdateHealthHud();
  fleabagHideFinishFlag();
  if (fleabagThrowHintEl) fleabagThrowHintEl.textContent = "Hold Throw to charge power, then release.";
  fleabagSetStatus("You are Fleabag. Arif Azinuddin is Mutt.");
  fleabagDrawArena();
}

function tttOpenModal() {
  if (!tictactoeModal) return;
  tttResetGame();
  tttUpdateScoreboard();
  fleabagResetGame();
  fleabagUpdateScoreboard();
  damhajiResetGame();
  damhajiUpdateScoreboard();
  setFightMeActiveGame(1);
  tictactoeModal.style.display = "block";
  document.body.style.overflow = "hidden";
}

function handleFightMeModalClosed() {
  if (damhajiBotTimer) {
    window.clearTimeout(damhajiBotTimer);
    damhajiBotTimer = 0;
  }
  damhajiBotThinking = false;
}

if (tictactoeOpenBtn) {
  tictactoeOpenBtn.addEventListener("click", (e) => {
    e.preventDefault();
    tttOpenModal();
  });
}

if (tictactoeBoardEl) {
  tictactoeBoardEl.addEventListener("click", tttHandleCellClick);
}

if (tictactoeRestartBtn) {
  tictactoeRestartBtn.addEventListener("click", tttResetGame);
}

if (fightMePrevBtn) {
  fightMePrevBtn.addEventListener("click", goToPrevFightMeGame);
}

if (fightMeNextBtn) {
  fightMeNextBtn.addEventListener("click", goToNextFightMeGame);
}

if (damhajiBoardEl) {
  damhajiBoardEl.addEventListener("click", damhajiHandleCellClick);
}

if (damhajiRestartBtn) {
  damhajiRestartBtn.addEventListener("click", damhajiResetGame);
}

if (fleabagPowerOptions) {
  fleabagPowerOptions.addEventListener("click", (e) => {
    const button = e.target.closest(".fleabag-power-btn");
    if (!button) return;
    const mode = String(button.dataset.power || "multi");
    if (!fleabagPowerModes.includes(mode)) return;
    if (!fleabagCanUseMode(mode)) {
      fleabagSetStatus(`${mode === "heal" ? "Heal" : mode === "bigball" ? "Big Ball" : "2x Throw"} is depleted.`);
      return;
    }
    if (mode === "heal") {
      fleabagUseHumanHeal();
      return;
    }
    fleabagState.selectedPowerMode = fleabagState.selectedPowerMode === mode ? null : mode;
    fleabagSetActivePowerButton(fleabagState.selectedPowerMode);
  });
}

if (fleabagThrowBtn) {
  const startCharge = (event) => {
    event.preventDefault();
    fleabagStartCharging();
  };
  const releaseCharge = (event) => {
    event.preventDefault();
    fleabagStopChargingAndThrow();
  };

  fleabagThrowBtn.addEventListener("pointerdown", startCharge);
  fleabagThrowBtn.addEventListener("pointerup", releaseCharge);
  fleabagThrowBtn.addEventListener("pointerleave", releaseCharge);
  fleabagThrowBtn.addEventListener("pointercancel", releaseCharge);
}

if (fleabagRestartBtn) {
  fleabagRestartBtn.addEventListener("click", fleabagResetGame);
}

// Fallback open handler in case the nav link is re-rendered.
document.addEventListener("click", (e) => {
  const openBtn = e.target.closest("#openTicTacToe");
  if (!openBtn) return;
  e.preventDefault();
  tttOpenModal();
});

// ========== CLOSE MODALS ==========
document.querySelectorAll(".modal-close").forEach((closeBtn) => {
  closeBtn.onclick = function () {
    document.querySelectorAll(".modal").forEach((modal) => {
      modal.style.display = "none";
      if (modal.id === "ticTacToeModal") {
        handleFightMeModalClosed();
      }
    });
    document.body.style.overflow = "auto";
  };
});

window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
    if (event.target.id === "ticTacToeModal") {
      handleFightMeModalClosed();
    }
    document.body.style.overflow = "auto";
  }
};



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
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();

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
  enforceFixedUiPositions();
});

// ========== SCROLL TO TOP ==========
const scrollTopBtn = document.getElementById("scrollTop");

function enforceFixedUiPositions() {
  const footerEl = document.querySelector("footer");
  if (footerEl) {
    footerEl.style.position = "static";
    footerEl.style.bottom = "auto";
    footerEl.style.left = "auto";
    footerEl.style.width = "100%";
  }

  if (scrollTopBtn) {
    scrollTopBtn.style.position = "fixed";
    scrollTopBtn.style.right = "20px";
    scrollTopBtn.style.bottom = "20px";
    scrollTopBtn.style.left = "auto";
    scrollTopBtn.style.top = "auto";
    scrollTopBtn.style.zIndex = "9999";
  }
}

window.addEventListener(
  "scroll",
  () => {
    if (!scrollTopBtn) return;
    if (window.pageYOffset > 300) {
      scrollTopBtn.classList.add("visible");
    } else {
      scrollTopBtn.classList.remove("visible");
    }
  },
  { passive: true }
);

if (scrollTopBtn) {
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// ========== ACTIVE NAV LINK ==========
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");
const navbarEl = document.querySelector(".navbar");

function syncNavbarOnScroll() {
  const y = window.pageYOffset || window.scrollY || 0;
  if (navbarEl) {
    navbarEl.classList.toggle("is-floating", y > 32);
  }

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
}

window.addEventListener("scroll", syncNavbarOnScroll, { passive: true });
syncNavbarOnScroll();

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

// ========== REFERENCES ROW CAROUSELS ==========
function initReferenceRowCarousels() {
  const rows = document.querySelectorAll("[data-reference-carousel]");
  rows.forEach((row) => {
    const track = row.querySelector(".references-track");
    const slides = Array.from(row.querySelectorAll(".reference-slide"));
    const prevBtn = row.querySelector('.reference-nav-btn[data-direction="prev"]');
    const nextBtn = row.querySelector('.reference-nav-btn[data-direction="next"]');

    if (!track || slides.length === 0 || !prevBtn || !nextBtn) return;

    let currentIndex = 0;

    function render() {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      const shouldDisable = slides.length <= 1;
      prevBtn.disabled = shouldDisable;
      nextBtn.disabled = shouldDisable;
    }

    function goTo(index) {
      if (slides.length <= 1) return;
      currentIndex = (index + slides.length) % slides.length;
      render();
    }

    prevBtn.addEventListener("click", () => goTo(currentIndex - 1));
    nextBtn.addEventListener("click", () => goTo(currentIndex + 1));

    render();
  });
}

// ========== DIGITAL SIGNATURE ==========
function initDigitalSignature() {
  const canvas = document.getElementById("signaturePad");
  const clearBtn = document.getElementById("clearSignature");
  const exportImageBtn = document.getElementById("signatureExportImage");
  const exportPdfBtn = document.getElementById("signatureExportPdf");
  const statusEl = document.getElementById("signatureStatus");
  const nameInput = document.getElementById("signatureName");
  const messageInput = document.getElementById("signatureMessage");

  if (!canvas || !clearBtn || !exportImageBtn || !exportPdfBtn || !statusEl) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let drawing = false;
  let hasSignature = false;
  let lastX = 0;
  let lastY = 0;
  let cssWidth = 0;
  let cssHeight = 0;

  function setStatus(message, type = "") {
    statusEl.textContent = message || "";
    statusEl.className = `signature-status ${type}`.trim();
  }

  function paintCanvasBackground() {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, cssWidth, cssHeight);
  }

  function configureContext() {
    const primary = getComputedStyle(document.documentElement).getPropertyValue("--primary").trim();
    ctx.lineWidth = 2.2;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = primary || "#111111";
  }

  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    const ratio = window.devicePixelRatio || 1;
    cssWidth = Math.max(1, Math.floor(rect.width));
    cssHeight = Math.max(1, Math.floor(rect.height));

    const existingData = hasSignature ? canvas.toDataURL("image/png") : "";
    canvas.width = Math.max(1, Math.floor(cssWidth * ratio));
    canvas.height = Math.max(1, Math.floor(cssHeight * ratio));
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    paintCanvasBackground();
    configureContext();

    if (existingData) {
      const image = new Image();
      image.onload = () => {
        ctx.drawImage(image, 0, 0, cssWidth, cssHeight);
        configureContext();
      };
      image.src = existingData;
    }
  }

  function pointFromEvent(event) {
    const rect = canvas.getBoundingClientRect();
    if (event.touches && event.touches[0]) {
      return {
        x: event.touches[0].clientX - rect.left,
        y: event.touches[0].clientY - rect.top,
      };
    }
    if (event.changedTouches && event.changedTouches[0]) {
      return {
        x: event.changedTouches[0].clientX - rect.left,
        y: event.changedTouches[0].clientY - rect.top,
      };
    }
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  }

  function startDrawing(event) {
    const point = pointFromEvent(event);
    drawing = true;
    lastX = point.x;
    lastY = point.y;
  }

  function draw(event) {
    if (!drawing) return;
    const point = pointFromEvent(event);
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(point.x, point.y);
    ctx.stroke();
    lastX = point.x;
    lastY = point.y;
    hasSignature = true;
  }

  function stopDrawing() {
    drawing = false;
  }

  function clearSignature(shouldClearStatus = true) {
    hasSignature = false;
    paintCanvasBackground();
    configureContext();
    if (shouldClearStatus) setStatus("");
  }

  function drawRoundedRect(context, x, y, width, height, radius) {
    context.beginPath();
    context.moveTo(x + radius, y);
    context.lineTo(x + width - radius, y);
    context.quadraticCurveTo(x + width, y, x + width, y + radius);
    context.lineTo(x + width, y + height - radius);
    context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    context.lineTo(x + radius, y + height);
    context.quadraticCurveTo(x, y + height, x, y + height - radius);
    context.lineTo(x, y + radius);
    context.quadraticCurveTo(x, y, x + radius, y);
    context.closePath();
  }

  function wrapText(context, text, maxWidth) {
    const words = String(text || "").split(/\s+/).filter(Boolean);
    if (!words.length) return [];
    const lines = [];
    let line = words[0];

    for (let i = 1; i < words.length; i += 1) {
      const testLine = `${line} ${words[i]}`;
      const testWidth = context.measureText(testLine).width;
      if (testWidth > maxWidth) {
        lines.push(line);
        line = words[i];
      } else {
        line = testLine;
      }
    }
    lines.push(line);
    return lines;
  }

  function buildExportCanvas() {
    const outCanvas = document.createElement("canvas");
    outCanvas.width = 1400;
    outCanvas.height = 1980;
    const outCtx = outCanvas.getContext("2d");
    if (!outCtx) return null;

    const visitorName = (nameInput?.value || "").trim() || "Portfolio Visitor";
    const visitorMessage = (messageInput?.value || "").trim();
    const now = new Date();
    const timestamp = now.toLocaleString();

    const bgGradient = outCtx.createLinearGradient(0, 0, outCanvas.width, outCanvas.height);
    bgGradient.addColorStop(0, "#f8fff4");
    bgGradient.addColorStop(0.4, "#e5f9d9");
    bgGradient.addColorStop(1, "#d1ffbd");
    outCtx.fillStyle = bgGradient;
    outCtx.fillRect(0, 0, outCanvas.width, outCanvas.height);

    outCtx.globalAlpha = 0.22;
    outCtx.fillStyle = "#9fd88a";
    outCtx.beginPath();
    outCtx.arc(220, 260, 170, 0, Math.PI * 2);
    outCtx.fill();
    outCtx.beginPath();
    outCtx.arc(1190, 1600, 230, 0, Math.PI * 2);
    outCtx.fill();
    outCtx.globalAlpha = 1;

    drawRoundedRect(outCtx, 95, 85, 1210, 1810, 42);
    outCtx.fillStyle = "rgba(255,255,255,0.86)";
    outCtx.fill();
    outCtx.strokeStyle = "rgba(22, 101, 52, 0.18)";
    outCtx.lineWidth = 2;
    outCtx.stroke();

    outCtx.fillStyle = "#1f2937";
    outCtx.font = "700 54px Inter, Segoe UI, Arial, sans-serif";
    outCtx.fillText("Creative Canvas Export", 155, 220);
    outCtx.font = "500 30px Inter, Segoe UI, Arial, sans-serif";
    outCtx.fillStyle = "#166534";
    outCtx.fillText("from Arif Azinuddin Portfolio Website", 155, 270);

    outCtx.fillStyle = "#111827";
    outCtx.font = "700 32px Inter, Segoe UI, Arial, sans-serif";
    outCtx.fillText(`Name: ${visitorName}`, 155, 355);
    outCtx.font = "500 24px Inter, Segoe UI, Arial, sans-serif";
    outCtx.fillStyle = "#475569";
    outCtx.fillText(`Created: ${timestamp}`, 155, 398);

    drawRoundedRect(outCtx, 145, 450, 1110, 630, 30);
    outCtx.fillStyle = "#ffffff";
    outCtx.fill();
    outCtx.strokeStyle = "#bbf7d0";
    outCtx.lineWidth = 3;
    outCtx.stroke();

    outCtx.fillStyle = "#166534";
    outCtx.font = "700 30px Inter, Segoe UI, Arial, sans-serif";
    outCtx.fillText("Your Drawing", 175, 510);

    outCtx.drawImage(canvas, 175, 540, 1050, 500);

    drawRoundedRect(outCtx, 145, 1120, 1110, 575, 30);
    outCtx.fillStyle = "#f8fff4";
    outCtx.fill();
    outCtx.strokeStyle = "#bbf7d0";
    outCtx.lineWidth = 3;
    outCtx.stroke();

    outCtx.fillStyle = "#166534";
    outCtx.font = "700 30px Inter, Segoe UI, Arial, sans-serif";
    outCtx.fillText("Message", 175, 1185);

    outCtx.font = "500 31px Inter, Segoe UI, Arial, sans-serif";
    outCtx.fillStyle = "#1f2937";
    const messageText = visitorMessage || "No message. Just pure creativity.";
    const lines = wrapText(outCtx, messageText, 1035);
    let y = 1245;
    lines.slice(0, 11).forEach((line) => {
      outCtx.fillText(line, 175, y);
      y += 48;
    });

    outCtx.fillStyle = "#6b7280";
    outCtx.font = "500 22px Inter, Segoe UI, Arial, sans-serif";
    outCtx.fillText("Keep creating. Keep experimenting.", 175, 1760);

    return outCanvas;
  }

  function downloadBlobUrl(blobUrl, filename) {
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  function exportAsImage() {
    const outCanvas = buildExportCanvas();
    if (!outCanvas) {
      setStatus("Unable to generate export image.", "error");
      return;
    }
    const imageUrl = outCanvas.toDataURL("image/png");
    downloadBlobUrl(imageUrl, `arif-portfolio-canvas-${Date.now()}.png`);
    setStatus("PNG exported successfully.", "success");
  }

  function exportAsPdf() {
    const outCanvas = buildExportCanvas();
    if (!outCanvas) {
      setStatus("Unable to generate export PDF.", "error");
      return;
    }

    const pdfLib = window.jspdf && window.jspdf.jsPDF ? window.jspdf.jsPDF : null;
    if (!pdfLib) {
      setStatus("PDF library is not loaded. PNG export is still available.", "error");
      return;
    }

    const dataUrl = outCanvas.toDataURL("image/png");
    const pdf = new pdfLib({
      orientation: "portrait",
      unit: "px",
      format: [outCanvas.width, outCanvas.height],
    });
    pdf.addImage(dataUrl, "PNG", 0, 0, outCanvas.width, outCanvas.height);
    const blobUrl = pdf.output("bloburl");
    window.open(blobUrl, "_blank", "noopener,noreferrer");
    setStatus("PDF opened in a new tab.", "success");
  }

  canvas.addEventListener("mousedown", startDrawing);
  canvas.addEventListener("mousemove", draw);
  document.addEventListener("mouseup", stopDrawing);
  canvas.addEventListener("mouseleave", stopDrawing);

  canvas.addEventListener("touchstart", (e) => {
    e.preventDefault();
    startDrawing(e);
  }, { passive: false });
  canvas.addEventListener("touchmove", (e) => {
    e.preventDefault();
    draw(e);
  }, { passive: false });
  canvas.addEventListener("touchend", stopDrawing, { passive: true });
  canvas.addEventListener("touchcancel", stopDrawing, { passive: true });

  clearBtn.addEventListener("click", clearSignature);
  exportImageBtn.addEventListener("click", exportAsImage);
  exportPdfBtn.addEventListener("click", exportAsPdf);

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);
}

// ========== TECH ICON POPUP + DRAG SORT ==========
function initTechIconsInteraction() {
  const iconContainers = document.querySelectorAll("#tools .tech-icons");
  if (!iconContainers.length) return;

  let popup = document.getElementById("deviconPopup");
  if (!popup) {
    popup = document.createElement("div");
    popup.id = "deviconPopup";
    popup.className = "devicon-popup";
    popup.setAttribute("aria-live", "polite");
    document.body.appendChild(popup);
  }

  let popupHideTimer = 0;
  let draggedIcon = null;

  function hidePopup() {
    popup.classList.remove("show");
  }

  function showPopup(icon) {
    const label = icon.dataset.tech || icon.getAttribute("aria-label") || "Tech";
    const rect = icon.getBoundingClientRect();
    popup.textContent = label;
    popup.style.left = `${rect.left + rect.width / 2}px`;
    popup.style.top = `${rect.top}px`;
    popup.classList.add("show");
    clearTimeout(popupHideTimer);
    popupHideTimer = window.setTimeout(hidePopup, 1400);
  }

  iconContainers.forEach((container) => {
    const icons = container.querySelectorAll("i");
    icons.forEach((icon) => {
      const tech = icon.getAttribute("title") || icon.dataset.tech || "";
      if (tech) {
        icon.dataset.tech = tech;
        icon.removeAttribute("title");
        icon.setAttribute("aria-label", tech);
      }

      icon.classList.add("tech-icon-item");
      icon.setAttribute("draggable", "true");
      icon.setAttribute("tabindex", "0");
      icon.setAttribute("role", "button");

      icon.addEventListener("click", () => showPopup(icon));
      icon.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          showPopup(icon);
        }
      });

      icon.addEventListener("dragstart", (e) => {
        draggedIcon = icon;
        icon.classList.add("dragging");
        if (e.dataTransfer) {
          e.dataTransfer.effectAllowed = "move";
          e.dataTransfer.setData("text/plain", icon.dataset.tech || "tech");
        }
      });

      icon.addEventListener("dragend", () => {
        icon.classList.remove("dragging");
        draggedIcon = null;
      });

      icon.addEventListener("dragover", (e) => {
        if (!draggedIcon || draggedIcon === icon) return;
        e.preventDefault();
        const rect = icon.getBoundingClientRect();
        const insertAfter = e.clientX > rect.left + rect.width / 2;
        container.insertBefore(draggedIcon, insertAfter ? icon.nextSibling : icon);
      });

      icon.addEventListener("drop", (e) => {
        e.preventDefault();
      });
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest("#tools .tech-icons i")) hidePopup();
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
      if (modal.id === "ticTacToeModal") {
        handleFightMeModalClosed();
      }
    });
    document.body.style.overflow = "auto";
  }
});

// ========== FOOTER COPYRIGHT YEAR ==========
function updateCopyrightYear() {
  const copyrightEl = document.getElementById("copyrightYear");
  if (copyrightEl) {
    const year = new Date().getFullYear();
    copyrightEl.textContent = year === 2025 ? "2025" : `${year}`;
  }
}

function initWelcomeLoader() {
  const loader = document.getElementById("welcomeLoader");
  if (!loader) return;

  const progress = loader.querySelector(".welcome-loader-progress-fill");
  const durationMs = 3000;
  const fadeOutMs = 650;

  document.body.classList.add("is-loading");
  loader.classList.add("is-active");

  if (progress) {
    progress.style.animation = `welcomeProgressFill ${durationMs}ms linear forwards`;
  }

  window.setTimeout(() => {
    loader.classList.add("is-leaving");
    document.body.classList.remove("is-loading");
    window.setTimeout(() => {
      loader.remove();
    }, fadeOutMs);
  }, durationMs);
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
  initWelcomeLoader();
  updateCopyrightYear();
  enforceFixedUiPositions();
  applyLanguage(currentLanguage);
  initTechIconsInteraction();
  initReferenceRowCarousels();
  initDigitalSignature();
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
  "%cðŸ‘‹ Hello there!",
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




