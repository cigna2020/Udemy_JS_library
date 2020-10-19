import $ from '../core';

$.prototype.show = function () {
    // console.log(this);      // this - обьект, получен с core.js
    for (let i = 0; i < this.length; i++) {
        if (!this[i].style) {       // если у полученного элемента нет свойства стайл
            continue;
        }
        this[i].style.display = '';
    }

    return this;
};

$.prototype.hide = function () {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].style) {       // если у полученного элемента нет свойства стайл
            continue;
        }
        this[i].style.display = 'none';
    }

    return this;
};

$.prototype.toggle = function () {
    // console.log(this);      // this - обьект, получен с core.js
    for (let i = 0; i < this.length; i++) {
        if (!this[i].style) {       // если у полученного элемента нет свойства стайл
            continue;
        }

        if (this[i].style.display === 'none') {
            this[i].style.display = '';
        } else {
            this[i].style.display = 'none';
        }
    }

    return this;
};