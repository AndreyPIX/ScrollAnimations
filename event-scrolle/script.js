'use stript'
const header = document.querySelector('.header');
const firstBlock = document.querySelector('.section-1');
const firstBlockHeight = firstBlock.scrollHeight;
let sctollStarted = 0;
window.addEventListener('scroll', headerScrollHandler);
function headerScrollHandler(){
    const scrollTop = window.scrollY;
    if (scrollTop >= firstBlockHeight){
        header.classList.add('header--fixed');
    }
    else{
        header.classList.remove('header--fixed');
    }
    scrollStarted = scrollTop;
}
