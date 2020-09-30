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

const moreAbout = document.querySelector('.about-text__second');
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


function getUser() {
    axios.get('https://api.github.com/users/Ahisanz')
    .then(res => showProfile(res))
    .catch(err => showPreMade())
};
getUser();
// show GitHub Profile
function showProfile(res) {
    const data = res.data;
    document.querySelector('.github-profile').innerHTML = `
    <div>
        <img src="${data.avatar_url}" class="github-profile__img circle-image" alt="Photo of Ana Sanz (me)"/>
    </div>
    <div>
        <p class="github-profile__login">${data.login}</p>
        <a href="${data.html_url}" class="github-profile__link">=> Github Profile</a>
        <a href="https://github.com/Ahisanz/anasanz.github.io" class="github-profile__link">=> Github Website Repository</a>
        <a href="https://github.com/Ahisanz/side_projects" class="github-profile__link">=> Github Basics Projects Repository</a>
    </div>
    `
}

function showPreMade(){
    document.querySelector('.github-profile').innerHTML = `
    <div>
        <img src="./images/photo-ana-2.jpg" class="github-profile__img circle-image" alt="Photo of Ana Sanz (me)"/>
    </div>
    <div>
        <p class="github-profile__login">Ahisanz</p>
        <a href="#" class="github-profile__link text-color">=> Github Profile</a>
        <a href="https://github.com/Ahisanz/anasanz.github.io" class="github-profile__link">=> Github Website Repository</a>
        <a href="https://github.com/Ahisanz/side_projects" class="github-profile__link">=> Github Basics Projects Repository</a>
    </div>`
}


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
    
    mandala.style.bottom = "calc(-12% + " + value * -0.1 + "px)"
    fireworks.style.top = "calc(-10px + " + value * -0.15 + "px)"
    sun.style.bottom = "calc(35% + " + value * -0.1 + "px)"
    rectangle.style.top = "calc(130% + " + value * -0.15 + "px)"

})
