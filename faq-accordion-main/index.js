const pTag = document.querySelectorAll('.text-content p');
const buttons = document.querySelectorAll('.text-content button');
const plusImage = '<img src="./assets/images/icon-plus.svg" alt="">';
const minusImage = '<img src="./assets/images/icon-minus.svg" alt="">';


document.addEventListener('DOMContentLoaded', plusImages);

function plusImages() {
    buttons.forEach(button => {
        button.innerHTML = plusImage;
    })
};

function removePTag() {
    pTag.forEach(p => {
        p.classList.remove('displayBlock')
    })
};



function shoPTag(num) {
    if (buttons[num].innerHTML === minusImage) {
        buttons[num].innerHTML = plusImage;
        pTag[num].classList.remove('displayBlock');
    } else if (buttons[num].innerHTML = plusImage) {
        // removePTag()
        // plusImages()
        pTag[num].classList.add('displayBlock');
        buttons[num].innerHTML = minusImage;
    }


};


