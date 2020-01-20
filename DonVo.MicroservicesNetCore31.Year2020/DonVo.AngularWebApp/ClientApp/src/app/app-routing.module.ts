import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { AuthGuard } from './auth.guard';
import { AuthAdminGuard } from './auth-admin.guard';
import { AuthMentorGuard } from './auth-mentor.guard';
import { StudentBodyComponent } from './student-body/student-body.component';
import { MentorBodyComponent } from './mentor-body/mentor-body.component';
import { MentorLoginComponent } from './mentor-login/mentor-login.component';
import { MentorRegisterComponent } from './mentor-register/mentor-register.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CoursesComponent } from './courses/courses.component';
import { ProfileComponent } from './profile/profile.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { ViewCoursesComponent } from './view-courses/view-courses.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { AdminBodyComponent } from './admin-body/admin-body.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { OngoingCoursesComponent } from './ongoing-courses/ongoing-courses.component';
import { MentorListComponent } from './mentor-list/mentor-list.component';
import { UserShowListComponent } from './user-show-list/user-show-list.component';
import { MentorShowListComponent } from './mentor-show-list/mentor-show-list.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { NotFound404Component } from './not-found404/not-found404.component';   
const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'special',
    canActivate: [AuthGuard],
    component: SpecialEventsComponent
  },
  {
    path: 'studentProfile',
    canActivate: [AuthGuard],
    component: StudentProfileComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'mentorBody',
    component: MentorBodyComponent
  },
  {
    path: 'mentor-login',
    component: MentorLoginComponent
  },
  {
    path: 'mentor-register',
    component: MentorRegisterComponent
  },
  {
    path: 'studentBody',
    component: StudentBodyComponent
  },
  {
    path: 'contactUs',
    component: ContactUsComponent
  },
  {
    path: 'courses',
    canActivate: [AuthMentorGuard],
    component: CoursesComponent
  },
  {
    path: 'mentorProfile',
    canActivate: [AuthMentorGuard],
    component: ProfileComponent
  },
  {
    path: 'ongoingCourses',
    canActivate: [AuthMentorGuard],
    component: OngoingCoursesComponent
  },
  {
    path: 'addCourses',
  canActivate: [AuthAdminGuard],
    component: AddCourseComponent
  },
  {
    path: 'viewCourses',
    canActivate: [AuthAdminGuard],
    component: ViewCoursesComponent
  },
  {
    path: 'editCourses',
    canActivate: [AuthAdminGuard],
    component: EditCourseComponent
  },
  {
    path: 'adminBody',
    component: AdminBodyComponent
  },
  {
    path: 'admin-login',
    component: AdminLoginComponent
  },
  {
    path: 'mentorsList',
    canActivate: [AuthAdminGuard],
    component: MentorListComponent
  },
  {
    path: 'studentsShowList',
    canActivate: [AuthAdminGuard],
    component: UserShowListComponent
  },
  {
    path: 'mentorsShowList',
    canActivate: [AuthAdminGuard],
    component: MentorShowListComponent
  },
  {
    path: '**',
    component: NotFound404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
