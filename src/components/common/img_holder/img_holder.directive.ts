import {Directive, Input, ElementRef, OnInit} from 'angular2/core';

declare var Holder: any;

@Directive({
  selector: '[mdb-holder]',
  inputs: ['url: mdb-holder', 'text']
})

export class ImgHolderDirective implements OnInit {

  url:string;
  text:string;

  constructor(private _elementRef:ElementRef) {}

  ngOnInit() {
    let src = this.text ? this.url + '&text=' + this.text : this.url;

    this._elementRef.nativeElement.setAttribute('data-src', src);    

    Holder.run({
      images: this._elementRef.nativeElement,
      theme: 'vine'
    })

  }

}