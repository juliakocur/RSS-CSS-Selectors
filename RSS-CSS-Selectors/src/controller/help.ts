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
const input = <HTMLInputElement>document.querySelector('.input_code');
const { typeText } = require('../model/createInputText.ts');

help.addEventListener('click', function readInput(): void {
    input.focus();
    typeText('plate');
    help.classList.add('put');
});

help2.addEventListener('click', function readInput(): void {
    input.focus();
    typeText('bento');
    help2.classList.add('put');
});

help3.addEventListener('click', function readInput(): void {
    input.focus();
    typeText('#fancy');
    help3.classList.add('put');
});

help4.addEventListener('click', function readInput(): void {
    input.focus();
    typeText('plate sandwich');
    help4.classList.add('put');
});

help5.addEventListener('click', function readInput(): void {
    input.focus();
    typeText('#fancy sausage');
    help5.classList.add('put');
});

help6.addEventListener('click', function readInput(): void {
    input.focus();
    typeText('sandwich.small');
    help6.classList.add('put');
});

help7.addEventListener('click', function readInput(): void {
    input.focus();
    typeText('cookie.small');
    help7.classList.add('put');
});

help8.addEventListener('click', function readInput(): void {
    input.focus();
    typeText('bento cookie.small');
    help8.classList.add('put');
});

help9.addEventListener('click', function readInput(): void {
    input.focus();
    typeText('plate, bento');
    help9.classList.add('put');
});

help10.addEventListener('click', function readInput(): void {
    input.focus();
    typeText('*');
    help10.classList.add('put');
});

export {};
