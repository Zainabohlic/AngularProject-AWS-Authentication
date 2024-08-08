import { RouterModule, Routes } from '@angular/router';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { ViewStudentsComponent } from './components/view-students/view-students.component';
import { DeleteStudentComponent } from './components/delete-student/delete-student.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { ViewCoursesComponent } from './components/view-course/view-course.component';
import { DeleteCourseComponent } from './components/delete-course/delete-course.component';
import { UpdateCourseComponent } from './components/update-course/update-course.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';
import { SignoutRedirectCallbackComponent } from './components/signout-redirect-callback/signout-redirect-callback.component';

export const routes: Routes = [
  { path: 'signin-redirect-callback', component: LoginComponent },
  { path: 'signout-redirect-callback', component: SignoutRedirectCallbackComponent },
  { path: 'view-students', component: ViewStudentsComponent, canActivate: [AuthGuard] },
  { path: 'add-students', component: StudentFormComponent, canActivate: [AuthGuard] },
  { path: 'delete-students', component: DeleteStudentComponent, canActivate: [AuthGuard] },
  { path: 'update-students', component: UpdateStudentComponent, canActivate: [AuthGuard] },
  { path: 'add-course', component: AddCourseComponent, canActivate: [AuthGuard] },
  { path: 'view-course', component: ViewCoursesComponent, canActivate: [AuthGuard] },
  { path: 'delete-course', component: DeleteCourseComponent, canActivate: [AuthGuard] },
  { path: 'update-course', component: UpdateCourseComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/view-students', pathMatch: 'full' } // Default
];

export const AppRoutingModule = RouterModule.forRoot(routes);
