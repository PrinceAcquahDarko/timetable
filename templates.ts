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

    getCourseName(): void{
        let value = <HTMLInputElement>document.getElementById('CourseName')!
        this.course.course = value.value   
        value.value = ''  
    }
    getNoOfStds(): void{
        let value = <HTMLInputElement>document.querySelector('#NoOfStds')!
        this.course.numberOfStds = +value.value   
        value.value = ''   
    }
    gethours(): void{
        let value = <HTMLInputElement>document.querySelector('#hours')!
       
        this.course.creditHours = +value.value  
         
        value.value = ''  
    }
    gettutor(): void{
        let value = <HTMLInputElement>document.querySelector('#tutor')!
        this.course.Tutor = value.value  
        value.value = ''    
    }
    getstds(): void{
        let value = <HTMLInputElement>document.querySelector('#stds')!
        this.course.students.push(value.value)  
        value.value = '' 
           
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
        }
    }

    //for block

    getBlockName(): void {
        let value = <HTMLInputElement>document.querySelector('#NameOfClass')!
        this.block.classroom = value.value
        value.value = ''    
        
    }

    getBlockCapacity(): void {
        let value = <HTMLInputElement>document.querySelector('#capacity')!
        this.block.size = +value.value
        value.value = ''    
        
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
    
    }

    checkLength(): boolean{
        return !!this.blocks.length && !!this.courses.length
    }

}