import { Component, OnInit } from '@angular/core';
//import { HttpClient } form '@angular/common/http';
import { FormBuilder ,FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/services/registration.service';
import { User } from 'src/app/shared/models/User';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   user = new User();
   msg ='';
  constructor(private _service : RegistrationService, private _router : Router) { }

  ngOnInit() {
  }
  
  loginUser(loginForm : NgForm){
    //console.log(loginForm.value);
    //console.log(this.user);
    this._service.loginUserFromRemote(this.user).subscribe(
      
      (success) =>{
      /*  //console.log(success);
        alert(success.firstName+ " : Login Successfully")
        
        this._router.navigate(["/home"])
      },
      error => {
        console.log("exception accor");
        this.msg= "bad cedentials, please enter valid email and password";

    */
        alert(success.userRole + success.firstName+" Login Successfully")
        
        if(success.userRole=="ADMIN")
        {
          this._router.navigate(['/products'])
        }
        else
        {
          //this.route.navigate(["/otcproducts"+success.userId])
          this._router.navigate(['/home'])
        }
        
      },
      (error)=>{
         alert("Invalid UserName or Password");
      }
    )

      }
      
    
  
  gotoRegistration(){
    this._router.navigate(["/registration"])
  }
}
