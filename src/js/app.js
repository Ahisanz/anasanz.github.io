// TRANSLATE INTRO ON CLICK
var devToggle = document.getElementById('dev-toggle');
var photoToggle = document.getElementById('photo-toggle');
var devSec = document.getElementById('dev-sec');
var photoSec = document.getElementById('photo-sec');
var mainDev = document.getElementById('dev-intro');
var mainPhoto = document.getElementById('photo-intro');
var introToggle = document.querySelectorAll('.intro-toggle');
var secMenu = document.querySelectorAll('.sec-menu');
var menuSec = document.getElementById('menu-sec');


function changeClass(){
    event.preventDefault();

    scrollSmooth();

    [].forEach.call(introToggle, function (el) {
        el.classList.remove('slide-on');
    });
    [].forEach.call(secMenu, function(el) {
        el.classList.remove('selected');
    });

    if (this.id == 'dev-toggle' || this.id == 'dev-sec') {
        mainDev.classList.add('slide-on');
        devSec.classList.add('selected');
    } else {
        mainPhoto.classList.add('slide-on');
        photoSec.classList.add('selected');
    };
}
window.onload = function(){
    devToggle.addEventListener( 'click', changeClass);
    photoToggle.addEventListener( 'click', changeClass);
    devSec.addEventListener( 'click', changeClass);
    photoSec.addEventListener( 'click', changeClass);
}

// SCROLLMAGIC CSS ANIMATION (DONT WORK IN IE9) D=
var controller = new ScrollMagic.Controller();
 var scene = new ScrollMagic.Scene({triggerElement: "#trigger-intro"})
							// trigger animation by adding a css class
 							.setClassToggle("#animate-image", "fade-in")
// 							.addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
							.addTo(controller);


// scrollSmooth Function
function scrollSmooth() {
    var target = document.getElementById('menu-sec');
        
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);
    
    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);
    
    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
};

// JS FOR ROUTER
// class Router {
    
//     routes = [];

//     mode = null;

//     root = '/';

//     constructor(options) {
//         this.mode = window.history.pushState ? 'history' : 'hash';
//         if (options.mode) this.mode = options.mode;
//         if (options.root) this.root = options.root;
//         this.listen();
//     };

//     add = (path,cb) => {
//         this.routes.push({ path, cb});
//         return this;
//     };
//     remove = path => {
//         for (let i = 0; i < this.routes.length; i += 1) {
//             if (this.routes[i].path === path) {
//                 this.routes.slice(i, 1);
//                 return this;
//             }
//         }
//         return this;
//     };
//     flush = () => {
//         this.routes = [];
//         return this;
//     };

//     clearSlashes = path =>
//         path
//             .toString()
//             .replace(/\/$/, '')
//             .replace(/^\//, '');
        
//             getFragment = () => {
//                 let fragment = '';
//                 if ( history.mode === 'history') {
//                     fragment = this.clearSlashes(decodeURI(window.location.pathname + window.location.search));
//                     fragment = fragment.replace(/\?(.*)$/, '');
//                     fragment = this.root !== '/' ? fragment.replace(this.root, '') : fragment;
//                 } else {
//                     const match = window.location.href.match(/#(.*)$/);
//                     fragment = match ? match[1] :  '';
//                 }
//                 return this.clearSlashes(fragment);
//             };
    
//     getFragment = () => {
//         let fragment = '';
//         if (this.mode === 'history') {
//             fragment = this.clearSlashes(decodeURI(window.location.pathname + window.location.search));
//             fragment = fragment.replace(/\?(.*)$/, '');
//             fragment = this.root !== '/' ? fragment.replace(this.root, '') : fragment;
//         } else {
//             const match = window.location.href.match(/#(.*)$/);
//             fragment = match ? match[1] : '' ;
//         }
//         return this.clearSlashes(fragment);
//     }
    
//     navigate = (path = '') => { 
//         if (this.mode === 'history') {
//             window.history.pushState(null, null, this.root + this.clearSlashes(path));
//         } else {
//             window.location.herf = `${window.location.href.replace(/#(.*)$/, '')}#${path}`;
//         }
//         return this;
//     }
//     listen = () => {
//         clearInterval(this.interval);
//         this.interval = setInterval(this.interval, 50);
//     };
//     interval = () => {
//         if (this.current === this.getFragment()) return;
//         this.current =this.getFragment();

//         this.routes.some(route => {
//             const match = this.current.match(route.path);
//             if (match) {
//                 match.shift();
//                 route.cb.apply({}, match);
//                 return match;
//             }
//             return false;
//         })
//     }

// }

// export default Router