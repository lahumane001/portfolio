import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataHandlerService } from './dataHandler.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private dataServe : DataHandlerService, private router : Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      return this.dataServe.checkAuthentication().then((res : any)=>{
        if(res){
          return true;
        }else{
          alert("Please Login Mr. DK.. :)")
          this.router.navigate(['/home']);
          return false
        }
      })
  }
  
}
