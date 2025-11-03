/* script.js — comportamento: menu mobile, ano no rodapé, envio fake e scroll reveal */

// Toggle do menu em telas pequenas
const btnToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

if (btnToggle && navList) {
  btnToggle.addEventListener('click', () => {
    navList.classList.toggle('open');
  });

  // Fecha menu ao clicar em um link
  navList.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navList.classList.remove('open');
  }));
}

// Inserir ano atual no rodapé
const anoEl = document.getElementById('ano');
if (anoEl) anoEl.textContent = new Date().getFullYear();

// Envio simples do formulário (simulação)
function handleForm(e) {
  e.preventDefault();
  const form = e.target;
  const nome = form.nome?.value || 'Contato';
  const email = form.email?.value || '';

  // feedback simples ao usuário (pode trocar por modal)
  alert(`Obrigado, ${nome}!\nSua mensagem foi enviada.\nRespondemos em breve para: ${email}`);

  form.reset();
}

// SCROLL REVEAL otimizado com IntersectionObserver
const reveals = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const obs = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(r => obs.observe(r));
} else {
  // fallback simples
  reveals.forEach(r => r.classList.add('active'));
}
