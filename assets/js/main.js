// assets/js/main.js — scroll animations for Navneet Portfolio
document.addEventListener('DOMContentLoaded', () => {
  // If ScrollReveal failed to load, bail out (page stays visible).
  if (typeof ScrollReveal === 'undefined') return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const sr = ScrollReveal({
    origin: 'bottom',
    distance: prefersReduced ? '0px' : '40px',
    duration: prefersReduced ? 0 : 2000,
    delay: prefersReduced ? 0 : 400,
    reset: false
  });

  // Header / Nav
  sr.reveal('header, nav', { distance: '20px', delay: 80 });

  // HOME (FirstSection)
  sr.reveal('.FirstSection .LeftSection', { delay: 120 });
  sr.reveal('.FirstSection .buttons, #element', { interval: 100 });
  sr.reveal('.FirstSection .RightSection, .FirstSection .profile-pic', { delay: 180 });

  // EXPERIENCE (SecondSection)
  sr.reveal('.SecondSection .text-gray, .SecondSection h1', { interval: 90 });
  sr.reveal('.SecondSection .box', { delay: 120 });
  sr.reveal('.SecondSection .vertical', { interval: 110 });
  sr.reveal('.SecondSection .image-top, .SecondSection .vertical-title, .SecondSection .vertical-desc', { interval: 90 });
  // Projects (ProjectsSection)
  sr.reveal('.ProjectsSection .project', { interval: 150 });
  sr.reveal('.projects .project-image', { delay: 160 });
  sr.reveal('.projects .project-info, .projects .text, .projects .lm-btn', { delay: 150 });
  // Footer
  sr.reveal('footer, .footer-rights', { distance: '20px', delay: 120 });
});

// Certifications reveal
if (window.ScrollReveal) {
  ScrollReveal().reveal('.cert-card', {
    distance: '40px',
    origin: 'bottom',
    interval: 320,
    duration: 1200,
    easing: 'cubic-bezier(.2,.7,.2,1)'
  });
}
