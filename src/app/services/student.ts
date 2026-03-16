import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private http: HttpClient) { }

  createStudent(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/v1/createstudent', data);
  }

  getAllStudents(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/api/v1/getallstudents');
  }

  getStudent(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/api/v1/getstudent/${id}`);
  }

  updateStudent(id: number, data: any): Observable<any> {
    return this.http.put<any>(`http://localhost:3000/api/v1/updstudent/${id}`, data);
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:3000/api/v1/deletestudent/${id}`);
  }
}