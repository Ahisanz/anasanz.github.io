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


    // SCROLLMAGIC CSS ANIMATION (DONT WORK IN IE9) D=
    var controller = new ScrollMagic.Controller();
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger-intro"})
                            .setClassToggle("#animate-image, #animate-text", "fade-in")
                            .addTo(controller);

    // Modal Opener Base 

    var triggers = document.getElementsByClassName('box-content');
    var btnArray = Array.from(triggers).entries();
    var modals = document.getElementsByClassName('modal');
    var closeBtns = document.getElementsByClassName('close-modal');

    for (let [index, trigger] of btnArray) {
        let triggerIndex = index;


        function toggleModal() {
            modals[triggerIndex].classList.toggle("show-modal");
            if(this.classList.contains('box-content') && this.classList.contains('video')) {
                var videoId = trigger.id;
                var modalParent = document.getElementById('modal-' + triggerIndex +'');
                var videoIframe = '<iframe enablejsapi=1 src="https://www.youtube.com/embed/' + videoId + '" frameborder="0" allowfullscreen></iframe>'
                modalParent.innerHTML = modalParent.innerHTML + videoIframe;
            } else if (this.classList.contains('close-modal') && this.classList.contains('video')) {
                var modalParent = document.getElementById('modal-' + triggerIndex + '');
                modalParent.innerHTML = '';
            }            

        }
        trigger.addEventListener("click", toggleModal);
        closeBtns[triggerIndex].addEventListener("click", toggleModal);
  }

}

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