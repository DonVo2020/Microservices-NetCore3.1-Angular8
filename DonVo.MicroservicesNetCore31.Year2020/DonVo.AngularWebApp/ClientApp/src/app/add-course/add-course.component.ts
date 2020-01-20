import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { EventService } from '../event.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  courseAddData:any = {}
  constructor(private _auth: AuthService,private _eventService: EventService,
    private _router: Router) { }

  ngOnInit() {

     
  }
  registerCourses() {
   this._eventService.registerCourses(this.courseAddData)
    .subscribe(
      res => {
       this._router.navigate(['/viewCourses'])
      },
      err => console.log(err)
    ) 
  
    

}

}
