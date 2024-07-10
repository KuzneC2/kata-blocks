import './styles/index.css';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const swiper = new Swiper('.swiper-first', {
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

const swiperSecond = new Swiper('.swiper-second',{
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

const swiperThird = new Swiper('.swiper-third',{
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