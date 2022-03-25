const logo = document.querySelector('.logo');
const nav = document.querySelector('.nav');

function linkClick(navId, logoId, bodyId) {
    const navIcon = document.querySelector("heart-half-outline");
    const nav = document.getElementById(navId);
    const logo = document.getElementById(logoId);
    const body = document.getElementById(bodyId);

    if (nav && logo) {
        logo.addEventListener('click', () => {
            nav.classList.toggle('active');
            body.classList.toggle('pd');

        })
    }
}

linkClick('nav', 'logo', 'body');

const links = document.querySelectorAll('.nav__link');
const body = document.getElementById('body');
links.forEach((link) => {
    link.addEventListener('click', () => {
        nav.classList.toggle('active')
        body.classList.toggle('pd');
    })
})



const shoBtn = document.querySelector('.show__all');
const orderBox = document.querySelector('.order__box');
shoBtn.addEventListener('click', () => {
    orderBox.classList.toggle('active');
    if (shoBtn.innerHTML == 'Show all') {
        shoBtn.innerHTML = "Show less";
    } else {
        shoBtn.innerHTML = "Show all"
    }
})

function linkActive() {
    links.forEach((link) => {
        link.addEventListener('click', () => {
            linkRemove()
            link.classList.add('link__active')          
        })
    })
}

linkActive()

function linkRemove() {
    links.forEach((link) => {
        link.classList.remove('link__active')
    })
}