export function win(): void {
    const popupShadow = <HTMLElement>document.querySelector('.popup');
    const popupBody = <HTMLElement>document.querySelector('.popup_body');
    popupBody.classList.remove('none');
    popupShadow.classList.remove('none');
}

export {};
