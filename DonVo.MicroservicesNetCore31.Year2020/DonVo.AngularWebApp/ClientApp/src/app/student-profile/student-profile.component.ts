import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { EventService } from '../event.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {

  studentUpdateData:any = {}
  constructor(private _auth: AuthService,private _eventService: EventService,
    public _router: Router) { }
    

 ngOnInit() {
    this._eventService.getStudentDetails(this._auth.loggedInUserName())
      .subscribe(
        res => {
          this.studentUpdateData = res;
          console.log(this.studentUpdateData)
        },
        err => console.log(err)
      )
  }

  editStudentDetails(studentId){
    this._eventService.editStudentDetails(studentId,this.studentUpdateData)
    .subscribe(
      res => {
     
       this._router.navigate(['/events'])
      },
      err =>{ console.log(err) }
    ) 
  }

}
