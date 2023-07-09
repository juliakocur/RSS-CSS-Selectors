const popupBody = <HTMLElement>document.querySelector('.popup_body');
const popupShadow = <HTMLElement>document.querySelector('.popup');
const popupClose = <HTMLElement>document.querySelector('.popup_close');
const { chooseLevel1 } = require('../view/chooseLevel.ts');

function closePopup(): void {
    popupBody.classList.add('none');
    popupShadow.classList.add('none');
    chooseLevel1();
}

popupClose.addEventListener('click', function closePop(): void {
    closePopup();
});

document.addEventListener('click', function closePop(e: Event): void {
    if (e.target === popupBody) {
        closePopup();
    }
});
