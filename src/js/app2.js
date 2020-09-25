// if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
//     document.getElementById('body').innerHTML = "";
//     document.getElementById('body').innerHTML = `
//     <div id="ie-only">
//         <h1>OH NO!</h1>
//         <p>I'm sorry that this website is not fully supported in Internet Explorer</p>
//         <p>but...</p>
//         <p>I can share some information about me</p>
//         <h2>I'm Ana Sanz, Frontend Developer</h2>
//         <img src="images/IMG_20200729_002055_2p.jpg" style="width: auto; height:250px"  alt="Photo of Ana Sanz (me)"/>
//         <p class="about">Self and quick learner, organized, versatile, curious and dedicated. Passionate about technology innovations, sci-fi, games, books, human history, ecology, gastronomy. Since 2012 working as freelancer on Graphic/WebDesign and Frontend.</p>
//         <p>If you want to know more about me, feel free to download my CV, check my Linkedin or send me a email</p>
//         <a href="images/cvi_ana_sanz_en.pdf">Download CV</a>
//         <a href="https://www.linkedin.com/in/ana-claudia-sanz/">Linkedin</a>
//         <a href="mailto: anaclaulp@gmail.com">anaclaulp@gmail.com</a>
//         <h2>Thank you! Have a nice day!</h2>
//     </div>
//     `;
// }




// function getUser() {
//     axios.get('https://api.github.com/users/Ahisanz')
//     .then(res => showProfile(res))
//     .catch(err => console.log(err))
// };

// scrollSmooth Function
// function scrollSmooth() {
       
//     var scrollContainer = target;
//     do { //find scroll container
//         scrollContainer = scrollContainer.parentNode;
//         if (!scrollContainer) return;
//         scrollContainer.scrollTop += 1;
//     } while (scrollContainer.scrollTop == 0);
    
//     var targetY = 0;
//     do { //find the top of target relatively to the container
//         if (target == scrollContainer) break;
//         targetY += target.offsetTop;
//     } while (target = target.offsetParent);
    
//     scroll = function(c, a, b, i) {
//         i++; if (i > 30) return;
//         c.scrollTop = a + (b - a) / 30 * i;
//         setTimeout(function(){ scroll(c, a, b, i); }, 20);
//     }
//     // start scrolling
//     scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
// };

// show GitHub Profile
// function showProfile(res) {
//     const data = res.data;
//     document.getElementById('gh-profile').innerHTML = `
//     <div>
//         <img src="${data.avatar_url}" class="gh-img" alt="Photo of Ana Sanz (me)"/>
//     </div>
//     <div>
//         <p class="gh-login">${data.login}</p>
//         <a href="${data.html_url}" class="">Github Profile</a>
//         <a href="https://github.com/Ahisanz/anasanz.github.io">Github Website Repository</a>
//         <a href="https://github.com/Ahisanz/side_projects">Github Basics Projects Repository</a>
//         <p id="gh-hirable" ></p>
//     </div>
//     `
//     if(data.hirable = true){
//         document.getElementById('gh-hirable').innerHTML = 'Hirable';
//         document.getElementById('gh-hirable').classList.add('hirable')

//     } else {
//         document.getElementById('gh-hirable').innerHTML = 'Busy'
//     }
// }
