const swiper = new Swiper('.swiper', {
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

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
});


const slider = document.querySelector('.slider');
const slideMore = document.querySelector('.slide-more');

slideMore.addEventListener('click', function () {
    slider.classList.toggle('open');
    if (slideMore.textContent === 'Показать все') {
        slideMore.textContent = 'Скрыть'
    }
    else {
        slideMore.textContent = 'Показать все'
    }
});