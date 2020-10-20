import $ from '../core';

$.prototype.addClass = function (...classNames) {    // назначаем новый метод, ...classNames - неограниченное количество аргументов
    for (let i = 0; i < this.length; i++) {         // this.length - количество элементов
        this[i].classList.add(...classNames);
    }

    return this;
};

$.prototype.removeClass = function (...classNames) {
    for (let i = 0; i < this.length; i++) {
        this[i].classList.remove(...classNames);
    }

    return this;
};

$.prototype.toggleClass = function (classNames) {       // toggle может работать только с одним классом
    for (let i = 0; i < this.length; i++) {
        this[i].classList.toggle(classNames);
    }

    return this;
};
