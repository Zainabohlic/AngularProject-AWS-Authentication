// src/app/view-students/view-students.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for ngIf and ngFor

import { StudentService } from '../../student.service'; // Import StudentService
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-students',
  standalone: true,
  imports: [CommonModule], // Include necessary modules here
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.css']
})
export class ViewStudentsComponent implements OnInit {
  students: any[] = [];

  constructor(private studentService: StudentService,private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe(data => {
      this.students = data;
    });
  }
}
