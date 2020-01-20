import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { AuthService } from '../auth.service';

import { Router } from '@angular/router'
@Component({
  selector: 'app-user-show-list',
  templateUrl: './user-show-list.component.html',
  styleUrls: ['./user-show-list.component.css']
})
export class UserShowListComponent implements OnInit {

  
  usersList: any[];
  errorServerMessageCourses: String = null;
  constructor(private _eventService: EventService,private _authService: AuthService,
    private _router: Router) { }

  ngOnInit() {
    this._eventService.getusersListAdmin()
      .subscribe(
        res => this.usersList = res,
        err => console.log(err),
      )
  }
  Block(id) {
    this._authService.blockById(id).subscribe(data => {
      this._eventService.getusersListAdmin()
      .subscribe(
        res => this.usersList = res,
        err => console.log(err),
      )
    });
  }
  Unblock(id) {
    this._authService.unBlockById(id).subscribe(data => {
      this._eventService.getusersListAdmin()
      .subscribe(
        res => this.usersList = res,
        err => console.log(err),
      )
    });
  }
}
