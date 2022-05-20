import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private _route: Router) { }

  ngOnInit() {
  }
  goToEditProduct(id : number){
    console.log("id"+id);
    this._route.navigate(['/editproduct',id]);

  }

}
