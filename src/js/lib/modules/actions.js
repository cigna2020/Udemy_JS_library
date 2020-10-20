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


$.prototype.index = function () {                 // получаем индекс обьекта среди всех обьектов у которых один родитель
    const parent = this[0].parentNode;     // получаем родителя
    const childs = [...parent.children];         // получаем всех потомков родителя, [...] розворачиваем колекцию - превращаем в массив, чтобы был метод findIndex 

    const findMyIndex = (item) => {     // item - каждый элемент внутри childs
        return item == this[0];         // вернет тот элемент, который нам нужен
    };

    return childs.findIndex(findMyIndex);      // вернет индекс элемента, использовать с клик и т.п.
};


$.prototype.find = function (selector) {    // получаем обьекты выбранные по селектору в ввиде нового обьекта
    let numberOfItems = 0;                  // количество элементов, которые подошли по селектору
    let counter = 0;        // количество новых элементов записанных в this

    const copyObj = Object.assign({}, this);     // делаем неглубокую копию обьекта

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].querySelectorAll(selector);

        if (arr.length == 0) {
            continue;
        }

        for (let j = 0; j < arr.length; j++) {
            this[counter] = arr[j];             // переписываем обьект новыми данными
            counter++;
        }

        numberOfItems += arr.length;
    }

    this.length = numberOfItems;

    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems];     // удаляем обьекты, которые остались от старого обьекта, т.е, которые не перезаписаны
    }

    return this;
};

