import $ from '../core';


$.prototype.carousel = function () {
    for (let i = 0; i < this.length; i++) {
        const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width; // получаем ширину (уже применена) блока в котором содержатся все слайды
        const slides = this[i].querySelectorAll('.carousel-item');      // все слайды, которые находятся внутри слайдера
        const slidesField = this[i].querySelector('.carousel-slides');
        const dots = this[i].querySelectorAll('.carousel-indicators li'); // индикаторы (точки/блоки) внизу слайдеров

        slidesField.style.width = 100 * slides.length + '%'; // для обертки слайдеров устанавливаем ширину, которая равняется ширине всех слайдов
        slides.forEach(slide => {
            slide.style.width = width; // ширина для каждого отдельного слайда
        });

        let offset = 0;
        let slideIndex = 0;

        $(this[i].querySelector('[data-slide="next"]')).click((e) => {       // функционал кнопки некст
            e.preventDefault();
            if (offset == (+width.replace(/\D/g, '') * (slides.length - 1))) {  // если offset == полной ширине блока, т.е отображается последний слайд
                offset = 0;     // возвращаем слайдер в начальное положение
            } else {
                offset += +width.replace(/\D/g, '');        // добавляем ширину слайда с которой вырезаны не цифры
            }

            slidesField.style.transform = `translateX(-${offset}px)`;   // перемещаем обертку 

            if (slideIndex == slides.length - 1) {
                slideIndex = 0;
            } else {
                slideIndex++;
            }

            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });

        $(this[i].querySelector('[data-slide="prev"]')).click((e) => {    // функционал кнопки прев
            e.preventDefault();
            if (offset == 0) {  // если слайдер в начальном положении
                offset = +width.replace(/\D/g, '') * (slides.length - 1); // возвращаем слайдер в конец
            } else {
                offset -= +width.replace(/\D/g, '');        // УБИРАЕМ ширину слайда с которой вырезаны не цифры
            }

            slidesField.style.transform = `translateX(-${offset}px)`;   // перемещаем обертку 

            if (slideIndex == 0) {
                slideIndex = slides.length - 1;
            } else {
                slideIndex--;
            }

            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });

        const sliderId = this[i].getAttribute('id');
        $(`#${sliderId} .carousel-indicators li`).click(e => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo; // присваиваем номер с верстки
            offset = +width.replace(/\D/g, '') * slideTo;

            slidesField.style.transform = `translateX(-${offset}px)`;   // перемещаем обертку 
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });
    }
};

$('.carousel').carousel();