import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-mentor-list',
  templateUrl: './mentor-list.component.html',
  styleUrls: ['./mentor-list.component.css']
})
export class MentorListComponent implements OnInit {

  mentorsList =[]
  constructor(private _eventService: EventService,
    private _router: Router) { }

  ngOnInit() {
    this._eventService.getMentorListDetails()
      .subscribe(
        res => this.mentorsList = res,
        err => console.log(err),
      )
  }

}
