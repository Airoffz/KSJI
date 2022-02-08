
const body = document.querySelector('body');
const hamburger = document.querySelector('#btnHamburger');
const header = document.querySelector(".header");
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');


hamburger.addEventListener('click', ()=> {
    if(header.classList.contains('open')) { // close
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElems.forEach(function(element) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });

    }
    else { // open
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach(function(element) {
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        });

    }
})