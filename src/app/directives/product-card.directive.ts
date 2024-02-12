import { Directive, ElementRef, HostListener, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[ProductCard]',
  standalone: true
})

export class ProductCardDirective implements OnChanges{


  @Input()  defaultBgColor: string = 'yellow';

  BgColor: string = 'Green';


  constructor(public eleRef: ElementRef) {

    this.eleRef.nativeElement.style.boxShadow = `7px 7px 15px ${this.defaultBgColor}`
    this.eleRef.nativeElement.style.transition = ".5s"

  }


  // using method decorator to activate the function  
  @HostListener('mouseover') increaseShadow() {
    this.eleRef.nativeElement.style.boxShadow = `7px 7px 15px ${this.defaultBgColor}`
  }

  @HostListener('mouseout') decreaseShadow() {
    this.eleRef.nativeElement.style.boxShadow = "7px 7px 15px #DDD"
  }

  ngOnChanges(){
    this.eleRef.nativeElement.style.boxShadow = `7px 7px 15px ${this.defaultBgColor}`
    this.eleRef.nativeElement.style.transition = ".5s"
  }
}
