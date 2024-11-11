function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth",
  });
}

// Add event listeners to nav items
document.getElementById("nav-home").addEventListener("click", () => {
  scrollToSection("home");
});

document.getElementById("nav-contact").addEventListener("click", () => {
  scrollToSection("contact");
});

document.getElementById("nav-product").addEventListener("click", () => {
  scrollToSection("product");
});

document.getElementById("nav-team").addEventListener("click", () => {
  scrollToSection("team");
});

document.querySelector(".view").addEventListener("click", () => {
  scrollToSection("product");
});
