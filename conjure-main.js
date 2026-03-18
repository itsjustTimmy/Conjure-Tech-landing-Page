const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

function toggleMenu() {
    menuBtn.classList.toggle('open');
    navLinks.classList.toggle('open')
}

menuBtn.addEventListener('click', toggleMenu);