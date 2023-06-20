import './style.css';
import './options.css';

const wrap = <HTMLElement>document.querySelector('.menu_wrap');
const burger = <HTMLElement>document.querySelector('.burger_wrap');
const one = <HTMLElement>document.querySelector('.one');
const two = <HTMLElement>document.querySelector('.two');
const three = <HTMLElement>document.querySelector('.three');
const plate1 = <HTMLElement>document.querySelector('.plate1');
const plate2 = <HTMLElement>document.querySelector('.plate2');
const tooltip1 = <HTMLDivElement>document.querySelector('.tooltip1');
const tooltip2 = <HTMLElement>document.querySelector('.tooltip2');
const plateFirst = <HTMLElement>document.querySelector('.plate_first');
const plateSecond = <HTMLElement>document.querySelector('.plate_second');

wrap.addEventListener('click', function closeMenu(): void {
    wrap.classList.remove('open');
    one.classList.remove('span_one');
    two.classList.remove('span_two');
    three.classList.remove('span_three');
});

burger.addEventListener('click', function openMenu(): void {
    wrap.classList.toggle('open');
    one.classList.toggle('span_one');
    two.classList.toggle('span_two');
    three.classList.toggle('span_three');
});

plate1.addEventListener('mouseover', function add(): void {
    tooltip1.classList.add('hover');
});

plate1.addEventListener('mouseleave', function remove(): void {
    tooltip1.classList.remove('hover');
});

plate2.addEventListener('mouseover', function add(): void {
    tooltip2.classList.add('hover');
});

plate2.addEventListener('mouseleave', function remove(): void {
    tooltip2.classList.remove('hover');
});

plateFirst.addEventListener('mouseover', function add(): void {
    plate1.classList.add('color');
    tooltip1.classList.add('hover');
});

plateFirst.addEventListener('mouseleave', function remove(): void {
    plate1.classList.remove('color');
    tooltip1.classList.remove('hover');
});

plateSecond.addEventListener('mouseover', function add(): void {
    plate2.classList.add('color');
    tooltip2.classList.add('hover');
});

plateSecond.addEventListener('mouseleave', function remove(): void {
    plate2.classList.remove('color');
    tooltip2.classList.remove('hover');
});
