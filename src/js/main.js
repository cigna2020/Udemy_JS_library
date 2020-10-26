import './lib/lib';
import $ from './lib/lib';

// $('.active').addClass('hello', 'world'); // до элелемента (div) с классом active добавляем еще два класса hello и world

// $('.active').toggleClass('hello');

// $('.active').on('click', sayHello);
// $('.active').click(sayHello);
// $('.active').off('click', sayHello);

// function sayHello() {
//     console.log('Hello');
// }

// $('button').on('click', function () {
//     $(this).toggleClass('active');  //  this - тот элемент на который нажали,т.е кнопка
//     // console.log(this);
// });

// console.log($('button').html()); // получим текст с кнопки
// console.log($('button').html("hello button")); // поменяем текст кнопки

// $('button').on('click', function () {
//     $('div').eq(2).toggleClass('active');       // второму (3-му) диву тоглим класс при клике на кнопку
// });

// $('div').click(function () {
//     console.log($(this).index());
// });

// console.log($('div').eq(2).find('.more'));      // ищем элементы с классом more среди 2 (третего) div

// console.log($('.some').closest('.findme'));         // ищем все .some в родителе .findme

// console.log($('.more').eq(0).siblings());           // ищем всех соседей .more

// console.log($('button').fadeOut(1800));            // скрываем (делаем прозрачными) элементы в течении 18 сек. 
// console.log($('button').fadeIn(1800));            // показываем элементы в течении 18 сек.

// $('#first').on('click', () => {
//     $('div').eq(1).fadeToggle(800);
// });

// $('[data-count="second"]').on('click', () => {
//     $('div').eq(2).fadeToggle(800);
// });

// $('button').eq(2).on('click', () => {
//     $('.w-500').fadeToggle(800);
// });

// $('.wrap').html(
//     `<div class="dropdown">
//         <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
//         <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
//             <a href="#" class="dropdown-item">Action</a>
//             <a href="#" class="dropdown-item">Action #2</a>
//             <a href="#" class="dropdown-item">Action #3</a>
//         </div>
//     </div>`
// );
// $('.dropdown-toggle').dropdown();

$('#trigger').click(() => $('#trigger').createModal({       // метод createModal (динамическое мод.окно) вызывается только после клика на кнопку с id trigger
    text: {
        title: 'Modal title #3',
        body: 'Lorem Lorem lya lya lya'
    },
    btns: {
        count: 3,
        settings: [
            [
                'Close',                    //  добавляем кнопку закрытие окна
                ['btn-danger', 'mr-10'],    // классы для оформления кнопки
                true                        // значит к кнопке добавится атрибут 'data-close'
            ],
            [
                'Save changes',
                ['btn-success'],
                false,                       // значит, что она не закрывает окно
                () => {
                    alert('Данные сохранены');
                }
            ],
            [
                'Another button',
                ['btn-warning', 'ml-10'],
                false,
                () => {
                    alert('Hello world');
                }
            ]
        ]
    }
}));

$().get('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => console.log(res));