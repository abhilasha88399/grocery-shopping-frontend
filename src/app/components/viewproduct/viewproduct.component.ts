import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgserviceService } from 'src/app/services/ngservice.service';
import { Products } from 'src/app/shared/models/product';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
  product = new Products;
  constructor(private _route:Router,private activatedRoute: ActivatedRoute,private _service:NgserviceService) { }

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

  gotoList(){
    console.log('go back');
    this._route.navigateByUrl('/products/viewAll');
  }
}
