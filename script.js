const navMenu = document.getElementById('nav_list');
const navToggle = document.getElementById('nav_toggle');
const navClose = document.getElementById('nav_close');

navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
})

navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
})