// --- Detección automática de idioma (solo primera visita) ---
(function () {
  const path = window.location.pathname;

  // Solo actuar en la raíz
  if (path !== "/") return;

  // Si el usuario ya eligió idioma, no redirigir
  const savedLang = localStorage.getItem("preferredLang");
  if (savedLang) return;

  const browserLang = navigator.language.toLowerCase();

  let targetLang = "en";

  if (browserLang.startsWith("gl")) targetLang = "gl";
  else if (browserLang.startsWith("es")) targetLang = "es";

  if (targetLang !== "en") {
    localStorage.setItem("preferredLang", targetLang);
    window.location.replace(`/${targetLang}/`);
  }
})();

// Guardar idioma elegido manualmente
document.querySelectorAll("#lang-switch a").forEach(link => {
  link.addEventListener("click", () => {
    localStorage.setItem("preferredLang", link.dataset.lang);
  });
});
// --- Configuración del enlace de correo electrónico ---

const user = "hola";
const domain = "mariopicans.com";

const emailLink = document.getElementById("email");

emailLink.href = `mailto:${user}@${domain}`;
emailLink.textContent = `${user}@${domain}`;

// Detectar idioma por URL
const path = window.location.pathname;

let currentLang = "en";
if (path.startsWith("/es")) currentLang = "es";
if (path.startsWith("/gl")) currentLang = "gl";

// Marcar idioma activo
document.querySelectorAll("#lang-switch a").forEach(link => {
  if (link.dataset.lang === currentLang) {
    link.classList.add("active");
    link.removeAttribute("href"); // evita recargar la misma página
  }
});
