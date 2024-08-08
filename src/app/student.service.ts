// src/app/student.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

interface Student {
  id: number;
  fullName: string;
  major: string;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.apiUrl}/Student/GetAllStudents`);
  }

  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.apiUrl}/Student/AddStudent`, student);
  }

  deleteStudent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/Student/DeleteStudent/${id}`);
  }

  getStudentById(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.apiUrl}/Student/GetStudentByID/${id}`);
  }

  updateStudent(id: number, student: Student): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/Student/UpdateStudent/${id}`, student);
  }
}
