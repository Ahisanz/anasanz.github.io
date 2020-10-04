import axios from 'axios';

const loader = document.querySelector('.loader');
const main = document.querySelector('.main');
const header = document.querySelector('.header');

function hideLoader() {
    setTimeout(() => {
        loader.style.opacity = 0;
        main.style.display = 'block';
        header.style.display = 'block';
        setTimeout(() => {
            main.style.opacity = 1;
            header.style.opacity = 1;
            loader.style.display = 'none';
        }, 1000)
        console.log('loader hidden')
    }, 4000);
}
// hideLoader();



const contact = document.querySelector('#contact');
const contactButton = document.querySelector('#contact__button');
// const options = {
//     rootMargin: '-200px'
// }

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            contactButton.classList.add('hide');
        } else {
            contactButton.classList.remove('hide');
        }
    })
})

observer.observe(contact)



const moreAbout = document.querySelector('.experience-text__second');
const buttonAboutPlus = document.querySelector('.button-about');

buttonAboutPlus.addEventListener('click', () => {
    if(moreAbout.style.display === 'none'){
        moreAbout.style.display = 'block';
        buttonAboutPlus.setAttribute('aria-expanded', 'true')
    } else {
        moreAbout.style.display = 'none';
        buttonAboutPlus.setAttribute('aria-expanded', 'false')
    }
})


window.addEventListener('scroll', () => {
    let value = window.scrollY;

    const mandala = document.querySelector('.about-image__icons--mandala');
    const fireworks = document.querySelector('.about-image__icons--fireworks');
    const sun = document.querySelector('.experience-image__icons--sun');
    const rectangle = document.querySelector('.experience-image__icons--rectangle');
    const headerGraf = document.querySelector('.header__image--grafismo');
    const headerMM = document.querySelector('.header__image--maismenos');
    const headerTuba = document.querySelector('.header__image--tuba');
    const headerTrace = document.querySelector('.header__image--traco');

    headerGraf.style.top = "calc(50% + " + value * 0.2 + "px)";
    headerMM.style.top = "calc(50% + " + -value * 0.15 + "px)";
    headerTuba.style.top = "calc(-12% + " + value * 0.1 + "px)";
    headerTrace.style.top = "calc(50% + " + -value * 0.2 + "px)";
    
    mandala.style.bottom = "calc(10% + " + value * -0.1 + "px)"
    fireworks.style.top = "calc(40% + " + value * -0.15 + "px)"
    sun.style.bottom = "calc(35% + " + value * -0.1 + "px)"
    rectangle.style.top = "calc(130% + " + value * -0.15 + "px)"

})
