const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.querySelector('.navbar-bebas ul');


hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
})