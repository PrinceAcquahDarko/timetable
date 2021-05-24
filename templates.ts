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
        if(this.tutorValue.value){
            this.course.Tutor = this.tutorValue.value    
        }else{
            this.errorMsg = 'Tutor cannot be empty'
        }
          
    }
    getstds(): void{
        this.stdsValue= <HTMLInputElement>document.querySelector('#stds')!
        if(this.stdsValue.value){
            let stds = this.stdsValue.value.split(",");
            console.log(stds)
            for (const item of stds) {
                this.course.students.push(item)
            }
        }else{
            this.errorMsg = 'stds cannot be empty'
        }
        
           
    }

    getCourse(): void{
        if(this.course.creditHours > 2){
            this.course.creditHours -= 2
            this.course.taken = true
            this.courses.push(this.course)
            
            let secondCourse:Icourses = {
                course: this.course.course,
                Tutor: this.course.Tutor,
                taken: false,
                numberOfStds: this.course.numberOfStds,
                creditHours: 2,
                students: this.course.students
            }
            
         
            this.courses.push(secondCourse)
          
            this.courseName = this.course.course
            this.resetCourse();
            this.sortCourses()
        }else{
            this.courses.push(this.course)
            this.courseName = this.course.course
            this.resetCourse();
            this.sortCourses()

        }
 
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
        this.sortBlocks()
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
  
        let highestCourse = this.courses.sort((a,b) => b.numberOfStds - a.numberOfStds)[0]
        let highestBlock = this.blocks.sort((a,b)=> b.size - a.size)[0]
        console.log(highestCourse, 'from course');
        console.log(highestBlock, 'from block');
        if(highestCourse.numberOfStds > highestBlock.size)
          this.displayMsg = `<h3 style="text-align:center">there's no block that can contain ${highestCourse.numberOfStds} stds of ${highestCourse.course}</h3>`
            


    }

    sortCourses(): void{
        this.courses.sort((x,y) => y.creditHours - x.creditHours)
    }

    sortBlocks(): void{
        this.blocks.sort((x,y) => x.size - y.size)
    }

    

}