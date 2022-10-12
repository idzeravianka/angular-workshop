import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanSeeDescriptionGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userRoles = ['Moderator', 'Admin'];

    if (userRoles.includes('Admin')) {
      return true;
    }

    const previousPath = state.url.split('/').slice(0, -1).join('/');
    this.router.navigateByUrl(previousPath);
    return false;
  }

}
