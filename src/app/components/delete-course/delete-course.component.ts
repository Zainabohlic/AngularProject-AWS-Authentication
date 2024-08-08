import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'; 
import { CourseService } from '../../course.service'; 

@Component({
  selector: 'app-delete-course',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './delete-course.component.html',
  styleUrls: ['./delete-course.component.css']
})
export class DeleteCourseComponent implements OnInit {
  courseId: number | null = null;
  deleteSuccess: boolean | undefined; // Define deleteSuccess property

  constructor(
    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.courseId = id ? +id : null; // Convert id to number or set to null if not found
    });
  }

  deleteCourse() {
    if (this.courseId === null) {
      alert('Course ID is invalid.');
      this.deleteSuccess = false; // Set deleteSuccess to false
      return;
    }

    this.courseService.deleteCourse(this.courseId).subscribe({
      next: () => {
        this.deleteSuccess = true; // Set deleteSuccess to true
        this.router.navigate(['/courses']);
      },
      error: (error: any) => {
        console.error('Error deleting course:', error);
        this.deleteSuccess = false; // Set deleteSuccess to false
      }
    });
  }

  onSubmit() {
    this.deleteCourse();
  }
}
