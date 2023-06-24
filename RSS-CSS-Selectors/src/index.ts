import './style.css';
import './options.css';

const wrap = <HTMLElement>document.querySelector('.menu_wrap');
const burger = <HTMLElement>document.querySelector('.burger_wrap');
const one = <HTMLElement>document.querySelector('.one');
const two = <HTMLElement>document.querySelector('.two');
const three = <HTMLElement>document.querySelector('.three');
const plate1 = <HTMLElement>document.querySelector('.plate1');
const plate2 = <HTMLElement>document.querySelector('.plate2');
const plate3 = <HTMLElement>document.querySelector('.plate3');
const bento1 = <HTMLElement>document.querySelector('.bento1');
const bento2 = <HTMLElement>document.querySelector('.bento2');
const tooltip1 = <HTMLDivElement>document.querySelector('.tooltip1');
const tooltip2 = <HTMLElement>document.querySelector('.tooltip2');
const plateFirst = <HTMLElement>document.querySelector('.plate_first');
const plateSecond = <HTMLElement>document.querySelector('.plate_second');
const enter = <HTMLElement>document.querySelector('.enter');
const input = <HTMLInputElement>document.querySelector('.input_code');
const mark = <HTMLElement>document.querySelector('.mark');
const mark1 = <HTMLElement>document.querySelector('.mark1');
const mark2 = <HTMLElement>document.querySelector('.mark2');
const help = <HTMLElement>document.querySelector('.help');
const help2 = <HTMLElement>document.querySelector('.help2');
const tooltip1Bento1 = <HTMLElement>document.querySelector('.tooltip1_task2');
const tooltip1Plate = <HTMLElement>document.querySelector('.tooltip2_task2');
const tooltip1Bento2 = <HTMLElement>document.querySelector('.tooltip3_task2');
const bento1Img = <HTMLElement>document.querySelector('.bento1_task2');
const plate3Img = <HTMLElement>document.querySelector('.plate_task2');
const bento2Img = <HTMLElement>document.querySelector('.bento2_task2');
const code1 = <HTMLElement>document.querySelector('.editor_right_code');
const code2 = <HTMLElement>document.querySelector('.editor_right_code2');
const table1 = <HTMLElement>document.querySelector('.table_view');
const table2 = <HTMLElement>document.querySelector('.table_view2');
const level = <HTMLElement>document.querySelector('.level');
const level1 = <HTMLElement>document.querySelector('.level1');
const level2 = <HTMLElement>document.querySelector('.level2');

// burger menu ------------------------------------------------------------------------------

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

/*
function add(x: Node) {
    if (x instanceof Element) {
        const classList = (x as Element).classList;
        classList.add('hover');
      } 
} */

// hover the element -------------------------------------------------------------------------

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

plate3.addEventListener('mouseover', function add(): void {
    tooltip1Plate.classList.add('hover');
});

plate3.addEventListener('mouseleave', function remove(): void {
    tooltip1Plate.classList.remove('hover');
});

bento1.addEventListener('mouseover', function add(): void {
    tooltip1Bento1.classList.add('hover');
});

bento1.addEventListener('mouseleave', function remove(): void {
    tooltip1Bento1.classList.remove('hover');
});

bento2.addEventListener('mouseover', function add(): void {
    tooltip1Bento2.classList.add('hover');
});

bento2.addEventListener('mouseleave', function remove(): void {
    tooltip1Bento2.classList.remove('hover');
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

bento1Img.addEventListener('mouseover', function add(): void {
    bento1.classList.add('color');
    tooltip1Bento1.classList.add('hover');
});

bento1Img.addEventListener('mouseleave', function remove(): void {
    bento1.classList.remove('color');
    tooltip1Bento1.classList.remove('hover');
});

bento2Img.addEventListener('mouseover', function add(): void {
    bento2.classList.add('color');
    tooltip1Bento2.classList.add('hover');
});

bento2Img.addEventListener('mouseleave', function remove(): void {
    bento2.classList.remove('color');
    tooltip1Bento2.classList.remove('hover');
});

plate3Img.addEventListener('mouseover', function add(): void {
    plate3.classList.add('color');
    tooltip1Plate.classList.add('hover');
});

plate3Img.addEventListener('mouseleave', function remove(): void {
    plate3.classList.remove('color');
    tooltip1Plate.classList.remove('hover');
});

// enter button ------------------------------------------------------------------------------

function wrongValue(): void {
    setTimeout(function wr() {
        enter.classList.remove('wrong');
    }, 1000);
}

const enum Lev {
    lev1 = 'Level 1 of 10',
    lev2 = 'Level 2 of 10',
}

function removeLevel1(): void {
    setTimeout(function rem() {
        bento1Img.classList.remove('up');
        bento2Img.classList.remove('up');
        mark.classList.add('green');
        mark1.classList.add('green');
        code1.classList.add('none');
        table1.classList.add('none');
        code2.classList.remove('none');
        table2.classList.remove('none');
        level.innerHTML = Lev.lev2;
        input.blur();
        input.value = '';
    }, 300);
}

const plateinput = 'plate';
const bentoinput = 'bento';
enter.addEventListener('click', function readInput(): void {
    if (input.value === plateinput) {
        plateFirst.classList.add('up');
        plateSecond.classList.add('up');
        removeLevel1();
    } else if (input.value === bentoinput) {
        bento1Img.classList.add('up');
        bento2Img.classList.add('up');
        mark.classList.add('green');
        mark2.classList.add('green');
        input.value = '';
    } else {
        enter.classList.add('wrong');
        wrongValue();
    }
});

document.addEventListener('keyup', function isEnter(e): void {
    if (e.code === 'Enter' && input.value === plateinput) {
        plateFirst.classList.add('up');
        plateSecond.classList.add('up');
        removeLevel1();
    } else if (e.code === 'Enter' && input.value === bentoinput) {
        bento1Img.classList.add('up');
        bento2Img.classList.add('up');
        mark.classList.add('green');
        mark2.classList.add('green');
        input.value = '';
    } else if (e.code === 'Enter' && input.value !== plateinput) {
        enter.classList.add('wrong');
        wrongValue();
    }
});

// tooltip ------------------------------------------------------------------------------

function typeText(str: string): void {
    const text = [str];
    let line = 0;
    let count = 0;
    let out = '';
    function typeLine(): void {
        const interval = setTimeout(function set(): boolean | undefined {
            out += text[line][count];
            input.value = out;
            count += 1;
            // не закончилась ли строка?
            if (count >= text[line].length) {
                count = 0;
                line += 1;
                if (line === text.length) {
                    clearTimeout(interval);
                    return true;
                }
            }
            typeLine();
            return true;
        }, 200);
    }
    typeLine();
}

help.addEventListener('click', function readInput(): void {
    input.focus();
    typeText('plate');
});

help2.addEventListener('click', function readInput(): void {
    input.focus();
    typeText('bento');
});

// menu navigation ------------------------------------------------------------------------

level1.addEventListener('click', function chooseLevel(): void {
    code1.classList.remove('none');
    table1.classList.remove('none');
    code2.classList.add('none');
    table2.classList.add('none');
    level.innerHTML = Lev.lev1;
    plateFirst.classList.remove('up');
    plateSecond.classList.remove('up');
});

level2.addEventListener('click', function chooseLevel(): void {
    table2.classList.remove('none');
    code2.classList.remove('none');
    level.innerHTML = Lev.lev2;
    code1.classList.add('none');
    table1.classList.add('none');
    bento1Img.classList.remove('up');
    bento2Img.classList.remove('up');
});
