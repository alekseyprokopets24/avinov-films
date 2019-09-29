const hiddenNav = document.querySelector('.nav-bar');
const hamburger = document.querySelector('.hamburger');
const overflow = document.querySelector('.overflow');
const header = document.querySelector('.header');
const generalLink = document.querySelector('.general-link');
const btnHrefInst = document.querySelector('#btnHrefInst')
const preloader = document.querySelector('.preloader');
const preloaderText = document.querySelector('.preloader-container-text');
const borderItem = document.querySelectorAll('.border__item');
const jsVideos = document.querySelector('#jsVideos');
const overflowVideo = document.querySelector('.overflow-video');



for (let i = 0; i < borderItem.length; i++) {
    sec = (i+1)*750;
    
    setTimeout(()=>{
        borderItem[i].classList.add('border-showen');
    }, sec)

}





jsVideos.addEventListener('click', showVideoOverflow);
hamburger.addEventListener('click', addclass);
generalLink.addEventListener('click', reloadPage);
btnHrefInst.addEventListener('click', showInstPage);



function showVideoOverflow(e){
    overflowVideo.classList.toggle('overflow-video--hidden');
    
}

function showInstPage() {
    window.open('https://www.instagram.com/avinov.films/', '_blank');

}

function reloadPage() {
    addclass();
}

function addclass() {
    hamburger.classList.toggle('is-active');
    hiddenNav.classList.toggle('nav-bar-hidden');
    overflow.classList.toggle('overflow-hidden');
    setTimeout(() => {
        overflow.classList.toggle('overflow-hidden');

    }, 200)
}



setTimeout(() => {
    preloader.remove();
    document.body.style.overflow = 'visible';
}, 3000)

setTimeout(()=>{
    preloader.remove();
}, 3500)


$(function () { $("a[href*=#]:not([href=#])").click(function () { if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) { var t = $(this.hash); if (t = t.length ? t : $("[name=" + this.hash.slice(1) + "]"), t.length) return $("html,body").animate({ scrollTop: t.offset().top }, 1000), !1 } }) });