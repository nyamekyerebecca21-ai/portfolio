const year = document.querySelector("#year");
year.textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("#site-nav");

menuButton.addEventListener("click", function() {
    nav.classList.toggle("open");
    if (nav.classList.contains("open")) {
        menuButton.textContent = "Close"
    } else {
        menuButton.textContent = "Menu"
    }
});
