import { JwtService } from './jwt.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private jwt: JwtService
  ) {}

  canActivate() {
    if (this.jwt.getToken()) {
      return true;
    } else {
      this.router.navigate(['home']);
      return false;
    }
  }
}
