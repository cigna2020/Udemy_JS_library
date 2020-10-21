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

$('button').on('click', function () {
    $('div').eq(2).toggleClass('active');       // второму (3-му) диву тоглим класс при клике на кнопку
});

$('div').click(function () {
    console.log($(this).index());
});

// console.log($('div').eq(2).find('.more'));      // ищем элементы с классом more среди 2 (третего) div

// console.log($('.some').closest('.findme'));         // ищем все .some в родителе .findme

// console.log($('.more').eq(0).siblings());           // ищем всех соседей .more

console.log($('button').fadeOut(1800));            // скрываем (делаем прозрачными) элементы в течении 18 сек. 
// console.log($('button').fadeIn(1800));            // показываем элементы в течении 18 сек.