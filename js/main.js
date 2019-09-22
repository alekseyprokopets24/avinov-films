const hiddenNav = document.querySelector('.nav-bar');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', addclass);


function addclass(){
    hamburger.classList.toggle('is-active');
    hiddenNav.classList.toggle('nav-bar-hidden');
    
}