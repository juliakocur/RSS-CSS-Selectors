const enter = <HTMLElement>document.querySelector('.enter');
const input = <HTMLInputElement>document.querySelector('.input_code');
const level = <HTMLElement>document.querySelector('.level');

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
const bentoTask9Img = <HTMLElement>document.querySelector('.bento_task9');
const sausage3Task9Img = <HTMLElement>document.querySelector('.sausage3_task9');
const sausage4Task9Img = <HTMLElement>document.querySelector('.sausage4_task9');
const sausage5Task9Img = <HTMLElement>document.querySelector('.sausage5_task9');
const bento1Task10Img = <HTMLElement>document.querySelector('.bento1_task10');
const bento2Task10Img = <HTMLElement>document.querySelector('.bento2_task10');
const plateTask10Img = <HTMLElement>document.querySelector('.plate_task10');
const sandwichTask10Img = <HTMLElement>document.querySelector('.sandwich_task10');
const cookie1Task10Img = <HTMLElement>document.querySelector('.cookie1_task10');
const cookie2Task10Img = <HTMLElement>document.querySelector('.cookie2_task10');

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

const { removeLevel1 } = require('../view/removeLevel.ts');
const { removeLevel2 } = require('../view/removeLevel.ts');
const { removeLevel3 } = require('../view/removeLevel.ts');
const { removeLevel4 } = require('../view/removeLevel.ts');
const { removeLevel5 } = require('../view/removeLevel.ts');
const { removeLevel6 } = require('../view/removeLevel.ts');
const { removeLevel7 } = require('../view/removeLevel.ts');
const { removeLevel8 } = require('../view/removeLevel.ts');
const { removeLevel9 } = require('../view/removeLevel.ts');
const { removeLevel10 } = require('../view/removeLevel.ts');
const { wrongValue } = require('../model/wrongValue.ts');

interface myObj {
    [index: string]: string;
}

const obj: myObj = {
    plateinput: 'plate',
    bentoinput: 'bento',
    fancyinput: '#fancy',
    sandwichinput: 'plate sandwich',
    sausageinput: '#fancy sausage',
    sandwsmall: 'sandwich.small',
    cookieinput: 'cookie.small',
    bentocookieinput: 'bento cookie.small',
    sausagesinput: 'plate, bento',
    sausages2input: 'bento, plate',
    allinput: '*',
};

enter.addEventListener('click', function readInput(): void {
    if (input.value === obj.plateinput && level.textContent === 'Level 1 of 10') {
        plateFirst.classList.add('up');
        plateSecond.classList.add('up');
        mark1.classList.add('done');
        removeLevel1();
        if (help.classList.contains('put')) {
            mark1.classList.add('yellow');
        } else {
            mark1.classList.add('green');
        }
    } else if (input.value === obj.bentoinput && level.textContent === 'Level 2 of 10') {
        bento1Img.classList.add('up');
        bento2Img.classList.add('up');
        mark2.classList.add('done');
        removeLevel2();
        if (help2.classList.contains('put')) {
            mark2.classList.add('yellow');
        } else {
            mark2.classList.add('green');
        }
    } else if (input.value === obj.fancyinput && level.textContent === 'Level 3 of 10') {
        plate1Task3Img.classList.add('up');
        mark3.classList.add('done');
        removeLevel3();
        if (help3.classList.contains('put')) {
            mark3.classList.add('yellow');
        } else {
            mark3.classList.add('green');
        }
    } else if (input.value === obj.sandwichinput && level.textContent === 'Level 4 of 10') {
        sandwich1Task4Img.classList.add('up');
        removeLevel4();
        if (help4.classList.contains('put')) {
            mark4.classList.add('yellow');
        } else {
            mark4.classList.add('green');
        }
    } else if (input.value === obj.sausageinput && level.textContent === 'Level 5 of 10') {
        sausage1Task5Img.classList.add('up');
        mark4.classList.add('done');
        removeLevel5();
        if (help5.classList.contains('put')) {
            mark5.classList.add('yellow');
        } else {
            mark5.classList.add('green');
        }
    } else if (input.value === obj.sandwsmall && level.textContent === 'Level 6 of 10') {
        sandwich2Task6Img.classList.add('up');
        sandwich3Task6Img.classList.add('up');
        mark5.classList.add('done');
        removeLevel6();
        if (help6.classList.contains('put')) {
            mark6.classList.add('yellow');
        } else {
            mark6.classList.add('green');
        }
    } else if (input.value === obj.cookieinput && level.textContent === 'Level 7 of 10') {
        cookie1Task7Img.classList.add('up');
        cookie3Task7Img.classList.add('up');
        mark6.classList.add('done');
        removeLevel7();
        if (help7.classList.contains('put')) {
            mark7.classList.add('yellow');
        } else {
            mark7.classList.add('green');
        }
    } else if (input.value === obj.bentocookieinput && level.textContent === 'Level 8 of 10') {
        cookie3Task8Img.classList.add('up');
        cookie4Task8Img.classList.add('up');
        mark7.classList.add('done');
        removeLevel8();
        if (help8.classList.contains('put')) {
            mark8.classList.add('yellow');
        } else {
            mark8.classList.add('green');
        }
    } else if (
        (input.value === obj.sausagesinput && level.textContent === 'Level 9 of 10') ||
        (input.value === obj.sausages2input && level.textContent === 'Level 9 of 10')
    ) {
        plate1Task9Img.classList.add('up');
        plate2Task9Img.classList.add('up');
        bentoTask9Img.classList.add('up');
        sausage3Task9Img.classList.add('up');
        sausage4Task9Img.classList.add('up');
        sausage5Task9Img.classList.add('up');
        mark9.classList.add('done');
        removeLevel9();
        if (help9.classList.contains('put')) {
            mark9.classList.add('yellow');
        } else {
            mark9.classList.add('green');
        }
    } else if (input.value === obj.allinput && level.textContent === 'Level 10 of 10') {
        plateTask10Img.classList.add('up');
        bento2Task10Img.classList.add('up');
        bento1Task10Img.classList.add('up');
        sandwichTask10Img.classList.add('up');
        cookie1Task10Img.classList.add('up');
        cookie2Task10Img.classList.add('up');
        mark10.classList.add('done');
        removeLevel10();
        if (help10.classList.contains('put')) {
            mark10.classList.add('yellow');
        } else {
            mark10.classList.add('green');
        }
    } else {
        enter.classList.add('wrong');
        wrongValue();
    }
});

document.addEventListener('keyup', function isEnter(e): void {
    if (e.code === 'Enter' && input.value === obj.plateinput && level.textContent === 'Level 1 of 10') {
        plateFirst.classList.add('up');
        plateSecond.classList.add('up');
        mark1.classList.add('done');
        removeLevel1();
        if (help.classList.contains('put')) {
            mark1.classList.add('yellow');
        } else {
            mark1.classList.add('green');
        }
    } else if (e.code === 'Enter' && input.value === obj.bentoinput && level.textContent === 'Level 2 of 10') {
        bento1Img.classList.add('up');
        bento2Img.classList.add('up');
        mark2.classList.add('done');
        removeLevel2();
        if (help2.classList.contains('put')) {
            mark2.classList.add('yellow');
        } else {
            mark2.classList.add('green');
        }
    } else if (e.code === 'Enter' && input.value === obj.fancyinput && level.textContent === 'Level 3 of 10') {
        plate1Task3Img.classList.add('up');
        mark3.classList.add('done');
        removeLevel3();
        if (help3.classList.contains('put')) {
            mark3.classList.add('yellow');
        } else {
            mark3.classList.add('green');
        }
    } else if (e.code === 'Enter' && input.value === obj.sandwichinput && level.textContent === 'Level 4 of 10') {
        sandwich1Task4Img.classList.add('up');
        mark4.classList.add('done');
        removeLevel4();
        if (help4.classList.contains('put')) {
            mark4.classList.add('yellow');
        } else {
            mark4.classList.add('green');
        }
    } else if (e.code === 'Enter' && input.value === obj.sausageinput && level.textContent === 'Level 5 of 10') {
        sausage1Task5Img.classList.add('up');
        mark5.classList.add('done');
        removeLevel5();
        if (help5.classList.contains('put')) {
            mark5.classList.add('yellow');
        } else {
            mark5.classList.add('green');
        }
    } else if (e.code === 'Enter' && input.value === obj.sandwsmall && level.textContent === 'Level 6 of 10') {
        sandwich2Task6Img.classList.add('up');
        sandwich3Task6Img.classList.add('up');
        mark6.classList.add('done');
        removeLevel6();
        if (help6.classList.contains('put')) {
            mark6.classList.add('yellow');
        } else {
            mark6.classList.add('green');
        }
    } else if (e.code === 'Enter' && input.value === obj.cookieinput && level.textContent === 'Level 7 of 10') {
        cookie1Task7Img.classList.add('up');
        cookie3Task7Img.classList.add('up');
        mark7.classList.add('done');
        removeLevel7();
        if (help7.classList.contains('put')) {
            mark7.classList.add('yellow');
        } else {
            mark7.classList.add('green');
        }
    } else if (e.code === 'Enter' && input.value === obj.bentocookieinput && level.textContent === 'Level 8 of 10') {
        cookie3Task8Img.classList.add('up');
        cookie4Task8Img.classList.add('up');
        mark8.classList.add('done');
        removeLevel8();
        if (help8.classList.contains('put')) {
            mark8.classList.add('yellow');
        } else {
            mark8.classList.add('green');
        }
    } else if (
        (e.code === 'Enter' && input.value === obj.sausagesinput && level.textContent === 'Level 9 of 10') ||
        (e.code === 'Enter' && input.value === obj.sausages2input && level.textContent === 'Level 9 of 10')
    ) {
        plate1Task9Img.classList.add('up');
        plate2Task9Img.classList.add('up');
        bentoTask9Img.classList.add('up');
        sausage3Task9Img.classList.add('up');
        sausage4Task9Img.classList.add('up');
        sausage5Task9Img.classList.add('up');
        mark9.classList.add('done');
        removeLevel9();
        if (help9.classList.contains('put')) {
            mark9.classList.add('yellow');
        } else {
            mark9.classList.add('green');
        }
    } else if (e.code === 'Enter' && input.value === obj.allinput && level.textContent === 'Level 10 of 10') {
        plateTask10Img.classList.add('up');
        bento2Task10Img.classList.add('up');
        bento1Task10Img.classList.add('up');
        sandwichTask10Img.classList.add('up');
        cookie1Task10Img.classList.add('up');
        cookie2Task10Img.classList.add('up');
        mark10.classList.add('done');
        removeLevel10();
        if (help10.classList.contains('put')) {
            mark10.classList.add('yellow');
        } else {
            mark10.classList.add('green');
        }
    } else if (e.code === 'Enter') {
        // && input.value !== plateinput
        enter.classList.add('wrong');
        wrongValue();
    }
});

export {};
