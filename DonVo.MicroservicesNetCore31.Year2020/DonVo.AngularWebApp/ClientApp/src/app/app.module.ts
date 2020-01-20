import { AuthGuard } from './auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { AuthService } from './auth.service';
import { EventService } from './event.service';
import { TokenInterceptorService } from './token-interceptor.service';
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
import { NotFound404Component } from './not-found404/not-found404.component';
import { SearchCourseComponent } from './search-course/search-course.component';
import { OngoingCoursesComponent } from './ongoing-courses/ongoing-courses.component';
import { AuthAdminGuard } from './auth-admin.guard';
import { AuthMentorGuard } from './auth-mentor.guard';
import { MentorListComponent } from './mentor-list/mentor-list.component';
import { UserShowListComponent } from './user-show-list/user-show-list.component';
import { MentorShowListComponent } from './mentor-show-list/mentor-show-list.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EventsComponent,
    SpecialEventsComponent,
    StudentBodyComponent,
    MentorBodyComponent,
    MentorLoginComponent,
    MentorRegisterComponent,
    ContactUsComponent,
    CoursesComponent,
    ProfileComponent,
    AddCourseComponent,
    ViewCoursesComponent,
    EditCourseComponent,
    AdminBodyComponent,
    AdminLoginComponent,
    NotFound404Component,
    SearchCourseComponent,
    OngoingCoursesComponent,
    MentorListComponent,
    UserShowListComponent,
    MentorShowListComponent,
    StudentProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuard, AuthAdminGuard, AuthMentorGuard, EventService, 
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
