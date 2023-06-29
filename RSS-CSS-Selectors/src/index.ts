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
const plate20 = <HTMLElement>document.querySelector('.plate20');
const plate21 = <HTMLElement>document.querySelector('.plate21');
const plate22 = <HTMLElement>document.querySelector('.plate22');
const plate23 = <HTMLElement>document.querySelector('.plate23');
const plate24 = <HTMLElement>document.querySelector('.plate24');
const plate25 = <HTMLElement>document.querySelector('.plate25');
const bento1 = <HTMLElement>document.querySelector('.bento1');
const bento2 = <HTMLElement>document.querySelector('.bento2');
const bento3 = <HTMLElement>document.querySelector('.bento3');
const bento4 = <HTMLElement>document.querySelector('.bento4');
const bento5 = <HTMLElement>document.querySelector('.bento5');
const bento6 = <HTMLElement>document.querySelector('.bento6');
const bento7 = <HTMLElement>document.querySelector('.bento7');
const bento8 = <HTMLElement>document.querySelector('.bento8');
const bento9 = <HTMLElement>document.querySelector('.bento9');
const bento10 = <HTMLElement>document.querySelector('.bento10');
const bento11 = <HTMLElement>document.querySelector('.bento11');
const bento12 = <HTMLElement>document.querySelector('.bento12');
const bento13 = <HTMLElement>document.querySelector('.bento13');
const bento14 = <HTMLElement>document.querySelector('.bento14');
const bento15 = <HTMLElement>document.querySelector('.bento15');
const bento16 = <HTMLElement>document.querySelector('.bento16');
const bento17 = <HTMLElement>document.querySelector('.bento17');
const bento18 = <HTMLElement>document.querySelector('.bento18');
const bento19 = <HTMLElement>document.querySelector('.bento19');
const bento20 = <HTMLElement>document.querySelector('.bento20');
const bento21 = <HTMLElement>document.querySelector('.bento21');
const sandwich1 = <HTMLElement>document.querySelector('.sandwich1');
const sandwich2 = <HTMLElement>document.querySelector('.sandwich2');
const sandwich3 = <HTMLElement>document.querySelector('.sandwich3');
const sandwich4 = <HTMLElement>document.querySelector('.sandwich4');
const sandwich5 = <HTMLElement>document.querySelector('.sandwich5');
const sandwich6 = <HTMLElement>document.querySelector('.sandwich6');
const sandwich7 = <HTMLElement>document.querySelector('.sandwich7');
const sandwich8 = <HTMLElement>document.querySelector('.sandwich8');
const sandwich9 = <HTMLElement>document.querySelector('.sandwich9');
const cookie1 = <HTMLElement>document.querySelector('.cookie1');
const cookie2 = <HTMLElement>document.querySelector('.cookie2');
const cookie3 = <HTMLElement>document.querySelector('.cookie3');
const cookie4 = <HTMLElement>document.querySelector('.cookie4');
const cookie5 = <HTMLElement>document.querySelector('.cookie5');
const cookie6 = <HTMLElement>document.querySelector('.cookie6');
const cookie7 = <HTMLElement>document.querySelector('.cookie7');
const cookie8 = <HTMLElement>document.querySelector('.cookie8');
const cookie9 = <HTMLElement>document.querySelector('.cookie9');
const cookie10 = <HTMLElement>document.querySelector('.cookie10');
const sausage1 = <HTMLElement>document.querySelector('.sausage1');
const sausage2 = <HTMLElement>document.querySelector('.sausage2');
const sausage3 = <HTMLElement>document.querySelector('.sausage3');
const sausage4 = <HTMLElement>document.querySelector('.sausage4');
const sausage5 = <HTMLElement>document.querySelector('.sausage5');
const sausage6 = <HTMLElement>document.querySelector('.sausage6');
const sausage7 = <HTMLElement>document.querySelector('.sausage7');
const sausage8 = <HTMLElement>document.querySelector('.sausage8');
const sausage9 = <HTMLElement>document.querySelector('.sausage9');

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

const tooltip1Task8 = <HTMLElement>document.querySelector('.tooltip1_task8');
const tooltip2Task8 = <HTMLElement>document.querySelector('.tooltip2_task8');
const tooltip3Task8 = <HTMLElement>document.querySelector('.tooltip3_task8');
const tooltip4Task8 = <HTMLElement>document.querySelector('.tooltip4_task8');
const tooltip5Task8 = <HTMLElement>document.querySelector('.tooltip5_task8');
const tooltip6Task8 = <HTMLElement>document.querySelector('.tooltip6_task8');
const tooltip7Task8 = <HTMLElement>document.querySelector('.tooltip7_task8');
const tooltip8Task8 = <HTMLElement>document.querySelector('.tooltip8_task8');
const tooltip9Task8 = <HTMLElement>document.querySelector('.tooltip9_task8');

const tooltip1Task9 = <HTMLElement>document.querySelector('.tooltip1_task9');
const tooltip2Task9 = <HTMLElement>document.querySelector('.tooltip2_task9');
const tooltip3Task9 = <HTMLElement>document.querySelector('.tooltip3_task9');
const tooltip4Task9 = <HTMLElement>document.querySelector('.tooltip4_task9');
const tooltip5Task9 = <HTMLElement>document.querySelector('.tooltip5_task9');
const tooltip6Task9 = <HTMLElement>document.querySelector('.tooltip6_task9');
const tooltip7Task9 = <HTMLElement>document.querySelector('.tooltip7_task9');
const tooltip8Task9 = <HTMLElement>document.querySelector('.tooltip8_task9');
const tooltip9Task9 = <HTMLElement>document.querySelector('.tooltip9_task9');
const tooltip10Task9 = <HTMLElement>document.querySelector('.tooltip10_task9');

const tooltip1Task10 = <HTMLElement>document.querySelector('.tooltip1_task10');
const tooltip2Task10 = <HTMLElement>document.querySelector('.tooltip2_task10');
const tooltip3Task10 = <HTMLElement>document.querySelector('.tooltip3_task10');
const tooltip4Task10 = <HTMLElement>document.querySelector('.tooltip4_task10');
const tooltip5Task10 = <HTMLElement>document.querySelector('.tooltip5_task10');
const tooltip6Task10 = <HTMLElement>document.querySelector('.tooltip6_task10');

const plateFirst = <HTMLElement>document.querySelector('.plate_first');
const plateSecond = <HTMLElement>document.querySelector('.plate_second');
const enter = <HTMLElement>document.querySelector('.enter');
const input = <HTMLInputElement>document.querySelector('.input_code');
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

const bento1Task8Img = <HTMLElement>document.querySelector('.bento1_task8');
const bento2Task8Img = <HTMLElement>document.querySelector('.bento2_task8');
const bento3Task8Img = <HTMLElement>document.querySelector('.bento3_task8');
const bento4Task8Img = <HTMLElement>document.querySelector('.bento4_task8');
const cookie1Task8Img = <HTMLElement>document.querySelector('.cookie1_task8');
const cookie2Task8Img = <HTMLElement>document.querySelector('.cookie2_task8');
const cookie3Task8Img = <HTMLElement>document.querySelector('.cookie3_task8');
const cookie4Task8Img = <HTMLElement>document.querySelector('.cookie4_task8');
const sandwichTask8Img = <HTMLElement>document.querySelector('.sandwich_task8');

const bentoTask9Img = <HTMLElement>document.querySelector('.bento_task9');
const plate1Task9Img = <HTMLElement>document.querySelector('.plate1_task9');
const plate2Task9Img = <HTMLElement>document.querySelector('.plate2_task9');
const sausage1Task9Img = <HTMLElement>document.querySelector('.sausage1_task9');
const sausage2Task9Img = <HTMLElement>document.querySelector('.sausage2_task9');
const sausage3Task9Img = <HTMLElement>document.querySelector('.sausage3_task9');
const sausage4Task9Img = <HTMLElement>document.querySelector('.sausage4_task9');
const sausage5Task9Img = <HTMLElement>document.querySelector('.sausage5_task9');
const sausage6Task9Img = <HTMLElement>document.querySelector('.sausage6_task9');
const sausage7Task9Img = <HTMLElement>document.querySelector('.sausage7_task9');

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
const level1 = <HTMLElement>document.querySelector('.level1');
const level2 = <HTMLElement>document.querySelector('.level2');
const level3 = <HTMLElement>document.querySelector('.level3');
const level4 = <HTMLElement>document.querySelector('.level4');
const level5 = <HTMLElement>document.querySelector('.level5');
const level6 = <HTMLElement>document.querySelector('.level6');
const level7 = <HTMLElement>document.querySelector('.level7');
const level8 = <HTMLElement>document.querySelector('.level8');
const level9 = <HTMLElement>document.querySelector('.level9');
const level10 = <HTMLElement>document.querySelector('.level10');
const task3 = <HTMLElement>document.querySelector('.task3');
const task4 = <HTMLElement>document.querySelector('.task4');
const task5 = <HTMLElement>document.querySelector('.task5');
const task6 = <HTMLElement>document.querySelector('.task6');
const task7 = <HTMLElement>document.querySelector('.task7');
const task8 = <HTMLElement>document.querySelector('.task8');
const task9 = <HTMLElement>document.querySelector('.task9');
const task10 = <HTMLElement>document.querySelector('.task10');
const task1and2 = <HTMLElement>document.querySelector('.task');
const popupBody = <HTMLElement>document.querySelector('.popup_body');
const popupShadow = <HTMLElement>document.querySelector('.popup');
const popupClose = <HTMLElement>document.querySelector('.popup_close');

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

plate20.addEventListener('mouseover', function add(): void {
    sausage5.classList.add('color');
    plate21.classList.add('color');
    tooltip7Task9.classList.add('hover');
});

plate20.addEventListener('mouseleave', function remove(): void {
    sausage5.classList.remove('color');
    plate21.classList.remove('color');
    tooltip7Task9.classList.remove('hover');
});

plate21.addEventListener('mouseover', function add(): void {
    sausage5.classList.add('color');
    plate20.classList.add('color');
    tooltip7Task9.classList.add('hover');
});

plate21.addEventListener('mouseleave', function remove(): void {
    sausage5.classList.remove('color');
    plate20.classList.remove('color');
    tooltip7Task9.classList.remove('hover');
});

plate22.addEventListener('mouseover', function add(): void {
    sausage7.classList.add('color');
    plate23.classList.add('color');
    tooltip9Task9.classList.add('hover');
});

plate22.addEventListener('mouseleave', function remove(): void {
    sausage7.classList.remove('color');
    plate23.classList.remove('color');
    tooltip9Task9.classList.remove('hover');
});

plate23.addEventListener('mouseover', function add(): void {
    sausage7.classList.add('color');
    plate22.classList.add('color');
    tooltip9Task9.classList.add('hover');
});

plate23.addEventListener('mouseleave', function remove(): void {
    sausage7.classList.remove('color');
    plate22.classList.remove('color');
    tooltip9Task9.classList.remove('hover');
});

plate24.addEventListener('mouseover', function add(): void {
    cookie9.classList.add('color');
    plate25.classList.add('color');
    tooltip4Task10.classList.add('hover');
});

plate24.addEventListener('mouseleave', function remove(): void {
    cookie9.classList.remove('color');
    plate25.classList.remove('color');
    tooltip4Task10.classList.remove('hover');
});

plate25.addEventListener('mouseover', function add(): void {
    cookie9.classList.add('color');
    plate24.classList.add('color');
    tooltip4Task10.classList.add('hover');
});

plate25.addEventListener('mouseleave', function remove(): void {
    cookie9.classList.remove('color');
    plate24.classList.remove('color');
    tooltip4Task10.classList.remove('hover');
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

bento9.addEventListener('mouseover', function add(): void {
    cookie5.classList.add('color');
    bento10.classList.add('color');
    tooltip6Task8.classList.add('hover');
});

bento9.addEventListener('mouseleave', function remove(): void {
    cookie5.classList.remove('color');
    bento10.classList.remove('color');
    tooltip6Task8.classList.remove('hover');
});

bento10.addEventListener('mouseover', function add(): void {
    cookie5.classList.add('color');
    bento9.classList.add('color');
    tooltip6Task8.classList.add('hover');
});

bento10.addEventListener('mouseleave', function remove(): void {
    cookie5.classList.remove('color');
    bento9.classList.remove('color');
    tooltip6Task8.classList.remove('hover');
});

bento11.addEventListener('mouseover', function add(): void {
    cookie7.classList.add('color');
    bento12.classList.add('color');
    tooltip7Task8.classList.add('hover');
});

bento11.addEventListener('mouseleave', function remove(): void {
    cookie7.classList.remove('color');
    bento12.classList.remove('color');
    tooltip7Task8.classList.remove('hover');
});

bento12.addEventListener('mouseover', function add(): void {
    cookie7.classList.add('color');
    bento11.classList.add('color');
    tooltip7Task8.classList.add('hover');
});

bento12.addEventListener('mouseleave', function remove(): void {
    cookie7.classList.remove('color');
    bento11.classList.remove('color');
    tooltip7Task8.classList.remove('hover');
});

bento13.addEventListener('mouseover', function add(): void {
    sandwich8.classList.add('color');
    bento14.classList.add('color');
    tooltip8Task8.classList.add('hover');
});

bento13.addEventListener('mouseleave', function remove(): void {
    sandwich8.classList.remove('color');
    bento14.classList.remove('color');
    tooltip8Task8.classList.remove('hover');
});

bento14.addEventListener('mouseover', function add(): void {
    sandwich8.classList.add('color');
    bento13.classList.add('color');
    tooltip8Task8.classList.add('hover');
});

bento14.addEventListener('mouseleave', function remove(): void {
    sandwich8.classList.remove('color');
    bento13.classList.remove('color');
    tooltip8Task8.classList.remove('hover');
});

bento15.addEventListener('mouseover', function add(): void {
    cookie8.classList.add('color');
    bento16.classList.add('color');
    tooltip9Task8.classList.add('hover');
});

bento15.addEventListener('mouseleave', function remove(): void {
    cookie8.classList.remove('color');
    bento16.classList.remove('color');
    tooltip9Task8.classList.remove('hover');
});

bento17.addEventListener('mouseover', function add(): void {
    sausage6.classList.add('color');
    bento18.classList.add('color');
    tooltip8Task9.classList.add('hover');
});

bento17.addEventListener('mouseleave', function remove(): void {
    sausage6.classList.remove('color');
    bento18.classList.remove('color');
    tooltip8Task9.classList.remove('hover');
});

bento18.addEventListener('mouseover', function add(): void {
    sausage6.classList.add('color');
    bento17.classList.add('color');
    tooltip8Task9.classList.add('hover');
});

bento18.addEventListener('mouseleave', function remove(): void {
    sausage6.classList.remove('color');
    bento17.classList.remove('color');
    tooltip8Task9.classList.remove('hover');
});

bento19.addEventListener('mouseover', function add(): void {
    tooltip5Task10.classList.add('hover');
});

bento19.addEventListener('mouseleave', function remove(): void {
    tooltip5Task10.classList.remove('hover');
});

bento20.addEventListener('mouseover', function add(): void {
    cookie10.classList.add('color');
    bento21.classList.add('color');
    tooltip6Task10.classList.add('hover');
});

bento20.addEventListener('mouseleave', function remove(): void {
    cookie10.classList.remove('color');
    bento21.classList.remove('color');
    tooltip6Task10.classList.remove('hover');
});

bento21.addEventListener('mouseover', function add(): void {
    cookie10.classList.add('color');
    bento20.classList.add('color');
    tooltip6Task10.classList.add('hover');
});

bento21.addEventListener('mouseleave', function remove(): void {
    cookie10.classList.remove('color');
    bento20.classList.remove('color');
    tooltip6Task10.classList.remove('hover');
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

sandwich8.addEventListener('mouseover', function add(): void {
    tooltip2Task8.classList.add('hover');
});

sandwich8.addEventListener('mouseleave', function remove(): void {
    tooltip2Task8.classList.remove('hover');
});

sandwich9.addEventListener('mouseover', function add(): void {
    tooltip1Task10.classList.add('hover');
});

sandwich9.addEventListener('mouseleave', function remove(): void {
    tooltip1Task10.classList.remove('hover');
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

cookie5.addEventListener('mouseover', function add(): void {
    tooltip3Task8.classList.add('hover');
});

cookie5.addEventListener('mouseleave', function remove(): void {
    tooltip3Task8.classList.remove('hover');
});

cookie6.addEventListener('mouseover', function add(): void {
    tooltip4Task8.classList.add('hover');
});

cookie6.addEventListener('mouseleave', function remove(): void {
    tooltip4Task8.classList.remove('hover');
});

cookie7.addEventListener('mouseover', function add(): void {
    tooltip1Task8.classList.add('hover');
});

cookie7.addEventListener('mouseleave', function remove(): void {
    tooltip1Task8.classList.remove('hover');
});

cookie8.addEventListener('mouseover', function add(): void {
    tooltip5Task8.classList.add('hover');
});

cookie8.addEventListener('mouseleave', function remove(): void {
    tooltip5Task8.classList.remove('hover');
});

cookie9.addEventListener('mouseover', function add(): void {
    tooltip2Task10.classList.add('hover');
});

cookie9.addEventListener('mouseleave', function remove(): void {
    tooltip2Task10.classList.remove('hover');
});

cookie10.addEventListener('mouseover', function add(): void {
    tooltip3Task10.classList.add('hover');
});

cookie10.addEventListener('mouseleave', function remove(): void {
    tooltip3Task10.classList.remove('hover');
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

sausage3.addEventListener('mouseover', function add(): void {
    tooltip1Task9.classList.add('hover');
});

sausage3.addEventListener('mouseleave', function remove(): void {
    tooltip1Task9.classList.remove('hover');
});

sausage4.addEventListener('mouseover', function add(): void {
    tooltip6Task9.classList.add('hover');
});

sausage4.addEventListener('mouseleave', function remove(): void {
    tooltip6Task9.classList.remove('hover');
});

sausage5.addEventListener('mouseover', function add(): void {
    tooltip2Task9.classList.add('hover');
});

sausage5.addEventListener('mouseleave', function remove(): void {
    tooltip2Task9.classList.remove('hover');
});

sausage6.addEventListener('mouseover', function add(): void {
    tooltip3Task9.classList.add('hover');
});

sausage6.addEventListener('mouseleave', function remove(): void {
    tooltip3Task9.classList.remove('hover');
});

sausage7.addEventListener('mouseover', function add(): void {
    tooltip4Task9.classList.add('hover');
});

sausage7.addEventListener('mouseleave', function remove(): void {
    tooltip4Task9.classList.remove('hover');
});

sausage8.addEventListener('mouseover', function add(): void {
    tooltip10Task9.classList.add('hover');
});

sausage8.addEventListener('mouseleave', function remove(): void {
    tooltip10Task9.classList.remove('hover');
});

sausage9.addEventListener('mouseover', function add(): void {
    tooltip5Task9.classList.add('hover');
});

sausage9.addEventListener('mouseleave', function remove(): void {
    tooltip5Task9.classList.remove('hover');
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

bento1Task8Img.addEventListener('mouseover', function add(): void {
    bento9.classList.add('color');
    bento10.classList.add('color');
    cookie5.classList.add('color');
    tooltip6Task8.classList.add('hover');
});

bento1Task8Img.addEventListener('mouseleave', function remove(): void {
    bento9.classList.remove('color');
    bento10.classList.remove('color');
    cookie5.classList.remove('color');
    tooltip6Task8.classList.remove('hover');
});

bento2Task8Img.addEventListener('mouseover', function add(): void {
    bento11.classList.add('color');
    bento12.classList.add('color');
    cookie7.classList.add('color');
    tooltip7Task8.classList.add('hover');
});

bento2Task8Img.addEventListener('mouseleave', function remove(): void {
    bento11.classList.remove('color');
    bento12.classList.remove('color');
    cookie7.classList.remove('color');
    tooltip7Task8.classList.remove('hover');
});

bento3Task8Img.addEventListener('mouseover', function add(): void {
    bento13.classList.add('color');
    bento14.classList.add('color');
    sandwich8.classList.add('color');
    tooltip8Task8.classList.add('hover');
});

bento3Task8Img.addEventListener('mouseleave', function remove(): void {
    bento13.classList.remove('color');
    bento14.classList.remove('color');
    sandwich8.classList.remove('color');
    tooltip8Task8.classList.remove('hover');
});

bento4Task8Img.addEventListener('mouseover', function add(): void {
    bento15.classList.add('color');
    bento16.classList.add('color');
    cookie8.classList.add('color');
    tooltip9Task8.classList.add('hover');
});

bento4Task8Img.addEventListener('mouseleave', function remove(): void {
    bento15.classList.remove('color');
    bento16.classList.remove('color');
    cookie8.classList.remove('color');
    tooltip9Task8.classList.remove('hover');
});

bento1Task10Img.addEventListener('mouseover', function add(): void {
    bento19.classList.add('color');
    tooltip5Task10.classList.add('hover');
});

bento1Task10Img.addEventListener('mouseleave', function remove(): void {
    bento19.classList.remove('color');
    tooltip5Task10.classList.remove('hover');
});

bento2Task10Img.addEventListener('mouseover', function add(): void {
    bento21.classList.add('color');
    bento20.classList.add('color');
    cookie10.classList.add('color');
    tooltip6Task10.classList.add('hover');
});

bento2Task10Img.addEventListener('mouseleave', function remove(): void {
    bento21.classList.remove('color');
    bento20.classList.remove('color');
    cookie10.classList.remove('color');
    tooltip6Task10.classList.remove('hover');
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

plate1Task9Img.addEventListener('mouseover', function add(): void {
    plate20.classList.add('color');
    plate21.classList.add('color');
    sausage5.classList.add('color');
    tooltip7Task9.classList.add('hover');
});

plate1Task9Img.addEventListener('mouseleave', function remove(): void {
    plate20.classList.remove('color');
    plate21.classList.remove('color');
    sausage5.classList.remove('color');
    tooltip7Task9.classList.remove('hover');
});

plate2Task9Img.addEventListener('mouseover', function add(): void {
    plate22.classList.add('color');
    plate23.classList.add('color');
    sausage7.classList.add('color');
    tooltip9Task9.classList.add('hover');
});

plate2Task9Img.addEventListener('mouseleave', function remove(): void {
    plate22.classList.remove('color');
    plate23.classList.remove('color');
    sausage7.classList.remove('color');
    tooltip9Task9.classList.remove('hover');
});

plateTask10Img.addEventListener('mouseover', function add(): void {
    plate24.classList.add('color');
    plate25.classList.add('color');
    cookie9.classList.add('color');
    tooltip4Task10.classList.add('hover');
});

plateTask10Img.addEventListener('mouseleave', function remove(): void {
    plate24.classList.remove('color');
    plate25.classList.remove('color');
    cookie9.classList.remove('color');
    tooltip4Task10.classList.remove('hover');
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

bentoTask9Img.addEventListener('mouseover', function add(): void {
    bento17.classList.add('color');
    bento18.classList.add('color');
    sausage6.classList.add('color');
    tooltip8Task9.classList.add('hover');
});

bentoTask9Img.addEventListener('mouseleave', function remove(): void {
    bento17.classList.remove('color');
    bento18.classList.remove('color');
    sausage6.classList.remove('color');
    tooltip8Task9.classList.remove('hover');
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

sandwichTask8Img.addEventListener('mouseover', function add(): void {
    sandwich8.classList.add('color');
    tooltip2Task8.classList.add('hover');
});

sandwichTask8Img.addEventListener('mouseleave', function remove(): void {
    sandwich8.classList.remove('color');
    tooltip2Task8.classList.remove('hover');
});

sandwichTask10Img.addEventListener('mouseover', function add(): void {
    sandwich9.classList.add('color');
    tooltip1Task10.classList.add('hover');
});

sandwichTask10Img.addEventListener('mouseleave', function remove(): void {
    sandwich9.classList.remove('color');
    tooltip1Task10.classList.remove('hover');
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

cookie1Task8Img.addEventListener('mouseover', function add(): void {
    cookie5.classList.add('color');
    tooltip3Task8.classList.add('hover');
});

cookie1Task8Img.addEventListener('mouseleave', function remove(): void {
    cookie5.classList.remove('color');
    tooltip3Task8.classList.remove('hover');
});

cookie2Task8Img.addEventListener('mouseover', function add(): void {
    cookie6.classList.add('color');
    tooltip4Task8.classList.add('hover');
});

cookie2Task8Img.addEventListener('mouseleave', function remove(): void {
    cookie6.classList.remove('color');
    tooltip4Task8.classList.remove('hover');
});

cookie3Task8Img.addEventListener('mouseover', function add(): void {
    cookie7.classList.add('color');
    tooltip1Task8.classList.add('hover');
});

cookie3Task8Img.addEventListener('mouseleave', function remove(): void {
    cookie7.classList.remove('color');
    tooltip1Task8.classList.remove('hover');
});

cookie4Task8Img.addEventListener('mouseover', function add(): void {
    cookie8.classList.add('color');
    tooltip5Task8.classList.add('hover');
});

cookie4Task8Img.addEventListener('mouseleave', function remove(): void {
    cookie8.classList.remove('color');
    tooltip5Task8.classList.remove('hover');
});

cookie1Task10Img.addEventListener('mouseover', function add(): void {
    cookie9.classList.add('color');
    tooltip2Task10.classList.add('hover');
});

cookie1Task10Img.addEventListener('mouseleave', function remove(): void {
    cookie9.classList.remove('color');
    tooltip2Task10.classList.remove('hover');
});

cookie2Task10Img.addEventListener('mouseover', function add(): void {
    cookie10.classList.add('color');
    tooltip3Task10.classList.add('hover');
});

cookie2Task10Img.addEventListener('mouseleave', function remove(): void {
    cookie10.classList.remove('color');
    tooltip3Task10.classList.remove('hover');
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

sausage1Task9Img.addEventListener('mouseover', function add(): void {
    sausage3.classList.add('color');
    tooltip1Task9.classList.add('hover');
});

sausage1Task9Img.addEventListener('mouseleave', function remove(): void {
    sausage3.classList.remove('color');
    tooltip1Task9.classList.remove('hover');
});

sausage2Task9Img.addEventListener('mouseover', function add(): void {
    sausage4.classList.add('color');
    tooltip6Task9.classList.add('hover');
});

sausage2Task9Img.addEventListener('mouseleave', function remove(): void {
    sausage4.classList.remove('color');
    tooltip6Task9.classList.remove('hover');
});

sausage3Task9Img.addEventListener('mouseover', function add(): void {
    sausage5.classList.add('color');
    tooltip2Task9.classList.add('hover');
});

sausage3Task9Img.addEventListener('mouseleave', function remove(): void {
    sausage5.classList.remove('color');
    tooltip2Task9.classList.remove('hover');
});

sausage4Task9Img.addEventListener('mouseover', function add(): void {
    sausage6.classList.add('color');
    tooltip3Task9.classList.add('hover');
});

sausage4Task9Img.addEventListener('mouseleave', function remove(): void {
    sausage6.classList.remove('color');
    tooltip3Task9.classList.remove('hover');
});

sausage5Task9Img.addEventListener('mouseover', function add(): void {
    sausage7.classList.add('color');
    tooltip4Task9.classList.add('hover');
});

sausage5Task9Img.addEventListener('mouseleave', function remove(): void {
    sausage7.classList.remove('color');
    tooltip4Task9.classList.remove('hover');
});

sausage6Task9Img.addEventListener('mouseover', function add(): void {
    sausage8.classList.add('color');
    tooltip10Task9.classList.add('hover');
});

sausage6Task9Img.addEventListener('mouseleave', function remove(): void {
    sausage8.classList.remove('color');
    tooltip10Task9.classList.remove('hover');
});

sausage7Task9Img.addEventListener('mouseover', function add(): void {
    sausage9.classList.add('color');
    tooltip5Task9.classList.add('hover');
});

sausage7Task9Img.addEventListener('mouseleave', function remove(): void {
    sausage9.classList.remove('color');
    tooltip5Task9.classList.remove('hover');
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
    lev8 = 'Level 8 of 10',
    lev9 = 'Level 9 of 10',
    lev10 = 'Level 10 of 10',
}

function win(): void {
    popupBody.classList.remove('none');
    popupShadow.classList.remove('none');
}

function removeLevel1(): void {
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

function removeLevel2(): void {
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

function removeLevel3(): void {
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

function removeLevel4(): void {
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

function removeLevel5(): void {
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

function removeLevel6(): void {
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

function removeLevel7(): void {
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

function removeLevel8(): void {
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

function removeLevel9(): void {
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

function removeLevel10(): void {
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

// menu navigation ------------------------------------------------------------------------

function chooseLevel1(): void {
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
    code8.classList.add('none');
    table8.classList.add('none');
    task8.classList.add('none');
    code9.classList.add('none');
    table9.classList.add('none');
    task9.classList.add('none');
    code10.classList.add('none');
    table10.classList.add('none');
    task10.classList.add('none');
    input.value = '';
}

level1.addEventListener('click', function chooseLevel() {
    chooseLevel1();
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
    code8.classList.add('none');
    table8.classList.add('none');
    task8.classList.add('none');
    code9.classList.add('none');
    table9.classList.add('none');
    task9.classList.add('none');
    code10.classList.add('none');
    table10.classList.add('none');
    task10.classList.add('none');
    input.value = '';
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
    code8.classList.add('none');
    table8.classList.add('none');
    task8.classList.add('none');
    code9.classList.add('none');
    table9.classList.add('none');
    task9.classList.add('none');
    code10.classList.add('none');
    table10.classList.add('none');
    task10.classList.add('none');
    input.value = '';
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
    code8.classList.add('none');
    table8.classList.add('none');
    task8.classList.add('none');
    code9.classList.add('none');
    table9.classList.add('none');
    task9.classList.add('none');
    code10.classList.add('none');
    table10.classList.add('none');
    task10.classList.add('none');
    input.value = '';
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
    code8.classList.add('none');
    table8.classList.add('none');
    task8.classList.add('none');
    code9.classList.add('none');
    table9.classList.add('none');
    task9.classList.add('none');
    code10.classList.add('none');
    table10.classList.add('none');
    task10.classList.add('none');
    input.value = '';
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
    code8.classList.add('none');
    table8.classList.add('none');
    task8.classList.add('none');
    code9.classList.add('none');
    table9.classList.add('none');
    task9.classList.add('none');
    code10.classList.add('none');
    table10.classList.add('none');
    task10.classList.add('none');
    input.value = '';
});

level7.addEventListener('click', function chooseLevel(): void {
    cookie1Task7Img.classList.remove('up');
    cookie3Task7Img.classList.remove('up');
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
    task1and2.classList.add('none');
    task3.classList.add('none');
    code6.classList.add('none');
    table6.classList.add('none');
    task6.classList.add('none');
    code8.classList.add('none');
    table8.classList.add('none');
    task8.classList.add('none');
    code9.classList.add('none');
    table9.classList.add('none');
    task9.classList.add('none');
    code10.classList.add('none');
    table10.classList.add('none');
    task10.classList.add('none');
    input.value = '';
});

level8.addEventListener('click', function chooseLevel(): void {
    cookie3Task8Img.classList.remove('up');
    cookie4Task8Img.classList.remove('up');
    table8.classList.remove('none');
    code8.classList.remove('none');
    task8.classList.remove('none');
    level.innerHTML = Lev.lev8;
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
    task1and2.classList.add('none');
    task3.classList.add('none');
    code6.classList.add('none');
    table6.classList.add('none');
    task6.classList.add('none');
    code7.classList.add('none');
    table7.classList.add('none');
    task7.classList.add('none');
    code9.classList.add('none');
    table9.classList.add('none');
    task9.classList.add('none');
    code10.classList.add('none');
    table10.classList.add('none');
    task10.classList.add('none');
    input.value = '';
});

level9.addEventListener('click', function chooseLevel(): void {
    bentoTask9Img.classList.remove('up');
    plate1Task9Img.classList.remove('up');
    plate2Task9Img.classList.remove('up');
    sausage3Task9Img.classList.remove('up');
    sausage4Task9Img.classList.remove('up');
    sausage5Task9Img.classList.remove('up');
    table9.classList.remove('none');
    code9.classList.remove('none');
    task9.classList.remove('none');
    level.innerHTML = Lev.lev9;
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
    task1and2.classList.add('none');
    task3.classList.add('none');
    code6.classList.add('none');
    table6.classList.add('none');
    task6.classList.add('none');
    code7.classList.add('none');
    table7.classList.add('none');
    task7.classList.add('none');
    code8.classList.add('none');
    table8.classList.add('none');
    task8.classList.add('none');
    code10.classList.add('none');
    table10.classList.add('none');
    task10.classList.add('none');
    input.value = '';
});

level10.addEventListener('click', function chooseLevel(): void {
    plateTask10Img.classList.remove('up');
    bento2Task10Img.classList.remove('up');
    bento1Task10Img.classList.remove('up');
    sandwichTask10Img.classList.remove('up');
    cookie1Task10Img.classList.remove('up');
    cookie2Task10Img.classList.remove('up');
    table10.classList.remove('none');
    code10.classList.remove('none');
    task10.classList.remove('none');
    level.innerHTML = Lev.lev10;
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
    task1and2.classList.add('none');
    task3.classList.add('none');
    code6.classList.add('none');
    table6.classList.add('none');
    task6.classList.add('none');
    code7.classList.add('none');
    table7.classList.add('none');
    task7.classList.add('none');
    code8.classList.add('none');
    table8.classList.add('none');
    task8.classList.add('none');
    code9.classList.add('none');
    table9.classList.add('none');
    task9.classList.add('none');
    input.value = '';
});

// reset function ----------------------------------------------------------------------------

function removeMarkerColor<T>(x: T): void {
    (<HTMLElement>x).classList.remove('done');
    (<HTMLElement>x).classList.remove('green');
    (<HTMLElement>x).classList.remove('yellow');
}

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

function closePopup(): void {
    popupBody.classList.add('none');
    popupShadow.classList.add('none');
    chooseLevel1();
}

popupClose.addEventListener('click', function closePop(): void {
    closePopup();
});

document.addEventListener('click', function closePop(e: Event): void {
    if (e.target === popupBody) {
        closePopup();
    }
});
