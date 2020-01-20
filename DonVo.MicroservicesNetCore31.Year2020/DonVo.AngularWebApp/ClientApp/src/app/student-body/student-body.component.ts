import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-student-body',
  templateUrl: './student-body.component.html',
  styleUrls: ['./student-body.component.css']
})
export class StudentBodyComponent implements OnInit {

  constructor(public router: Router, private _authService: AuthService) { }

  ngOnInit() {
  }

}
