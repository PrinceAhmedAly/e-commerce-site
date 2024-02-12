import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';


@Injectable({
  providedIn: 'root' // root to use it into any component you can change it to use it in specific component
})

export class ProductsService {

  products:Iproduct[]
  constructor() { 
    this.products = [
      {id:100, name:"Iphone", quantity:0, price:5000, imgUrl:"https://dummyimage.com/600x400/000/fff", catId:1},
      {id:200, name:"Dell Laptop", quantity:4, price:7000, imgUrl:"https://dummyimage.com/600x400/000/fff", catId:2},
      {id:300, name:"Huwawi Tablet", quantity:5, price:4000, imgUrl:"https://dummyimage.com/600x400/000/fff", catId:3},
      {id:400, name:"Oppo", quantity:7, price:6000, imgUrl:"https://dummyimage.com/600x400/000/fff", catId:1},
      {id:500, name:"HP Laptop", quantity:3, price:14000, imgUrl:"https://dummyimage.com/600x400/000/fff", catId:2},
      {id:600, name:"Samsung Tablet", quantity:1, price:5000, imgUrl:"https://dummyimage.com/600x400/000/fff", catId:3},
      {id:700, name:"Nokia", quantity:9, price:5000, imgUrl:"https://dummyimage.com/600x400/000/fff", catId:1},
      {id:800, name:"Acer laptop", quantity:8, price:5000, imgUrl:"https://dummyimage.com/600x400/000/fff", catId:2},
      {id:900, name:"Infinix Tablet", quantity:10, price:5000, imgUrl:"https://dummyimage.com/600x400/000/fff", catId:3}
    ]
  }

  getAllProducts() {
    return this.products;
  }

  getProductById(id:number):Iproduct|null {

    let product = this.products.find((prd) => prd.id == id);
    return product?product:null;
  }

  getProductByCatId(catId:number):Iproduct[] {
    return this.products.filter((prd)=> prd.catId == catId)
  }
}
