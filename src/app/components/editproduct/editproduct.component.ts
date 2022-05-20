import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgserviceService } from 'src/app/services/ngservice.service';
import { Products } from 'src/app/shared/models/product';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  product = new Products;
  message: string = '';
  success: boolean = false;
  constructor(private _service: NgserviceService,private activatedRoute: ActivatedRoute,private _route: Router) { }

  ngOnInit() {
    let productId: number = 0;
    this.activatedRoute.params.subscribe(data => {
      productId = data.id;
      this._service.getProduct(productId).subscribe(response => {
        console.log(response);
        this.product = response;

      });
      
    });
  }
  onUpdate() {
 
    
    //console.log(this.product);
    this._service.updateProduct(this.product).subscribe(data => {
      console.log('response',data);
      if(data) {
        this.success = true;
        this.message = "Product updated successfully";
        //alert("Product update successfully");
        
      }
      else {
        this.success = false;
        this.message = "Problem updating data";
      }
      //this.router.navigateByUrl("/products/viewAll");

    })


  }
  gotoList(){
    console.log('go back');
    this._route.navigateByUrl('/products/viewAll');
  }

}
