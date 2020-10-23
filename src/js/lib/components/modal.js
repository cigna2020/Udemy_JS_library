import $ from '../core';

$.prototype.modal = function (created) {        // created - значить, что окно создано при помощи js
    for (let i = 0; i < this.length; i++) {
        const target = this[i].getAttribute('data-target');
        $(this[i]).click((e) => {
            e.preventDefault();
            $(target).fadeIn(500);
            document.body.style.overflow = 'hidden';
        });

        const closeElements = document.querySelectorAll(`${target} [data-close]`);
        closeElements.forEach(elem => {
            $(elem).click(() => {
                $(target).fadeOut(500);
                document.body.style.overflow = '';

                if (created) {
                    document.querySelector(target).remove();
                }
            });
        });

        $(target).click(e => {
            if (e.target.classList.contains('modal')) {
                $(target).fadeOut(500);
                document.body.style.overflow = '';
                if (created) {
                    document.querySelector(target).remove();
                }
            }
        });

    }
};

$('[data-toggle="modal"]').modal();


$.prototype.createModal = function ({ text, btns } = {}) {
    for (let i = 0; i < this.length; i++) {
        let modal = document.createElement('div');
        modal.classList.add('modal');
        modal.setAttribute('id', this[i].getAttribute('data-target').slice(1)); // slice - чтобы убрать # в начале атрибута

        const buttons = [];     // для кнопокв в футере
        for (let j = 0; j < btns.count; j++) {          // count - число, которая будет передана в обьект btns, напр.: btns = {count: число, settings: [[text, clssNames=[], close,  cb]]}
            let btn = document.createElement('button');
            btn.classList.add('btn', ...btns.settings[j][1]);
            btn.textContent = btns.settings[j][0];
            if (btns.settings[j][2]) {
                btn.setAttribute('data-close', 'true');
            }
            if (btns.settings[j][3] && typeof (btns.settings[j][3]) === 'function') {
                btn.addEventListener('click', btns.settings[j][3]);
            }
            buttons.push(btn);  // добавляем каждую кнопку в массив
        }

        modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">

                <button class="close" data-close>
                    <span>&times;</span>
                </button>

                <div class="modal-header">
                    <div class="modal-title">
                        ${text.title}
                    </div>
                </div>

                <div class="modal-body">
                    ${text.body}
                </div>

                <div class="modal-footer">

                </div>
            </div>
        </div>
        `;

        modal.querySelector('.modal-footer').append(...buttons);
        document.body.appendChild(modal);   // добавляем окно на страницу, в ином случае оно существует только в js
        $(this[i]).modal(true);     // вызываем основной метод модал к ново-созданому окну, true == created
        $(this[i].getAttribute('data-target')).fadeIn(500);      // получаем то окно, которое хотим открыть и показываем
    }
};