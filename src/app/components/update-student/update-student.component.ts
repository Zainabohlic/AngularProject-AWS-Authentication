import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // For template-driven forms
import { Router, ActivatedRoute } from '@angular/router'; // For navigation and route parameters
import { StudentService } from '../../student.service'; // Import the StudentService

@Component({
  selector: 'app-update-student',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  student: any = {
    id: null,
    fullName: '',
    major: ''
  };

  constructor(
    private studentService: StudentService,
    private router: Router,
    private route: ActivatedRoute // Inject ActivatedRoute to get route parameters
  ) { }

  ngOnInit(): void {
    // Fetch student ID from the route parameters
    this.route.paramMap.subscribe(params => {
      const studentId = params.get('id'); // Get the ID as a string
      if (studentId) { // Check if studentId is not null or undefined
        const id = Number(studentId); // Convert to number
        if (!isNaN(id)) { // Check if id is a valid number
          this.studentService.getStudentById(id).subscribe((data: any) => {
            this.student = data;
          });
        } else {
          console.error('Invalid student ID:', studentId);
        }
      } else {
        console.error('Student ID not found in route parameters');
      }
    });
  }

  updateStudent() {
    if (this.student.id) {
      this.studentService.updateStudent(this.student.id, this.student).subscribe({
        next: () => {
          // Show success message
          alert('Student updated successfully!');

          // Optionally navigate to another page
          this.router.navigate(['/students']); // Navigate to the student list or another page
        },
        error: (error) => {
          console.error('Error updating student:', error);
          alert('Error updating student.');
        }
      });
    } else {
      alert('Student ID is missing.');
    }
  }
}
