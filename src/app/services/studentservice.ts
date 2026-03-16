import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentModel, StudentResponse } from '../models/student.model';

@Injectable({
  providedIn: 'root',
})
export class Studentservice {
  apiUrl = 'http://localhost:3000/api/v1';

  http = inject(HttpClient);

  getAllStudents(): Observable<StudentResponse> {
    return this.http.get<StudentResponse>(`${this.apiUrl}/getallstudents`);
  }

  saveStudent(student: StudentModel): Observable<any> {
    return this.http.post(`${this.apiUrl}/createstudent`, student);
  }

  updateStudent(student: StudentModel): Observable<any> {
    return this.http.put(`${this.apiUrl}/updstudent/${student.studentid}`, student);
  }

  deleteStudent(studentId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delstudent/${studentId}`);
  }

  getStudentById(studentId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/getstudent/${studentId}`);
  }
}