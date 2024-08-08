// src/app/student-form/student-form.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // For template-driven forms
import { Router } from '@angular/router'; // For navigation
import { StudentService } from '../../student.service'; // Import StudentService


@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
  student = { id: 0, fullName: '', major: '' }; // Define your student model

  constructor(
    private studentService: StudentService, 
    private router: Router
  ) { }

  addStudent() {
    this.studentService.addStudent(this.student).subscribe({
      next: () => {
        // Show success message
        const successMessage = document.getElementById('successMessage');
        if (successMessage) {
          successMessage.style.display = 'block';
        }

        // Hide success message after 3 seconds
        setTimeout(() => {
          if (successMessage) {
            successMessage.style.display = 'none';
          }
          this.router.navigate(['/students']); // Navigate to the student list or another page
        }, 3000);
      },
      error: (error: any) => {
        console.error('Error adding student:', error);
      }
    });
  }
}
