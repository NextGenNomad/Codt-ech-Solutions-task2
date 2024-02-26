
const removeNavBar = document.getElementById('remove__navbar')
const showNavBar = document.getElementById('show__navbar')
const navbar = document.querySelector('.navbar > ul')
removeNavBar.addEventListener('click', () =>{
    navbar.style.transform = 'translateX(100%)'
    removeNavBar.style.display = 'none'
    showNavBar.style.display = 'block'
})

showNavBar.addEventListener('click', () =>{
    navbar.style.transform = 'translateX(0)'
    showNavBar.style.display = 'none'
    removeNavBar.style.display = 'block'
})




const calcScrollValue = () => {
    let backToTopBtn = document.getElementById('backToTopBtn')
    // position of the scroll
    let position = document.documentElement.scrollTop 
    //height of alrady scrolled
    let calcHeight = document.documentElement.scrollHeight - 
                     document.documentElement.clientHeight
    let scrollvalue = Math.round((100 * position) / calcHeight)
    if([position] > 20 || position > 20){
        backToTopBtn.style.display = 'flex'
     }else{
         backToTopBtn.style.display = 'none'
     } 
     // back to  top 
     backToTopBtn.addEventListener('click',() =>{
       document.documentElement.scrollTop = 0
     })
     //progress value
     backToTopBtn.style.background = `conic-gradient(#0067CE ${scrollvalue}%, transparent ${scrollvalue}%)`;

}

window.onscroll = calcScrollValue
window.onload = calcScrollValue

const eye = document.getElementById('eye')
const passInput = document.querySelector('.password input') 
eye.addEventListener('click', () => {
    if(eye.classList.contains('fa-eye')) {
        passInput.type = 'text'
        eye.classList.add('fa-eye-slash')
        eye.classList.remove('fa-eye')
    }else  {
        passInput.type = 'password'
        eye.classList.add('fa-eye')
        eye.classList.remove('fa-eye-slash')
    }
})

const signInBtn = document.getElementById('signInBtn');
const signCard = document.querySelector('.sign_card');
const  closeCard = document.getElementById('closeSignInBtn')

signInBtn.addEventListener('click', e => {
    e.preventDefault();
    if (signCard.style.display === 'none' || signCard.style.display === '') {
        showForm();
    }
});

closeCard.addEventListener('click', () =>{
    if (signCard.style.display === 'block' || signCard.style.display !== '') {
        hideForm();
    }
})

function showForm() {
    gsap.fromTo('.sign_card', {
        display: 'none',
        opacity: 0,
        y: 50
    }, {
        display: 'block', 
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power4.easeOut',
    });
}

function hideForm() {
    gsap.to('.sign_card', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power4.ease',
        onComplete: () => {
            signCard.style.display = 'none'; 
        }
    });
}


/*========== SWIPER ================*/
const swiperCards = new Swiper('.silder__container', {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,


    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


    breakpoints: {
        600:{
            slidesPerView: 2,
        },
        968:{
            slidesPerView: 3,
        }
    }

});


// GSAP CODE 
gsap.registerPlugin(ScrollTrigger);

gsap.to('.showcase__content', { 
    clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
    opacity: 1,
    y: 0,
    duration: 2, 
    ease: 'power4.easeOut',
});

gsap.from('.key__features .anim1', {
    opacity: 0,
    y: 50,
    duration: 1.3,
    stagger: 0.3,
    ease: 'power4.easeOut',
    scrollTrigger: {
        trigger : '.key__features',
        start: 'top bottom',
        end: 'bottom center',
        toggleActions: 'play none none none'
    }
});

gsap.from('.about__us__section .translateX1', {
    opacity: 0,
    x: -50,
    duration: 1.5,
    ease: 'power4.easeOut',
    scrollTrigger : {
        trigger: '.about__us__section',
        start: 'top 80%',
        end: 'bottom center',
        toggleActions: 'play none none none'
    }
})

gsap.from('.about__us__section .translateX2', {
    opacity: 0,
    x:50,
    duration: 1.5,
    ease: 'power4.easeOut',
    scrollTrigger: {
        trigger: '.about__us__section',
        start: 'top 80%',
        end: 'bottom center',
        toggleActions: 'play none none none'
    }
})

gsap.from('.call__to__action__section .translateY', {
    opacity: 0,
    y: 50,
    duration: 1.5,
    stagger: .6,
    ease: 'power4.easeOut',
    scrollTrigger: {
        trigger: '.call__to__action__section',
        start: 'center 80%',
        end: 'bottom center',
        makers: true,
        toggleActions: 'play none none none'
    }
})


gsap.from('.service__section .translateX1', {
    opacity: 0,
    x: -50,
    duration: 1.5,
    ease: 'power4.easeOut',
    scrollTrigger : {
        trigger: '.service__section',
        start: 'top 80%',
        end: 'bottom center',
        toggleActions: 'play none none none'
    }
});

gsap.from('.service__section .translateX2', {
    opacity: 0,
    x: 50,
    duration: 1.5,
    ease: 'power4.easeOut',
    scrollTrigger: {
        trigger: '.service__section',
        start: 'top 80%',
        end: 'bottom center',
        toggleActions: 'play none none none',
    }
});


const tl = gsap.timeline({ defaults: { duration: 1.3, ease: 'power4.easeOut' } });

tl.from('.service__section .img__container.translateX2', {
    opacity: 0,
    x: 100,
    scrollTrigger: {
        trigger: '.service__section',
        start: 'top 80%',
        end: 'bottom center',
        toggleActions: 'play none none none',
    }
});

gsap.from('.service__section .pulsing__play__btn .translateX2', {
    opacity: 0,
    x: 50,
    duration: 1.3,
    ease: 'power4.easeOut',
    scrollTrigger: {
        trigger: '.service__section',
        start: 'top 80%',
        end: 'bottom center',
        toggleActions: 'play none none none',
    }
});

gsap.to('.service__section .experience', {
    opacity: 1,
    y: 0,
    duration: 1.3,
    ease: 'power4.easeOut',
    scrollTrigger: {
        trigger: '.service__section .img__container',
        start: 'top 40%',
        end: 'bottom center',
        toggleActions: 'play none none none',
    }
});





gsap.from('.offer__section .anim1', {
    opacity: 0,
    y: 100,
    duration: 1,
    stagger: 0.6,
    ease: 'power4.easeOut',
    scrollTrigger: {
        trigger : '.offer__section',
        start: 'top 80%',
        end: 'bottom center',
        toggleActions: 'play none none none'
    }
})

gsap.from(".our__value__section .translateX1", {
    opacity: 0,
    x: -100,
    duration: 1.5,
    ease: 'power4.easeOut',
    scrollTrigger : {
        trigger: '.our__value__section',
        start: 'top 80%',
        end: 'bottom center',
        toggleActions: 'play none none none'
    }
}) 


gsap.from('.our__value__section .translateY', {
    opacity: 0,
    y: 100,
    duration: 1.5,
    stagger: 0.6,
    scrollTrigger : {
        trigger: '.our__value__section',
        start: 'top 80%',
        end: 'bottom center',
        toggleActions: 'play none none none'
    }
})


gsap.from('.control__section .translateX1', {
    opacity: 0,
    x: -100,
    duration: 1.5,
    ease: 'power4.easeOut',
    scrollTrigger : {
        trigger: '.control__section',
        start: 'top bottom',
        end: 'bottom center',
        toggleActions: 'play none none none'
    }
})

gsap.from('.control__section .translateX2', {
    opacity: 0,
    x:100,
    duration: 1.5,
    ease: 'power4.easeOut',
    scrollTrigger: {
        trigger: '.control__section',
        start: 'top bottom',
        end: 'bottom center',
        toggleActions: 'play none none none'
    }
})


gsap.from('.items__section .anim1', {
    opacity: 0,
    y: 100,
    duration: 1.3,
    stagger: 0.6,
    ease: 'power4.easeOut',
    scrollTrigger: {
        trigger : '.items__section ',
        start: 'top 80%',
        end: 'bottom center',
        toggleActions: 'play none none none'
    }
})


gsap.from('.elevating .translateY', {
    opacity: 0,
    y: 30,
    duration: 1.5,
    stagger: 0.6,
    scrollTrigger : {
        trigger: '.elevating',
        start: 'top 80%',
        end: 'bottom center',
        toggleActions: 'play none none none'
    }
})



gsap.from('.testemonials .translateY', {
    opacity: 0,
    y: 50,
    duration: 1.5,
    stagger: 0.3,
    scrollTrigger : {
        trigger: '.testemonials ',
        start: 'top 80%',
        end: 'bottom center',
        toggleActions: 'play none none none'
    }
});


gsap.from('.testemonials .anim1', {
    opacity: 0,
    y: 50,
    duration: 1.3,
    stagger: 0.6,
    ease: 'power4.easeOut',
    scrollTrigger: {
        trigger : '.testemonials ',
        start: 'top 80%',
        end: 'bottom center',
        toggleActions: 'play none none none'
    }
})


gsap.from('.footer__content .anim1', {
    opacity: 0,
    y: 50,
    duration: 1.3,
    stagger: 0.6,
    ease: 'power4.easeOut',
    scrollTrigger: {
        trigger : '.footer__content',
        start: 'top 80%',
        end: 'bottom center',
        toggleActions: 'play none none none'
    }
})


gsap.to('.footer__content .anim2', {
    opacity: 1,
    y: 0,
    duration: 1.3,
    stagger: 0.2,
    ease: 'power4.easeOut',
    scrollTrigger: {
        trigger : '.footer__content',
        start: 'top 80%',
        end: 'bottom center',
        toggleActions: 'play none none none'
    }
})

gsap.from('.copyright .translateY', {
    opacity: 0,
    y: 50,
    duration: 1.3,
    scrollTrigger : {
        trigger: '.footer__content ',
        start: 'top 80%',
        end: 'bottom center',
        toggleActions: 'play none none none'
    }
});
