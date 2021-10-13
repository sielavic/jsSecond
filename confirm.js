const modal = document.createElement("div");
const modal_content = document.createElement("div");
const content = document.createElement("div");
const buttons = document.createElement("div");
var apply;
var cancel;


class ConfirmOrAlertModal {
    /**
     * конструктор заменяет вызов функции
     */
    constructor() {
        if (apply) {
            apply.remove();
            apply = document.createElement("div");
        } else {
            apply = document.createElement("div");
        }
        if (cancel) {
            cancel.remove();
            cancel = document.createElement("div");
        } else {
            cancel = document.createElement("div");
        }


        //yes.innerHTML = "<div class='button_red' style='display: inline-block; font-weight: bold; font-size: 14px;'>Продолжить</div>";
        apply.className = "button_red";
        apply.style.display = 'inline-block';
        apply.style.fontWeight = 'bold';
        apply.style.fontSize = '14px';
        apply.style.cursor = 'pointer';
        apply.style.float = 'right';

        //no.innerHTML = "<div class='button_gray' style='display: inline-block;font-size: 14px;'>Отмена</div>";
        cancel.className = 'button_gray';
        cancel.style.display = 'inline-block';
        cancel.style.fontSize = '14px';
        cancel.style.cursor = 'pointer';
        cancel.style.float = 'right';

        apply.style.cursor = "pointer";
        cancel.style.cursor = "pointer";


        modal.className = "modal";
        modal_content.className = "modal-content";
        modal.appendChild(modal_content);
        var clearBoth = document.createElement("div");
        clearBoth.style.clear = 'both';
        buttons.id = "btns";
        buttons.style.textAlign = 'center';
        modal_content.appendChild(content)
        modal_content.appendChild(buttons)
        modal_content.appendChild(clearBoth);
        document.body.insertBefore(modal, document.body.firstChild);
    }

    create(description) {
        buttons.appendChild(apply);
        modal_content.style.width = 500 + 'px';
        modal.style.display = "block";
        content.innerHTML = '' + description + '<br>';
        apply.innerHTML = "Продолжить";
        cancel.innerHTML = "Отмена";
        apply.addEventListener('click', this.yesButton);
        cancel.addEventListener('click', this.noButton);
    }

    yesButton() {
        alert("продолжить");
        modal.style.display = "none";
        apply.removeEventListener('click', this.yesButton);
        cancel.removeEventListener('click', this.noButton);
    }

    noButton() {
        content.innerHTML = '';
        modal.style.display = "none";
        apply.removeEventListener('click', this.yesButton);
        cancel.removeEventListener('click', this.noButton);
    }

}

/**
 *Объект класса withButton разветляется на две модалки
 * @type {ConfirmOrAlertModal}
 */
var withButton = new ConfirmOrAlertModal();

var objectConfirmModal = {
    create: function (description, callback) {
        var button = document.getElementById("confirm_button");
        button.addEventListener("click", function () {
            callback(description);
        });
    },
};

/**
 * создается нужная кнопка- buttons.appendChild(cancel) отмены и отправляется description в класс
 */
objectConfirmModal.create(
    "Блабла", function (description) {
        buttons.appendChild(cancel);
        withButton.create(description);
    });


var objectAlertModal = {
    create: function (description, callback) {
        var buttonAlert = document.getElementById("alert_button");
        buttonAlert.addEventListener("click", function () {
            callback(description);
        });
    },
};

objectAlertModal.create("Какой то текст", function (description) {
    cancel.remove();
    withButton.create(description);
});





