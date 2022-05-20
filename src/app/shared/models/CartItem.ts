import { Products } from "./product";

export class CartItem{
    //quantity: number =1;
    //static quantity: number;
    constructor(product:Products){
        this.product = product;
        //this.price;
    }
    product: Products;
    quantity: number = 1;
    get price(): number{
        return this.product.price * this.quantity;
    }
}