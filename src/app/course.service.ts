import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

interface Course {
  courseId: number;
  courseName: string;
  prerequisite?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(`${this.apiUrl}/Course`, course);
  }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}/Course`);
  }
  
  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/Course/${id}`);
  }

  getCourse(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Course/${id}`);
  }

  updateCourse(id: number, course: any): Observable<any> {
    
    return this.http.put<void>(`${this.apiUrl}/Course/${id}`, course);
  }
}
