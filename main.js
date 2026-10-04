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

// --- Configuración del enlace de correo electrónico (ofuscado) ---
document.addEventListener('DOMContentLoaded', function() {
  const emailLink = document.getElementById("email");

  if (emailLink) {
    const encodedEmail = atob("aG9sYUBtYXJpb3BpY2Fucy5jb20=");
    emailLink.href = "mailto:" + encodedEmail;
    emailLink.textContent = encodedEmail;
  }

  // Detectar idioma por URL
  const currentPath = window.location.pathname;

  let currentLang = "en";
  if (currentPath.startsWith("/es")) currentLang = "es";
  if (currentPath.startsWith("/gl")) currentLang = "gl";

  // Marcar idioma activo
  document.querySelectorAll("#lang-switch a").forEach(link => {
    if (link.dataset.lang === currentLang) {
      link.classList.add("active");
      link.removeAttribute("href");
    }
  });
});
