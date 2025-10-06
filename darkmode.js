// Hämta dark mode-knappen
const toggleBtn = document.getElementById('darkmode-toggle');

// Kör funktionen när knappen klickas
toggleBtn.addEventListener('click', toggleDarkMode);

// Lägg till darkmode-klassen på body
function toggleDarkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}