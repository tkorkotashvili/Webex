import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { DataService } from '../services/DataService';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  message:boolean;
  constructor(private data: DataService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.message;
  }
  ngOnInit(){
    this.data.currentMessage.subscribe(message=>this.message = message)
  }
}
