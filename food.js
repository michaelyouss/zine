const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("Sticky", window.scrollY > 0);
});

// icon

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector("#navbar");

menu.onclick = () => {
    menu.classList.toggle('fa-x');
    navbar.classList.toggle('open');

}
window.onscroll = () => {
    menu.classList.remove('fa-x');
    navbar.classList.remove('open');

};

// scrol-left-ri
const er = ScrollReveal({
    distance: '90px',
    duration: 3500,
    reset: true
});
er.reveal('.home-text', { delay: 500, origin: 'left' })
er.reveal('.home-img', { delay: 200, origin: 'right' })

er.reveal('.container, .about, .menu, .contact', { delay: 200, origin: 'bottom' })

er.reveal('.row', { delay: 200, origin: 'left' })




const ty = ScrollReveal({
    distance: '90px',
    duration: 9000,
    reset: true
});
er.reveal('.contact-content', { delay: 200, origin: 'bottom' })
// ty.reveal('.footer',{delay:200, origin:'bottom'})

// scrol-y
let scr = document.querySelector('.scroll-text');

scr.style.display = 'none;';
window.addEventListener('scroll', () => {
    scr.style.display ='block'
    if(this.scrollY > 500) {
        scr.style.display = 'block'
       
    } else {
        scr.style.display = 'none'
    }
})