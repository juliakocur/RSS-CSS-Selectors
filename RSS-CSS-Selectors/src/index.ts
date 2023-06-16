import './style.css';
import './options.css';

const burger = <HTMLElement>document.querySelector('.burger_wrap');
const one = <HTMLElement>document.querySelector('.one');
const two = <HTMLElement>document.querySelector('.two');
const three = <HTMLElement>document.querySelector('.three');

burger.addEventListener('click', function openMenu(): void {
    one.classList.toggle('span_one');
    two.classList.toggle('span_two');
    three.classList.toggle('span_three');
});
