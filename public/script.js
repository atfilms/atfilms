/**
 * AADITYA T. FILMS — PREMIUM PORTFOLIO INTERACTION ENGINE
 * 
 * Clean, lightweight, modular JavaScript.
 */

/* ==========================================================================
   1. PORTFOLIO DATA STRUCTURE
   ========================================================================== */

   const PROJECTS_DATA = [
    {
      id: "luxury-watch-spec",
      title: "Luxury Watch — Spec Commercial",
      category: "product",
      categoryLabel: "Product Video",
      thumbnail: "assets/videos/Spec Video 1 Final.mp4",
      videoUrl: "assets/videos/Spec Video 1 Final.mp4", 
      shortDescription: "An 8-second high-end macro spec commercial highlighting the intricate details of a luxury timepiece.",
      goal: "Demonstrate precision macro cinematography and dramatic studio lighting to capture the premium textures of a luxury watch.",
      role: "Director | Cinematographer | Editor",
      deliverables: [
        "8-Second Macro Spec Commercial"
      ],
      fullDescription: "A fast-paced, highly detailed exploration of watch mechanics and design. Lit with precision to emphasize the metallic textures, glass reflections, and premium build quality.",
      clientImpact: "Speculative portfolio piece demonstrating high-end commercial product cinematography.",
      btsImages: []
    },
    {
      id: "culinary-pasta-spec",
      title: "Artisanal Pasta — Culinary Spec",
      category: "commercials",
      categoryLabel: "Food & Beverage",
      thumbnail: "assets/videos/Spec Video 2.mp4",
      videoUrl: "assets/videos/Spec Video 2.mp4", 
      shortDescription: "A dynamic culinary spec commercial capturing the textures, motion, and warmth of fresh pasta preparation.",
      goal: "Showcase high-speed tabletop cinematography, appetizing color grading, and tactile sound design for food and beverage brands.",
      role: "Director | Cinematographer | Editor | Colorist",
      deliverables: [
        "Culinary Spec Commercial"
      ],
      fullDescription: "Focused on the sensory details of cooking—steam rising, rich sauce textures, and dynamic plating movement. Lit to create a warm, inviting culinary atmosphere.",
      clientImpact: "Speculative portfolio piece demonstrating commercial food and beverage cinematography.",
      btsImages: []
    }
  ];
  
  /* ==========================================================================
     2. APP INITIALIZATION & DOM CONTROLLERS
     ========================================================================== */
  
  document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initProjectsGrid();
    initModals();
    initContactForm();
    initScrollAnimations();
  });
  
  /* --- NAVIGATION LOGIC --- */
  function initNavigation() {
    const navbar = document.getElementById("navbar");
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
  
    window.addEventListener("scroll", () => {
      if (!navbar) return;
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  
    if (hamburgerBtn && mobileMenu) {
      hamburgerBtn.addEventListener("click", () => {
        hamburgerBtn.classList.toggle("active");
        mobileMenu.classList.toggle("active");
        document.body.style.overflow = mobileMenu.classList.contains("active") ? "hidden" : "";
      });
  
      mobileNavLinks.forEach(link => {
        link.addEventListener("click", () => {
          hamburgerBtn.classList.remove("active");
          mobileMenu.classList.remove("active");
          document.body.style.overflow = "";
        });
      });
    }
  }
  
  /* --- PROJECTS GRID & FILTERING --- */
  function initProjectsGrid() {
    const gridContainer = document.getElementById("projects-grid");
    const filterBtns = document.querySelectorAll(".portfolio-filter-btn");
  
    if (!gridContainer) return;
  
    function renderProjects(filterCategory = "all") {
      gridContainer.innerHTML = "";
  
      const filtered = filterCategory === "all" 
        ? PROJECTS_DATA 
        : PROJECTS_DATA.filter(p => p.category === filterCategory);
  
      filtered.forEach(project => {
        const card = document.createElement("article");
        card.className = "project-card reveal-on-scroll visible";
        card.setAttribute("data-project-id", project.id);
  
        const isMp4Thumb = project.thumbnail && project.thumbnail.toLowerCase().endsWith(".mp4");
        const mediaMarkup = isMp4Thumb
          ? `<video src="${project.thumbnail}" class="project-thumb" muted loop playsinline onmouseover="this.play()" onmouseout="this.pause()" style="width:100%; height:100%; object-fit:cover;"></video>`
          : `<img src="${project.thumbnail}" alt="${project.title}" class="project-thumb" loading="lazy" />`;
  
        card.innerHTML = `
          <div class="project-thumb-wrapper">
            ${mediaMarkup}
            <span class="project-category-badge">${project.categoryLabel}</span>
            <div class="project-play-icon">
              <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
          <div class="project-body">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.shortDescription}</p>
            <div class="project-card-footer">
              <span>View Case Study</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </div>
        `;
  
        card.addEventListener("click", () => openProjectModal(project.id));
        gridContainer.appendChild(card);
      });
    }
  
    renderProjects("all");
  
    filterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const category = btn.getAttribute("data-filter");
        renderProjects(category);
      });
    });
  }
  
  /* --- MODALS ENGINE --- */
  function initModals() {
    const projectModal = document.getElementById("project-modal");
    const modalCloseBtn = document.getElementById("modal-close-btn");
  
    if (modalCloseBtn && projectModal) {
      modalCloseBtn.addEventListener("click", closeProjectModal);
      projectModal.addEventListener("click", (e) => {
        if (e.target === projectModal) closeProjectModal();
      });
    }
  
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeProjectModal();
      }
    });
  }
  
  function openProjectModal(projectId) {
    const project = PROJECTS_DATA.find(p => p.id === projectId);
    if (!project) return;
  
    const modal = document.getElementById("project-modal");
    const videoWrapper = document.getElementById("modal-video-container");
    const categoryEl = document.getElementById("modal-category");
    const titleEl = document.getElementById("modal-title");
    const goalEl = document.getElementById("modal-goal");
    const roleEl = document.getElementById("modal-role");
    const deliverablesEl = document.getElementById("modal-deliverables");
    const descEl = document.getElementById("modal-description");
    const impactEl = document.getElementById("modal-impact");
    const btsGalleryEl = document.getElementById("modal-bts-gallery");
  
    const isLocalVideoFile = project.videoUrl && String(project.videoUrl).toLowerCase().endsWith(".mp4");
    if (isLocalVideoFile) {
      videoWrapper.innerHTML = `<video src="${project.videoUrl}" controls autoplay playsinline></video>`;
    } else {
      videoWrapper.innerHTML = `<iframe src="${project.videoUrl}" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
    }
    
    if (categoryEl) categoryEl.textContent = project.categoryLabel;
    if (titleEl) titleEl.textContent = project.title;
    if (goalEl) goalEl.textContent = project.goal;
    if (roleEl) roleEl.textContent = project.role;
    if (descEl) descEl.textContent = project.fullDescription;
    if (impactEl) impactEl.textContent = project.clientImpact;
  
    if (deliverablesEl) {
      deliverablesEl.innerHTML = project.deliverables.map(d => `<li>${d}</li>`).join('');
    }
  
    if (btsGalleryEl) {
      btsGalleryEl.innerHTML = project.btsImages && project.btsImages.length > 0 
        ? project.btsImages.map(imgSrc => `<img src="${imgSrc}" alt="Behind the scenes" style="width:100%; height:180px; object-fit:cover; border-radius:8px;" loading="lazy" />`).join('')
        : "";
    }
  
    if (modal) modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
  
  function closeProjectModal() {
    const modal = document.getElementById("project-modal");
    const videoWrapper = document.getElementById("modal-video-container");
    if (modal) modal.classList.remove("active");
    if (videoWrapper) videoWrapper.innerHTML = "";
    document.body.style.overflow = "";
  }
  
  /* --- CONTACT FORM & CONVERSION ENGINE --- */
  function initContactForm() {
    const form = document.getElementById("inquiry-form");
    const successBox = document.getElementById("form-success-box");
    const serviceDropdown = document.getElementById("service-select");
  
    window.selectServiceAndScroll = function(serviceName) {
      if (serviceDropdown) {
        for (let option of serviceDropdown.options) {
          if (option.value.toLowerCase().includes(serviceName.toLowerCase()) || serviceName.toLowerCase().includes(option.value.toLowerCase())) {
            option.selected = true;
            break;
          }
        }
      }
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    };
  
    if (!form) return;
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const submitBtn = form.querySelector("button[type='submit']");
      submitBtn.innerHTML = `<span>Processing...</span>`;
      submitBtn.disabled = true;
  
      setTimeout(() => {
        form.style.display = "none";
        if (successBox) {
          const refId = "AAT-" + Math.floor(100000 + Math.random() * 900000);
          const refSpan = document.getElementById("ref-number");
          if (refSpan) refSpan.textContent = refId;
          successBox.classList.add("active");
        }
      }, 1000);
    });
  }
  
  /* --- SCROLL REVEAL ANIMATIONS --- */
  function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.1 });
  
    document.querySelectorAll(".reveal-on-scroll").forEach(el => observer.observe(el));
  }