import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Products } from '../shared/models/product';
import { Category } from '../shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class NgserviceService {

  constructor(private _http: HttpClient) { }


  getAllCategories():Observable<Category[]> {
    let url = "http://localhost:9080/grocery-shopping/categories";
    return this._http.get<Category[]>(url).pipe(map(response => response));
  }

  addproductToRemote(product : Products):Observable<any>{
    return this._http.post<any>("http://localhost:9080/grocery-shopping/products",product);
  }
  /*
  addProduct(product: Products): Observable<Products> {
    let url = "http://localhost:9080/grocery-shopping/products";
    console.log(url);
    return this._http.post<Products>(url, product);   
     
  }*/
 

  getProduct(productId: number): Observable<Products> {
    let url = "http://localhost:9080/grocery-shopping/products/"+productId;
    return this._http.get<Products>(url).pipe(map(response => response));
  }
  updateProduct(product: Products): Observable<Products> {
    let url = "http://localhost:9080/grocery-shopping/products/"+product.productId;
    console.log(url);
    return this._http.put<Products>(url, product);   
     
  }
 /* deleteProduct(productId: number): Observable<Products> {
    let url = "http://localhost:9080/grocery-shopping/products/"+ product.productId;
    console.log(url);
    return  this._http.delete<Products>(url, product);  
   
     
  }*/
  deleteProduct(productId: number): Observable<Products> {
    console.log(productId)
    let url = "http://localhost:9080/grocery-shopping/products/"+productId;
    console.log(url);
    let returnVal: Observable<Products> =  this._http.delete<Products>(url);  
    return returnVal; 
     
  }
}
