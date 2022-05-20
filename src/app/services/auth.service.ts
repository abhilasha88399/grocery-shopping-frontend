import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})

export class AuthService{

    constructor(private _router : Router){}

    authUser(user: any){
        let UserArray =[];
        if(localStorage.getItem('User')){
            UserArray = JSON.parse(localStorage.getItem('user'));
        }
        return UserArray.find(p=> p.userName === user.userName && p.password ===  user.password);
        
    }
    logegIn(){
        return !!localStorage.getItem('token')
      }
      logoutUser(){
        localStorage.removeItem('token');
        this._router.navigate(['/home'])
      }
}