import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorServerMessage: String = null;
  loginUserData = {"Role": 3}
 
  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
  }

  loginUser () {
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.key)
        localStorage.setItem('userEmail',res.email)
        this._router.navigate(['/events'])
      },
      err => {
        console.log(err);
        this.errorServerMessage = err.error.message;  
      }
    ) 
  }

}
