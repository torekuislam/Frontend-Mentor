const dropdownbtn = document.querySelectorAll('.dropdown button');
const dropdownclass = document.querySelectorAll('.dropdown');
const dropdownUl = document.querySelectorAll('.about ul');
const upArrow = '<img src="./images/icon-arrow-up.svg" alt="">';
const downArrow = '<img src="./images/icon-arrow-down.svg" alt="">';

function dropdown(num) {
    if (dropdownbtn[num].innerHTML === downArrow) {
        dropdownbtn[num].innerHTML = upArrow;
        dropdownUl[num].classList.add('dispalyBlock')
        isFeaturesopen = true;
    } else if (dropdownbtn[num].innerHTML === upArrow) {
        dropdownbtn[num].innerHTML = downArrow;
        dropdownUl[num].classList.remove('dispalyBlock')
    }
}
dropdownclass[0].addEventListener('click', event => {
    dropdown(0)
})
dropdownclass[1].addEventListener('click', event => {
    dropdown(1)
})

const sideMenu = document.getElementById('sideMenu');
const closeMenu = document.getElementById('closeMenu');
const nav = document.querySelector('nav');

sideMenu.addEventListener('click', event => {
    nav.classList.remove('navDispalynume');
    nav.classList.add('navDispalyBlock');
});
closeMenu.addEventListener('click', event => {
    nav.classList.add('navDispalynume');
    nav.classList.remove('navDispalyBlock');
});
