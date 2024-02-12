import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Iproduct } from '../../models/iproduct';
import { Location, LocationChangeListener } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  currentPrdId:number = 0;

  product:Iproduct|null = null;

  constructor(private activatedRouter:ActivatedRoute, private prdService:ProductsService,
    private location:Location) {

  }

  ngOnInit() {
    
    this.currentPrdId = Number(this.activatedRouter.snapshot.paramMap.get('id'));

    this.product = this.prdService.getProductById(this.currentPrdId);

  }

  goBack() {
    this.location.back();
  }



}
