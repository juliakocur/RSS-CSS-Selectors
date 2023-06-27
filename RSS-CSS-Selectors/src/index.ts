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
const plate9 = <HTMLElement>document.querySelector('.plate9');
const plate10 = <HTMLElement>document.querySelector('.plate10');
const plate11 = <HTMLElement>document.querySelector('.plate11');
const plate12 = <HTMLElement>document.querySelector('.plate12');
const plate13 = <HTMLElement>document.querySelector('.plate13');
const plate14 = <HTMLElement>document.querySelector('.plate14');
const plate15 = <HTMLElement>document.querySelector('.plate15');
const plate16 = <HTMLElement>document.querySelector('.plate16');
const plate17 = <HTMLElement>document.querySelector('.plate17');
const plate18 = <HTMLElement>document.querySelector('.plate18');
const plate19 = <HTMLElement>document.querySelector('.plate19');
const bento1 = <HTMLElement>document.querySelector('.bento1');
const bento2 = <HTMLElement>document.querySelector('.bento2');
const bento3 = <HTMLElement>document.querySelector('.bento3');
const bento4 = <HTMLElement>document.querySelector('.bento4');
const bento5 = <HTMLElement>document.querySelector('.bento5');
const bento6 = <HTMLElement>document.querySelector('.bento6');
const bento7 = <HTMLElement>document.querySelector('.bento7');
const bento8 = <HTMLElement>document.querySelector('.bento8');
const sandwich1 = <HTMLElement>document.querySelector('.sandwich1');
const sandwich2 = <HTMLElement>document.querySelector('.sandwich2');
const sandwich3 = <HTMLElement>document.querySelector('.sandwich3');
const sandwich4 = <HTMLElement>document.querySelector('.sandwich4');
const sandwich5 = <HTMLElement>document.querySelector('.sandwich5');
const sandwich6 = <HTMLElement>document.querySelector('.sandwich6');
const sandwich7 = <HTMLElement>document.querySelector('.sandwich7');
const cookie1 = <HTMLElement>document.querySelector('.cookie1');
const cookie2 = <HTMLElement>document.querySelector('.cookie2');
const cookie3 = <HTMLElement>document.querySelector('.cookie3');
const cookie4 = <HTMLElement>document.querySelector('.cookie4');
const sausage1 = <HTMLElement>document.querySelector('.sausage1');
const sausage2 = <HTMLElement>document.querySelector('.sausage2');
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
const tooltip1Task5 = <HTMLElement>document.querySelector('.tooltip1_task5');
const tooltip2Task5 = <HTMLElement>document.querySelector('.tooltip2_task5');
const tooltip3Task5 = <HTMLElement>document.querySelector('.tooltip3_task5');
const tooltip4Task5 = <HTMLElement>document.querySelector('.tooltip4_task5');
const tooltip5Task5 = <HTMLElement>document.querySelector('.tooltip5_task5');
const tooltip6Task5 = <HTMLElement>document.querySelector('.tooltip6_task5');
const tooltip1Task6 = <HTMLElement>document.querySelector('.tooltip1_task6');
const tooltip2Task6 = <HTMLElement>document.querySelector('.tooltip2_task6');
const tooltip3Task6 = <HTMLElement>document.querySelector('.tooltip3_task6');
const tooltip4Task6 = <HTMLElement>document.querySelector('.tooltip4_task6');
const tooltip5Task6 = <HTMLElement>document.querySelector('.tooltip5_task6');
const tooltip1Task7 = <HTMLElement>document.querySelector('.tooltip1_task7');
const tooltip2Task7 = <HTMLElement>document.querySelector('.tooltip2_task7');
const tooltip3Task7 = <HTMLElement>document.querySelector('.tooltip3_task7');
const tooltip4Task7 = <HTMLElement>document.querySelector('.tooltip4_task7');
const tooltip5Task7 = <HTMLElement>document.querySelector('.tooltip5_task7');
const tooltip6Task7 = <HTMLElement>document.querySelector('.tooltip6_task7');
const tooltip7Task7 = <HTMLElement>document.querySelector('.tooltip7_task7');
const tooltip8Task7 = <HTMLElement>document.querySelector('.tooltip8_task7');

const plateFirst = <HTMLElement>document.querySelector('.plate_first');
const plateSecond = <HTMLElement>document.querySelector('.plate_second');
const enter = <HTMLElement>document.querySelector('.enter');
const input = <HTMLInputElement>document.querySelector('.input_code');
const mark = <HTMLElement>document.querySelector('.mark');
const mark1 = <HTMLElement>document.querySelector('.mark1');
const mark2 = <HTMLElement>document.querySelector('.mark2');
const mark3 = <HTMLElement>document.querySelector('.mark3');
const mark4 = <HTMLElement>document.querySelector('.mark4');
const mark5 = <HTMLElement>document.querySelector('.mark5');
const mark6 = <HTMLElement>document.querySelector('.mark6');
const mark7 = <HTMLElement>document.querySelector('.mark7');
const help = <HTMLElement>document.querySelector('.help');
const help2 = <HTMLElement>document.querySelector('.help2');
const help3 = <HTMLElement>document.querySelector('.help3');
const help4 = <HTMLElement>document.querySelector('.help4');
const help5 = <HTMLElement>document.querySelector('.help5');
const help6 = <HTMLElement>document.querySelector('.help6');
const help7 = <HTMLElement>document.querySelector('.help7');
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
const bentoTask5Img = <HTMLElement>document.querySelector('.bento_task5');
const cookieTask5Img = <HTMLElement>document.querySelector('.cookie_task5');
const plate1Task5Img = <HTMLElement>document.querySelector('.plate1_task5');
const sausage1Task5Img = <HTMLElement>document.querySelector('.sausage1_task5');
const plate2Task5Img = <HTMLElement>document.querySelector('.plate2_task5');
const sausage2Task5Img = <HTMLElement>document.querySelector('.sausage2_task5');

const sandwich1Task6Img = <HTMLElement>document.querySelector('.sandwich1_task6');
const sandwich2Task6Img = <HTMLElement>document.querySelector('.sandwich2_task6');
const sandwich3Task6Img = <HTMLElement>document.querySelector('.sandwich3_task6');
const plate1Task6Img = <HTMLElement>document.querySelector('.plate1_task6');
const plate2Task6Img = <HTMLElement>document.querySelector('.plate2_task6');

const bentoTask7Img = <HTMLElement>document.querySelector('.bento_task7');
const plate1Task7Img = <HTMLElement>document.querySelector('.plate1_task7');
const plate2Task7Img = <HTMLElement>document.querySelector('.plate2_task7');
const sandwich1Task7Img = <HTMLElement>document.querySelector('.sandwich1_task7');
const sandwich2Task7Img = <HTMLElement>document.querySelector('.sandwich2_task7');
const cookie1Task7Img = <HTMLElement>document.querySelector('.cookie1_task7');
const cookie2Task7Img = <HTMLElement>document.querySelector('.cookie2_task7');
const cookie3Task7Img = <HTMLElement>document.querySelector('.cookie3_task7');

const code1 = <HTMLElement>document.querySelector('.editor_right_code');
const code2 = <HTMLElement>document.querySelector('.editor_right_code2');
const code3 = <HTMLElement>document.querySelector('.editor_right_code3');
const code4 = <HTMLElement>document.querySelector('.editor_right_code4');
const code5 = <HTMLElement>document.querySelector('.editor_right_code5');
const code6 = <HTMLElement>document.querySelector('.editor_right_code6');
const code7 = <HTMLElement>document.querySelector('.editor_right_code7');
const table1 = <HTMLElement>document.querySelector('.table_view');
const table2 = <HTMLElement>document.querySelector('.table_view2');
const table3 = <HTMLElement>document.querySelector('.table_view3');
const table4 = <HTMLElement>document.querySelector('.table_view4');
const table5 = <HTMLElement>document.querySelector('.table_view5');
const table6 = <HTMLElement>document.querySelector('.table_view6');
const table7 = <HTMLElement>document.querySelector('.table_view7');
const level = <HTMLElement>document.querySelector('.level');
const level1 = <HTMLElement>document.querySelector('.level1');
const level2 = <HTMLElement>document.querySelector('.level2');
const level3 = <HTMLElement>document.querySelector('.level3');
const level4 = <HTMLElement>document.querySelector('.level4');
const level5 = <HTMLElement>document.querySelector('.level5');
const level6 = <HTMLElement>document.querySelector('.level6');
const level7 = <HTMLElement>document.querySelector('.level7');
const task3 = <HTMLElement>document.querySelector('.task3');
const task4 = <HTMLElement>document.querySelector('.task4');
const task5 = <HTMLElement>document.querySelector('.task5');
const task6 = <HTMLElement>document.querySelector('.task6');
const task7 = <HTMLElement>document.querySelector('.task7');
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

plate9.addEventListener('mouseover', function add(): void {
    sausage1.classList.add('color');
    plate10.classList.add('color');
    tooltip5Task5.classList.add('hover');
});

plate9.addEventListener('mouseleave', function remove(): void {
    sausage1.classList.remove('color');
    plate10.classList.remove('color');
    tooltip5Task5.classList.remove('hover');
});

plate10.addEventListener('mouseover', function add(): void {
    sausage1.classList.add('color');
    plate9.classList.add('color');
    tooltip5Task5.classList.add('hover');
});

plate10.addEventListener('mouseleave', function remove(): void {
    sausage1.classList.remove('color');
    plate9.classList.remove('color');
    tooltip5Task5.classList.remove('hover');
});

plate11.addEventListener('mouseover', function add(): void {
    sausage2.classList.add('color');
    plate12.classList.add('color');
    tooltip6Task5.classList.add('hover');
});

plate11.addEventListener('mouseleave', function remove(): void {
    sausage2.classList.remove('color');
    plate12.classList.remove('color');
    tooltip6Task5.classList.remove('hover');
});

plate12.addEventListener('mouseover', function add(): void {
    sausage2.classList.add('color');
    plate11.classList.add('color');
    tooltip6Task5.classList.add('hover');
});

plate12.addEventListener('mouseleave', function remove(): void {
    sausage2.classList.remove('color');
    plate11.classList.remove('color');
    tooltip6Task5.classList.remove('hover');
});

plate13.addEventListener('mouseover', function add(): void {
    sandwich5.classList.add('color');
    plate14.classList.add('color');
    tooltip4Task6.classList.add('hover');
});

plate13.addEventListener('mouseleave', function remove(): void {
    sandwich5.classList.remove('color');
    plate14.classList.remove('color');
    tooltip4Task6.classList.remove('hover');
});

plate14.addEventListener('mouseover', function add(): void {
    sandwich5.classList.add('color');
    plate13.classList.add('color');
    tooltip4Task6.classList.add('hover');
});

plate14.addEventListener('mouseleave', function remove(): void {
    sandwich5.classList.remove('color');
    plate13.classList.remove('color');
    tooltip4Task6.classList.remove('hover');
});

plate15.addEventListener('mouseover', function add(): void {
    tooltip5Task6.classList.add('hover');
});

plate15.addEventListener('mouseleave', function remove(): void {
    tooltip5Task6.classList.remove('hover');
});

plate16.addEventListener('mouseover', function add(): void {
    cookie3.classList.add('color');
    plate17.classList.add('color');
    tooltip7Task7.classList.add('hover');
});

plate16.addEventListener('mouseleave', function remove(): void {
    cookie3.classList.remove('color');
    plate17.classList.remove('color');
    tooltip7Task7.classList.remove('hover');
});

plate17.addEventListener('mouseover', function add(): void {
    cookie3.classList.add('color');
    plate16.classList.add('color');
    tooltip7Task7.classList.add('hover');
});

plate17.addEventListener('mouseleave', function remove(): void {
    cookie3.classList.remove('color');
    plate16.classList.remove('color');
    tooltip7Task7.classList.remove('hover');
});

plate18.addEventListener('mouseover', function add(): void {
    cookie4.classList.add('color');
    plate19.classList.add('color');
    tooltip8Task7.classList.add('hover');
});

plate18.addEventListener('mouseleave', function remove(): void {
    cookie4.classList.remove('color');
    plate19.classList.remove('color');
    tooltip8Task7.classList.remove('hover');
});

plate19.addEventListener('mouseover', function add(): void {
    cookie4.classList.add('color');
    plate18.classList.add('color');
    tooltip8Task7.classList.add('hover');
});

plate19.addEventListener('mouseleave', function remove(): void {
    cookie4.classList.remove('color');
    plate18.classList.remove('color');
    tooltip8Task7.classList.remove('hover');
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

bento5.addEventListener('mouseover', function add(): void {
    cookie1.classList.add('color');
    bento6.classList.add('color');
    tooltip4Task5.classList.add('hover');
});

bento5.addEventListener('mouseleave', function remove(): void {
    cookie1.classList.remove('color');
    bento6.classList.remove('color');
    tooltip4Task5.classList.remove('hover');
});

bento6.addEventListener('mouseover', function add(): void {
    cookie1.classList.add('color');
    bento5.classList.add('color');
    tooltip4Task5.classList.add('hover');
});

bento6.addEventListener('mouseleave', function remove(): void {
    cookie1.classList.remove('color');
    bento5.classList.remove('color');
    tooltip4Task5.classList.remove('hover');
});

bento7.addEventListener('mouseover', function add(): void {
    cookie2.classList.add('color');
    bento8.classList.add('color');
    tooltip6Task7.classList.add('hover');
});

bento7.addEventListener('mouseleave', function remove(): void {
    cookie2.classList.remove('color');
    bento8.classList.remove('color');
    tooltip6Task7.classList.remove('hover');
});

bento8.addEventListener('mouseover', function add(): void {
    cookie2.classList.add('color');
    bento7.classList.add('color');
    tooltip6Task7.classList.add('hover');
});

bento8.addEventListener('mouseleave', function remove(): void {
    cookie2.classList.remove('color');
    bento7.classList.remove('color');
    tooltip6Task7.classList.remove('hover');
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

sandwich3.addEventListener('mouseover', function add(): void {
    tooltip2Task6.classList.add('hover');
});

sandwich3.addEventListener('mouseleave', function remove(): void {
    tooltip2Task6.classList.remove('hover');
});

sandwich4.addEventListener('mouseover', function add(): void {
    tooltip3Task6.classList.add('hover');
});

sandwich4.addEventListener('mouseleave', function remove(): void {
    tooltip3Task6.classList.remove('hover');
});

sandwich5.addEventListener('mouseover', function add(): void {
    tooltip1Task6.classList.add('hover');
});

sandwich5.addEventListener('mouseleave', function remove(): void {
    tooltip1Task6.classList.remove('hover');
});

sandwich6.addEventListener('mouseover', function add(): void {
    tooltip5Task6.classList.add('hover');
});

sandwich6.addEventListener('mouseleave', function remove(): void {
    tooltip5Task6.classList.remove('hover');
});

sandwich7.addEventListener('mouseover', function add(): void {
    tooltip1Task6.classList.add('hover');
});

sandwich7.addEventListener('mouseleave', function remove(): void {
    tooltip1Task6.classList.remove('hover');
});

cookie1.addEventListener('mouseover', function add(): void {
    tooltip1Task5.classList.add('hover');
});

cookie1.addEventListener('mouseleave', function remove(): void {
    tooltip1Task5.classList.remove('hover');
});

cookie2.addEventListener('mouseover', function add(): void {
    tooltip2Task7.classList.add('hover');
});

cookie2.addEventListener('mouseleave', function remove(): void {
    tooltip2Task7.classList.remove('hover');
});

cookie3.addEventListener('mouseover', function add(): void {
    tooltip3Task7.classList.add('hover');
});

cookie3.addEventListener('mouseleave', function remove(): void {
    tooltip3Task7.classList.remove('hover');
});

cookie4.addEventListener('mouseover', function add(): void {
    tooltip4Task7.classList.add('hover');
});

cookie4.addEventListener('mouseleave', function remove(): void {
    tooltip4Task7.classList.remove('hover');
});

sausage1.addEventListener('mouseover', function add(): void {
    tooltip2Task5.classList.add('hover');
});

sausage1.addEventListener('mouseleave', function remove(): void {
    tooltip2Task5.classList.remove('hover');
});

sausage2.addEventListener('mouseover', function add(): void {
    tooltip3Task5.classList.add('hover');
});

sausage2.addEventListener('mouseleave', function remove(): void {
    tooltip3Task5.classList.remove('hover');
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

bentoTask5Img.addEventListener('mouseover', function add(): void {
    bento5.classList.add('color');
    bento6.classList.add('color');
    cookie1.classList.add('color');
    tooltip4Task5.classList.add('hover');
});

bentoTask5Img.addEventListener('mouseleave', function remove(): void {
    bento5.classList.remove('color');
    bento6.classList.remove('color');
    cookie1.classList.remove('color');
    tooltip4Task5.classList.remove('hover');
});

bentoTask7Img.addEventListener('mouseover', function add(): void {
    bento7.classList.add('color');
    bento8.classList.add('color');
    cookie2.classList.add('color');
    tooltip6Task7.classList.add('hover');
});

bentoTask7Img.addEventListener('mouseleave', function remove(): void {
    bento7.classList.remove('color');
    bento8.classList.remove('color');
    cookie2.classList.remove('color');
    tooltip6Task7.classList.remove('hover');
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

plate1Task5Img.addEventListener('mouseover', function add(): void {
    plate9.classList.add('color');
    plate10.classList.add('color');
    sausage1.classList.add('color');
    tooltip5Task5.classList.add('hover');
});

plate1Task5Img.addEventListener('mouseleave', function remove(): void {
    plate9.classList.remove('color');
    plate10.classList.remove('color');
    sausage1.classList.remove('color');
    tooltip5Task5.classList.remove('hover');
});

plate2Task5Img.addEventListener('mouseover', function add(): void {
    plate11.classList.add('color');
    plate12.classList.add('color');
    sausage2.classList.add('color');
    tooltip6Task5.classList.add('hover');
});

plate2Task5Img.addEventListener('mouseleave', function remove(): void {
    plate11.classList.remove('color');
    plate12.classList.remove('color');
    sausage2.classList.remove('color');
    tooltip6Task5.classList.remove('hover');
});

plate1Task6Img.addEventListener('mouseover', function add(): void {
    plate13.classList.add('color');
    plate14.classList.add('color');
    sandwich5.classList.add('color');
    tooltip4Task6.classList.add('hover');
});

plate1Task6Img.addEventListener('mouseleave', function remove(): void {
    plate13.classList.remove('color');
    plate14.classList.remove('color');
    sandwich5.classList.remove('color');
    tooltip4Task6.classList.remove('hover');
});

plate2Task6Img.addEventListener('mouseover', function add(): void {
    plate15.classList.add('color');
    tooltip5Task6.classList.add('hover');
});

plate2Task6Img.addEventListener('mouseleave', function remove(): void {
    plate15.classList.remove('color');
    tooltip5Task6.classList.remove('hover');
});

plate1Task7Img.addEventListener('mouseover', function add(): void {
    plate16.classList.add('color');
    plate17.classList.add('color');
    cookie3.classList.add('color');
    tooltip7Task7.classList.add('hover');
});

plate1Task7Img.addEventListener('mouseleave', function remove(): void {
    plate16.classList.remove('color');
    plate17.classList.remove('color');
    cookie3.classList.remove('color');
    tooltip7Task7.classList.remove('hover');
});

plate2Task7Img.addEventListener('mouseover', function add(): void {
    plate18.classList.add('color');
    plate19.classList.add('color');
    cookie4.classList.add('color');
    tooltip8Task7.classList.add('hover');
});

plate2Task7Img.addEventListener('mouseleave', function remove(): void {
    plate18.classList.remove('color');
    plate19.classList.remove('color');
    cookie4.classList.remove('color');
    tooltip8Task7.classList.remove('hover');
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

sandwich1Task6Img.addEventListener('mouseover', function add(): void {
    sandwich3.classList.add('color');
    tooltip2Task6.classList.add('hover');
});

sandwich1Task6Img.addEventListener('mouseleave', function remove(): void {
    sandwich3.classList.remove('color');
    tooltip2Task6.classList.remove('hover');
});

sandwich2Task6Img.addEventListener('mouseover', function add(): void {
    sandwich4.classList.add('color');
    tooltip3Task6.classList.add('hover');
});

sandwich2Task6Img.addEventListener('mouseleave', function remove(): void {
    sandwich4.classList.remove('color');
    tooltip3Task6.classList.remove('hover');
});

sandwich3Task6Img.addEventListener('mouseover', function add(): void {
    sandwich5.classList.add('color');
    tooltip1Task6.classList.add('hover');
});

sandwich3Task6Img.addEventListener('mouseleave', function remove(): void {
    sandwich5.classList.remove('color');
    tooltip1Task6.classList.remove('hover');
});

sandwich1Task7Img.addEventListener('mouseover', function add(): void {
    sandwich6.classList.add('color');
    tooltip5Task7.classList.add('hover');
});

sandwich1Task7Img.addEventListener('mouseleave', function remove(): void {
    sandwich6.classList.remove('color');
    tooltip5Task7.classList.remove('hover');
});

sandwich2Task7Img.addEventListener('mouseover', function add(): void {
    sandwich7.classList.add('color');
    tooltip1Task7.classList.add('hover');
});

sandwich2Task7Img.addEventListener('mouseleave', function remove(): void {
    sandwich7.classList.remove('color');
    tooltip1Task7.classList.remove('hover');
});

cookieTask5Img.addEventListener('mouseover', function add(): void {
    cookie1.classList.add('color');
    tooltip1Task5.classList.add('hover');
});

cookieTask5Img.addEventListener('mouseleave', function remove(): void {
    cookie1.classList.remove('color');
    tooltip1Task5.classList.remove('hover');
});

cookie1Task7Img.addEventListener('mouseover', function add(): void {
    cookie2.classList.add('color');
    tooltip2Task7.classList.add('hover');
});

cookie1Task7Img.addEventListener('mouseleave', function remove(): void {
    cookie2.classList.remove('color');
    tooltip2Task7.classList.remove('hover');
});

cookie2Task7Img.addEventListener('mouseover', function add(): void {
    cookie3.classList.add('color');
    tooltip3Task7.classList.add('hover');
});

cookie2Task7Img.addEventListener('mouseleave', function remove(): void {
    cookie3.classList.remove('color');
    tooltip3Task7.classList.remove('hover');
});

cookie3Task7Img.addEventListener('mouseover', function add(): void {
    cookie4.classList.add('color');
    tooltip4Task7.classList.add('hover');
});

cookie3Task7Img.addEventListener('mouseleave', function remove(): void {
    cookie4.classList.remove('color');
    tooltip4Task7.classList.remove('hover');
});

sausage1Task5Img.addEventListener('mouseover', function add(): void {
    sausage1.classList.add('color');
    tooltip2Task5.classList.add('hover');
});

sausage1Task5Img.addEventListener('mouseleave', function remove(): void {
    sausage1.classList.remove('color');
    tooltip2Task5.classList.remove('hover');
});

sausage2Task5Img.addEventListener('mouseover', function add(): void {
    sausage2.classList.add('color');
    tooltip3Task5.classList.add('hover');
});

sausage2Task5Img.addEventListener('mouseleave', function remove(): void {
    sausage2.classList.remove('color');
    tooltip3Task5.classList.remove('hover');
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
    lev6 = 'Level 6 of 10',
    lev7 = 'Level 7 of 10',
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

function removeLevel4(): void {
    setTimeout(function rem() {
        sausage1Task5Img.classList.remove('up');
        mark.classList.add('green');
        mark4.classList.add('green');
        code4.classList.add('none');
        table4.classList.add('none');
        code5.classList.remove('none');
        table5.classList.remove('none');
        task4.classList.add('none');
        task5.classList.remove('none');
        level.innerHTML = Lev.lev5;
        input.blur();
        input.value = '';
    }, 300);
}

function removeLevel5(): void {
    setTimeout(function rem() {
        sandwich2Task6Img.classList.remove('up');
        sandwich3Task6Img.classList.remove('up');
        mark.classList.add('green');
        mark5.classList.add('green');
        code5.classList.add('none');
        table5.classList.add('none');
        code6.classList.remove('none');
        table6.classList.remove('none');
        task5.classList.add('none');
        task6.classList.remove('none');
        level.innerHTML = Lev.lev6;
        input.blur();
        input.value = '';
    }, 300);
}

function removeLevel6(): void {
    setTimeout(function rem() {
        cookie1Task7Img.classList.remove('up');
        cookie3Task7Img.classList.remove('up');
        mark.classList.add('green');
        mark6.classList.add('green');
        code6.classList.add('none');
        table6.classList.add('none');
        code7.classList.remove('none');
        table7.classList.remove('none');
        task6.classList.add('none');
        task7.classList.remove('none');
        level.innerHTML = Lev.lev7;
        input.blur();
        input.value = '';
    }, 300);
}

const plateinput = 'plate';
const bentoinput = 'bento';
const fancyinput = '#fancy';
const sandwichinput = 'plate sandwich';
const sausageinput = '#fancy sausage';
const sandwsmall = 'sandwich.small';
const cookieinput = 'cookie.small';

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
        removeLevel4();
    } else if (input.value === sausageinput && level.textContent === 'Level 5 of 10') {
        sausage1Task5Img.classList.add('up');
        removeLevel5();
    } else if (input.value === sandwsmall && level.textContent === 'Level 6 of 10') {
        sandwich2Task6Img.classList.add('up');
        sandwich3Task6Img.classList.add('up');
        removeLevel6();
    } else if (input.value === cookieinput && level.textContent === 'Level 7 of 10') {
        cookie1Task7Img.classList.add('up');
        cookie3Task7Img.classList.add('up');
        mark.classList.add('green');
        mark7.classList.add('green');
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
        removeLevel4();
    } else if (e.code === 'Enter' && input.value === sausageinput && level.textContent === 'Level 5 of 10') {
        sausage1Task5Img.classList.add('up');
        removeLevel5();
    } else if (e.code === 'Enter' && input.value === sandwsmall && level.textContent === 'Level 6 of 10') {
        sandwich2Task6Img.classList.add('up');
        sandwich3Task6Img.classList.add('up');
        removeLevel6();
    } else if (e.code === 'Enter' && input.value === cookieinput && level.textContent === 'Level 7 of 10') {
        cookie1Task7Img.classList.add('up');
        cookie3Task7Img.classList.add('up');
        mark.classList.add('green');
        mark7.classList.add('green');
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

help5.addEventListener('click', function readInput(): void {
    input.focus();
    typeText('#fancy sausage');
});

help6.addEventListener('click', function readInput(): void {
    input.focus();
    typeText('sandwich.small');
});

help7.addEventListener('click', function readInput(): void {
    input.focus();
    typeText('cookie.small');
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
    task5.classList.add('none');
    code5.classList.add('none');
    table5.classList.add('none');
    code6.classList.add('none');
    table6.classList.add('none');
    task6.classList.add('none');
    table7.classList.add('none');
    code7.classList.add('none');
    task7.classList.add('none');
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
    task5.classList.add('none');
    code5.classList.add('none');
    table5.classList.add('none');
    code6.classList.add('none');
    table6.classList.add('none');
    task6.classList.add('none');
    table7.classList.add('none');
    code7.classList.add('none');
    task7.classList.add('none');
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
    task5.classList.add('none');
    code5.classList.add('none');
    table5.classList.add('none');
    code6.classList.add('none');
    table6.classList.add('none');
    task6.classList.add('none');
    table7.classList.add('none');
    code7.classList.add('none');
    task7.classList.add('none');
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
    code5.classList.add('none');
    table5.classList.add('none');
    code6.classList.add('none');
    table6.classList.add('none');
    task6.classList.add('none');
    table7.classList.add('none');
    code7.classList.add('none');
    task7.classList.add('none');
});

level5.addEventListener('click', function chooseLevel(): void {
    table5.classList.remove('none');
    code5.classList.remove('none');
    task5.classList.remove('none');
    level.innerHTML = Lev.lev5;
    code1.classList.add('none');
    table1.classList.add('none');
    code2.classList.add('none');
    table2.classList.add('none');
    code3.classList.add('none');
    table3.classList.add('none');
    code4.classList.add('none');
    table4.classList.add('none');
    task4.classList.add('none');
    sausage1Task5Img.classList.remove('up');
    task1and2.classList.add('none');
    task3.classList.add('none');
    code6.classList.add('none');
    table6.classList.add('none');
    task6.classList.add('none');
    table7.classList.add('none');
    code7.classList.add('none');
    task7.classList.add('none');
});

level6.addEventListener('click', function chooseLevel(): void {
    table6.classList.remove('none');
    code6.classList.remove('none');
    task6.classList.remove('none');
    level.innerHTML = Lev.lev6;
    code1.classList.add('none');
    table1.classList.add('none');
    code2.classList.add('none');
    table2.classList.add('none');
    code3.classList.add('none');
    table3.classList.add('none');
    code4.classList.add('none');
    table4.classList.add('none');
    task4.classList.add('none');
    code5.classList.add('none');
    table5.classList.add('none');
    task5.classList.add('none');
    sandwich2Task6Img.classList.remove('up');
    sandwich3Task6Img.classList.remove('up');
    task1and2.classList.add('none');
    task3.classList.add('none');
    table7.classList.add('none');
    code7.classList.add('none');
    task7.classList.add('none');
});

level7.addEventListener('click', function chooseLevel(): void {
    table7.classList.remove('none');
    code7.classList.remove('none');
    task7.classList.remove('none');
    level.innerHTML = Lev.lev7;
    code1.classList.add('none');
    table1.classList.add('none');
    code2.classList.add('none');
    table2.classList.add('none');
    code3.classList.add('none');
    table3.classList.add('none');
    code4.classList.add('none');
    table4.classList.add('none');
    task4.classList.add('none');
    code5.classList.add('none');
    table5.classList.add('none');
    task5.classList.add('none');
    sandwich2Task6Img.classList.remove('up');
    sandwich3Task6Img.classList.remove('up');
    task1and2.classList.add('none');
    task3.classList.add('none');
    code6.classList.add('none');
    table6.classList.add('none');
    task6.classList.add('none');
});
