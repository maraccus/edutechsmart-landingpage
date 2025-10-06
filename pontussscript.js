const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("change"); 
  navLinks.classList.toggle("open");
});