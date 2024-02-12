import { Component } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { ProductCardDirective } from '../../directives/product-card.directive';
import { IdSplitterPipe } from '../../pipes/id-splitter.pipe';
import { DateFromIDPipe } from '../../pipes/date-from-id.pipe';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductCardDirective, IdSplitterPipe, DateFromIDPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  // select options value
  selectedDatePart:string = "";
  // national id memeber vae 

  NationalID=""
  // make member var as product
  products:Iproduct[]

  // total orders count
  totalOrdersPrice:number= 0;

  // product quantity
  productQuantity:number= 0

  selectedCatId:number=1;

  // array of categories
  categories: Icategory[];

  // intialzie the product
  constructor(private productsSer:ProductsService, private router:Router){

    this.products = productsSer.products;

    this.categories = [
      {id: 1, name:"Mobile"},
      {id: 2, name:"Laptop"},
      {id: 3, name:"Tablet"}
    ]
  }

  // buying method
  buy(i:number) {
        if(i > 0) {
          this.products[i].quantity-=1;
        }
  }

  showDetails(id:number) {
    
    // this.router.navigateByUrl(`/Details/${id}`);
    
    // using try catch to catch any errors if promise not done
    try {
      this.router.navigate(["/Details", id]).then(() => {
        console.log("navigate method promise done");
        
      });
    } catch(err) {
      console.error(err)
    }


  }
}
