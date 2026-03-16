import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentModel } from '../models/student.model';
import { Studentservice } from '../services/studentservice';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-studentedit',
    imports: [FormsModule, CommonModule],
    templateUrl: './studentedit.html',
    styleUrl: './studentedit.css',
})
export class StudenteditComponent implements OnInit {

    student: StudentModel = {
        studentid: 0,
        studentname: '',
        department: '',
        semester: 0,
        cgpa: 0
    };

    studentservice = inject(Studentservice);
    router = inject(Router);
    route = inject(ActivatedRoute);
    cdr = inject(ChangeDetectorRef);

    ngOnInit(): void {
        const studentId = this.route.snapshot.paramMap.get('id');
        if (studentId) {
            this.studentservice.getStudentById(studentId).subscribe({
                next: (res: any) => {
                    this.student = { ...res.student };
                    this.cdr.detectChanges();
                },
                error: (error) => {
                    alert('Error fetching student details: ' + error.message);
                }
            });
        }
    }

    onSubmit(form: any) {
        if (form.valid) {
            this.studentservice.updateStudent(this.student).subscribe({
                next: (res: any) => {
                    alert('Student updated successfully');
                    this.router.navigate(['/studentlist']);
                },
                error: (error) => {
                    alert('Error updating student: ' + error.message);
                }
            });
        }
    }

    resetForm() {
        this.student = new StudentModel();
        this.router.navigate(['/studentlist']);
    }
}