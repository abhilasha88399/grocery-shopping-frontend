import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Products } from 'src/app/shared/models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { User } from 'src/app/shared/models/User';
import { map } from 'rxjs/operators';
//import { Tag } from 'src/app/shared/models/tag';
//import { FoodService } from 'src/app/services/food/food.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   //ublic products: any;
  
   searchkeyword:string;
   products :Products[]=[];
   productId =0;
   user = new User();
  
  constructor(private productService: ProductService,private router: ActivatedRoute,private CartService : CartService,private _router : Router
    ) { }

  ngOnInit():void {
  

      this.productService.getAll().subscribe(data => {
        this.products = data;
       
        this.products.forEach((a:any) => {
          Object.assign(a,{total: a.price});
         });
      });
   
  }
  addtoCart(item : any){
       //this.CartService.addToCart(this.product);
      // this._router.navigateByUrl("/product-page")
      // console.log(item);
      this.CartService.addToCart(item);
  }



}