import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  loader : boolean = false;

  constructor() { }

  ngOnInit() {
setInterval(() => {
  this.loader = true;
},2000);

  }

}
