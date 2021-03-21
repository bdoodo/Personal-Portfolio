    const timer = ms => new Promise(res => setTimeout(res, ms));
//home only
if (window.location.pathname == '/' || window.location.pathname == '/index.html') {

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

    window.addEventListener('DOMContentLoaded', () => {
        window.addEventListener('scroll', scrollAnimations)
    })

    //add scrolling listener

    startAnimations();

    function scrollAnimations() {
        const fadeElements = document.querySelectorAll('#content-2');
        

        fadeElements.forEach(function(e) {
            const eTop =  e.getBoundingClientRect().top;
            const eBottom =  e.getBoundingClientRect().bottom;

            if (eTop < window.innerHeight*0.6 && !(eTop < window.innerHeight*0)) {
                if(!e.classList.contains('visible')){ 
                    e.classList.add('visible');
                } 
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
        } 

        const vBox = document.querySelector('#vegoons-card')
        let vAnimated = false

        if (!vAnimated && vBox.getBoundingClientRect().top <= 10) {
            vBox.animate(
                [{opacity: 1}],
                {
                    duration: 1000,
                    fill: 'forwards',
                    easing: 'ease-out'
                }
            )
            vAnimated = true
        }
    }
}

//menu functions
const navIcon = document.querySelector("#nav-icon");
navIcon.addEventListener('click', openMenu);

async function openMenu() {
    const navItem = document.querySelectorAll('.nav-item');
    const nav = document.querySelector('nav');
    const navUl = document.querySelector('nav ul');

    if (!nav.classList.contains('open')) {
        nav.classList.add('open');
        navUl.classList.add('open');
    } else {
        nav.classList.remove('open');
        navUl.classList.remove('open');
    }

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