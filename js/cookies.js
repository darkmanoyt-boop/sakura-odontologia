(() => {
  "use strict";

  const STORAGE_KEY = "sakura-privacy-choice-v1";
  const banner = document.querySelector("#cookie-banner");
  const acceptButton = document.querySelector("#cookie-accept");
  const rejectButton = document.querySelector("#cookie-reject");
  const settingsButton = document.querySelector("#cookie-settings-open");
  const dialog = document.querySelector("#privacy-dialog");

  if (!banner) return;

  let savedChoice = null;
  try {
    savedChoice = localStorage.getItem(STORAGE_KEY);
  } catch (error) {
    // A interface continua utilizável quando o navegador bloqueia armazenamento local.
  }

  if (!savedChoice) banner.hidden = false;

  const saveChoice = (choice) => {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch (error) {
      // Sem armazenamento local, a preferência vale apenas para esta visita.
    }
    banner.hidden = true;
    if (dialog && dialog.open) dialog.close();
  };

  acceptButton?.addEventListener("click", () => saveChoice("essential-only"));
  rejectButton?.addEventListener("click", () => saveChoice("essential-only"));

  settingsButton?.addEventListener("click", () => {
    if (dialog && typeof dialog.showModal === "function") dialog.showModal();
    else saveChoice("essential-only");
  });

  dialog?.addEventListener("close", () => {
    if (dialog.returnValue === "save") saveChoice("essential-only");
  });
})();
