export interface StudentResponse {
    success: boolean;
    students: any[];
}

export class StudentModel {
    studentid: number;
    studentname: string;
    department: string;
    semester: number;
    cgpa: number;

    constructor() {
        this.studentid = 0;
        this.studentname = '';
        this.department = '';
        this.semester = 0;
        this.cgpa = 0;
    }
}