const timer = ms => new Promise(res => setTimeout(res, ms));

const one = document.querySelector('#anim-1');
const two = document.querySelector('#anim-2');
const three = document.querySelector('#anim-3');
const four = document.querySelector('#anim-4');
const five = document.querySelector('#anim-5');

let animSequence = [one, two, three, four];

async function startAnimations() {
    bodymovin.loadAnimation({
        container: document.getElementById('b-sig'),
        renderer: 'svg',
        loop: false,
        path: 'Assets/b-sig.json',
        name: 'b-sig'
    });

    await timer(1500)
    for (let i=0; i<animSequence.length; i++){
        animSequence[i].classList.add('fade-slide-right');
        await timer(300);
    }

    five.classList.add('fade-in');
}
//fade-in on home

window.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', scrollFade)
 })
//add scrolling listener

startAnimations();

function scrollFade() {
    const fadeElements = document.querySelectorAll('.hidden');

    fadeElements.forEach(function(e) {
        const eTop =  e.getBoundingClientRect().top;

        if (eTop < window.innerHeight*0.6) {
            e.classList.contains('visible') ? null : e.classList.add('visible');
        }
    })
}
//when <= 40% of the viewport is above the top of a fade-in element, it will fade in

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