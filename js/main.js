const showHiddenNavBar = document.querySelector('.menu-btn');
const hiddenNav = document.querySelector('.nav-bar');
const closeHiddenNavBar = document.querySelector('.btn-close-menu');

showHiddenNavBar.addEventListener('click', showHiddenMenu);
closeHiddenNavBar.addEventListener('click', closeHiddenMenu);

function showHiddenMenu(){
    hiddenNav.classList.toggle('nav-bar-hidden')
}

function closeHiddenMenu(){
    hiddenNav.classList.toggle('nav-bar-hidden')
}