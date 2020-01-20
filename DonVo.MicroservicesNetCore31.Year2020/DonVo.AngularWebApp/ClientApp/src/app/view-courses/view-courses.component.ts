import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.component.html',
  styleUrls: ['./view-courses.component.css']
})
export class ViewCoursesComponent implements OnInit {

  viewCourses: any[];
  errorServerMessageCourses: String = null;
  constructor(private _eventService: EventService,
    private _router: Router) { }

  ngOnInit() {
    this._eventService.getEvents()
      .subscribe(
        res => this.viewCourses = res,
        err => console.log(err),
      )
  }

  deleteCourse (deleteCourseId) {
    this._eventService.deleteCourse(deleteCourseId)
    .subscribe(
      res => {
        this._eventService.getEvents()
        .subscribe(
          res => this.viewCourses = res,
          err => console.log(err),
        )
        this.errorServerMessageCourses = res.error.text;
      } ,
      
      err => {  this.errorServerMessageCourses = err.error.text;}
    )
   
  }

  editCourse(course){
    this._eventService.setCourse(course);
    this._router.navigate(['/editCourses'])
  }

}
