import {Iclasses, Icourses} from './interface';


let course: Icourses[] = [
    {numberOfStds: 2, course: 'maths', creditHours: 3, Tutor: 'PRINCE', taken: false , students: ['arts', 'pyh']},
    {numberOfStds: 11, course: 'scie', creditHours: 3, Tutor: 'as', taken: false , students: ['fe', 'ead']},
    {numberOfStds: 13, course: 'soci', creditHours: 2, Tutor: 'sam', taken: false, students: ['arts']},
    {numberOfStds: 14, course: 'chem', creditHours: 2, Tutor: 'PRINCE', taken: false, students: [ 'pyh']},
    {numberOfStds: 16, course: 'lit', creditHours: 2, Tutor: 'PRINCE',taken: false, students: ['aerts', 'pyhge']},
    {numberOfStds: 17, course: 'fre', creditHours: 2,Tutor: 'sma', taken: false, students: ['artaeves', 'pyveeh']},
    {numberOfStds: 18, course: 'rme', creditHours: 2,Tutor: 'sam', taken: false, students: ['arts', 'pyaeqh']},
    {numberOfStds: 19, course: 'bdt', creditHours: 2,Tutor: 'ko', taken: false, students: ['arteqs', 'pyavh']},
    {numberOfStds: 20, course: 'engl', creditHours: 3,Tutor: 'sa', taken: false, students: ['artgghhs', 'pyfe2h']},
    {numberOfStds: 21, course: 'span', creditHours: 2,Tutor: 'fred', taken: false, students: ['arts', 'pyh']},
    {numberOfStds: 22, course: 'chine', creditHours: 3,Tutor: 'fe', taken: false, students: ['arts', 'pyh']},
    {numberOfStds: 23, course: 'pato', creditHours: 3,Tutor: 'ko', taken: false, students: ['arets', 'pcyh']},
    {numberOfStds: 24, course: 'dance', creditHours: 3,Tutor: 'sa', taken: false, students: ['artse', 'pwveyh']},
    {numberOfStds: 25, course: 'stone', creditHours: 2,Tutor: 'fred', taken: false, students: ['arecdgts', 'bbfrpyh']},
    {numberOfStds: 26, course: 'boi', creditHours: 2,Tutor: 'lo', taken: false, students: ['artfkorms', 'pypofh']}
]

let classe: Iclasses[] = [
    {classroom: 'block3', size: 12, taken: false, startTime:0, endTime:7, day:'Monday'},
    {classroom: 'block1', size: 15, taken: false, startTime:0, endTime:7, day:'Monday'},
    {classroom: 'block4', size: 24, taken: false, startTime:0, endTime:7, day:'Monday'},
    {classroom: 'block2', size: 30, taken: false, startTime:0, endTime:7, day:'Monday'}
]


export {classe, course}