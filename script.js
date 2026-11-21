
/* ============================================================
   Emon Hassan — Portfolio interactions and content renderer
   ============================================================ */
(() => {
  "use strict";
  const $ = id => document.getElementById(id);
  const esc = value => String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const formula = value => esc(value).replace(/([A-Za-z])([0-9]+)(?![0-9.])/g, "$1<sub>$2</sub>");
  const url = value => /^(https?:\/\/|mailto:)/i.test(String(value || "").trim()) ? String(value).trim() : "";
  const text = (id, value) => { const el = $(id); if (el) el.textContent = value ?? ""; };

  if (typeof PROFILE === "undefined" || typeof PUBLICATIONS === "undefined") {
    document.body.innerHTML = '<main style="max-width:700px;margin:80px auto;padding:24px;font:16px Arial"><h1>Portfolio content could not be loaded</h1><p>Check that content.js is in the repository root and that the filename is exactly content.js.</p></main>';
    return;
  }

  // Hero and profile details
  text("navName", PROFILE.shortName || PROFILE.name);
  text("navSub", PROFILE.role || "Physics Researcher");
  text("heroEyebrow", PROFILE.role);
  const heroName = $("heroName");
  if (heroName) {
    const nameParts = String(PROFILE.name || "").trim().split(/\s+/).filter(Boolean);
    const familyName = nameParts.pop() || "";
    heroName.innerHTML = `${esc(nameParts.join(" "))} <span>${esc(familyName)}.</span>`;
  }
  text("heroLocation", PROFILE.location);
  text("heroEmail", PROFILE.email);
  text("portraitName", PROFILE.name);
  text("portraitRole", PROFILE.role);
  text("currentTheme", PROFILE.currentTheme);
  text("footerName", PROFILE.name);
  text("footerYear", new Date().getFullYear());
  text("contactText", CONTACT_TEXT);
  document.title = `${PROFILE.name} | Research Portfolio`;

  const heroEmail = $("heroEmail");
  if (heroEmail) heroEmail.href = `mailto:${PROFILE.email}`;

  const summary = $("heroSummary");
  if (summary) summary.textContent =
    "I explore functional materials through first-principles calculations, with research interests spanning condensed matter physics, hydrogen storage and sustainable energy technologies.";

  const photo = $("profilePhoto");
  if (photo) {
    photo.src = PROFILE.photo || "";
    photo.alt = `Portrait of ${PROFILE.name}`;
    photo.addEventListener("error", () => {
      const fallback = document.createElement("div");
      fallback.className = "photo-fallback";
      fallback.textContent = String(PROFILE.name || "EH").split(/\s+/).map(x => x[0]).join("").slice(0, 2);
      photo.replaceWith(fallback);
    }, { once: true });
  }

  const heroSpecialties = $("heroSpecialties");
  if (heroSpecialties) {
    heroSpecialties.innerHTML = (HERO_SPECIALTIES || [])
      .map(x => `<span>${esc(x)}</span>`).join("");
  }

  const links = (LINKS || []).filter(x => Array.isArray(x) && url(x[1]));
  const badges = $("profileBadges");
  if (badges) badges.innerHTML = (PROFILE.badges || [])
    .map(x => `<span>${esc(x)}</span>`).join("");

  // CV button appears only after PROFILE.cv receives a valid file path.
  const cv = $("cvButton");
  if (cv && PROFILE.cv && String(PROFILE.cv).trim()) {
    cv.href = PROFILE.cv;
    cv.hidden = false;
    cv.setAttribute("download", "");
  }

  text("statPapers", String((PUBLICATIONS || []).filter(p => p.status === "published").length).padStart(2, "0"));
  text("statTalks", String((TALKS || []).length).padStart(2, "0"));
  text("statTools", PROFILE.statTools || "10+");

  // About section
  const about = $("aboutText");
  if (about) about.innerHTML = (ABOUT || [])
    .map(p => `<p>${esc(p)}</p>`).join("");

  const facts = $("aboutFacts");
  if (facts) facts.innerHTML = (ABOUT_FACTS || [])
    .map(([k, v]) => `<div class="fact"><small>${esc(k)}</small><strong>${esc(v)}</strong></div>`)
    .join("");

  // Education
  const education = $("educationList");
  if (education) education.innerHTML = (EDUCATION || []).map((item, i) => `
    <article class="education-item">
      <div class="education-index">0${i + 1}</div>
      <div class="education-main">
        <div class="education-period">${esc(item.period)}</div>
        <div class="education-title-row">
          <h3>${formula(item.degree)}</h3>
          ${item.current ? '<span class="current-pill">IN PROGRESS</span>' : ""}
        </div>
        <h4>${esc(item.institution)}</h4>
        <p class="education-place">${esc(item.location)}</p>
        <p class="education-description">${formula(item.description)}</p>
        <div class="education-highlights">
          ${(item.highlights || []).map(x => `<span>${esc(x)}</span>`).join("")}
        </div>
      </div>
    </article>`).join("");

  // Research cards
  const research = $("researchGrid");
  if (research) research.innerHTML = (INTERESTS || []).map(item => `
    <article class="research-card">
      <div class="research-card-top">
        <span>${esc(item.number)}</span><span class="research-cross">✳</span>
      </div>
      <h3>${formula(item.title)}</h3>
      <p>${formula(item.description)}</p>
      <div class="research-tags">
        ${(item.tags || []).map(t => `<span>${esc(t)}</span>`).join("")}
      </div>
    </article>`).join("");

  // Experience cards
  const experience = $("experienceGrid");
  if (experience) experience.innerHTML = (EXPERIENCE || []).map((item, i) => `
    <article class="experience-card">
      <div class="experience-card-head">
        <span class="experience-number">0${i + 1}</span>
        <span class="experience-category">${esc(item.category)}</span>
      </div>
      <p class="experience-period">${esc(item.period)}</p>
      <h3>${formula(item.title)}</h3>
      <h4>${esc(item.role)}</h4>
      <p class="experience-description">${formula(item.description)}</p>
    </article>`).join("");

  // Publications: search, filters and show all
  const pubHost = $("publicationList");
  const search = $("publicationSearch");
  const filterHost = $("publicationFilters");
  const count = $("publicationCount");
  const showMore = $("showMore");

  let filter = "all", query = "", expanded = false;
  const limit = 4;

  const citation = p =>
    `${p.authors} (${p.year}). ${p.title}. ${p.journal}.${p.doi ? ` https://doi.org/${p.doi}` : ""}`;

  function renderPubs() {
    if (!pubHost) return;

    const found = PUBLICATIONS.filter(p => {
      const stateOK = filter === "all" || p.status === filter;
      const words = [p.title, p.authors, p.journal, p.year, p.doi]
        .join(" ").toLowerCase();
      return stateOK && words.includes(query);
    });

    const showAll = expanded || query !== "" || filter !== "all";
    const visible = showAll ? found : found.slice(0, limit);

    if (count) count.textContent =
      `${found.length} ${found.length === 1 ? "record" : "records"}`;

    pubHost.innerHTML = visible.length ? visible.map(p => {
      const i = PUBLICATIONS.indexOf(p);
      const isPending = p.status === "under-review";

      return `
        <article class="publication-item">
          <div class="publication-year">${esc(p.year)}</div>
          <div class="publication-body">
            <div class="publication-heading">
              <h3>${formula(p.title)}</h3>
              <span class="publication-status ${isPending ? "pending" : "published"}">
                ${isPending ? "Under review" : "Published"}
              </span>
            </div>
            <p class="publication-authors">${esc(p.authors)}</p>
            <p class="publication-journal">${esc(p.journal)}</p>
            <div class="publication-links">
              ${p.doi ? `<a href="https://doi.org/${esc(p.doi)}" target="_blank" rel="noopener noreferrer">Read paper ↗</a>` : ""}
              <button type="button" data-citation="${i}">Copy citation</button>
            </div>
          </div>
        </article>`;
    }).join("") : '<p class="empty-state">No publications match your search.</p>';

    if (showMore) showMore.hidden = showAll || found.length <= limit;
  }

  if (search) search.addEventListener("input", e => {
    query = e.target.value.trim().toLowerCase();
    expanded = false;
    renderPubs();
  });

  if (filterHost) filterHost.addEventListener("click", e => {
    const button = e.target.closest("[data-filter]");
    if (!button) return;

    filter = button.dataset.filter;
    expanded = false;

    filterHost.querySelectorAll("button").forEach(b =>
      b.classList.toggle("active", b === button)
    );
    renderPubs();
  });

  if (showMore) showMore.addEventListener("click", () => {
    expanded = true;
    renderPubs();
  });

  renderPubs();

  // Conferences
  const conferences = $("conferenceList");
  if (conferences) conferences.innerHTML = (TALKS || []).map(item => `
    <article class="conference-item">
      <div class="conference-date">${esc(item.date)}</div>
      <div class="conference-main">
        <span>${esc(item.kind)}</span>
        <h3>${formula(item.title)}</h3>
        <p>${esc(item.event)}</p>
      </div>
    </article>`).join("");

  // Skills
  const skills = $("skillsGroups");
  if (skills) skills.innerHTML = Object.entries(SKILLS || {})
    .map(([name, values], i) => `
      <article class="skill-group">
        <div class="skill-group-head"><span>0${i + 1}</span><h3>${esc(name)}</h3></div>
        <div class="skill-chips">
          ${values.map(v => `<span>${esc(v)}</span>`).join("")}
        </div>
      </article>`).join("");

  // Contact and links
  text("contactText", CONTACT_TEXT || "");
  text("contactEmail", PROFILE.email);

  const contactEmail = $("contactEmail");
  if (contactEmail) contactEmail.href = `mailto:${PROFILE.email}`;

  const scholar = links.find(x => x[0] === "Google Scholar");
  const scholarLink = $("scholarLink");
  if (scholar && scholarLink) scholarLink.href = url(scholar[1]);

  const contactLinks = $("contactLinks");
  if (contactLinks) contactLinks.innerHTML = links
    .filter(x => x[0] !== "Email")
    .map(([name, href]) => `
      <a href="${esc(url(href))}" target="_blank" rel="noopener noreferrer">
        ${esc(name)} ↗
      </a>`).join("");

  text("footerYear", new Date().getFullYear());
  text("footerName", PROFILE.name);

  // Theme switch
  const root = document.documentElement;
  const themeButton = $("themeToggle");
  const themeIcon = $("themeIcon");

  let saved = null;
  try { saved = localStorage.getItem("emon-modern-theme"); } catch (_) {}

  const initialTheme = saved ||
    (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  function setTheme(theme) {
    root.dataset.theme = theme;
    if (themeIcon) themeIcon.textContent = theme === "dark" ? "☀" : "☾";
    try { localStorage.setItem("emon-modern-theme", theme); } catch (_) {}
  }

  setTheme(initialTheme);

  if (themeButton) themeButton.addEventListener("click", () => {
    setTheme(root.dataset.theme === "dark" ? "light" : "dark");
  });

  // Mobile menu
  const menuToggle = $("menuToggle");
  const nav = $("navLinks");

  function closeMenu() {
    if (!menuToggle || !nav) return;
    menuToggle.classList.remove("open");
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const open = !nav.classList.contains("open");
      nav.classList.toggle("open", open);
      menuToggle.classList.toggle("open", open);
      menuToggle.setAttribute("aria-expanded", String(open));
    });

    nav.querySelectorAll("a").forEach(a =>
      a.addEventListener("click", closeMenu)
    );

    document.addEventListener("keydown", e => {
      if (e.key === "Escape") closeMenu();
    });
  }

  // Toast notifications
  const toast = $("toast");
  let toastTimer;

  function notify(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("visible"), 2200);
  }

  // Copy citations
  document.addEventListener("click", async e => {
    const button = e.target.closest("[data-citation]");
    if (!button) return;

    const paper = PUBLICATIONS[Number(button.dataset.citation)];
    if (!paper) return;

    const value = citation(paper);

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(value);
      } else {
        const field = document.createElement("textarea");
        field.value = value;
        field.style.position = "fixed";
        field.style.opacity = "0";
        document.body.appendChild(field);
        field.select();
        const ok = document.execCommand("copy");
        field.remove();
        if (!ok) throw new Error("Copy failed");
      }
      notify("Citation copied to clipboard.");
    } catch (_) {
      notify("Copy is unavailable in this browser.");
    }
  });

  // Reading progress and back-to-top
  const progress = $("scrollProgress");
  const backTop = $("backTop");

  function onScroll() {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;

    if (progress) {
      progress.style.width = `${max > 0 ? doc.scrollTop / max * 100 : 0}%`;
    }

    if (backTop) backTop.classList.toggle("visible", doc.scrollTop > 550);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (backTop) backTop.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );

  // Reveal sections and active navigation
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  if ("IntersectionObserver" in window) {
    if (!reduceMotion) {
      const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08 });

      document.querySelectorAll(".reveal").forEach(el =>
        revealObserver.observe(el)
      );
    } else {
      document.querySelectorAll(".reveal").forEach(el =>
        el.classList.add("is-visible")
      );
    }

    const navLinks = [...document.querySelectorAll("#navLinks a")];
    const navObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(a =>
          a.classList.toggle("active",
            a.getAttribute("href") === `#${entry.target.id}`)
        );
      });
    }, { rootMargin: "-30% 0px -60% 0px" });

    document.querySelectorAll("main section[id]").forEach(section =>
      navObserver.observe(section)
    );
  } else {
    document.querySelectorAll(".reveal").forEach(el =>
      el.classList.add("is-visible")
    );
  }
})();
