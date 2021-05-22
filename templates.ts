import { Iclasses, Icourses } from "./interface"

export class Templates {
    blockName: string = '';
    courseName: string = '';
    courses: Icourses[] = []
    blocks: Iclasses[] = []
    course: Icourses = {
        course : '',
        numberOfStds: 0,
        creditHours: 0,
        taken: false,
        Tutor: '',
        students: []
    }
    block: Iclasses = {
        classroom: '',
        size: 0,
        startTime: 0,
        endTime: 7,
        day: 'Monday'
    }
    courseNameValue: any;
    NoOfStdsValue: any;
    creditHourValue: any;
    tutorValue: any;
    stdsValue: any;
    blockNameValue: any;
    blockCapacityValue: any;


    errorMsg: string = ''
    errorMsg2: string = ''
    displayMsg: string = ''

    getCourseName(): void{
        this.courseNameValue = <HTMLInputElement>document.getElementById('CourseName')!
        if(this.courseNameValue.value){
            this.course.course = this.courseNameValue.value
        }else{
            this.errorMsg = `course name cannot be blank`
        }
         
    }
    getNoOfStds(): void{
        this.NoOfStdsValue = <HTMLInputElement>document.querySelector('#NoOfStds')!
        if(this.NoOfStdsValue && +this.NoOfStdsValue.value > 0){
            this.course.numberOfStds = +this.NoOfStdsValue.value   
             
        }else{
            this.errorMsg = 'Number of stds must not be empty and should be greater than zero'
        }
          
    }
    gethours(): void{
        this.creditHourValue = <HTMLInputElement>document.querySelector('#hours')!
        if(this.creditHourValue && +this.creditHourValue.value > 0){
            this.course.creditHours = +this.creditHourValue.value  
        }else{
            this.errorMsg = 'credit hours must not be empty and should be greater than zero'
        }
        
    }
    gettutor(): void{
        this.tutorValue = <HTMLInputElement>document.querySelector('#tutor')!
        if(this.tutorValue){
            this.course.Tutor = this.tutorValue.value    
        }else{
            this.errorMsg = 'Tutor cannot be empty'
        }
          
    }
    getstds(): void{
        this.stdsValue= <HTMLInputElement>document.querySelector('#stds')!
        if(this.stdsValue){
            this.course.students.push(this.stdsValue.value)  
        }else{
            this.errorMsg = 'stds cannot be empty'
        }
        
           
    }

    getCourse(): void{
        this.courses.push(this.course)
        this.courseName = this.course.course
        this.resetCourse();
 
    }

    resetCourse(): void{
        this.course = {
            course : '',
            numberOfStds: 0,
            creditHours: 0,
            taken: false,
            Tutor: '',
            students: []
        };

        this.stdsValue.value = '';
        this.tutorValue.value = '';
        this.NoOfStdsValue.value = '';
        this.creditHourValue.value = '';
        this.courseNameValue.value = ''
    }

    //for block

    getBlockName(): void {
        this.blockNameValue = <HTMLInputElement>document.querySelector('#NameOfClass')!
        if(this.blockNameValue.value){
            this.block.classroom = this.blockNameValue.value 
        }else{
            this.errorMsg2 = `block name cannot be empty`
        }
         
        
    }

    getBlockCapacity(): void {
        this.blockCapacityValue = <HTMLInputElement>document.querySelector('#capacity')!
        if(this.blockCapacityValue.value  && this.blockCapacityValue.value > 0){
            this.block.size = +this.blockCapacityValue.value
        }else{
            this.errorMsg2 = 'capacity must not be empty and should be greater than zero'
        }
          
        
    }

    getBlock(): void{
        this.blocks.push(this.block)
        this.blockName = this.block.classroom
        this.resetBlock()
    }

    resetBlock(): void {
        this.block =  {
            classroom: '',
            size: 0,
            startTime: 0,
            endTime: 7,
            day: 'Monday'
        }

        this.blockNameValue.value = '';
        this.blockCapacityValue.value = ''
    
    }

    checkLength(): boolean{
        return !!this.blocks.length && !!this.courses.length
    }

    checkLimit(): void{
        for (const i of this.courses) {
            for (const j of this.blocks) {
                if(i.numberOfStds > j.size){
                    this.displayMsg = `<h3 style="text-align:center">there's no block that can contain ${i.numberOfStds} stds of ${i.course}</h3>`
                    break;
                }
            }
        }
    }

}