import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { EventService } from '../event.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  mentorUpdateData: any[];
  constructor(private _auth: AuthService,private _eventService: EventService,
    public _router: Router) { }
    

 ngOnInit() {
    this._eventService.getMentorDetails(this._auth.loggedInMentorName())
      .subscribe(
        res => {
          this.mentorUpdateData = res;
          console.log(this.mentorUpdateData)
        },
        err => console.log(err)
      )
  }

 editMentorDetails(mentorId){
    this._eventService.editMentorDetails(mentorId,this.mentorUpdateData)
    .subscribe(
      res => {
     
       this._router.navigate(['/courses'])
      },
      err =>{ console.log(err) }
    ) 
  }


}
