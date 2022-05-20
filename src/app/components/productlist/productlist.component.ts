import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Products } from 'src/app/shared/models/product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
    
  products :Products[]=[];
  constructor(private productService: ProductService, private _route: Router) { }

  ngOnInit() {
      
    this.productService.getAll().subscribe(data => {
      this.products = data;
    });

  }
  goToAddProduct(){
     this._route.navigateByUrl('/products/add');
  }
  goToEditProduct(id : number){
    console.log("id"+id);
    this._route.navigate(['/editproduct',id]);

  }

}
