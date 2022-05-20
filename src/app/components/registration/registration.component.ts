import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,} from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/services/registration.service';
import { User } from 'src/app/shared/models/User';
//import { NgForm } from '@angular/forms';
//import {NgForm} form '@angular/forms';

declare var NgForm:any;
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
   user = new User();
   msg='';
 // registerForm: FormGroup;
 // submitted= false;

  constructor(private formBuilder: FormBuilder,private _router: Router, private _service: RegistrationService) {
  }
  ngOnInit() {
 
    
     
 }
 

 //this.user.fullName='';
   registerUser(){
  this._service.registerUserFromRemote(this.user).subscribe(
    (success) =>{
      console.log("response received");
      alert( this.msg= ("Register successfully"));
      this._router.navigate(["/login"])
    },
    (error) => {
      //console.log("exception occor");
      alert("User Name or Email or Number Already Exist");
  }
    
  )
}
gotohome(){
  this._router.navigate(["/login"])
}
}


