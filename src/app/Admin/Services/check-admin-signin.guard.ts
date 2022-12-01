import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Adminstore } from '../Models/adminstore';

@Injectable({
  providedIn: 'root'
})
export class CheckAdminSigninGuard implements CanActivate {
  constructor(private router : Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(Adminstore.email == '') {
        alert("This page is allowed only for admins");
        this.router.navigate(['']);
      }
    return true;
  }
  
}
