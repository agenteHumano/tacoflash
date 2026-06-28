// Pequeña lógica para botones, scroll y manejo de formulario (cliente)
document.addEventListener('DOMContentLoaded', function () {
  // Year in footer
  const yearNode = document.getElementById('year');
  if (yearNode) yearNode.textContent = new Date().getFullYear();

  // Smooth scroll for CTAs
  function smoothTo(selector) {
    const el = document.querySelector(selector);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  const ctaHero = document.getElementById('cta-hero');
  if (ctaHero) ctaHero.addEventListener('click', function (e) {
    e.preventDefault();
    smoothTo('#registro');
  });
  const ctaTop = document.getElementById('cta-top');
  if (ctaTop) ctaTop.addEventListener('click', function (e) {
    e.preventDefault();
    smoothTo('#registro');
  });

  // Simple client-side form handling
  const form = document.getElementById('lead-form');
  const feedback = document.getElementById('form-feedback');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      feedback.textContent = '';

      const taqueria = form.taqueria.value.trim();
      const contacto = form.contacto.value.trim();
      const telefono = form.telefono.value.trim();

      if (!taqueria || !contacto || !telefono) {
        feedback.style.color = 'crimson';
        feedback.textContent = 'Por favor completa los campos obligatorios.';
        return;
      }

      // Simula envío (aquí conectarías con tu backend)
      feedback.style.color = 'green';
      feedback.textContent = '¡Gracias! Recibimos tu solicitud. Nos comunicamos pronto.';

      // Opcional: limpiar formulario
      form.reset();

      // Aquí podrías enviar fetch(...) a tu API
      // fetch('/api/leads', { method:'POST', body:JSON.stringify({taqueria,contacto,telefono}) })
    });
  }
});
