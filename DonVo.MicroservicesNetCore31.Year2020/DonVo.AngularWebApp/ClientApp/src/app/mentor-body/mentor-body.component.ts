import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-mentor-body',
  templateUrl: './mentor-body.component.html',
  styleUrls: ['./mentor-body.component.css']
})
export class MentorBodyComponent implements OnInit {

  constructor(public router: Router, private _authService: AuthService) { }

  ngOnInit() {
  }

}
