import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgserviceService } from 'src/app/services/ngservice.service';
import { Products } from 'src/app/shared/models/product';
import { ProductlistComponent } from '../productlist/productlist.component';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  message: String = "";
  product :Products[]=[];
 
  constructor(private activatedRoute: ActivatedRoute,private service: NgserviceService,private _router: Router,) { }

  ngOnInit() {
    let productId: number = 0; 
  
    if(confirm("Are you Sure"))
    this.activatedRoute.params.subscribe(data => {
      productId = data.id;
    this.service.deleteProduct(productId).subscribe(
     (success)=>{
       alert("Product With Id : "+ productId+" is Removed");
       this._router.navigateByUrl("/products/viewAll");
     },
    (error)=>
     {
       alert("Unable to Delete");
       this._router.navigateByUrl("/products/viewAll");
     });
     
    
    });
   
    /*let productId: number = 0;  

    this.activatedRoute.params.subscribe(data => {
      productId = data.id;
      // console.log(productId);
      this.service.deleteProduct(productId).subscribe(response => {
        console.log(productId);
        let isDeleted: number = response;
        console.log(isDeleted);
        if(isDeleted) {
          this.message = "Product deleted successfully!!!"
        } else {
          this.message = "Unknown error occured";
        }
        this._router.navigateByUrl("/products/viewAll");
      });
    });  
  }*/

}
}
