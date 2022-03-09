const timer = ms => new Promise(res => setTimeout(res, ms));

//--animations

const fadeIn = [
    { opacity: 0 },
    { opacity: 1 }
]
const slideDown = [
    { transform: 'translateY(-3em)' },
    { transform: 'translateY(0)' }
]

//home only
if (window.location.pathname == '/' || window.location.pathname == '/index.html') {

    const one = document.querySelector('#anim-1');
    const two = document.querySelector('#anim-2');
    const three = document.querySelector('#anim-3');
    const four = document.querySelector('#anim-4');
    const five = document.querySelector('#anim-5');

    let animSequence = [one, two, three, four];

    const fadeSlideRight = [
        { opacity: 0, transform: 'translateX(-5em)' },
        { opacity: 1, transform: 'translateX(0)' }
    ]

        //start intro animations
        ; (async () => {
            await timer(1500)
            for (let i = 0; i < animSequence.length; i++) {
                animSequence[i].animate(fadeSlideRight, { duration: 1500, fill: 'forwards', easing: 'ease-out' })
                await timer(300);
            }

            five.classList.add('fade-in');
        })();

    const caseStudiesSticky = document.querySelector('#sticky-header')

    const animateCaseStudies = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.animate([
                    { transform: 'translateY(3em)' },
                    { transform: 'translateY(0)' }
                ], { duration: 250, fill: 'forwards', easing: 'ease-out' })
                entry.target.animate(fadeIn, { duration: 250, fill: 'forwards', easing: 'ease-out' })
                observer.disconnect()
            }
        })
    }, { threshold: 0.4 })

    animateCaseStudies.observe(caseStudiesSticky)

}

//lazy load videos on screens larger than phone width (otherwise leaves them as images)
if (window.matchMedia('(min-width: 400px)').matches) {
    document.addEventListener('DOMContentLoaded', () => {
        const lazyVideos = Array.from(document.querySelectorAll('video.lazy'))

        const lazyVideoObserver = new IntersectionObserver(entries => {
            for (const video of entries) {
                if (video.isIntersecting) {
                    for (const source in video.target.children) {
                        const videoSource = video.target.children[source];
                        if (videoSource?.tagName === "SOURCE") {
                            videoSource.src = 'https://brianhdo-assets.s3.us-west-2.amazonaws.com/' + videoSource.dataset.src;
                        }
                    }

                    video.target.load()
                    video.target.classList.remove("lazy");
                    lazyVideoObserver.unobserve(video.target);
                }
            };
        });

        lazyVideos.forEach(lazyVideo => {
            lazyVideoObserver.observe(lazyVideo);
        });
    })
}

//menu functions

let mql = window.matchMedia('(max-width: 1050px)')
const navIcon = document.querySelector("#nav-icon");
navIcon.addEventListener('click', openMenu);
navIcon.addEventListener('keydown', e => {
    if (e.keyCode === 13) openMenu()
})
let open = false

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

        navUl.animate(fadeIn, { duration: 400 })
        nav.animate(fadeIn, { duration: 400 })

        for (let i = 0; i < navItem.length; i++) {
            const e = navItem[i]

            e.animate(fadeIn, { duration: 300, easing: 'ease-out', fill: 'forwards' })
            e.animate(slideDown, { duration: 300, easing: 'ease-out', fill: 'forwards' })
            await timer(200)
        }
    } else {
        open = !open
        navUl.animate(fadeIn, { direction: 'reverse', duration: navItem.length * 300 })
        nav.animate(fadeIn, { direction: 'reverse', duration: navItem.length * 300 })
        for (let i = 0; i < navItem.length; i++) {
            const e = navItem[i]

            e.animate(fadeIn, { duration: 200, easing: 'ease-out', fill: 'forwards', direction: 'reverse' })
            e.animate(slideDown, { duration: 200, easing: 'ease-out', fill: 'forwards', direction: 'reverse' })
            await timer(200)

            if (i === navItem.length - 1) navUl.style.display = 'none'
        }
    }
}