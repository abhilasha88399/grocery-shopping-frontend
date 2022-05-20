import * as internal from "assert";
import { Category } from "./tag";

export class Products{
   public productId : number;
     public price : number;
    public  brand : string;
    public quantity : number;
    public category : Category;
    public imageUrl: string;


    constructor(){}
}