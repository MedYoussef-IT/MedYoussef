const projectsData = {
  1: {
    title: "SoccerTraining",
    launch: "OCT / 2023",
    tags: ["Android App", "Sports", "Training"],
    overview:
      "SoccerTraining is a mobile application designed to help football players improve their skills through structured video training...",
    features: [
      "Multiple football training categories",
      "Video-based learning using YouTube integration",
      "Custom JSON data structure built from scratch",
      "Simple and fast navigation",
      "Offline-friendly structure for content listing",
    ],
    technologies: ["Java", "JSON", "Android SDK"],
    liveLink: "",
    liveEnabled: false,
    githubLink: "https://github.com/MedYoussef-IT/SoccerTraining/",
    secondaryEnabled: true,
    image: "projects/soccer.png",
  },

  2: {
    title: "NuHub",
    launch: "DEC / 2023",
    tags: ["Android App", "Islamic App"],
    overview:
      "NuHub is an Islamic mobile application created to support Muslims in their daily religious practices...",
    features: [
      "Accurate prayer times using free APIs",
      "Offline Quran and Hadith access",
      "Audio recitation and Tafsir support",
      "Tasbih counter",
      "Hijri calendar",
      "Clean and simple user interface",
    ],
    technologies: ["Java", "JSON", "Android SDK", "Public APIs"],
    liveLink: "",
    liveEnabled: false,
    githubLink: "https://github.com/MedYoussef-IT/NurHub",
    secondaryEnabled: true,
    image: "projects/nurhub.png",
  },

  3: {
    title: "PSDonation",
    launch: "APR / 2024",
    tags: ["Android App", "Charity", "Awareness"],
    overview:
      "PSDonation is a mobile application created to raise awareness and support donations for Palestinians...",
    features: [
      "History of Palestine",
      "Interactive real map",
      "Collection of donation links",
      "Simple and informative UI",
      "Awareness-focused content",
    ],
    technologies: ["Java", "Android SDK"],
    liveLink: "",
    liveEnabled: false,
    githubLink: "https://github.com/MedYoussef-IT/PSDonation",
    secondaryEnabled: true,
    image: "projects/ps.png",
  },

  4: {
    title: "Agenda-employees",
    launch: "AUG / 2024",
    tags: ["Web App", "Management System"],
    overview: "Agenda-employees is a complete employee management system...",
    features: [
      "Employee agenda management",
      "Add, remove, and update employee information",
      "Structured backend logic",
      "User-friendly dashboard",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    liveLink: "",
    liveEnabled: false,
    githubLink: "https://github.com/MedYoussef-IT/Agenda-employees",
    secondaryEnabled: true,
    image: "",
  },

  5: {
    title: "Restaurants-Website",
    launch: "NOV / 2024",
    tags: ["Web App", "Restaurant Management"],
    overview: "Restaurants-Website is a simple restaurant management system...",
    features: [
      "Customer and restaurant owner login",
      "Add restaurants with full details",
      "Map-based restaurant display",
      "Basic management system features",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    liveLink: "",
    liveEnabled: false,
    githubLink: "https://github.com/MedYoussef-IT/Restaurants-Website",
    secondaryEnabled: true,
    image: "",
  },

  6: {
    title: "World-Map",
    launch: "NOV / 2024",
    tags: ["Web App", "Geography"],
    overview:
      "World-Map is an interactive web application that displays all countries...",
    features: [
      "Interactive world map",
      "Country information display",
      "Login system implementation",
      "Clean UI and smooth interactions",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "",
    liveEnabled: false,
    githubLink: "https://github.com/MedYoussef-IT/World-Map/",
    secondaryEnabled: true,
    image: "",
  },

  7: {
    title: "SoundBoardMobile",
    launch: "JUNE / 2024",
    tags: ["Android App", "Entertainment"],
    overview: "SoundBoardMobile is a fun and lightweight mobile application...",
    features: [
      "Multiple soundboard categories",
      "Fast sound playback",
      "Simple and clean UI",
    ],
    technologies: ["Java", "Android SDK"],
    liveLink: "",
    liveEnabled: false,
    githubLink: "https://github.com/MedYoussef-IT/SoundBoard",
    secondaryEnabled: true,
    image: "projects/sounds.png",
  },

  8: {
    title: "TimePlanner (Not Finished)",
    launch: "APR / 2025",
    tags: ["Android App", "Productivity"],
    overview:
      "TimePlanner is a productivity application designed to help users plan events...",
    features: [
      "One-time and recurring event planning",
      "Basic scheduling system",
      "Local notifications (unstable)",
    ],
    technologies: ["Java", "Android SDK"],
    liveLink: "",
    liveEnabled: false,
    githubLink: "https://github.com/MedYoussef-IT/Time-Planner-Mobile",
    secondaryEnabled: true,
    image: "projects/time.png",
  },

  9: {
    title: "Gestion-eleves",
    launch: "APR / 2025",
    tags: ["Desktop App", "Education"],
    overview: "Gestion-eleves is a simple desktop Java application...",
    features: [
      "Add, remove, and edit students",
      "Simple desktop interface",
      "Efficient data handling",
    ],
    technologies: ["Java"],
    liveLink: "",
    liveEnabled: false,
    githubLink: "https://github.com/MedYoussef-IT/Gestion-eleves/",
    secondaryEnabled: true,
    image: "",
  },

  10: {
    title: "TradingForAhmed",
    launch: "JUNE / 2025",
    tags: ["Android App", "Finance"],
    overview: "TradingForAhmed is a personalized trading application...",
    features: [
      "Real-time stock and currency tracking",
      "Freemium market data API integration",
      "Simple learning-focused interface",
    ],
    technologies: ["Java", "Android SDK", "Finance APIs"],
    liveLink: "",
    liveEnabled: false,
    githubLink: "https://github.com/MedYoussef-IT/Trading-App",
    secondaryEnabled: true,
    image: "projects/trade.png",
  },

  11: {
    title: "BooksReader",
    launch: "OCT / 2025",
    tags: ["Android App", "Books", "AI"],
    overview:
      "BooksReader helps users organize large collections of PDF books...",
    features: [
      "PDF book import and organization",
      "Automatic metadata and cover extraction",
      "AI text-to-speech",
      "Book translation feature",
      "Java & Python integration using Chaquopy",
    ],
    technologies: ["Java", "Python", "Chaquopy", "Android SDK"],
    liveLink: "",
    liveEnabled: false,
    githubLink: "https://github.com/MedYoussef-IT/Books-Reader",
    secondaryEnabled: true,
    image: "projects/books.png",
  },

  12: {
    title: "Ma7leek",
    launch: "NOV / 2025",
    tags: ["E-commerce", "Clothing Brand"],
    overview: "Ma7leek is a fully functional e-commerce clothing platform...",
    features: [
      "User account management",
      "Loyalty and reward points system",
      "Product customization tool",
      "Dynamic discounts and coupons",
      "Responsive and mobile-friendly design",
      "Optimized checkout flow",
    ],
    technologies: ["HTML5", "CSS3", "PHP", "WordPress", "WooCommerce"],
    liveLink: "https://ma7leek.com",
    liveEnabled: true,
    githubLink: "",
    secondaryEnabled: false,
    image: "projects/IMG_0522.png",
  },

  13: {
    title: "Next Project Coming Soon",
    tags: ["Stay Tuned"],
    overview:
      "Exciting new projects are in development — stay tuned for more updates!",
    features: ["Coming Soon"],
    technologies: ["Stay Tuned"],
    liveLink: "",
    liveEnabled: false,
    githubLink: "https://github.com/MedYoussef-IT",
    secondaryEnabled: false,
  },
};

const projectsGrid = document.getElementById("projectsGrid");

Object.keys(projectsData).forEach((key) => {
  const project = projectsData[key];

  const card = document.createElement("div");
  card.className = "project-card";
  card.setAttribute("data-project", key);

  card.innerHTML = `
    <div class="project-image">
      ${project.launch ? `<span class="project-date">${project.launch}</span>` : ""}
      
      ${
        project.image
          ? `<img src="${project.image}" alt="${project.title}" onerror="this.style.display='none'">`
          : `<span style="font-size:3rem;">🚀</span>`
      }
    </div>

    <div class="project-content">
      <h3 class="project-title">${project.title}</h3>
      <p class="project-desc">
        ${project.overview.slice(0, 140)}${project.overview.length > 140 ? "..." : ""}
      </p>
    </div>
  `;

  projectsGrid.appendChild(card);
});

function openModal(projectId) {
  const project = projectsData[projectId];
  const modal = document.getElementById("projectModal");

  document.getElementById("modalTitle").textContent = project.title;
  document.getElementById("modalLaunch").textContent = project.launch
    ? `Launch: ${project.launch}`
    : "";

  document.getElementById("modalOverview").textContent = project.overview;

  project.liveEnabled
    ? (document.getElementById("modalLiveLink").href = project.liveLink)
    : (document.getElementById("modalLiveLink").style.display = "none");
  project.secondaryEnabled
    ? (document.getElementById("modalGithubLink").href = project.githubLink)
    : (document.getElementById("modalGithubLink").style.display = "none");

  document.getElementById("modalTags").innerHTML = project.tags
    .map((tag) => `<span class="modal-tag">${tag}</span>`)
    .join("");

  document.getElementById("modalFeatures").innerHTML = project.features
    .map((feature) => `<li>${feature}</li>`)
    .join("");

  document.getElementById("modalTech").innerHTML = project.technologies
    .map((tech) => `<span class="modal-tag">${tech}</span>`)
    .join("");
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("projectModal").classList.remove("active");
  document.body.style.overflow = "auto";
}

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", function (e) {
    e.preventDefault();
    const projectId = this.getAttribute("data-project");
    openModal(projectId);
  });
});

document.getElementById("projectModal").addEventListener("click", function (e) {
  if (e.target === this) closeModal();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeModal();
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

const cursorGlow = document.querySelector(".cursor-glow");
document.addEventListener("mousemove", (e) => {
  cursorGlow.style.left = e.clientX + "px";
  cursorGlow.style.top = e.clientY + "px";
});

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active");
    }
  });
});

document.querySelectorAll(".project-card, .skill-card").forEach((card) => {
  card.addEventListener("mousemove", function (e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
  });
});

document.addEventListener("mousemove", (e) => {
  const shapes = document.querySelectorAll(".cube-3d, .sphere-3d, .ring-3d");
  const mouseX = e.clientX / window.innerWidth;
  const mouseY = e.clientY / window.innerHeight;

  shapes.forEach((shape, i) => {
    const speed = (i + 1) * 10;
    const x = (mouseX - 0.5) * speed;
    const y = (mouseY - 0.5) * speed;
    shape.style.transform = `translate(${x}px, ${y}px)`;
  });
});
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);
document.querySelectorAll(".project-card, .skill-card").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "all 0.6s ease";
  observer.observe(el);
});
const subtitle = document.querySelector(".hero-subtitle");
const originalText = subtitle.textContent;
subtitle.textContent = "";
let charIndex = 0;

function typeWriter() {
  if (charIndex < originalText.length) {
    subtitle.textContent += originalText.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 80);
  }
}
setTimeout(typeWriter, 500);
const progressBar = document.createElement("div");
progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            height: 2px;
            background: #fff;
            z-index: 10001;
            transition: width 0.1s;
        `;
document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {
  const scrollPercent =
    (window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight)) *
    100;
  progressBar.style.width = scrollPercent + "%";
});
const cube = document.querySelector(".cube-3d");
const sphere = document.querySelector(".sphere-3d");
const ring = document.querySelector(".ring-3d");

let floatOffset = 0;
function animateFloat() {
  floatOffset += 0.01;
  if (cube)
    cube.style.transform += ` translateY(${Math.sin(floatOffset) * 10}px)`;
  if (sphere)
    sphere.style.transform = `translateY(${Math.sin(floatOffset + 1) * 15}px)`;
  if (ring)
    ring.style.transform += ` scale(${1 + Math.sin(floatOffset + 2) * 0.05})`;
  requestAnimationFrame(animateFloat);
}
animateFloat();

function createParticle() {
  const particle = document.createElement("div");
  particle.style.cssText = `
                position: fixed;
                width: 2px;
                height: 2px;
                background: rgba(255, 255, 255, 0.5);
                border-radius: 50%;
                pointer-events: none;
                z-index: 1;
            `;

  const startX = Math.random() * window.innerWidth;
  const startY = window.innerHeight;
  particle.style.left = startX + "px";
  particle.style.top = startY + "px";

  document.body.appendChild(particle);

  particle.animate(
    [
      { transform: "translateY(0) scale(0)", opacity: 0 },
      { transform: "translateY(-100px) scale(1)", opacity: 1, offset: 0.2 },
      {
        transform: `translateY(-${window.innerHeight}px) scale(0)`,
        opacity: 0,
      },
    ],
    {
      duration: 3000 + Math.random() * 2000,
      easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    },
  ).onfinish = () => particle.remove();
}

setInterval(() => {
  if (Math.random() > 0.8) createParticle();
}, 300);

document.querySelectorAll("section").forEach((section, index) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(50px)";
  section.style.transition = "all 1s ease";

  setTimeout(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(section);
  }, index * 100);
});

document
  .querySelectorAll(".cta-btn, .submit-btn, .modal-btn")
  .forEach((button) => {
    button.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.3);
                    left: ${x}px;
                    top: ${y}px;
                    pointer-events: none;
                `;

      this.style.position = "relative";
      this.style.overflow = "hidden";
      this.appendChild(ripple);

      ripple.animate(
        [
          { transform: "scale(0)", opacity: 1 },
          { transform: "scale(2)", opacity: 0 },
        ],
        {
          duration: 600,
          easing: "ease-out",
        },
      ).onfinish = () => ripple.remove();
    });
  });

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mousemove", function (e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const deltaX = (x - centerX) / centerX;
    const deltaY = (y - centerY) / centerY;

    this.style.transform = `
                    perspective(1000px) 
                    rotateX(${-deltaY * 5}deg) 
                    rotateY(${deltaX * 5}deg) 
                    translateY(-10px)
                    scale(1.02)
                `;
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)";
  });
});

const revealElements = document.querySelectorAll(".about-text, .skill-card");
revealElements.forEach((el, index) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = `all 0.6s ease ${index * 0.1}s`;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 },
  );

  observer.observe(el);
});

document.querySelectorAll(".section-title").forEach((title) => {
  title.style.opacity = "0";
  title.style.transform = "translateX(-30px)";
  title.style.transition = "all 0.8s ease";

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateX(0)";
        }
      });
    },
    { threshold: 0.5 },
  );

  observer.observe(title);
});

if (window.innerWidth < 768) {
  document.querySelectorAll(".cube-3d, .sphere-3d, .ring-3d").forEach((el) => {
    if (el) el.style.display = "none";
  });
}

const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    const btn = this.querySelector(".submit-btn");
    btn.textContent = "Sending...";
    btn.style.opacity = "0.7";

    setTimeout(() => {
      btn.textContent = "Send Message";
      btn.style.opacity = "1";
    }, 2000);
  });
}
