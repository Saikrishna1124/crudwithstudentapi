import { Component, inject } from '@angular/core';
import { Studentservice } from '../services/studentservice';
import { StudentModel } from '../models/student.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-studentadd',
    standalone: true,
    imports: [FormsModule, CommonModule],
    templateUrl: './studentadd.html',
    styleUrl: './studentadd.css',
})
export class StudentaddComponent {
    student: StudentModel = new StudentModel();

    studentservice = inject(Studentservice);
    router = inject(Router);

    onSubmit(form: any) {
        if (form.valid) {
            this.studentservice.saveStudent(this.student).subscribe({
                next: (res: any) => {
                    alert('Student saved successfully');
                    this.student = new StudentModel();
                    form.resetForm();
                    this.router.navigate(['/studentlist']);
                },
                error: (err: any) => {
                    console.log(err);
                    alert(err?.error?.message || err?.message || 'Network/Server error');
                }
            });
        }
    }

    resetForm() {
        this.student = new StudentModel();
        this.router.navigate(['/studentlist']);
    }
}