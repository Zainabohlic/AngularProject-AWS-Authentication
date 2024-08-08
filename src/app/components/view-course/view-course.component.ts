import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; 
import { CourseService } from '../../course.service'; 
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-view-courses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCoursesComponent implements OnInit {
  courses: any[] = []; // Array to hold the list of courses
  isLoading: boolean = true; // To show loading indicator
  selectedCourse: any = null; // To hold the course being edited
  @ViewChild('updateModal', { static: false }) updateModal!: TemplateRef<any>; // Definite assignment assertion

  constructor(
    private courseService: CourseService,
    private router: Router,
    private modalService: NgbModal 
  ) { }

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses() {
    this.courseService.getCourses().subscribe({
      next: (data: any) => {
        this.courses = data;
        this.isLoading = false; // Hide loading indicator
      },
      error: (error: any) => {
        console.error('Error loading courses:', error);
        this.isLoading = false; // Hide loading indicator
      }
    });
  }

  // Method to navigate to course details or edit page
  viewCourseDetails(courseId: number) {
    this.router.navigate([`/course-details/${courseId}`]);
  }

  // Method to open the update modal
  openUpdateModal(course: any) {
    this.selectedCourse = { ...course }; 
    this.modalService.open(this.updateModal, { ariaLabelledBy: 'modal-basic-title' }); 
  }

 
  updateCourse() {
    if (this.selectedCourse) {
      this.courseService.updateCourse(this.selectedCourse.courseId, this.selectedCourse).subscribe({
        next: () => {
          this.loadCourses(); 
          this.modalService.dismissAll(); 
        },
        error: (error: any) => {
          console.error('Error updating course:', error);
        }
      });
    }
  }
}
