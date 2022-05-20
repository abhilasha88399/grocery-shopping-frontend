import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
   
 // cart! : Cart;
 public products : any =[];
 public grandTotal: number = 0;
  constructor(private cartService: CartService, private _router: Router) 
  {

   }

  ngOnInit():void {

    this.cartService.getAll().subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    });

  }


removeItem(product:any){
  this.cartService.removeCartItem(product);
}
emptyCart(){
  this.cartService.removeAllCart();
}
saveCart(){
  alert("your oder placed successfully")
  this._router.navigate(["/home"])
  this.cartService.removeAllCart();
}
}
