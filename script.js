/* ============================================
   NAVBAR — scroll effect & active section
   ============================================ */
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('.section, .hero');

function onScroll() {
  // Shrink navbar on scroll
  navbar.classList.toggle('scrolled', window.scrollY > 60);

  // Highlight active nav link
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 200;
    if (window.scrollY >= top) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ============================================
   MOBILE NAV TOGGLE
   ============================================ */
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navMenu.classList.toggle('open');
});

// Close menu when a link is clicked
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navMenu.classList.remove('open');
  });
});

/* ============================================
   SCROLL REVEAL
   ============================================ */
function initReveal() {
  const revealElements = document.querySelectorAll(
    '.project-card, .about-content, .about-image-wrapper, .skill-category, .timeline-item, .contact-text, .contact-socials'
  );

  revealElements.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealElements.forEach(el => observer.observe(el));
}

initReveal();

/* ============================================
   SMOOTH SCROLL (fallback for older browsers)
   ============================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
