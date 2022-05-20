import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/shared/models/product';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgserviceService } from 'src/app/services/ngservice.service';
import { Category } from 'src/app/shared/models/tag';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
   product = new Products;
   categories: Category[] = [];
   //product: Product = new Product(0,"", new Category(0,'',''), "", 0);

   message: string = '';
   success: boolean = false;
  constructor(private _route: Router, private _service: NgserviceService) { }

  ngOnInit() {
    this._service.getAllCategories().subscribe(data => {
      console.log(data);
      this.categories = data;
    });
  }
  
  addproductformsubmit()
  {
    /*let categoryName: string = this.product.category.name;
    //console.log(categoryName);
    

    this.categories.forEach(category => {
      /*if(category.categoryName === this.product.category.categoryName) {
        this.product.category.categoryId = category.categoryId;
      }

      if(category.name === categoryName) {
        this.product.category.categoryId = category.categoryId;
      }
    });*/
    this._service.addproductToRemote(this.product).subscribe
    ( data=>{

    
      if(data) {
        this.success = true;
        this.message = "Product added successfully";
        alert("Product added")
        this._route.navigate(['/products/viewAll'])
        
      }
      else {
        this.success = false;
        this.message = "Problem adding data";
      }
    });
  
  

  }
  gotoList(){
    console.log('go back');
    this._route.navigateByUrl('/products/viewAll');
  }
}
