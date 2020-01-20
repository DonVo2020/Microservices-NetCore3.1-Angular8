import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { EventService } from '../event.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {


  courseUpdateData:any = {}
  constructor(private _auth: AuthService,private _eventService: EventService,
    private _router: Router) { }

  ngOnInit() {
    this.courseUpdateData = this._eventService.getCourse()
  }

  editCourses() {
    this._eventService.editCourses(this.courseUpdateData.id,this.courseUpdateData)
     .subscribe(
       res => {
        this._router.navigate(['/viewCourses'])
       },
       err => console.log(err)
     ) 
 }

}
