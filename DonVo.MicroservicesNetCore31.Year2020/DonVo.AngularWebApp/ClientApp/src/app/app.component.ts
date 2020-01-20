import { Component, OnInit } from '@angular/core';
import { EventService } from './event.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  searchedCourse: any;
  searchedCourseValues:any = []
  constructor(public router: Router, private _eventService: EventService){}

  ngOnInit() {    
    
  }

  searchCourse (searchedCourse) {
     this._eventService.searchResult(searchedCourse).subscribe(
       res => {
        this.searchedCourseValues = res
       },
       err => {
        console.log('err: ' + JSON.stringify(err));
       }
     )
  }
}
