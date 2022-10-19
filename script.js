const popup = document.querySelector('.popup');
const popupCloseBtn = document.querySelector('.popup-close-button');

setTimeout (() => {
    popup.classList.add('popup-active');
}, 1500);

popupCloseBtn.addEventListener('click', () => {
    popup.classList.remove('popup-active');
});