import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router'
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {
  
  specialEvents = []

  constructor(private _eventService: EventService, private _authService: AuthService,
              private _router: Router) { }


  ngOnInit() {
    //console.log('********************ht'+this._authService.loggedInUserName()),
      this._eventService.getSpecialEvents(this._authService.loggedInUserName())
      .subscribe(
        res => this.specialEvents = res,
        err => {
          if( err instanceof HttpErrorResponse ) {
            if (err.status === 401) {
              this._router.navigate(['/login'])
            }
          }
        }
      )
    }

    updateEnrolledCourse(updateCourseId,updateCourseUserName,course)
  {

    if(course.status == "Request Accepted")
    {
      var r =confirm("Are you sure want to pay for the Course?");
    if(r == true){
      this._eventService.updateEnrolledCourseStudent(updateCourseId,updateCourseUserName,course)
      .subscribe(
        res => {
          this._eventService.getSpecialEvents(this._authService.loggedInUserName())
      .subscribe(
        res => this.specialEvents = res,
        err => {
          if( err instanceof HttpErrorResponse ) {
            if (err.status === 401) {
              this._router.navigate(['/login'])
            }
          }
        }
      )
        } ,
        
        err => {  }
      )
    }
    else{
      alert("You rejected to pay for the course");
    }
    }
    if(course.status == "Completed")
    {
      alert("Mentor has completed the course for you.\nYou have Successfully completed the course")
    }
    if(course.status == "In Progress")
    {
      alert("Mentor didn't complete the course.")
    }
    if(course.status == "Requested")
    {
      alert("Mentor didn't accept your request till now.")
    }
  
  }

  

}
