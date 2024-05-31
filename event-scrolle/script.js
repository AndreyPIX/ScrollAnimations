'use strict'
const header = document.querySelector('.header'); 
const btn = document.querySelector('.btn');
const firstBlock = document.querySelector('.section-1'); 
const firstBlockHeight = firstBlock.offsetHeight;
console.log(firstBlockHeight);
let scrollStarted = 0;
window.addEventListener('scroll', headerScrollHandler);
function headerScrollHandler () {
    const scrollTop = window.scrollY;
    if (scrollTop >= firstBlockHeight) {
        header.classList.add("header--fixed");
        btn.classList.add("btn-up");
    } else { header.classList.remove("header--fixed");
        btn.classList.remove("btn-up"); 
    }
    scrollStarted = scrollTop;
};