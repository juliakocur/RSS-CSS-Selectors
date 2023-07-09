const mark1 = <HTMLElement>document.querySelector('.mark1');
const mark2 = <HTMLElement>document.querySelector('.mark2');
const mark3 = <HTMLElement>document.querySelector('.mark3');
const mark4 = <HTMLElement>document.querySelector('.mark4');
const mark5 = <HTMLElement>document.querySelector('.mark5');
const mark6 = <HTMLElement>document.querySelector('.mark6');
const mark7 = <HTMLElement>document.querySelector('.mark7');
const mark8 = <HTMLElement>document.querySelector('.mark8');
const mark9 = <HTMLElement>document.querySelector('.mark9');
const mark10 = <HTMLElement>document.querySelector('.mark10');
const reset = <HTMLElement>document.querySelector('.reset');
const help = <HTMLElement>document.querySelector('.help');
const help2 = <HTMLElement>document.querySelector('.help2');
const help3 = <HTMLElement>document.querySelector('.help3');
const help4 = <HTMLElement>document.querySelector('.help4');
const help5 = <HTMLElement>document.querySelector('.help5');
const help6 = <HTMLElement>document.querySelector('.help6');
const help7 = <HTMLElement>document.querySelector('.help7');
const help8 = <HTMLElement>document.querySelector('.help8');
const help9 = <HTMLElement>document.querySelector('.help9');
const help10 = <HTMLElement>document.querySelector('.help10');
const { removeMarkerColor } = require('../model/removeMarker.ts');
const { chooseLevel1 } = require('../view/chooseLevel.ts');

function resetPage(): void {
    chooseLevel1();
    removeMarkerColor(mark1);
    removeMarkerColor(mark2);
    removeMarkerColor(mark3);
    removeMarkerColor(mark4);
    removeMarkerColor(mark5);
    removeMarkerColor(mark6);
    removeMarkerColor(mark7);
    removeMarkerColor(mark8);
    removeMarkerColor(mark9);
    removeMarkerColor(mark10);
    help.classList.remove('put');
    help2.classList.remove('put');
    help3.classList.remove('put');
    help4.classList.remove('put');
    help5.classList.remove('put');
    help6.classList.remove('put');
    help7.classList.remove('put');
    help8.classList.remove('put');
    help9.classList.remove('put');
    help10.classList.remove('put');
}

reset.addEventListener('click', function putReset() {
    resetPage();
});

export {};
