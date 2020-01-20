import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.css']
})
export class SearchCourseComponent implements OnInit {

  searchedCourse: any;
  searchedCourseValues:any = [];
  errorServerMessageEvents: String = null;
  constructor(private _router: Router, private _eventService: EventService, private _auth: AuthService){}

  ngOnInit() {    
    
  }

  searchCourse (searchedCourse) {
     this._eventService.searchResult(searchedCourse).subscribe(
       res => {
        this.searchedCourseValues = res
        this.searchedCourseValues.header = "Searched Result"
       },
       err => {
        this.searchedCourseValues.header = " ";
        console.log('err: ' + JSON.stringify(err));
       }
     )
  }

  enrollCourse (event, userId) {
    console.log('**********local'+userId);
    event.studentEmail= userId;
    event.status = "Requested"
    delete event.id;
    //console.log('**********'+event.Id);
    this._eventService.enrollCourse(event)
    .subscribe(
      res => {
        //localStorage.setItem('EventToken', res.enrollEvents.keyCourse)
        this._router.navigate(['/special'])
      } ,
      
      err => {
        console.log(err);
        this.errorServerMessageEvents = err.error.message;  }
    )

  }

}
