import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // For template-driven forms
import { Router } from '@angular/router'; // For navigation
import { StudentService } from '../../student.service'; // Import the StudentService

@Component({
  selector: 'app-delete-student',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent {
  studentId: number = 0;

  constructor(
    private studentService: StudentService,
    private router: Router
  ) { }

  deleteStudent() {
    this.studentService.deleteStudent(this.studentId).subscribe({
      next: () => {
        // Show success message
        alert('Student deleted successfully!');
        
        // Optionally navigate to another page
        this.router.navigate(['/students']); // Navigate to the student list or another page
      },
      error: (error: any) => {
        console.error('Error deleting student:', error);
        alert('Error deleting student.');
      }
    });
  }
}
