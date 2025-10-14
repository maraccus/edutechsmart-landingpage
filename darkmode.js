// Hämta dark mode-knappen och cirkeln
const toggleBtn = document.getElementById('darkmode-toggle');
const toggleCircle = document.querySelector('.darkmode-toggle-circle');

// Hämta logon
const logo = document.getElementById('logo');

// Kör funktionen när knappen klickas
toggleBtn.addEventListener('click', toggleDarkMode);

// Lägg till darkmode-klassen på body
function toggleDarkMode() {
  const element = document.body;
  element.classList.toggle("dark-mode");
  toggleCircle.classList.toggle('darkmode-toggle-circle-moved');

  // Byt logobild beroende på dark mode-status
  if (element.classList.contains("dark-mode")) {
    logo.src = "assets/edutech_logo-light.png"; // vit logo
  } else {
    logo.src = "assets/edutech_logo-dark.png"; // svart logo
  }
}
