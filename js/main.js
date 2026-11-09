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

  const serviceContent = {
    ortodontia: {
      label: "ORTODONTIA",
      heading: "Alinhamento\ne equilíbrio.",
      description: "A ortodontia acompanha o posicionamento dos dentes e a relação entre as arcadas, com avaliação individual para indicar as possibilidades de tratamento."
    },
    clareamento: {
      label: "ESTÉTICA DO SORRISO",
      heading: "Mais luminosidade\ncom orientação.",
      description: "O clareamento dental deve ser indicado após avaliação profissional, considerando a saúde bucal, as características dos dentes e as expectativas de cada pessoa."
    },
    prevencao: {
      label: "PREVENÇÃO",
      heading: "Cuidado contínuo\ncom a saúde bucal.",
      description: "A prevenção reúne orientações de higiene, acompanhamento e procedimentos de limpeza profissional conforme a necessidade de cada paciente."
    },
    clinica: {
      label: "CLÍNICA GERAL",
      heading: "Atenção à saúde\npor inteiro.",
      description: "A avaliação odontológica ajuda a identificar necessidades, orientar cuidados e discutir opções para a manutenção da saúde bucal."
    },
    reabilitacao: {
      label: "REABILITAÇÃO ORAL",
      heading: "Recuperar função\ne confiança.",
      description: "Implantes e próteses podem fazer parte de um plano de reabilitação, definido após avaliação clínica e planejamento individual."
    },
    infantil: {
      label: "ODONTOPEDIATRIA",
      heading: "Cuidado desde\nos primeiros sorrisos.",
      description: "O acompanhamento odontológico infantil considera cada fase do desenvolvimento e busca orientar crianças e responsáveis sobre saúde bucal."
    }
  };

  const serviceButtons = document.querySelectorAll("[data-service]");
  const serviceLabel = document.querySelector("#service-label");
  const serviceHeading = document.querySelector("#service-heading");
  const serviceDescription = document.querySelector("#service-description");
  const serviceCounter = document.querySelector("#service-counter");

  serviceButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const content = serviceContent[button.dataset.service];
      if (!content) return;
      serviceButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      if (serviceLabel) serviceLabel.textContent = content.label;
      if (serviceHeading) serviceHeading.innerHTML = content.heading.replace("\n", "<br>");
      if (serviceDescription) serviceDescription.textContent = content.description;
      if (serviceCounter) serviceCounter.textContent = `${String(index + 1).padStart(2, "0")} — 06`;
    });
  });

  const config = window.SAKURA_CONFIG || {};
  const whatsappNumber = String(config.whatsappNumber || "").replace(/\D/g, "");
  const whatsappLinks = document.querySelectorAll("[data-whatsapp]");
  const whatsappNote = document.querySelector("#whatsapp-note");
  if (whatsappNumber.length >= 12) {
    const message = encodeURIComponent(config.whatsappMessage || "Olá! Gostaria de informações sobre os atendimentos.");
    whatsappLinks.forEach((link) => {
      link.href = `https://wa.me/${whatsappNumber}?text=${message}`;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.removeAttribute("aria-disabled");
      link.removeAttribute("title");
    });
    if (whatsappNote) whatsappNote.textContent = "Atendimento pelo WhatsApp. Confirme com a clínica o canal oficial antes da publicação.";
  } else {
    whatsappLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        if (whatsappNote) {
          whatsappNote.textContent = "O WhatsApp será ativado após a confirmação do número oficial de atendimento.";
          whatsappNote.setAttribute("role", "status");
        }
      });
    });
  }
})();
