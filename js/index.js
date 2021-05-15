"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var timetable_1 = require("./timetable");
console.log('hello accra');
var course = [
    { numberOfStds: 2, course: 'maths', creditHours: 3, Tutor: 'PRINCE', taken: false, students: ['arts', 'pyh'] },
    { numberOfStds: 11, course: 'scie', creditHours: 3, Tutor: 'as', taken: false, students: ['fe', 'ead'] },
    { numberOfStds: 13, course: 'soci', creditHours: 2, Tutor: 'sam', taken: false, students: ['arts'] },
    { numberOfStds: 14, course: 'chem', creditHours: 2, Tutor: 'PRINCE', taken: false, students: ['pyh'] },
    { numberOfStds: 16, course: 'lit', creditHours: 2, Tutor: 'PRINCE', taken: false, students: ['aerts', 'pyhge'] },
    { numberOfStds: 17, course: 'fre', creditHours: 2, Tutor: 'sma', taken: false, students: ['artaeves', 'pyveeh'] },
    { numberOfStds: 18, course: 'engl', creditHours: 2, Tutor: 'sam', taken: false, students: ['arts', 'pyaeqh'] },
    { numberOfStds: 19, course: 'engl', creditHours: 2, Tutor: 'ko', taken: false, students: ['arteqs', 'pyavh'] },
    { numberOfStds: 20, course: 'engl', creditHours: 3, Tutor: 'sa', taken: false, students: ['artgghhs', 'pyfe2h'] },
    { numberOfStds: 21, course: 'engl', creditHours: 2, Tutor: 'fred', taken: false, students: ['arts', 'pyh'] },
    { numberOfStds: 22, course: 'engl', creditHours: 3, Tutor: 'fe', taken: false, students: ['arts', 'pyh'] },
    { numberOfStds: 23, course: 'engl', creditHours: 3, Tutor: 'ko', taken: false, students: ['arets', 'pcyh'] },
    { numberOfStds: 24, course: 'engl', creditHours: 3, Tutor: 'sa', taken: false, students: ['artse', 'pwveyh'] },
    { numberOfStds: 25, course: 'engl', creditHours: 2, Tutor: 'fred', taken: false, students: ['arecdgts', 'bbfrpyh'] },
    { numberOfStds: 26, course: 'bioi', creditHours: 2, Tutor: 'lo', taken: false, students: ['artfkorms', 'pypofh'] }
];
var classe = [
    { classroom: 'block3', size: 4, taken: false, startTime: 0, endTime: 7, day: 'Monday' },
    // {classroom: 'block1', size: 15, taken: false, startTime:0, endTime:7, day:'Monday'},
    // {classroom: 'block1', size: 24, taken: false, startTime:0, endTime:7, day:'Monday'},
    { classroom: 'block2', size: 30, taken: false, startTime: 0, endTime: 7, day: 'Monday' }
];
var generateTimetable = new timetable_1.GenerateTimetable(classe, course);
generateTimetable.generateClass();
var day;
generateTimetable.provisionalTimetable.forEach(function (i) {
    if (i.day === 'out of days') {
        day = "we run out of space is either you increase the number of classes " + i.size + " or the number of days1";
    }
    else {
        day = false;
    }
});
if (!day) {
    console.log(generateTimetable.provisionalTimetable);
}
else {
    console.log(day);
}
