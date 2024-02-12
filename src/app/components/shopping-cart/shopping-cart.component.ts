import { Component } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { ProductsService } from '../../services/products.service';
import { PromotionAdsService } from '../../services/promotion-ads.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {

    ads:string='';

    adSubscribtion!:Subscription

    constructor(private productsSer:ProductsService, private promotionService:PromotionAdsService) {
      
    }

    ngOnInit() {

       this.adSubscribtion = this.promotionService.getAds().subscribe(
        {next: (adsData)=> {
          console.log(adsData);
          this.ads=adsData;
        },
    
        error: (err)=> {
          // console.log(err);
          this.ads = err
        },

        complete: ()=> {
          // console.log("complete");
          this.ads = "No More offers Availabe";
        }
      }
      )
    }

    ngOnDestroy() {
      this.adSubscribtion.unsubscribe();
    }
}
