import { Injectable } from '@angular/core';
import { from, Observable, Subject } from 'rxjs';
import { User } from '../shared/models/User';
import { HttpClient , HttpClientModule} from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  public isAuthenticated = false; 
   public token : string;
   private authStatusListener = new Subject<boolean>();

 
  constructor( private http: HttpClient, private _router:Router) { }
   
  baseUrl:string="http://localhost:9080/grocery-shopping/";
  

   
  public loginUserFromRemote(user:User):Observable<User>
  {
    console.log(this.baseUrl+"login");
    return this.http.post<User>(this.baseUrl+"login",user);
  } 

  public registerUserFromRemote(user:User):Observable<User>
  {
    console.log(this.baseUrl+"register");
    return this.http.post<User>(this.baseUrl+"register",user);
  }
}
