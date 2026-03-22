const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

function toggleMenu() {
    menuBtn.classList.toggle('open');
    navLinks.classList.toggle('open')
}

menuBtn.addEventListener('click', toggleMenu);

const cartBtn = document.getElementById('cart-btn')
const cartCount = document.getElementById('cart-count')
const shopNowBtn = document.querySelector('.btn-primary')

let count = 0;
function addToCart() {
    count++;
    cartCount.textContent = count;
    cartCount.classList.add('visible')
    cartCount.classList.remove('bump');
    setTimeout(() => {
        cartCount.classList.add('bump');
    }, 10);
}

shopNowBtn.addEventListener('click', function (event) {
    event.preventDefault(); 
    addToCart();
});

const oneLink = document.querySelector('.nav-links a');
const allLinks = document.querySelectorAll('.nav-links a');

allLinks.forEach(function(link){
    console.log(link);
})

const target = link.getAttribute('href');
const section = document.querySelector(target);

section.scrollIntoView({ behavior: 'smooth' });
