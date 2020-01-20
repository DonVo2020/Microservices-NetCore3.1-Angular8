import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-admin-body',
  templateUrl: './admin-body.component.html',
  styleUrls: ['./admin-body.component.css']
})
export class AdminBodyComponent implements OnInit {

  constructor(public router: Router, private _authService: AuthService) { }

  ngOnInit() {
  }

}
