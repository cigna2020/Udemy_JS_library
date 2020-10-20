// (() => {        // анонимная функция, которая сразу же и вызывается
//     const $ = function (selector) {
//         const elements = document.querySelectorAll(selector); // selector - селектор (div, data-atribute...), который будет передан в main.js при вызове
//         const obj = {};

//         obj.hide = () => {
//             elements.forEach(elem => {
//                 elem.style.display = 'none';
//             });
//             return obj;  // для того, чтобы была возможность вызвать к методам (называется чейнингом)
//         };

//         obj.show = () => {
//             elements.forEach(elem => {
//                 elem.style.display = '';    // если пустая строка, то браузер сам решает какой дисплей подставлять
//             });
//             return obj;  // для того, чтобы была возможность вызвать к методам (называется чейнингом)
//         };

//         return obj;  // для того, чтобы была возможность вызвать к методам (называется чейнингом)

//     };

//     window.$ = $;  // таким образом получаем глобальную функцию document.querySelectorAll(selector)..., которая вызывается только одним символом $
// })();

const $ = function (selector) {
    return new $.prototype.init(selector);
};

$.prototype.init = function (selector) {
    if (!selector) {
        return this;    // this в даному случае пустой обьект {}
    }

    if (selector.tagName) {     // если есть tagName, значит это Html элемент, напр. <button class="active">Click me!</button>
        this[0] = selector;     // оставляем только селектор (кнопка, див)
        this.length = 1;
        return this;            // return, чтобы код дальше не выполнялся 
    }

    Object.assign(this, document.querySelectorAll(selector));     // позволяет в существующий обьект добавить новые свойства
    this.length = document.querySelectorAll(selector).length;      // добавили новое свойство 
    return this; // в этом обьекте  thisбудут хранится прототипы, того что назначим и элементы с которым будем взаимодействовать через querySelectorAll
};

$.prototype.init.prototype = $.prototype;       // в прототип обекта, который возвращается с инит записали прототип главной функции, теперь на обьекте, который будет создаватся при помощи функции $ можно использовать любые методы, которые будут внутри функции инит

window.$ = $;

export default $;