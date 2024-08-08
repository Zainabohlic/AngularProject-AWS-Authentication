import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // For template-driven forms
import { Router } from '@angular/router'; // For navigation
import { CourseService } from '../../course.service'; // Import the CourseService

@Component({
  selector: 'app-add-course',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  course = {
    courseId: 0, // Initialize with a default value
    courseName: '',
    prerequisite: ''
  };

  constructor(
    private courseService: CourseService,
    private router: Router
  ) { }

  addCourse() {
    // Ensure courseId is a valid number before sending
    if (this.course.courseId <= 0) {
      alert('Please enter a valid Course ID.');
      return;
    }

    this.courseService.addCourse(this.course).subscribe({
      next: () => {
        // Show success message
        const successMessage = document.getElementById('successMessage');
        if (successMessage) {
          successMessage.style.display = 'block';
        }

        // Hide success message after 3 seconds and navigate
        setTimeout(() => {
          if (successMessage) {
            successMessage.style.display = 'none';
          }
          this.router.navigate(['/courses']); // Navigate to the course list or another page
        }, 3000);
      },
      error: (error) => {
        console.error('Error adding course:', error);
        alert('Error adding course.');
      }
    });
  }
}
