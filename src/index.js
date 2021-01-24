const timer = ms => new Promise(res => setTimeout(res, ms));

const one = document.querySelector('#anim-1');
const two = document.querySelector('#anim-2');
const three = document.querySelector('#anim-3');
const four = document.querySelector('#anim-4');
const five = document.querySelector('#anim-5');

let animSequence = [one, two, three, four];

async function startAnimations() {
    await timer(1500)
    for (let i=0; i<animSequence.length; i++){
        animSequence[i].classList.add('fade-slide-right');
        await timer(300);
    }

    five.classList.add('fade-in');
}
//fade-in on home

window.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', scrollAnimations)
 })
//add scrolling listener

startAnimations();

function scrollAnimations() {
    const fadeElements = document.querySelectorAll('#content-2');
    

    fadeElements.forEach(function(e) {
        const eTop =  e.getBoundingClientRect().top;

        if (eTop < window.innerHeight*0.6 && !(eTop < window.innerHeight*0)) {
            if(!e.classList.contains('visible')){ 
                e.classList.add('visible');
            } 
        } else if (eTop < window.innerHeight*0) {
            e.classList.remove('visible');
        }
//when < 60% of the viewport is above the top of a fade-in element, it will fade in
    })

    const zBox = document.querySelector('#zentella-card');
    const zContent = document.querySelector('#zentella-content');

    const zTop =  zBox.getBoundingClientRect().top;
    if (zTop <= 10) {
        zContent.classList.add('z-box-bounce-up');
        if (zContent.classList.contains('hidden')) {
            zContent.classList.remove('hidden');
            zContent.classList.add('visible');
        }
    } else if (zTop > window.innerHeight*0.5 && zContent.classList.contains('z-box-bounce-up')) {
        zContent.classList.remove('z-box-bounce-up');
        if (!zContent.classList.contains('hidden')) {
            zContent.classList.add('hidden');
            zContent.classList.remove('visible');
        }
    }
}

const navIcon = document.querySelector("#nav-icon");

navIcon.addEventListener('click', openMenu);

async function openMenu() {
    const navItem = document.querySelectorAll('.nav-item');

    for (let i=0; i<navItem.length; i++){
        let e = navItem[i];
        if (e.classList.contains('closed')) {
            e.classList.add('open');
            e.classList.remove('closed');
            await timer(300);
        } else {
            e.classList.add('closed');
            e.classList.remove('open');
            await timer(300);
        }
    }
}