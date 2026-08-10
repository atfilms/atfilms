/**
 * AADITYA T. FILMS — PREMIUM PORTFOLIO INTERACTION ENGINE
 * 
 * Clean, lightweight, modular JavaScript.
 * Easily customizable data structures for Projects, Photography, and Services.
 */

/* ==========================================================================
   1. PORTFOLIO DATA STRUCTURE (Easy to customize & add future projects)
   ========================================================================== */

const PROJECTS_DATA = [
  {
    id: "aura-coffee",
    title: "Aura Coffee Co. — 'The Art of Craft'",
    category: "commercials",
    categoryLabel: "Commercial Video",
    thumbnail: "assets/images/project_coffee.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1", // Replace with actual project video ID
    shortDescription: "A cinematic commercial highlighting artisanal pour-over craftsmanship to boost weekend cafe foot traffic.",
    goal: "Create a visual moodpiece capturing the sensory experience of artisanal coffee brewing to drive local foot traffic and position Aura as a premium regional coffee brand.",
    role: "Director | Cinematographer | Editor | Colorist",
    deliverables: [
      "30-Second Cinema & TV Commercial",
      "Three 9:16 Vertical Instagram/TikTok Cuts",
      "10 High-Resolution Promotional Stills for Web & Print"
    ],
    fullDescription: "Shot on RED Gemini 5K with vintage Leica R lenses, this commercial focuses on intimate macro textures—steaming espresso, metallic pour-over kettles, and warm morning ambient light. The sound design combines soft acoustic vinyl crackles with rich espresso extraction audio.",
    clientImpact: "+42% increase in weekend cafe traffic within 30 days of campaign launch.",
    btsImages: [
      "assets/images/project_coffee.jpg",
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: "apex-heights",
    title: "The Apex Heights Architectural Sanctuary",
    category: "realestate",
    categoryLabel: "Real Estate Film",
    thumbnail: "assets/images/project_realestate.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
    shortDescription: "An immersive twilight architectural film capturing a modern $12M glass estate for international buyers.",
    goal: "Showcase the seamless indoor-outdoor luxury lifestyle of a $12M hilltop architectural masterpiece to high-net-worth international real estate buyers.",
    role: "Director of Photography | FPV Drone Pilot | Lead Editor",
    deliverables: [
      "2.5-Minute Cinematic Walkthrough Film",
      "60-Second Social Media Reel with Dynamic FPV Sequences",
      "Full Aerial Photography Package (15 Photos)"
    ],
    fullDescription: "Combining smooth gimbal moves with acrobatic indoor-to-outdoor FPV drone passes, this film takes viewers on an emotional journey through the property. Color graded in DaVinci Resolve with a warm sunset palette.",
    clientImpact: "Property under contract within 18 days of video campaign publication.",
    btsImages: [
      "assets/images/project_realestate.jpg",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: "vanguard-athletics",
    title: "Vanguard Athletics — 'Pushed Beyond'",
    category: "sports",
    categoryLabel: "Sports Highlight",
    thumbnail: "assets/images/project_sports.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
    shortDescription: "High-intensity athletic spotlight featuring elite sprinter training under stadium floodlights.",
    goal: "Ignite hype for Vanguard's new high-performance athletic apparel line with a raw, high-tempo training film.",
    role: "Cinematographer | Motion Editor | Sound Designer",
    deliverables: [
      "60-Second Brand Anthem Film",
      "Four Individual Athlete Spotlight Clips",
      "Custom Sound Design & Rhythmic Score Mix"
    ],
    fullDescription: "Filmed at 120fps under high-contrast stadium lighting. Used high-speed tracking rigs to capture intense close-ups of sweat drops, muscle tension, and explosive sprint starts.",
    clientImpact: "Generated over 1.2M organic views across social media channels during launch week.",
    btsImages: [
      "assets/images/project_sports.jpg",
      "https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: "elysian-wedding",
    title: "Elysian Estate — 'Forever & Always'",
    category: "weddings",
    categoryLabel: "Wedding Highlight",
    thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
    shortDescription: "An intimate, timeless wedding film capturing emotional vows and sunset cliffside celebrations.",
    goal: "Capture the emotional essence of a luxury cliffside destination wedding into a heirloom cinematic film.",
    role: "Lead Cinematographer | Colorist",
    deliverables: [
      "5-Minute Narrative Highlight Film",
      "1-Minute Teaser Film for Social Media",
      "Full Ceremony & Speeches Multi-Cam Edit"
    ],
    fullDescription: "Filmed with dual Sony FX6 cinema cameras and lavalier audio recorders to capture clear vows amidst ocean breeze. Soft organic color grading with romantic pastel tones.",
    clientImpact: "Cherished lifetime film delivered in custom wooden 4K presentation box.",
    btsImages: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: "kona-fest",
    title: "Kona Music Festival — 'Unfiltered Energy'",
    category: "brandfilms",
    categoryLabel: "Event Coverage",
    thumbnail: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
    shortDescription: "Fast-paced 24-hour turnaround recap capturing the electric atmosphere of a 15,000-person music festival.",
    goal: "Deliver a fast-turnaround recap video during the event to boost ticket presales for the following year.",
    role: "Lead Videographer | On-site Editor",
    deliverables: [
      "90-Second Festival Official Recap Film",
      "Daily Same-Day Social Media Highlights",
      "Artist Performance Stills Collection"
    ],
    fullDescription: "Overcoming low-light venue constraints with fast f/1.2 prime lenses and wireless video transmission. Edited live in an on-site trailer for immediate overnight publication.",
    clientImpact: "Early-bird tickets for 2027 festival sold out in record 4 hours.",
    btsImages: [
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: "luminary-audio",
    title: "Luminary Audio — Studio Acoustic Spotlight",
    category: "commercials",
    categoryLabel: "Product Video",
    thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
    shortDescription: "Moody macro product reveal highlighting precision aluminum milling and audiophile acoustics.",
    goal: "Elicit desire for high-end flagship audiophile headphones through tactile close-up lighting and macro camera movements.",
    role: "Director | Lighting Cameraman | Post Editor",
    deliverables: [
      "45-Second Flagship Product Reveal",
      "Interactive 360-Degree Web Video Loop",
      "Studio Commercial Still Photography"
    ],
    fullDescription: "Built custom motorized turntable rigs and light-sweeping motion stages. Focused on tactile brushed aluminum textures and driver diaphragm precision.",
    clientImpact: "Pre-orders exceeded initial production run by 210%.",
    btsImages: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1000&q=80"
    ]
  }
];

/* ==========================================================================
   2. DEMO REEL VIDEO CONFIGURATION
   ========================================================================== */

const DEMO_REEL_CONFIG = {
  src: "assets/videos/demo-reel.mp4",
  poster: "assets/images/hero_cinematic.jpg"
};

/* ==========================================================================
   3. PHOTOGRAPHY GALLERY DATA
   ========================================================================== */

const PHOTOGRAPHY_DATA = [
  {
    id: "p1",
    title: "Rembrandt In Shadows",
    category: "portrait",
    categoryLabel: "Portrait",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80",
    specs: "Leica SL2 • 85mm f/1.4 • ISO 100",
    tall: true
  },
  {
    id: "p2",
    title: "Mist Over Pacific Coast",
    category: "landscape",
    categoryLabel: "Landscape",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
    specs: "Sony A7R V • 24mm f/8.0 • ISO 100",
    tall: false
  },
  {
    id: "p3",
    title: "Tokyo Neon Reflections",
    category: "street",
    categoryLabel: "Street",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1000&q=80",
    specs: "Leica Q2 • 28mm f/1.7 • ISO 800",
    tall: false
  },
  {
    id: "p4",
    title: "Brutalist Glass & Steel",
    category: "architecture",
    categoryLabel: "Architecture",
    image: "assets/images/project_realestate.jpg",
    specs: "Fujifilm GFX 100 II • 32mm f/11 • ISO 100",
    tall: true
  },
  {
    id: "p5",
    title: "Highland Solitude",
    category: "travel",
    categoryLabel: "Travel",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1000&q=80",
    specs: "Canon R5 • 35mm f/2.0 • ISO 200",
    tall: false
  },
  {
    id: "p6",
    title: "Ancient Redwood Canopy",
    category: "nature",
    categoryLabel: "Nature",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=80",
    specs: "Hasselblad X2D • 45mm f/5.6 • ISO 100",
    tall: true
  }
];

/* ==========================================================================
   3. APP INITIALIZATION & DOM CONTROLLERS
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initProjectsGrid();
  initPhotographyGallery();
  initModalsAndLightbox();
  initContactForm();
  initScrollAnimations();
});

/* --- NAVIGATION LOGIC --- */
function initNavigation() {
  const navbar = document.getElementById("navbar");
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  // Sticky navbar shadow on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Mobile menu toggle
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

      card.innerHTML = `
        <div class="project-thumb-wrapper">
          <img src="${project.thumbnail}" alt="${project.title}" class="project-thumb" loading="lazy" />
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

  // Initial render
  renderProjects("all");

  // Filter button handlers
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-filter");
      renderProjects(category);
    });
  });
}

/* --- PHOTOGRAPHY GALLERY & FILTERING --- */
function initPhotographyGallery() {
  const galleryContainer = document.getElementById("photo-gallery-grid");
  const filterBtns = document.querySelectorAll(".photo-filter-btn");

  if (!galleryContainer) return;

  function renderPhotos(filterCategory = "all") {
    galleryContainer.innerHTML = "";

    const filtered = filterCategory === "all"
      ? PHOTOGRAPHY_DATA
      : PHOTOGRAPHY_DATA.filter(p => p.category === filterCategory);

    filtered.forEach((photo, index) => {
      const card = document.createElement("div");
      card.className = `photo-card ${photo.tall ? 'tall' : ''} reveal-on-scroll visible`;
      
      card.innerHTML = `
        <img src="${photo.image}" alt="${photo.title}" loading="lazy" />
        <div class="photo-card-overlay">
          <span class="photo-category">${photo.categoryLabel}</span>
          <h4 class="photo-title">${photo.title}</h4>
        </div>
      `;

      card.addEventListener("click", () => openLightbox(index, filtered));
      galleryContainer.appendChild(card);
    });
  }

  renderPhotos("all");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderPhotos(btn.getAttribute("data-photo-filter"));
    });
  });
}

/* --- MODALS & LIGHTBOX ENGINE --- */
let currentLightboxList = [];
let currentLightboxIndex = 0;

function openDemoReelModal() {
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

  if (!modal || !videoWrapper || !categoryEl || !titleEl || !goalEl || !roleEl || !deliverablesEl || !descEl || !impactEl) return;

  const demoVideoSrc = DEMO_REEL_CONFIG.src || "assets/videos/demo-reel.mp4";

  videoWrapper.innerHTML = `<video src="${demoVideoSrc}" poster="${DEMO_REEL_CONFIG.poster || ''}" controls autoplay playsinline></video>`;

  categoryEl.textContent = "Demo Reel";
  titleEl.textContent = "Aaditya T. Films — Demo Reel";
  goalEl.textContent = "A cinematic visual overview of my direction, cinematography, editing, and commercial storytelling capability.";
  roleEl.textContent = "Director | Cinematographer | Editor | Colorist";
  descEl.textContent = "This reel brings together visual direction, commercial craft, movement, and atmosphere in a concise story-led format.";
  impactEl.textContent = "Available for campaigns, commercial work, and narrative brand films.";

  deliverablesEl.innerHTML = `
    <li>Cinematic short-form brand work</li>
    <li>Commercial campaign direction</li>
    <li>Visual storytelling & post-production</li>
  `;

  if (btsGalleryEl) {
    btsGalleryEl.innerHTML = `<img src="${DEMO_REEL_CONFIG.poster || 'assets/images/hero_cinematic.jpg'}" alt="Demo reel poster" style="width:100%; height:180px; object-fit:cover; border-radius:8px;" loading="lazy" />`;
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function initModalsAndLightbox() {
  const projectModal = document.getElementById("project-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const lightboxModal = document.getElementById("lightbox-modal");
  const lightboxCloseBtn = document.getElementById("lightbox-close-btn");
  const lightboxPrevBtn = document.getElementById("lightbox-prev");
  const lightboxNextBtn = document.getElementById("lightbox-next");

  // Close handlers
  if (modalCloseBtn && projectModal) {
    modalCloseBtn.addEventListener("click", closeProjectModal);
    projectModal.addEventListener("click", (e) => {
      if (e.target === projectModal) closeProjectModal();
    });
  }

  if (lightboxCloseBtn && lightboxModal) {
    lightboxCloseBtn.addEventListener("click", closeLightbox);
    lightboxModal.addEventListener("click", (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  if (lightboxPrevBtn) lightboxPrevBtn.addEventListener("click", prevLightboxImage);
  if (lightboxNextBtn) lightboxNextBtn.addEventListener("click", nextLightboxImage);

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProjectModal();
      closeLightbox();
    }
    if (lightboxModal && lightboxModal.classList.contains("active")) {
      if (e.key === "ArrowLeft") prevLightboxImage();
      if (e.key === "ArrowRight") nextLightboxImage();
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

  // Populate data
  const isLocalVideoFile = project.videoUrl && String(project.videoUrl).toLowerCase().endsWith(".mp4");
  if (isLocalVideoFile) {
    videoWrapper.innerHTML = `<video src="${project.videoUrl}" controls autoplay playsinline></video>`;
  } else {
    videoWrapper.innerHTML = `<iframe src="${project.videoUrl}" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
  }
  categoryEl.textContent = project.categoryLabel;
  titleEl.textContent = project.title;
  goalEl.textContent = project.goal;
  roleEl.textContent = project.role;
  descEl.textContent = project.fullDescription;
  impactEl.textContent = project.clientImpact;

  deliverablesEl.innerHTML = project.deliverables.map(d => `<li>${d}</li>`).join('');

  if (btsGalleryEl && project.btsImages) {
    btsGalleryEl.innerHTML = project.btsImages.map(imgSrc => `
      <img src="${imgSrc}" alt="Behind the scenes" style="width:100%; height:180px; object-fit:cover; border-radius:8px;" loading="lazy" />
    `).join('');
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  const videoWrapper = document.getElementById("modal-video-container");
  if (modal) modal.classList.remove("active");
  if (videoWrapper) videoWrapper.innerHTML = ""; // Stop video playback
  document.body.style.overflow = "";
}

function openLightbox(index, photoList) {
  currentLightboxList = photoList;
  currentLightboxIndex = index;

  updateLightboxContent();
  const lightboxModal = document.getElementById("lightbox-modal");
  if (lightboxModal) {
    lightboxModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function updateLightboxContent() {
  const photo = currentLightboxList[currentLightboxIndex];
  if (!photo) return;

  const imgEl = document.getElementById("lightbox-img");
  const titleEl = document.getElementById("lightbox-title");
  const specsEl = document.getElementById("lightbox-specs");

  if (imgEl) imgEl.src = photo.image;
  if (titleEl) titleEl.textContent = photo.title;
  if (specsEl) specsEl.textContent = photo.specs;
}

function prevLightboxImage() {
  if (currentLightboxList.length === 0) return;
  currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxList.length) % currentLightboxList.length;
  updateLightboxContent();
}

function nextLightboxImage() {
  if (currentLightboxList.length === 0) return;
  currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxList.length;
  updateLightboxContent();
}

function closeLightbox() {
  const lightboxModal = document.getElementById("lightbox-modal");
  if (lightboxModal) lightboxModal.classList.remove("active");
  document.body.style.overflow = "";
}

/* --- CONTACT FORM & CONVERSION ENGINE --- */
function initContactForm() {
  const form = document.getElementById("inquiry-form");
  const successBox = document.getElementById("form-success-box");
  const serviceDropdown = document.getElementById("service-select");

  // Service CTA Quick Autofill Link
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
    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML = `<span>Processing...</span>`;
    submitBtn.disabled = true;

    // Simulate fast professional submission response
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
