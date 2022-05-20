import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { Products } from '../shared/models/product';
import { CartItem } from '../shared/models/CartItem';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  // private cart:Cart = new Cart();
   
   public cartItemList : any =[]
   public products = new BehaviorSubject<any>([]);

   constructor(){}
   getAll(){
       return this.products.asObservable();
     }
     setProduct(product : any){
       this.cartItemList.push(...product);
       this.products.next(product);
     }
     addToCart(product : any){
       this.cartItemList.push(product);
       this.products.next(this.cartItemList);
       this.getTotalPrice();
       console.log(this.cartItemList)
    }
    getTotalPrice() : number{
        let grandTotal = 0;
        this.cartItemList.map((a:any)=>{
         grandTotal +=a.total;
         
        })
        return grandTotal;
    }
    removeCartItem(product : any){
      this.cartItemList.map((a:any, index:any)=>{
        if(product.productId ===a.productId){
          this.cartItemList.splice(index,1);
        }
      })
      this.products.next(this.cartItemList);
    }
    removeAllCart(){
      this.cartItemList =[]
      this.products.next(this.cartItemList);
    }
    saveOrder() {
        
  
    }
   /* addProduct(product: Product): Observable<Product> {
      let url = "http://localhost:9191/api/categories/"+product.category.categoryId+"/products";
      console.log(url);
      return this._httpClient.post<Product>(url, product);   
       
    }*/
}

