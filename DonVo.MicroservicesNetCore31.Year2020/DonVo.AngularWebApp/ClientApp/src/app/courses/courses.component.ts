import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses = {}
  constructor(private _eventService: EventService, private _authService: AuthService,
    private _router: Router) { }

  ngOnInit() {
    console.log('********************ht'+this._authService. loggedInMentorName()),
    this._eventService.getCourses(this._authService. loggedInMentorName())
    .subscribe(
      res => this.courses = res,
      err => console.log(err),
    )
  }
  updateEnrolledCourse(updateCourseId,updateCourseMentorName,course)
  {
    if(course.status == "Requested")
    {
      var r =confirm("Are you sure?\nYou  want to Accept this student?");
    if(r == true){
      this._eventService.updateEnrolledCourseMentor(updateCourseId,updateCourseMentorName,course)
      .subscribe(
        res => {
          this._eventService.getCourses(this._authService. loggedInMentorName())
    .subscribe(
      res => this.courses = res,
      err => console.log(err),
    )
        } ,
        
        err => {  }
      )
    }
    else{
      alert("You rejected the student");
    }
    }
    if(course.status == "In Progress")
    {
      var r =confirm("Are you sure?\nYou want to Complete the course?");
    if(r == true){
      this._eventService.updateEnrolledCourseMentor(updateCourseId,updateCourseMentorName,course)
      .subscribe(
        res => {
          this._eventService.getCourses(this._authService. loggedInMentorName())
    .subscribe(
      res => this.courses = res,
      err => console.log(err),
    )
        } ,
        
        err => {  }
      )
    }
    else{
      alert("You didn't complete the course yet");
    }
    }
    if(course.status == "Completed")
    {
      alert("The course is completed by you.")
    }
    if(course.status == "Request Accepted")
    {
      alert("Student didn't pay for this course.")
    }
    
  
  }

}
