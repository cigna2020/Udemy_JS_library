import $ from '../core';

$.prototype.html = function (content) {
    for (let i = 0; i < this.length; i++) {
        if (content) {
            this[i].innerHTML = content;
        } else {
            return this[i].innerHTML;     // возвращаем содержимое элемента, дальше код не выполняется
        }
    }

    return this;  // this - элемент с новым контентом
};


$.prototype.eq = function (i) {                 // будем получать элемент под номером і
    const swap = this[i];
    const objLength = Object.keys(this).length;     // узнайом количество свойств в обьекте

    for (let i = 0; i < objLength; i++) {
        delete this[i];                         // очищаем обьект
    }

    this[0] = swap;     // формируем новый обьект
    this.length = 1;

    return this;  // this - обьект с одним элементом с одним свойством
};