"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var timetable_1 = require("./timetable");
var templates_1 = require("./templates");
var button = document.querySelector('.gen');
var table = document.querySelector('table');
var addCourse = document.querySelector('.addCourse');
var addBlock = document.querySelector('.addBlock');
var display1 = document.querySelector('#display1');
var display2 = document.querySelector('#display2');
var results = document.querySelector('#results');
var genbutt = document.querySelector('.gen');
var generateTimetable;
var templates = new templates_1.Templates();
addCourse.addEventListener('click', function () {
    templates.getCourseName();
    templates.getNoOfStds();
    templates.gethours();
    templates.getstds();
    templates.gettutor();
    if (templates.errorMsg) {
        display1.textContent = templates.errorMsg;
        setTimeout(function () { return display1.textContent = ''; }, 2000);
        templates.errorMsg = '';
    }
    else {
        templates.getCourse();
        display1.textContent = "the class " + templates.courseName + " has been entered successfully";
        setTimeout(function () { return display1.textContent = ''; }, 1000);
        if (templates.checkLength()) {
            genbutt.classList.remove('none');
        }
    }
});
addBlock.addEventListener('click', function () {
    templates.getBlockName();
    templates.getBlockCapacity();
    if (templates.errorMsg2) {
        display2.textContent = templates.errorMsg2;
        setTimeout(function () { return display2.textContent = ''; }, 2000);
        templates.errorMsg = '';
    }
    else {
        templates.getBlock();
        display2.textContent = "the block " + templates.blockName + " has been entered successfully";
        setTimeout(function () { return display2.textContent = ''; }, 1000);
        if (templates.checkLength()) {
            genbutt.classList.remove('none');
        }
    }
});
button.addEventListener('click', function () {
    results.classList.remove('none');
    genbutt.classList.add('none');
    templates.checkLimit();
    if (templates.displayMsg) {
        results.innerHTML = templates.displayMsg;
    }
    else {
        generateTimetable = new timetable_1.GenerateTimetable(templates.blocks, templates.courses);
        console.log(templates.courses, 'from courses');
        generateTimetable.generateClass();
        var day = areDaysFull();
        if (!day) {
            generateTimetable.provisionalTimetable.forEach(function (i) {
                table.innerHTML += "\n                    \n                <tr>\n                    <td>" + i.courseName + "</td>\n                    <td>" + i.tutor + "</td>\n                    <td>" + i.students + "</td>\n                    <td>" + i.classroom + "</td>\n                    <td>" + i.day + "</td>\n                    <td>" + i.startTime + "</td>\n                    <td>" + i.endTime + "</td>\n\n                </tr>         \n            \n    ";
            });
        }
        else {
            table.innerHTML += day;
        }
    }
    // let classe: Iclasses[] = [
    //     {classroom: 'prince', day:'Monday', startTime: 0, endTime:7, size: 15}
    // ]
    // let blocks: Icourses[] = [
    //     {course:'b', numberOfStds: 10, taken: false, creditHours: 2, Tutor: 'prince', students: ['sam']},
    //     {course:'cbew', numberOfStds: 14, taken: false, creditHours: 1, Tutor: 'fe', students: ['dudfkfkfe']},
    // //     {course:'cbf', numberOfStds: 25, taken: false, creditHours: 3, Tutor: 'fewee', students: ['deude']},
    // //     {course:'cbw', numberOfStds: 12, taken: false, creditHours: 2, Tutor: 'sam', students: ['dude']},
    // //     {course:'cbe', numberOfStds: 20, taken: false, creditHours: 2, Tutor: 'e', students: ['dudge']},
    // //     {course:'cbv', numberOfStds: 35, taken: false, creditHours: 2, Tutor: 'e', students: ['dudgeee']},
    // //     {course:'bd', numberOfStds: 11, taken: false, creditHours: 3, Tutor: 'prince', students: ['sam']},
    // //     {course:'cbwdwew', numberOfStds: 19, taken: false, creditHours: 3, Tutor: 'fde', students: ['dudfkfkfeeaee']},
    // //     {course:'cbsdagf', numberOfStds: 28, taken: false, creditHours: 3, Tutor: 'fewfeee', students: ['deudgegee']},
    // ]
});
function areDaysFull() {
    var day;
    for (var _i = 0, _a = generateTimetable.provisionalTimetable; _i < _a.length; _i++) {
        var i = _a[_i];
        if (typeof (i.day) === 'undefined') {
            day = "we run out of space is either you increase the number of classes " + i.size + " or the number of days1";
            break;
        }
        else {
            day = false;
        }
    }
    return day;
}
