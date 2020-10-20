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
    }

    return childs.findIndex(findMyIndex);      // вернет индекс элемента, использовать с клик и т.п.
};

