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

function getUser() {
    axios.get('https://api.github.com/users/Ahisanz')
    .then(res => showProfile(res))
    .catch(err => console.log(err))
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
        <p class="github-profile__hirable" ></p>
    </div>
    `
    if(data.hirable = true){
        document.querySelector('.github-profile__hirable').innerHTML = 'Hirable';
        document.querySelector('.github-profile__hirable').classList.add('hirable')

    } else {
        document.querySelector('.github-profile__hirable').innerHTML = 'Busy'
    }
}
