import './styles/index.css';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const swiper = new Swiper('.swiper_first', {
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    spaceBetween: 190,

    breakpoints: {
        320: {

            spaceBetween: 190,
        },

        420: {
            spaceBetween: 120,
        },
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },


});

const slider = document.querySelectorAll('.slider');
const slideMore = document.querySelectorAll('.slide-more');


for (let i = 0; i < slideMore.length; i++) {
    slideMore[i].addEventListener('click', function () {
        slider[i].classList.toggle('open');
        if (slideMore[i].textContent === 'Показать все') {
            slideMore[i].textContent = 'Скрыть'
        }
        else {
            slideMore[i].textContent = 'Показать все'
        }
    })
}

const swiperSecond = new Swiper('.swiper_second',{
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    spaceBetween: 190,

    breakpoints: {
        320: {

            spaceBetween: 190,
        },

        420: {
            spaceBetween: 120,
        },
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },


});

const swiperThird = new Swiper('.swiper_third',{
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    spaceBetween: 190,

    breakpoints: {
        320: {

            spaceBetween: 230,
        },

        420: {
            spaceBetween: 120,
        },
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },


});


const buttonOpenNavbar = document.querySelector('.button-open-navbar');
const modalNavbar = document.querySelector('.modal-navbar');

const buttonCloseNavbar = document.querySelector('.round-button_exit');

buttonCloseNavbar.addEventListener('click', function(){
    modalNavbar.classList.remove('modal_open')
})

buttonOpenNavbar.addEventListener('click', function(){
    modalNavbar.classList.add('modal_open')
    console.log('click')
})



// modalNavbar.style.overflowY = 'auto';

// modalNavbar.addEventListener('wheel', function(e) {
//     e.stopPropagation();
//   });