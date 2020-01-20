import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mentor-login',
  templateUrl: './mentor-login.component.html',
  styleUrls: ['./mentor-login.component.css']
})
export class MentorLoginComponent implements OnInit {

  errorServerMessage: String = null;
  loginMentorData = {"Role":2}

  constructor(private _auth: AuthService,
    public _router : Router) { }

  ngOnInit() {
  }

  loginMentor () {
    this._auth.loginMentor(this.loginMentorData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.key)
        localStorage.setItem('mentorEmail',res.email)
        this._router.navigate(['/courses'])
      },
      err => {
        console.log(err);
        this.errorServerMessage = err.error.message;  
      }
    ) 
  }

}
