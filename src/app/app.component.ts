import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ViewStudentsComponent } from './components/view-students/view-students.component';
import { DeleteStudentComponent } from './components/delete-student/delete-student.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { ViewCoursesComponent } from './components/view-course/view-course.component';
import { DeleteCourseComponent } from './components/delete-course/delete-course.component';
import { UpdateCourseComponent } from './components/update-course/update-course.component';
import { LoginComponent } from './components/login/login.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StudentFormComponent, HeaderComponent, FooterComponent, ViewStudentsComponent, DeleteStudentComponent, UpdateStudentComponent, AddCourseComponent, ViewCoursesComponent, DeleteCourseComponent, UpdateCourseComponent, LoginComponent ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'my-app';
}
