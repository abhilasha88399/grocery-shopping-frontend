import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from 'src/app/shared/models/product';
import { Category } from '../shared/models/tag';
import { map } from 'rxjs/operators';
import { CartService } from './cart.service';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products: any;
  //private _productUrl ="http://localhost:9090/grocery-shopping/products";

  constructor( private _httpClient : HttpClient, private cartService : CartService ) { }

 //getAll(){
 // return this.http.get<any>(this._productUrl)
 //}

  getAll(): Observable<Products[]> {
    let url = "http://localhost:9080/grocery-shopping/products";
    return this._httpClient.get<Products[]>(url).pipe(map(response => response));
  }
  /*getAllCategory(): Observable<Tag[]> {
    let url = "http://localhost:9070/grocery-shopping/products";
    return this._httpClient.get<Tag[]>(url).pipe(map(response => response));
  }

  getProductByName(productName: String): Observable<Products> {
    let url = "http://localhost:9060/grocery-shopping/products/"+productName;
    return this._httpClient.get<Products>(url).pipe(map(response => response));
  }*/



}
