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