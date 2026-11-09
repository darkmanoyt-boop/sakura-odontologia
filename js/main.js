(() => {
  "use strict";

  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector("#main-nav");
  const currentYear = document.querySelector("#current-year");

  if (currentYear) currentYear.textContent = String(new Date().getFullYear());

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
      });
    });
  }

  // Estrutura pronta para ativar WhatsApp após confirmação do número oficial.
  const config = window.SAKURA_CONFIG || {};
  const whatsappNumber = String(config.whatsappNumber || "").replace(/\D/g, "");
  const whatsappLinks = document.querySelectorAll("[data-whatsapp]");
  const whatsappNote = document.querySelector("#whatsapp-note");
  if (whatsappNumber.length >= 12) {
    const message = encodeURIComponent(config.whatsappMessage || "Olá! Gostaria de informações.");
    whatsappLinks.forEach((link) => {
      link.href = `https://wa.me/${whatsappNumber}?text=${message}`;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.removeAttribute("aria-disabled");
      link.removeAttribute("title");
    });
    if (whatsappNote) whatsappNote.textContent = "Canal de WhatsApp configurado. Confirme com a clínica se este é o número oficial de atendimento antes da publicação.";
  } else {
    whatsappLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        if (whatsappNote) {
          whatsappNote.textContent = "O número oficial do WhatsApp ainda precisa ser informado em js/config.js antes de ativar este botão.";
          whatsappNote.setAttribute("role", "status");
        }
      });
    });
  }
})();
