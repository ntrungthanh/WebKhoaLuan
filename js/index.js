// Show/hide password onClick of button using Javascript only

// https://stackoverflow.com/questions/31224651/show-hide-password-onclick-of-button-using-javascript-only

// function show() {
//     var p = document.querySelector('#pwd');
//     p.setAttribute('type', 'text');
// }

// function hide() {
//     var p = document.querySelector('#pwd');
//     p.setAttribute('type', 'password');
// }

// var pwShown = 0;

// const eye = document.querySelector("#eye");
// eye.addEventListener("click", () => {
//     if (pwShown == 0) {
//         pwShown = 1;
//         show();
//     } else {
//         pwShown = 0;
//         hide();
//     }
// }, false);


//Show menu

const menu = document.querySelector('.nav__menu');
const openMenu = document.querySelector('.btn__menu');
const closeMenu = document.querySelector('.btn-close');


openMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
    openMenu.style.display = 'none';
    closeMenu.style.display = 'block';
    // menu.classList.add('animate__fadeInRight');
    // menu.classList.toggle('animate__fadeOutRight');
});

closeMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
    closeMenu.style.display = 'none';
    openMenu.style.display = 'block';
    // menu.classList.toggle('animate__fadeInRight');
    // menu.classList.add('animate__fadeOutRight');
});