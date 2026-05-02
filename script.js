/* ============================================================
   PORTFOLIO PERSONALE — SCRIPT.JS
   Solo l'essenziale: anno dinamico nel footer + menu mobile.
   ============================================================ */

// 1. Anno corrente nel footer (così non lo devi aggiornare a mano ogni anno)
document.getElementById('year').textContent = new Date().getFullYear();


// 2. Toggle menu su mobile
const toggle = document.querySelector('.nav__toggle');
const links  = document.querySelector('.nav__links');

toggle.addEventListener('click', () => {
  const isOpen = links.classList.toggle('is-open');
  toggle.classList.toggle('is-open', isOpen);
  toggle.setAttribute('aria-expanded', isOpen);
  toggle.setAttribute('aria-label', isOpen ? 'Chiudi menu' : 'Apri menu');
});

// Chiudi il menu quando clicchi su un link (utile su mobile)
links.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    links.classList.remove('is-open');
    toggle.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});


// 3. Effetto sottile: la nav cambia ombra quando scrolli
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    nav.style.boxShadow = '0 1px 12px rgba(0,0,0,0.04)';
  } else {
    nav.style.boxShadow = 'none';
  }
}, { passive: true });
