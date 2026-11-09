(() => {
  "use strict";
  const STORAGE_KEY = "sakura-privacy-notice-v2";
  const banner = document.querySelector("#cookie-banner");
  const buttons = [document.querySelector("#cookie-accept"), document.querySelector("#cookie-reject")].filter(Boolean);
  if (!banner) return;
  let acknowledged = false;
  try { acknowledged = localStorage.getItem(STORAGE_KEY) === "acknowledged"; } catch (error) { /* armazenamento pode estar bloqueado */ }
  if (!acknowledged) banner.hidden = false;
  buttons.forEach((button) => button.addEventListener("click", () => {
    try { localStorage.setItem(STORAGE_KEY, "acknowledged"); } catch (error) { /* o aviso some nesta visita */ }
    banner.hidden = true;
  }));
})();
