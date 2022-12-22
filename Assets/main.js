//swiper


//waypoint
const navControl =document.querySelector(".nav-control");
var waypoint = new Waypoint({
  element: document.getElementById('select'),
  handler: function(direction) {
    if(direction ==='down'){
    navControl.classList.add('fixed','w-full','shadow-lg','animate__fadeInDown','opacity-20','bg-white');

    }else{
      navControl.classList.remove('fixed','w-full','shadow-lg','animate__fadeInDown','opacity-20','bg-white');
    }
  },
  offset: '75%'
});

//mobile menu
const mobileMenu =document.querySelector('.mobile-menu');
const mobileSlide = document.querySelector('#mobile-slide');
const mobileSlideClose = document.querySelector('#mobile-slide-close');

mobileMenu.addEventListener('click', () => {
  mobileSlide.style.left ='0';
})

mobileSlideClose.addEventListener('click', () => {
  mobileSlide.style.left ='-100%';
});


//mobileslideClosed
let mobileSlideClosed = document.querySelectorAll('.mobile-slide-closed');

for(let i=0; i  < mobileSlideClosed.length; i++) {
  console.log(mobileSlideClosed[i].addEventListener('click', () => {
    mobileSlide.style.left ='-100%';})
    )
};

//scrollReveal

ScrollReveal().reveal('.headline', { 
  delay: 300,
  origin: 'bottom',
  distance: '50px',
  interval: 300,
  scale: 0.85,
  reset: true
});

