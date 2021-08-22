const burgerMenu = document.querySelector('.burger-menu');
const menuBar = document.querySelector('.side-nav')
const exit = document.querySelector('.exit')

let OpenMenu = false;
let exitMenu = false;

burgerMenu.addEventListener ('click', () => {
    if (!OpenMenu){
        burgerMenu.classList.add('open');
        menuBar.classList.remove('d-none');
        exit.classList.remove('d-none');
        burgerMenu.classList.add('d-none');
        OpenMenu = true;
        console.log (OpenMenu);
    }else {
        burgerMenu.classList.remove('open');
        menuBar.classList.add('d-none');
        OpenMenu = false;
    };
});

exit.addEventListener ('click', () => {
    if (!exitMenu){
        exit.classList.add('close');
        menuBar.classList.add('d-none');
        exit.classList.add('d-none');
        burgerMenu.classList.remove('d-none');
        exitMenu = true;
        console.log (exitMenu);
    }else {
        burgerMenu.classList.remove('close');
        menuBar.classList.remove('d-none');
        exitMenu = false;
    };
});


 const faders = document.querySelectorAll('.fade-in');
 const sliders = document.querySelectorAll('.slide-in');
 
 const appearOptions = {
     threshold: 0,
     rootMargin: "0px 0px -100px 0px"
 }

 const appearOnScroll = new IntersectionObserver (function(
     entries,
     appearOnScroll
 ) {
     entries.forEach(entry => {
         if(!entry.isIntersecting) {
             return;
         }
         else{
             entry.target.classList.add('appear');
             appearOnScroll.unobserve(entry.target);
         }
     })
 }, appearOptions);

 faders.forEach(fader => {
     appearOnScroll.observe(fader);
 });
 sliders.forEach(slider => {
     appearOnScroll.observe(slider);
 });