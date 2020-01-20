import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-mentor-show-list',
  templateUrl: './mentor-show-list.component.html',
  styleUrls: ['./mentor-show-list.component.css']
})
export class MentorShowListComponent implements OnInit {

  
  mentorsList: any[];
  errorServerMessageCourses: String = null;
  constructor(private _eventService: EventService,private _authService: AuthService,
    private _router: Router) { }

  ngOnInit() {
    this._eventService.getmentorsListAdmin()
      .subscribe(
        res => this.mentorsList = res,
        err => console.log(err),
      )
  }
  Block(id) {
    this._authService.blockById(id).subscribe(data => {
      this._eventService.getmentorsListAdmin()
      .subscribe(
        res => this.mentorsList = res,
        err => console.log(err),
      )
    });
  }
  Unblock(id) {
    this._authService.unBlockById(id).subscribe(data => {
      this._eventService.getmentorsListAdmin()
      .subscribe(
        res => this.mentorsList = res,
        err => console.log(err),
      )
    });
  }

}
