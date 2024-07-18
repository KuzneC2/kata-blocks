import './styles/index.scss';
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
const slideMore = document.querySelectorAll('.buttons-container__show');


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

const swiperSecond = new Swiper('.swiper_second', {
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

const swiperThird = new Swiper('.swiper_third', {
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

buttonCloseNavbar.addEventListener('click', function () {
    modalNavbar.classList.remove('modal_open')
})

buttonOpenNavbar.addEventListener('click', function () {
    modalNavbar.classList.add('modal_open')
})

const buttonOpenCall = document.querySelectorAll('.button-modal-call');
const modalCall = document.querySelector('.modal-call')
const buttonCloseCall = document.querySelector('.modal__button_exit_call')

buttonOpenCall.forEach(btn => {
    btn.addEventListener('click', function () {
        modalCall.classList.add('modal_open');
    })
});

// modalCall.addEventListener('click', function () {
//     modalCall.classList.remove('modal_open');
// })

buttonCloseCall.addEventListener('click', function () {
    modalCall.classList.remove('modal_open');
})


const buttonOpenHelp = document.querySelectorAll('.button-modal-help');
const modalHelp = document.querySelector('.modal-help');
const modalCloseHelp = document.querySelector('.modal__button_exit_help');

buttonOpenHelp.forEach(btn => {
    btn.addEventListener('click', function () {
        modalHelp.classList.add('modal_open');
    })
});

modalCloseHelp.addEventListener('click', function () {
    modalHelp.classList.remove('modal_open');
})




const targetCall = document.querySelector('.modal-item__content_call');
// Добавляем обработчик события click к элементу document
modalCall.addEventListener('click', function (event) {
    if (!targetCall.contains(event.target)) {
        console.log('Клик был выполнен вне заданной области');
        modalCall.classList.remove('modal_open')
    }
});


const targetHelp = document.querySelector('.modal-item__content_help');
// Добавляем обработчик события click к элементу document
modalHelp.addEventListener('click', function (event) {
    if (!targetHelp.contains(event.target)) {
        console.log('Клик был выполнен вне заданной области');
        modalHelp.classList.remove('modal_open')
    }
});


const targetMenu = document.querySelector('.modal-item__content_menu');
// Добавляем обработчик события click к элементу document
modalNavbar.addEventListener('click', function (event) {
    if (!targetMenu.contains(event.target)) {
        console.log('Клик был выполнен вне заданной области');
        modalNavbar.classList.remove('modal_open')
    }
});

const buttonOpenText = document.querySelector('.container-about__more-information');
const textInformation = document.querySelector('.container-about__subtitle-box');

buttonOpenText.addEventListener('click', function () {
    textInformation.classList.toggle('container-about__subtitle-box_open');
    if (buttonOpenText.textContent === 'Читать далее') {
        buttonOpenText.textContent = 'Свернуть';
    }
    else {
        buttonOpenText.textContent = 'Читать далее';
    }
});



function a(par1){

    function b(){
        return par1 + par2
    }
}

