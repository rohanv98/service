import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-seleton-loader',
  template: `
  <div [ngStyle]="getMyStyles()" class="skelt-load loader"></div>
  `,
  styleUrls: ['./seleton-loader.component.scss']
})
export class SeletonLoaderComponent implements OnInit {

  @Input() Lwidth;
  @Input() Lheight;
  @Input() Lcircle: boolean;
  constructor() { }

  ngOnInit(): void {
  }
  getMyStyles(){
  const mystyle = {
    'width.px': this.Lwidth ? this.Lwidth : '',
    'height.px': this.Lheight ? this.Lheight : '',
    'border-radius': this.Lcircle ? '50%' : ''
  };

  return mystyle;

}

}
