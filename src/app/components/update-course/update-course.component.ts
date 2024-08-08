import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'; 
import { CourseService } from '../../course.service'; 

@Component({
  selector: 'app-update-course',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {
  courseId:any;
  course: any = { courseId: null, courseName: '', prerequisite: '' }; 
  updateSuccess: boolean | undefined; 

  constructor(
    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      debugger
      const id = params.get('id');
      this.courseId = id ? +id : null;
      if (this.courseId !== null) {
        this.getCourse(this.courseId);
      }
    });
  }

  getCourse(id: number) {
    this.courseService.getCourse(id).subscribe({
      next: (course) => {
        this.course = course || { courseId: id, courseName: '', prerequisite: '' }; // Ensure default values
      },
      error: (error: any) => {
        console.error('Error fetching course details:', error);
        alert('Error fetching course details.');
      }
    });
  }

  updateCourse() {


    if (this.courseId === null) {
      alert('Invalid Course ID.');
      this.updateSuccess = false; 
      return;
    }

    this.courseService.updateCourse(this.courseId, this.course).subscribe({
      next: () => {
        this.updateSuccess = true; 
        this.router.navigate(['/courses']);
      },
      error: (error: any) => {
        console.error('Error updating course:', error);
        this.updateSuccess = false; 
      }
    });
  }

  onSubmit() {
    this.updateCourse();
  }
}
