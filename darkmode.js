// Hämta dark mode-knappen
const toggleBtn = document.getElementById('darkmode-toggle');
const toggleCircle = document.querySelector('.darkmode-toggle-circle');

// Kör funktionen när knappen klickas
toggleBtn.addEventListener('click', toggleDarkMode);

// Lägg till darkmode-klassen på body
function toggleDarkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  toggleCircle.classList.toggle('darkmode-toggle-circle-moved');
}