import {GenerateTimetable} from './timetable';
import {Templates} from './templates';


const button: HTMLButtonElement = document.querySelector('.gen')!
const table:HTMLTableElement = document.querySelector('table')!
const addCourse = document.querySelector('.addCourse')!
const addBlock = document.querySelector('.addBlock')!
const display1 = document.querySelector('#display1')!
const display2 = document.querySelector('#display2')!
const results = document.querySelector('#results')!
const genbutt = document.querySelector('.gen')!


let generateTimetable: GenerateTimetable
let templates = new Templates()


addCourse.addEventListener('click', function(){
    templates.getCourseName();
    templates.getNoOfStds();
    templates.gethours();
    templates.getstds();
    templates.gettutor();
    if(templates.errorMsg){
        display1.textContent = templates.errorMsg
        setTimeout(()=>display1.textContent = '', 2000)
        templates.errorMsg = ''
    }else{
        templates.getCourse()
        display1.textContent = `the class ${templates.courseName} has been entered successfully`
        setTimeout(()=>display1.textContent = '', 1000)
        if(templates.checkLength()){
        genbutt.classList.remove('none');
    }
    }
    
})


addBlock.addEventListener('click', function(){
    templates.getBlockName()
    templates.getBlockCapacity();
    if(templates.errorMsg2){
        display2.textContent = templates.errorMsg2
        setTimeout(()=>display2.textContent = '', 2000)
        templates.errorMsg = ''
    }else{
        templates.getBlock()
        display2.textContent = `the block ${templates.blockName} has been entered successfully`
        setTimeout(()=>display2.textContent = '', 1000)
        if(templates.checkLength()){
            genbutt.classList.remove('none');
        }
    }
    
})


button.addEventListener('click', function(){
    results.classList.remove('none');
    genbutt.classList.add('none')
    templates.checkLimit();

    if(templates.displayMsg){

        results.innerHTML = templates.displayMsg
    }
    else{
        generateTimetable = new GenerateTimetable(templates.blocks, templates.courses)
        console.log(templates.courses, 'from courses')
        generateTimetable.generateClass()

        let day = areDaysFull()
        if(!day){
            generateTimetable.provisionalTimetable.forEach(i => {
                table.innerHTML += `
                    
                <tr>
                    <td>${i.courseName}</td>
                    <td>${i.tutor}</td>
                    <td>${i.students}</td>
                    <td>${i.classroom}</td>
                    <td>${i.day}</td>
                    <td>${i.startTime}</td>
                    <td>${i.endTime}</td>

                </tr>         
            
    `
            })

        
        }else{
            table.innerHTML += day
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
    
})



function areDaysFull(){
    let day;
    for (const i of generateTimetable.provisionalTimetable) {
        if(typeof(i.day) === 'undefined'){
            day = `we run out of space is either you increase the number of classes ${i.size} or the number of days1`
            break
        }else{
            day = false
        }
    }

    return day
}




    
    
