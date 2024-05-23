'use strict'
const progressBar = document.querySelector('.progressbar');
const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', ()=>{
    const windowScroll = window.scrollY;
    const progressBarWidth = (windowScroll / windowHeight).toFixed(2);
    progressBar.setAttribute('style', `transform: scaleX(${progressBarWidth})`);
})