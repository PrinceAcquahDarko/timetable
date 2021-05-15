interface Iclasses{
    classroom: string;
    size: number;
    taken?: boolean;
    startTime: number;
    endTime: number;
    day: string;
}

interface Icourses{
    course: string;
    numberOfStds: number;
    creditHours: number;
    taken: boolean;
    Tutor: string;
    students: string[]

}

interface Itimes extends Iclasses{
    
    courseName: string;
    numOfstds: number;
    tutor: string;
    students: string[]
}

export { Iclasses, Icourses, Itimes}