const hiddenNav = document.querySelector('.nav-bar');
const hamburger = document.querySelector('.hamburger');
const overflow = document.querySelector('.overflow');
const header = document.querySelector('.header');
const generalLink = document.querySelector('.general-link');
const btnHrefInst = document.querySelector('#btnHrefInst')
const preloader = document.querySelector('.preloader');

hamburger.addEventListener('click', addclass);
generalLink.addEventListener('click', reloadPage);
btnHrefInst.addEventListener('click', showInstPage);


function showInstPage(){
    window.open('https://www.instagram.com/avinov.films/', '_blank');

}

function reloadPage(){
    document.location.reload(true);
}

function addclass() {
    hamburger.classList.toggle('is-active');
    hiddenNav.classList.toggle('nav-bar-hidden');
    overflow.classList.toggle('overflow-hidden');
    setTimeout(()=>{
        overflow.classList.toggle('overflow-hidden');

    }, 500)
}

setTimeout(()=>{
    preloader.classList.add('preloader-out');
}, 3000)
setTimeout(()=>{
    preloader.style.display = 'none';

}, 3500)

$(function () { $("a[href*=#]:not([href=#])").click(function () { if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) { var t = $(this.hash); if (t = t.length ? t : $("[name=" + this.hash.slice(1) + "]"), t.length) return $("html,body").animate({ scrollTop: t.offset().top }, 3000), !1 } }) });