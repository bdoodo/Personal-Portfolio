    const timer = ms => new Promise(res => setTimeout(res, ms));
//home only
if (window.location.pathname == '/' || window.location.pathname == '/index.html') {

    const one = document.querySelector('#anim-1');
    const two = document.querySelector('#anim-2');
    const three = document.querySelector('#anim-3');
    const four = document.querySelector('#anim-4');
    const five = document.querySelector('#anim-5');

    let animSequence = [one, two, three, four];

    const fadeSlideRight = [
        {opacity: 0, transform: 'translateX(-5em)'},
        {opacity: 1, transform: 'translateX(0)'}
    ]

    async function startAnimations() {
        await timer(1500)
        for (let i = 0; i < animSequence.length; i++){
            animSequence[i].animate(fadeSlideRight, {duration: 1500, fill: 'forwards', easing: 'ease-out'})
            await timer(300);
        }

        five.classList.add('fade-in');
    }
    //fade-in on home

    window.addEventListener('DOMContentLoaded', () => {
        window.addEventListener('scroll', scrollAnimations, {passive: true})
    })

    //add scrolling listener

    startAnimations();

    let zAnimated = false
    let vAnimated = false

    function scrollAnimations() {
        const fadeElements = document.querySelectorAll('#content-2');
        

        fadeElements.forEach(function(e) {
            const eTop =  e.getBoundingClientRect().top;
            const eBottom =  e.getBoundingClientRect().bottom;

            //when < 60% of the viewport is above the top of a fade-in element, it will fade in
            if (eTop < window.innerHeight*0.6 && !(eTop < window.innerHeight*0)) {
                if(!e.classList.contains('visible')){ 
                    e.classList.add('visible');
                } 
            } 
        })

        const zBox = document.querySelector('#zentella-card');
        const zContent = document.querySelector('#zentella-content');
        let indexMql = window.matchMedia('(max-width: 1050px)')
        const clearance = indexMql.matches ? window.innerHeight * 0.7 : 10

        const zTop =  zBox.getBoundingClientRect().top;
        if (!zAnimated && zTop <= clearance) {
            zAnimated = true
            zContent.classList.add('z-box-bounce-up');
            if (zContent.classList.contains('hidden')) {
                zContent.classList.remove('hidden');
                zContent.classList.add('visible');
            }
        } 

        const vBox = document.querySelector('#vegoons-card')
        const caseStudiesSticky = document.querySelector('#sticky-header')

        if (!vAnimated && vBox.getBoundingClientRect().top <= clearance) {
            vBox.animate(
                [{opacity: 1}],
                {
                    duration: 1000,
                    fill: 'forwards',
                    easing: 'ease-out'
                }
            )
            caseStudiesSticky.animate([
                {transform: 'translateY(3em)'},
                {transform: 'translateY(0)'}
            ], {duration: 250, fill: 'forwards', easing: 'ease-out'})
            caseStudiesSticky.animate(fadeIn, {duration: 250, fill: 'forwards', easing: 'ease-out'})
            vAnimated = true
        }
    }
}

//menu functions

let mql = window.matchMedia('(max-width: 1050px)')
const navIcon = document.querySelector("#nav-icon");
navIcon.addEventListener('click', openMenu);
navIcon.addEventListener('keydown', e => {
    if (e.keyCode === 13) openMenu()
})
let open = false

//--animations

const fadeIn = [
    {opacity: 0},
    {opacity: 1}
]
const slideDown = [
    {transform: 'translateY(-3em)'},
    {transform: 'translateY(0)'}
]

async function openMenu() {
    const navItem = document.querySelectorAll('nav ul li')
    const navUl = document.querySelector('nav ul')
    const nav = document.querySelector('nav')

    if (!open) {
        open = !open
        navUl.style.display = 'block'

        if (mql.matches) {
            navUl.style.backgroundColor = 'white'
            nav.style.backgroundColor = 'white'
        }

        navUl.animate(fadeIn, {duration: 400})
        nav.animate(fadeIn, {duration: 400})

        for (let i = 0; i < navItem.length; i++) {
            const e = navItem[i]

            e.animate(fadeIn, {duration: 300, easing: 'ease-out', fill: 'forwards'})
            e.animate(slideDown, {duration: 300, easing: 'ease-out', fill: 'forwards'})
            await timer(200)
        }
    } else {
        open = !open
        navUl.animate(fadeIn, {direction: 'reverse', duration: navItem.length * 300})
        nav.animate(fadeIn, {direction: 'reverse', duration: navItem.length * 300})
        for (let i = 0; i < navItem.length; i++) {
            const e = navItem[i]

            e.animate(fadeIn, {duration: 200, easing: 'ease-out', fill: 'forwards', direction: 'reverse'})
            e.animate(slideDown, {duration: 200, easing: 'ease-out', fill: 'forwards', direction: 'reverse'})
            await timer(200)

            if (i === navItem.length - 1) navUl.style.display = 'none'
        }
    }
}