import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  errorServerMessage: String = null;
  registerUserData = {"Role": 3}
  
  

  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
  }

  registerUser() {

    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
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
