import $ from '../core';

$.prototype.on = function (eventName, callback) {   //eventName - событие ('click, submit) callback - функция, которая будет выполнятся
    if (!eventName || !callback) {
        return this;                                    // на случай, если аргумент не передали
    }
    for (let i = 0; i < this.length; i++) {
        this[i].addEventListener(eventName, callback);
    }
    return this;
};

$.prototype.off = function (eventName, callback) {   //eventName - событие ('click, submit) callback - функция, которая будет выполнятся
    if (!eventName || !callback) {
        return this;                                    // на случай, если аргумент не передали
    }
    for (let i = 0; i < this.length; i++) {
        this[i].removeEventListener(eventName, callback);
    }
    return this;
};

$.prototype.click = function (handler) {   //добавляем клик, как отдельный метод.  handler - обработчик клика
    for (let i = 0; i < this.length; i++) {
        if (handler) {
            this[i].addEventListener('click', handler);
        } else {
            this[i].click();
        }
    }
    return this;
};