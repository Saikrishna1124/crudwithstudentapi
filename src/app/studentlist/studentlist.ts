import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Studentservice } from '../services/studentservice';
import { StudentResponse } from '../models/student.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-studentlist',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './studentlist.html',
  styleUrl: './studentlist.css',
})
export class StudentlistComponent implements OnInit {

  http = inject(HttpClient);
  studentservice = inject(Studentservice);
  cdr = inject(ChangeDetectorRef);

  students: any[] = [];

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents() {
    this.studentservice.getAllStudents()
      .subscribe({
        next: (res: StudentResponse) => {
          this.students = res.students;
          this.cdr.detectChanges();
        },
        error: (error) => {
          console.error('Error fetching students:', error);
        }
      });
  }

  deleteStudent(studentId: string) {
    if (confirm('Are you sure you want to delete this student?')) {
      this.studentservice.deleteStudent(studentId).subscribe({
        next: () => {
          alert('Student deleted successfully');
          this.getAllStudents();
        },
        error: (error) => {
          alert('Error deleting student: ' + error.message);
        }
      });
    }
  }
}