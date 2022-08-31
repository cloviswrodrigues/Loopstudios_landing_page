const menuToggle = document.querySelector('.header__menu--toggle');
const iconHamburguer = document.querySelector('.icon-hamburguer');
const iconClose = document.querySelector('.icon-close');
const menu = document.querySelector('.header__menu');
const body = document.querySelector('body');

function openMenu() {
    console.log('teste:' ,menuToggle)
    console.log('teste2: ' ,iconHamburguer)
    iconHamburguer.classList.toggle('disabled');
    iconClose.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('fixed');   
}

menuToggle.addEventListener('click', openMenu)