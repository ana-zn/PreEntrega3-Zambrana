const hamburger = document.querySelector(".menu-responsive");
const navBar = document.querySelector(".nav__container");

hamburger.onclick = function() {
    navBar.classList.toggle("active");
}