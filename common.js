// ============================================================
// MARKO VRAČAN — ZAJEDNIČKA SKRIPTA (sve stranice)
// ============================================================

// Cursor
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
function animateCursor() {
  if (cursor && ring) {
    cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
    rx += (mx - rx) * 0.15; ry += (my - ry) * 0.15;
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
  }
  requestAnimationFrame(animateCursor);
}
animateCursor();

// Nav scroll + hamburger
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => { navbar.classList.toggle('scrolled', window.scrollY > 30); });
}
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
}

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
reveals.forEach(el => obs.observe(el));

// FAQ akordeon
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', function () {
    this.classList.toggle('active');
    const answer = this.nextElementSibling;
    answer.style.maxHeight = answer.style.maxHeight ? null : answer.scrollHeight + 'px';
  });
});

// Čestice (iskre)
const particlesContainer = document.getElementById('particles');
if (particlesContainer) {
  for (let i = 0; i < 30; i++) {
    let p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + 'vw';
    p.style.animationDuration = (Math.random() * 3 + 2) + 's';
    p.style.animationDelay = (Math.random() * 5) + 's';
    particlesContainer.appendChild(p);
  }
}
