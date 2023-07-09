const { win } = require('../model/win.ts');

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

const plateFirst = <HTMLElement>document.querySelector('.plate_first');
const plateSecond = <HTMLElement>document.querySelector('.plate_second');
const bento1Img = <HTMLElement>document.querySelector('.bento1_task2');
const bento2Img = <HTMLElement>document.querySelector('.bento2_task2');
const plate1Task3Img = <HTMLElement>document.querySelector('.plate1_task3');
const sandwich1Task4Img = <HTMLElement>document.querySelector('.sandwich1_task4');
const sausage1Task5Img = <HTMLElement>document.querySelector('.sausage1_task5');
const sandwich2Task6Img = <HTMLElement>document.querySelector('.sandwich2_task6');
const sandwich3Task6Img = <HTMLElement>document.querySelector('.sandwich3_task6');
const cookie1Task7Img = <HTMLElement>document.querySelector('.cookie1_task7');
const cookie3Task7Img = <HTMLElement>document.querySelector('.cookie3_task7');
const cookie3Task8Img = <HTMLElement>document.querySelector('.cookie3_task8');
const cookie4Task8Img = <HTMLElement>document.querySelector('.cookie4_task8');
const plate1Task9Img = <HTMLElement>document.querySelector('.plate1_task9');
const plate2Task9Img = <HTMLElement>document.querySelector('.plate2_task9');
const sausage3Task9Img = <HTMLElement>document.querySelector('.sausage3_task9');
const sausage4Task9Img = <HTMLElement>document.querySelector('.sausage4_task9');
const sausage5Task9Img = <HTMLElement>document.querySelector('.sausage5_task9');
const bento1Task10Img = <HTMLElement>document.querySelector('.bento1_task10');
const bento2Task10Img = <HTMLElement>document.querySelector('.bento2_task10');
const plateTask10Img = <HTMLElement>document.querySelector('.plate_task10');
const sandwichTask10Img = <HTMLElement>document.querySelector('.sandwich_task10');
const cookie1Task10Img = <HTMLElement>document.querySelector('.cookie1_task10');
const cookie2Task10Img = <HTMLElement>document.querySelector('.cookie2_task10');

const code1 = <HTMLElement>document.querySelector('.editor_right_code');
const code2 = <HTMLElement>document.querySelector('.editor_right_code2');
const code3 = <HTMLElement>document.querySelector('.editor_right_code3');
const code4 = <HTMLElement>document.querySelector('.editor_right_code4');
const code5 = <HTMLElement>document.querySelector('.editor_right_code5');
const code6 = <HTMLElement>document.querySelector('.editor_right_code6');
const code7 = <HTMLElement>document.querySelector('.editor_right_code7');
const code8 = <HTMLElement>document.querySelector('.editor_right_code8');
const code9 = <HTMLElement>document.querySelector('.editor_right_code9');
const code10 = <HTMLElement>document.querySelector('.editor_right_code10');
const table1 = <HTMLElement>document.querySelector('.table_view');
const table2 = <HTMLElement>document.querySelector('.table_view2');
const table3 = <HTMLElement>document.querySelector('.table_view3');
const table4 = <HTMLElement>document.querySelector('.table_view4');
const table5 = <HTMLElement>document.querySelector('.table_view5');
const table6 = <HTMLElement>document.querySelector('.table_view6');
const table7 = <HTMLElement>document.querySelector('.table_view7');
const table8 = <HTMLElement>document.querySelector('.table_view8');
const table9 = <HTMLElement>document.querySelector('.table_view9');
const table10 = <HTMLElement>document.querySelector('.table_view10');
const level = <HTMLElement>document.querySelector('.level');

const task3 = <HTMLElement>document.querySelector('.task3');
const task4 = <HTMLElement>document.querySelector('.task4');
const task5 = <HTMLElement>document.querySelector('.task5');
const task6 = <HTMLElement>document.querySelector('.task6');
const task7 = <HTMLElement>document.querySelector('.task7');
const task8 = <HTMLElement>document.querySelector('.task8');
const task9 = <HTMLElement>document.querySelector('.task9');
const task10 = <HTMLElement>document.querySelector('.task10');
const task1and2 = <HTMLElement>document.querySelector('.task');
const input = <HTMLInputElement>document.querySelector('.input_code');

const enum Lev {
    lev1 = 'Level 1 of 10',
    lev2 = 'Level 2 of 10',
    lev3 = 'Level 3 of 10',
    lev4 = 'Level 4 of 10',
    lev5 = 'Level 5 of 10',
    lev6 = 'Level 6 of 10',
    lev7 = 'Level 7 of 10',
    lev8 = 'Level 8 of 10',
    lev9 = 'Level 9 of 10',
    lev10 = 'Level 10 of 10',
}

export function removeLevel1(): void {
    setTimeout(function rem() {
        if (
            mark2.classList.contains('done') &&
            mark3.classList.contains('done') &&
            mark4.classList.contains('done') &&
            mark5.classList.contains('done') &&
            mark6.classList.contains('done') &&
            mark7.classList.contains('done') &&
            mark8.classList.contains('done') &&
            mark9.classList.contains('done') &&
            mark10.classList.contains('done')
        ) {
            win();
        } else {
            bento1Img.classList.remove('up');
            bento2Img.classList.remove('up');
            code1.classList.add('none');
            table1.classList.add('none');
            code2.classList.remove('none');
            table2.classList.remove('none');
            level.innerHTML = Lev.lev2;
            input.blur();
            input.value = '';
        }
    }, 300);
}

export function removeLevel2(): void {
    setTimeout(function rem() {
        if (
            mark1.classList.contains('done') &&
            mark3.classList.contains('done') &&
            mark4.classList.contains('done') &&
            mark5.classList.contains('done') &&
            mark6.classList.contains('done') &&
            mark7.classList.contains('done') &&
            mark8.classList.contains('done') &&
            mark9.classList.contains('done') &&
            mark10.classList.contains('done')
        ) {
            win();
        } else {
            plate1Task3Img.classList.remove('up');
            code2.classList.add('none');
            table2.classList.add('none');
            code3.classList.remove('none');
            table3.classList.remove('none');
            task1and2.classList.add('none');
            task3.classList.remove('none');
            level.innerHTML = Lev.lev3;
            input.blur();
            input.value = '';
        }
    }, 300);
}

export function removeLevel3(): void {
    setTimeout(function rem() {
        if (
            mark1.classList.contains('done') &&
            mark2.classList.contains('done') &&
            mark4.classList.contains('done') &&
            mark5.classList.contains('done') &&
            mark6.classList.contains('done') &&
            mark7.classList.contains('done') &&
            mark8.classList.contains('done') &&
            mark9.classList.contains('done') &&
            mark10.classList.contains('done')
        ) {
            win();
        } else {
            sandwich1Task4Img.classList.remove('up');
            code3.classList.add('none');
            table3.classList.add('none');
            code4.classList.remove('none');
            table4.classList.remove('none');
            task3.classList.add('none');
            task4.classList.remove('none');
            level.innerHTML = Lev.lev4;
            input.blur();
            input.value = '';
        }
    }, 300);
}

export function removeLevel4(): void {
    setTimeout(function rem() {
        if (
            mark1.classList.contains('done') &&
            mark2.classList.contains('done') &&
            mark3.classList.contains('done') &&
            mark5.classList.contains('done') &&
            mark6.classList.contains('done') &&
            mark7.classList.contains('done') &&
            mark8.classList.contains('done') &&
            mark9.classList.contains('done') &&
            mark10.classList.contains('done')
        ) {
            win();
        } else {
            mark4.classList.add('done');
            sausage1Task5Img.classList.remove('up');
            code4.classList.add('none');
            table4.classList.add('none');
            code5.classList.remove('none');
            table5.classList.remove('none');
            task4.classList.add('none');
            task5.classList.remove('none');
            level.innerHTML = Lev.lev5;
            input.blur();
            input.value = '';
        }
    }, 300);
}

export function removeLevel5(): void {
    setTimeout(function rem() {
        if (
            mark1.classList.contains('done') &&
            mark2.classList.contains('done') &&
            mark3.classList.contains('done') &&
            mark4.classList.contains('done') &&
            mark6.classList.contains('done') &&
            mark7.classList.contains('done') &&
            mark8.classList.contains('done') &&
            mark9.classList.contains('done') &&
            mark10.classList.contains('done')
        ) {
            win();
        } else {
            mark5.classList.add('done');
            sandwich2Task6Img.classList.remove('up');
            sandwich3Task6Img.classList.remove('up');
            code5.classList.add('none');
            table5.classList.add('none');
            code6.classList.remove('none');
            table6.classList.remove('none');
            task5.classList.add('none');
            task6.classList.remove('none');
            level.innerHTML = Lev.lev6;
            input.blur();
            input.value = '';
        }
    }, 300);
}

export function removeLevel6(): void {
    setTimeout(function rem() {
        if (
            mark1.classList.contains('done') &&
            mark2.classList.contains('done') &&
            mark3.classList.contains('done') &&
            mark4.classList.contains('done') &&
            mark5.classList.contains('done') &&
            mark7.classList.contains('done') &&
            mark8.classList.contains('done') &&
            mark9.classList.contains('done') &&
            mark10.classList.contains('done')
        ) {
            win();
        } else {
            mark6.classList.add('done');
            cookie1Task7Img.classList.remove('up');
            cookie3Task7Img.classList.remove('up');
            code6.classList.add('none');
            table6.classList.add('none');
            code7.classList.remove('none');
            table7.classList.remove('none');
            task6.classList.add('none');
            task7.classList.remove('none');
            level.innerHTML = Lev.lev7;
            input.blur();
            input.value = '';
        }
    }, 300);
}

export function removeLevel7(): void {
    setTimeout(function rem() {
        if (
            mark1.classList.contains('done') &&
            mark2.classList.contains('done') &&
            mark3.classList.contains('done') &&
            mark4.classList.contains('done') &&
            mark5.classList.contains('done') &&
            mark6.classList.contains('done') &&
            mark8.classList.contains('done') &&
            mark9.classList.contains('done') &&
            mark10.classList.contains('done')
        ) {
            win();
        } else {
            mark7.classList.add('done');
            cookie3Task8Img.classList.remove('up');
            cookie4Task8Img.classList.remove('up');
            code7.classList.add('none');
            table7.classList.add('none');
            code8.classList.remove('none');
            table8.classList.remove('none');
            task7.classList.add('none');
            task8.classList.remove('none');
            level.innerHTML = Lev.lev8;
            input.blur();
            input.value = '';
        }
    }, 300);
}

export function removeLevel8(): void {
    setTimeout(function rem() {
        if (
            mark1.classList.contains('done') &&
            mark2.classList.contains('done') &&
            mark3.classList.contains('done') &&
            mark4.classList.contains('done') &&
            mark5.classList.contains('done') &&
            mark6.classList.contains('done') &&
            mark7.classList.contains('done') &&
            mark9.classList.contains('done') &&
            mark10.classList.contains('done')
        ) {
            win();
        } else {
            mark8.classList.add('done');
            plate1Task9Img.classList.remove('up');
            plate2Task9Img.classList.remove('up');
            sausage3Task9Img.classList.remove('up');
            sausage4Task9Img.classList.remove('up');
            sausage5Task9Img.classList.remove('up');
            code8.classList.add('none');
            table8.classList.add('none');
            code9.classList.remove('none');
            table9.classList.remove('none');
            task8.classList.add('none');
            task9.classList.remove('none');
            level.innerHTML = Lev.lev9;
            input.blur();
            input.value = '';
        }
    }, 300);
}

export function removeLevel9(): void {
    setTimeout(function rem() {
        if (
            mark1.classList.contains('done') &&
            mark2.classList.contains('done') &&
            mark3.classList.contains('done') &&
            mark4.classList.contains('done') &&
            mark5.classList.contains('done') &&
            mark6.classList.contains('done') &&
            mark7.classList.contains('done') &&
            mark8.classList.contains('done') &&
            mark10.classList.contains('done')
        ) {
            win();
        } else {
            mark9.classList.add('done');
            plateTask10Img.classList.remove('up');
            bento2Task10Img.classList.remove('up');
            bento1Task10Img.classList.remove('up');
            sandwichTask10Img.classList.remove('up');
            cookie1Task10Img.classList.remove('up');
            cookie2Task10Img.classList.remove('up');
            code9.classList.add('none');
            table9.classList.add('none');
            code10.classList.remove('none');
            table10.classList.remove('none');
            task9.classList.add('none');
            task10.classList.remove('none');
            level.innerHTML = Lev.lev10;
            input.blur();
            input.value = '';
        }
    }, 300);
}

export function removeLevel10(): void {
    setTimeout(function rem() {
        if (
            mark1.classList.contains('done') &&
            mark2.classList.contains('done') &&
            mark3.classList.contains('done') &&
            mark4.classList.contains('done') &&
            mark5.classList.contains('done') &&
            mark6.classList.contains('done') &&
            mark7.classList.contains('done') &&
            mark8.classList.contains('done') &&
            mark9.classList.contains('done')
        ) {
            win();
        } else {
            mark10.classList.add('done');
            plateFirst.classList.remove('up');
            plateSecond.classList.remove('up');
            code10.classList.add('none');
            table10.classList.add('none');
            code1.classList.remove('none');
            table1.classList.remove('none');
            task1and2.classList.add('none');
            level.innerHTML = Lev.lev1;
            input.blur();
            input.value = '';
        }
    }, 300);
}

export {};
