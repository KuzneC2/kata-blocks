import './styles/index.css';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
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





// slideMore.addEventListener('click', function () {
//     slider.classList.toggle('open');
//     if (slideMore.textContent === 'Показать все') {
//         slideMore.textContent = 'Скрыть'
//     }
//     else {
//         slideMore.textContent = 'Показать все'
//     }
// });