const navButton = document.getElementById("nav-circle");
const navMenu = document.getElementById("overlay-menu");
const navLinks = document.querySelectorAll(".overlay-nav");
const linkWrappers = document.querySelectorAll(".link-wrapper-js")

let isMenuHovered = false;
let isButtonHovered = false;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener('DOMContentLoaded', function() {
    navMenu.style.display = "none";
});

navButton.addEventListener("click", () => {
    if (navMenu.style.display === "none") {
        navMenu.style.display = "flex";
        isMenuHovered = true;
        isButtonHovered = true;
        
    } else {
        navMenu.style.display = "none";
        isMenuHovered = false;
        isButtonHovered = false;
    }
});

navLinks.forEach(function(link) {
    link.addEventListener("click", () => {
        navMenu.style.display = "none";
    })
});
