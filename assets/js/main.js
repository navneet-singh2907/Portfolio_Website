// assets/js/main.js — Scroll animations for Navneet Portfolio
document.addEventListener('DOMContentLoaded', () => {
  // Bail out gracefully if ScrollReveal isn't available
  if (typeof ScrollReveal === 'undefined') return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const sr = ScrollReveal({
    origin: 'bottom',
    distance: prefersReduced ? '0px' : '40px',
    duration: prefersReduced ? 0 : 1600,
    delay: prefersReduced ? 0 : 300,
    reset: false,
    easing: 'cubic-bezier(.2,.7,.2,1)'
  });

  /* ===================== HEADER ===================== */
  sr.reveal('header, nav', { distance: '20px', delay: 80 });

  /* ===================== HOME (FirstSection) ===================== */
  sr.reveal('.FirstSection .LeftSection', { delay: 120 });
  sr.reveal('.FirstSection .buttons, #element', { interval: 100 });
  sr.reveal('.FirstSection .RightSection, .FirstSection .profile-pic', { delay: 180 });

  /* ===================== EXPERIENCE (SecondSection) ===================== */
  sr.reveal('.SecondSection .text-gray, .SecondSection h1', { interval: 90 });
  sr.reveal('.SecondSection .box', { delay: 220 });
  sr.reveal('.SecondSection .vertical', { interval: 210 });
  sr.reveal('.SecondSection .image-top, .SecondSection .vertical-title, .SecondSection .vertical-desc', { interval: 90 });

  /* ===================== PROJECTS ===================== */
  sr.reveal('.projects h1', { distance: '20px', delay: 100 });
  sr.reveal('.projects .project', { interval: 150, delay: 150 });
  sr.reveal('.projects .project-image', { delay: 180 });
  sr.reveal('.projects .project-info, .projects .text, .projects .lm-btn', { interval: 120, delay: 200 });

  /* ===================== CERTIFICATIONS ===================== */
  sr.reveal('.certs h1, .certs-subtitle', { delay: 100 });
  sr.reveal('.cert-card', { distance: '40px', origin: 'bottom', interval: 240, duration: 1200 });
  /* ===================== CONTACT ===================== */
  sr.reveal('.contact h1', { delay: 300 });
  sr.reveal('.contact-form input', { interval: 300, delay: 350 });
  sr.reveal('.contact-form textarea', { delay: 350 });
  sr.reveal('.contact-form button', { delay: 450 });
  

  /* ===================== FOOTER ===================== */
  sr.reveal('footer, .footer-rights', { distance: '20px', delay: 120 });
  // Animate underlines when sections reveal
  const underlineSections = document.querySelectorAll('.projects, .certs, .contact');
  underlineSections.forEach(section => {
    ScrollReveal().reveal(section, {
      beforeReveal: () => section.classList.add('revealed'),
      delay: 200
    });
  });

});

