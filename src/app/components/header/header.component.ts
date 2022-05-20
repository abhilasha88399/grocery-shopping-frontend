import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { throwIfEmpty } from 'rxjs/operators';
import { CartService } from 'src/app/services/cart.service';
import { RegistrationService } from 'src/app/services/registration.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  public totalItem : number =0;
  constructor(private cartService : CartService,private _router:Router,private registrationService : RegistrationService) { }

  ngOnInit(): void {
    this.cartService.getAll().subscribe(res=>{
      this.totalItem = res.length;
    })
  }

  logegIn(){
    return !!localStorage.getItem('token')
  }
  logout(){
    localStorage.removeItem('token');
    this._router.navigate(['/home'])
  }
   

}
