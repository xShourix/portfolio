// Adds/removes hideHeader class
let lastScrollY = window.scrollY;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
if (window.scrollY > lastScrollY) {
    // scrolling down → hide header
    header.classList.add("hideHeader");
} else {
    // scrolling up → show header
    header.classList.remove("hideHeader");
}
lastScrollY = window.scrollY;
});

// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('navList');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
    document.body.classList.toggle('no-scroll'); // <— disables/enables scrolling
});