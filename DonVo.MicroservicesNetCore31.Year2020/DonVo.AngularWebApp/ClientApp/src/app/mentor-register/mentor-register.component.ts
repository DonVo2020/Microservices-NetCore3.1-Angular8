import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mentor-register',
  templateUrl: './mentor-register.component.html',
  styleUrls: ['./mentor-register.component.css']
})
export class MentorRegisterComponent implements OnInit {
  errorServerMessage: String = null;
  registerMentorData = {"Role": 2}

  constructor(private _auth: AuthService,
    public _router : Router) { }

  ngOnInit() {
  }

  registerMentor() {
    this._auth.registerMentor(this.registerMentorData)
    .subscribe(
      res => {
        localStorage.setItem('token',res.key)
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
