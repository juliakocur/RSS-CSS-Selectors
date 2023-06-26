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
const plate4 = <HTMLElement>document.querySelector('.plate4');
const plate5 = <HTMLElement>document.querySelector('.plate5');
const plate7 = <HTMLElement>document.querySelector('.plate7');
const plate8 = <HTMLElement>document.querySelector('.plate8');
const bento1 = <HTMLElement>document.querySelector('.bento1');
const bento2 = <HTMLElement>document.querySelector('.bento2');
const bento3 = <HTMLElement>document.querySelector('.bento3');
const bento4 = <HTMLElement>document.querySelector('.bento4');
const sandwich1 = <HTMLElement>document.querySelector('.sandwich1');
const sandwich2 = <HTMLElement>document.querySelector('.sandwich2');

const tooltip1 = <HTMLDivElement>document.querySelector('.tooltip1');
const tooltip2 = <HTMLElement>document.querySelector('.tooltip2');
const tooltip1Bento1 = <HTMLElement>document.querySelector('.tooltip1_task2');
const tooltip1Plate = <HTMLElement>document.querySelector('.tooltip2_task2');
const tooltip1Bento2 = <HTMLElement>document.querySelector('.tooltip3_task2');
const tooltip1Task3 = <HTMLElement>document.querySelector('.tooltip1_task3');
const tooltip2Task3 = <HTMLElement>document.querySelector('.tooltip2_task3');
const tooltip3Task3 = <HTMLElement>document.querySelector('.tooltip3_task3');
const tooltip1Task4 = <HTMLElement>document.querySelector('.tooltip1_task4');
const tooltip2Task4 = <HTMLElement>document.querySelector('.tooltip2_task4');
const tooltip3Task4 = <HTMLElement>document.querySelector('.tooltip3_task4');
const tooltip4Task4 = <HTMLElement>document.querySelector('.tooltip4_task4');
const plateFirst = <HTMLElement>document.querySelector('.plate_first');
const plateSecond = <HTMLElement>document.querySelector('.plate_second');
const enter = <HTMLElement>document.querySelector('.enter');
const input = <HTMLInputElement>document.querySelector('.input_code');
const mark = <HTMLElement>document.querySelector('.mark');
const mark1 = <HTMLElement>document.querySelector('.mark1');
const mark2 = <HTMLElement>document.querySelector('.mark2');
const mark3 = <HTMLElement>document.querySelector('.mark3');
const mark4 = <HTMLElement>document.querySelector('.mark4');
const help = <HTMLElement>document.querySelector('.help');
const help2 = <HTMLElement>document.querySelector('.help2');
const help3 = <HTMLElement>document.querySelector('.help3');
const help4 = <HTMLElement>document.querySelector('.help4');
const bento1Img = <HTMLElement>document.querySelector('.bento1_task2');
const plate3Img = <HTMLElement>document.querySelector('.plate_task2');
const bento2Img = <HTMLElement>document.querySelector('.bento2_task2');
const plate1Task3Img = <HTMLElement>document.querySelector('.plate1_task3');
const plate2Task3Img = <HTMLElement>document.querySelector('.plate2_task3');
const bentoTask3Img = <HTMLElement>document.querySelector('.bento_task3');
const bentoTask4Img = <HTMLElement>document.querySelector('.bento_task4');
const plateTask4Img = <HTMLElement>document.querySelector('.plate_task4');
const sandwich1Task4Img = <HTMLElement>document.querySelector('.sandwich1_task4');
const sandwich2Task4Img = <HTMLElement>document.querySelector('.sandwich2_task4');

const code1 = <HTMLElement>document.querySelector('.editor_right_code');
const code2 = <HTMLElement>document.querySelector('.editor_right_code2');
const code3 = <HTMLElement>document.querySelector('.editor_right_code3');
const code4 = <HTMLElement>document.querySelector('.editor_right_code4');
const table1 = <HTMLElement>document.querySelector('.table_view');
const table2 = <HTMLElement>document.querySelector('.table_view2');
const table3 = <HTMLElement>document.querySelector('.table_view3');
const table4 = <HTMLElement>document.querySelector('.table_view4');
const level = <HTMLElement>document.querySelector('.level');
const level1 = <HTMLElement>document.querySelector('.level1');
const level2 = <HTMLElement>document.querySelector('.level2');
const level3 = <HTMLElement>document.querySelector('.level3');
const level4 = <HTMLElement>document.querySelector('.level4');
const task3 = <HTMLElement>document.querySelector('.task3');
const task4 = <HTMLElement>document.querySelector('.task4');
const task5 = <HTMLElement>document.querySelector('.task5');
const task1and2 = <HTMLElement>document.querySelector('.task');
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

plate4.addEventListener('mouseover', function add(): void {
    tooltip1Task3.classList.add('hover');
});

plate4.addEventListener('mouseleave', function remove(): void {
    tooltip1Task3.classList.remove('hover');
});

plate5.addEventListener('mouseover', function add(): void {
    tooltip2Task3.classList.add('hover');
});

plate5.addEventListener('mouseleave', function remove(): void {
    tooltip2Task3.classList.remove('hover');
});

plate7.addEventListener('mouseover', function add(): void {
    sandwich1.classList.add('color');
    plate8.classList.add('color');
    tooltip2Task4.classList.add('hover');
});

plate7.addEventListener('mouseleave', function remove(): void {
    sandwich1.classList.remove('color');
    plate8.classList.remove('color');
    tooltip2Task4.classList.remove('hover');
});

plate8.addEventListener('mouseover', function add(): void {
    sandwich1.classList.add('color');
    plate7.classList.add('color');
    tooltip2Task4.classList.add('hover');
});

plate8.addEventListener('mouseleave', function remove(): void {
    sandwich1.classList.remove('color');
    plate8.classList.remove('color');
    tooltip2Task4.classList.remove('hover');
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

bento3.addEventListener('mouseover', function add(): void {
    tooltip3Task3.classList.add('hover');
});

bento3.addEventListener('mouseleave', function remove(): void {
    tooltip3Task3.classList.remove('hover');
});

bento4.addEventListener('mouseover', function add(): void {
    tooltip1Task4.classList.add('hover');
});

bento4.addEventListener('mouseleave', function remove(): void {
    tooltip1Task4.classList.remove('hover');
});

sandwich1.addEventListener('mouseover', function add(): void {
    tooltip4Task4.classList.add('hover');
});

sandwich1.addEventListener('mouseleave', function remove(): void {
    tooltip4Task4.classList.remove('hover');
});

sandwich2.addEventListener('mouseover', function add(): void {
    tooltip3Task4.classList.add('hover');
});

sandwich2.addEventListener('mouseleave', function remove(): void {
    tooltip3Task4.classList.remove('hover');
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

plate1Task3Img.addEventListener('mouseover', function add(): void {
    plate4.classList.add('color');
    tooltip1Task3.classList.add('hover');
});

plate1Task3Img.addEventListener('mouseleave', function remove(): void {
    plate4.classList.remove('color');
    tooltip1Task3.classList.remove('hover');
});

plate2Task3Img.addEventListener('mouseover', function add(): void {
    plate5.classList.add('color');
    tooltip2Task3.classList.add('hover');
});

plate2Task3Img.addEventListener('mouseleave', function remove(): void {
    plate5.classList.remove('color');
    tooltip2Task3.classList.remove('hover');
});

plateTask4Img.addEventListener('mouseover', function add(): void {
    plate7.classList.add('color');
    plate8.classList.add('color');
    sandwich1.classList.add('color');
    tooltip2Task4.classList.add('hover');
});

plateTask4Img.addEventListener('mouseleave', function remove(): void {
    plate7.classList.remove('color');
    plate8.classList.remove('color');
    sandwich1.classList.remove('color');
    tooltip2Task4.classList.remove('hover');
});

bentoTask3Img.addEventListener('mouseover', function add(): void {
    bento3.classList.add('color');
    tooltip3Task3.classList.add('hover');
});

bentoTask3Img.addEventListener('mouseleave', function remove(): void {
    bento3.classList.remove('color');
    tooltip3Task3.classList.remove('hover');
});

bentoTask4Img.addEventListener('mouseover', function add(): void {
    bento4.classList.add('color');
    tooltip1Task4.classList.add('hover');
});

bentoTask4Img.addEventListener('mouseleave', function remove(): void {
    bento4.classList.remove('color');
    tooltip1Task4.classList.remove('hover');
});

sandwich1Task4Img.addEventListener('mouseover', function add(): void {
    sandwich1.classList.add('color');
    tooltip4Task4.classList.add('hover');
});

sandwich1Task4Img.addEventListener('mouseleave', function remove(): void {
    sandwich1.classList.remove('color');
    tooltip4Task4.classList.remove('hover');
});

sandwich2Task4Img.addEventListener('mouseover', function add(): void {
    sandwich2.classList.add('color');
    tooltip3Task4.classList.add('hover');
});

sandwich2Task4Img.addEventListener('mouseleave', function remove(): void {
    sandwich2.classList.remove('color');
    tooltip3Task4.classList.remove('hover');
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
    lev3 = 'Level 3 of 10',
    lev4 = 'Level 4 of 10',
    lev5 = 'Level 5 of 10',
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

function removeLevel2(): void {
    setTimeout(function rem() {
        plate1Task3Img.classList.remove('up');
        mark.classList.add('green');
        mark2.classList.add('green');
        code2.classList.add('none');
        table2.classList.add('none');
        code3.classList.remove('none');
        table3.classList.remove('none');
        task1and2.classList.add('none');
        task3.classList.remove('none');
        level.innerHTML = Lev.lev3;
        input.blur();
        input.value = '';
    }, 300);
}

function removeLevel3(): void {
    setTimeout(function rem() {
        sandwich1Task4Img.classList.remove('up');
        mark.classList.add('green');
        mark3.classList.add('green');
        code3.classList.add('none');
        table3.classList.add('none');
        code4.classList.remove('none');
        table4.classList.remove('none');
        task3.classList.add('none');
        task4.classList.remove('none');
        level.innerHTML = Lev.lev4;
        input.blur();
        input.value = '';
    }, 300);
}

const plateinput = 'plate';
const bentoinput = 'bento';
const fancyinput = '#fancy';
const sandwichinput = 'plate sandwich';
const sausageinput = '#fancy sausage';

enter.addEventListener('click', function readInput(): void {
    if (input.value === plateinput && level.textContent === 'Level 1 of 10') {
        plateFirst.classList.add('up');
        plateSecond.classList.add('up');
        removeLevel1();
    } else if (input.value === bentoinput && level.textContent === 'Level 2 of 10') {
        bento1Img.classList.add('up');
        bento2Img.classList.add('up');
        removeLevel2();
    } else if (input.value === fancyinput && level.textContent === 'Level 3 of 10') {
        plate1Task3Img.classList.add('up');
        removeLevel3();
    } else if (input.value === sandwichinput && level.textContent === 'Level 4 of 10') {
        sandwich1Task4Img.classList.add('up');
        mark.classList.add('green');
        mark4.classList.add('green');
        input.value = '';
    } else {
        enter.classList.add('wrong');
        wrongValue();
    }
});

document.addEventListener('keyup', function isEnter(e): void {
    if (e.code === 'Enter' && input.value === plateinput && level.textContent === 'Level 1 of 10') {
        plateFirst.classList.add('up');
        plateSecond.classList.add('up');
        removeLevel1();
    } else if (e.code === 'Enter' && input.value === bentoinput && level.textContent === 'Level 2 of 10') {
        bento1Img.classList.add('up');
        bento2Img.classList.add('up');
        removeLevel2();
    } else if (e.code === 'Enter' && input.value === fancyinput && level.textContent === 'Level 3 of 10') {
        plate1Task3Img.classList.add('up');
        removeLevel3();
    } else if (e.code === 'Enter' && input.value === sandwichinput && level.textContent === 'Level 4 of 10') {
        sandwich1Task4Img.classList.add('up');
        mark.classList.add('green');
        mark4.classList.add('green');
        input.value = '';
    } else if (e.code === 'Enter') {
        // && input.value !== plateinput
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

help3.addEventListener('click', function readInput(): void {
    input.focus();
    typeText('#fancy');
});

help4.addEventListener('click', function readInput(): void {
    input.focus();
    typeText('plate sandwich');
});

// menu navigation ------------------------------------------------------------------------

level1.addEventListener('click', function chooseLevel(): void {
    code1.classList.remove('none');
    table1.classList.remove('none');
    code2.classList.add('none');
    table2.classList.add('none');
    code3.classList.add('none');
    table3.classList.add('none');
    code4.classList.add('none');
    table4.classList.add('none');
    level.innerHTML = Lev.lev1;
    plateFirst.classList.remove('up');
    plateSecond.classList.remove('up');
    task1and2.classList.remove('none');
    task3.classList.add('none');
    task4.classList.add('none');
    task5.classList.add('none');
});

level2.addEventListener('click', function chooseLevel(): void {
    table2.classList.remove('none');
    code2.classList.remove('none');
    level.innerHTML = Lev.lev2;
    code1.classList.add('none');
    table1.classList.add('none');
    code3.classList.add('none');
    table3.classList.add('none');
    code4.classList.add('none');
    table4.classList.add('none');
    bento1Img.classList.remove('up');
    bento2Img.classList.remove('up');
    task1and2.classList.remove('none');
    task3.classList.add('none');
    task4.classList.add('none');
    task5.classList.add('none');
});

level3.addEventListener('click', function chooseLevel(): void {
    table3.classList.remove('none');
    code3.classList.remove('none');
    level.innerHTML = Lev.lev3;
    code1.classList.add('none');
    table1.classList.add('none');
    code2.classList.add('none');
    table2.classList.add('none');
    code4.classList.add('none');
    table4.classList.add('none');
    plate1Task3Img.classList.remove('up');
    task1and2.classList.add('none');
    task3.classList.remove('none');
    task4.classList.add('none');
    task5.classList.add('none');
});

level4.addEventListener('click', function chooseLevel(): void {
    table4.classList.remove('none');
    code4.classList.remove('none');
    task4.classList.remove('none');
    level.innerHTML = Lev.lev4;
    code1.classList.add('none');
    table1.classList.add('none');
    code2.classList.add('none');
    table2.classList.add('none');
    code3.classList.add('none');
    table3.classList.add('none');
    sandwich1Task4Img.classList.remove('up');
    task1and2.classList.add('none');
    task3.classList.add('none');
    task5.classList.add('none');
});
