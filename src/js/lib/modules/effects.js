import $ from '../core';

$.prototype.animateOverTime = function (dur, cb, fin) { // dur - duration, cb - callback function, fin - final function, function after cb
    let timeStart;

    function _animateOverTime(time) {   // _ - означает, что это техическа функция и ее не нужно трогать, time - автоматически приходит от браузера
        if (!timeStart) {
            timeStart = time;
        }

        let timeElapsed = time - timeStart; // считаем сколько времени длится анимация
        let complection = Math.min(timeElapsed / dur, 1);   // чтобы не ламать код, в opacity 1 - это граничное значение

        cb(complection);

        if (timeElapsed < dur) {
            requestAnimationFrame(_animateOverTime);
        } else {
            if (typeof fin === 'function') {        // если fin передано,тогда запускаем его
                fin();
            }
        }
    }

    return _animateOverTime;
};

$.prototype.fadeIn = function (dur, display, fin) {
    for (let i = 0; i < this.length; i++) {
        this[i].style.display = display || 'block';     // если display не передан, тогда block. Это старый способ записи значения по умолчанию

        const _fadeIn = (complection) => {
            this[i].style.opacity = complection;
        };

        const ani = this.animateOverTime(dur, _fadeIn, fin);
        requestAnimationFrame(ani);
    }

    return this;
};

$.prototype.fadeOut = function (dur, fin) {
    for (let i = 0; i < this.length; i++) {

        const _fadeOut = (complection) => {
            this[i].style.opacity = 1 - complection;
            if (complection === 1) {
                this[i].style.display = 'none';     // если display не передан, тогда block. Это старый способ записи значения по умолчанию
            }
        };

        const ani = this.animateOverTime(dur, _fadeOut, fin);
        requestAnimationFrame(ani);
    }

    return this;
};