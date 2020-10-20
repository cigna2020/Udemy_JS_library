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

$('button').on('click', function () {
    $(this).toggleClass('active');  //  this - тот элемент на который нажали,т.е кнопка
    // console.log(this);
});