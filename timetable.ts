import {Iclasses, Icourses, Itimes} from './interface'

class GenerateTimetable {
    provisionalTimetable: Itimes[] = []
    days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

    constructor(public classes: Iclasses[], public courses: Icourses[]){

    }

    generateHour(): number{
        return this.courses.filter(i => i.creditHours !== 0).length
    }

    generateClass(): void{
        while(this.generateHour()){

            this.courses.forEach(courses => { 
                this.classes.forEach(ele => {
                    if(ele.size > courses.numberOfStds && courses.creditHours){
                        var taken = this.courses.filter(i => i.taken === true).length
                        
                         if(taken === this.courses.length){
                             ele.day = this.generateDay(ele.day, this.courses)
     
                         }else{
                             if(!courses.taken){
                                 if(ele.startTime <= 9){
                                    let startTime = this.checkdayAndRoom(ele)
                                        if(startTime){
                                        ele.startTime = startTime.endTime 
                                        }else{
                                            ele.startTime = ele.endTime 

                                        }
                                        if(!this.checkForDuplicateTeach(ele.startTime, courses, ele) && !this.checkForDuplicateStd(ele, courses) && !this.checkSameDay(ele, courses)){
                                            let hour = this.generateTimePeriods(courses.creditHours, courses)
                                            courses.taken = true
                                            ele.endTime = ele.startTime + hour
    
                                            let objs = this.generateItimes(ele, courses)
                                           
                                            this.provisionalTimetable.push(objs)
                                          
                                        }
                                       
                                 }else{
                                      ele.day = this.generateDay(ele.day, this.courses)
                                      ele.startTime = 0;
                                      ele.endTime = 7
          
                                 }
                                  
          
                              
                             }else{
                             }
                         }
     
                       
                    }
     
                }); 
             });
        }
        
    }

    generateItimes(items: Iclasses, element: Icourses): Itimes{
        let obj: Itimes = {
            size: items.size,
            classroom: items.classroom,
            startTime: items.startTime,
            endTime: items.endTime,
            courseName: element.course,
            numOfstds : element.numberOfStds,
            day: items.day,
            tutor: element.Tutor,
            students: element.students
        }
        return obj

    }

    checkdayAndRoom(clas: Iclasses):Itimes{
         let allclass = this.provisionalTimetable.filter(i => i.day === clas.day && i.classroom === clas.classroom)
        return allclass[allclass.length - 1]
    }

    checkForDuplicateTeach(startTime: number, cour: Icourses, ele: Iclasses): Itimes{
        return this.provisionalTimetable.filter(i => startTime >= i.startTime && startTime < i.endTime && i.day === ele.day && i.tutor === cour.Tutor)[0]
    }

     checkForDuplicateStd(cla: Iclasses, cour: Icourses): boolean{
        let b = false 
        let fistFilter: any[] = this.provisionalTimetable.filter(i => cla.startTime >= i.startTime && cla.startTime < i.endTime && i.day === cla.day)
        if (fistFilter){
            
            fistFilter.forEach(i => {
                b = cour.students.some(item => i.students.includes(item))
                return b
            })
        }
    
        return b
        
        
        
    }

    generateDay(day: string, courses: Icourses[]):string{
        let currentday = this.days.indexOf(day);
        let nextday = currentday + 1;
        courses.forEach(course => {
            course.taken = false;
        })
      
        return this.days[nextday]
        
    }

    checkSameDay(ele: Iclasses, cours: Icourses): Itimes{
        return this.provisionalTimetable.filter(x => x.day === ele.day && x.courseName === cours.course)[0]
    }

    generateTimePeriods(hour: number, courses: Icourses): number{
       let hours: number = 0
        if(hour === 1){
            courses.creditHours = courses.creditHours - 1
            hours = 1
        }
        if(hour === 2){

            courses.creditHours = courses.creditHours - 2

            hours = 2
        }
        if(hour > 2){
            let arr = [1, 2]
            let num = arr[Math.floor(Math.random() * arr.length)]
    
            courses.creditHours = courses.creditHours - num
    
            hours = num
        }

        return hours
      

       
    }




}

export {GenerateTimetable}









