import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthMentorGuard implements  CanActivate{
  constructor(private _authService: AuthService,
    private _router: Router) { }

  canActivate(): boolean {
    if (this._authService.loggedInMentor()) {
      console.log('true')
      return true
    } else {
      console.log('false')            
      this._router.navigate(['/mentor-login'])
      return false
    }
  }
}
