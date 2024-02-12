import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionAdsService {

  ads:string[]

  constructor() {
    this.ads= [
      "White Friday Sale",
      "10% Dicount Today",
      "",
      "Buy one get one for FREE"
    ]

   }

   getAds(){
    return new Observable<string>((observer)=> {
      
      let i = 0
      let adsInterval = setInterval(()=> {

        // complete method
        if(i == this.ads.length) {
          observer.complete();
        }
        
        // error method
        // if(this.ads[i] == '') {
        //   observer.error("Erorr in get Ads");
        // }

        // main observer method
        observer.next(this.ads[i]);
        i++

      },2000);

      return {

        // auto subscribe on {erros occured, completed, subscriber choise}
        unsubscribe: ()=> {
          clearInterval(adsInterval)
        }
      }
    })

   }
}
