import {  Component, AfterViewInit, ViewChild, ElementRef, HostListener, OnInit} from '@angular/core';


@Component({
  selector: 'app-singlepage-scroll-navbar',
  templateUrl: './singlepage-scroll-navbar.component.html',
  styleUrls: ['./singlepage-scroll-navbar.component.scss']
})
export class SinglepageScrollNavbarComponent implements OnInit {
  @ViewChild('home') homeElement: ElementRef;
  @ViewChild('news') newElement: ElementRef;
  @ViewChild('contact') conElement: ElementRef;
  
  @ViewChild('about') aboutElement: ElementRef;

  public currentActive = 1;
  public homeOffset: Number = null;
  public conOffset: Number = null;
  public newOffset: Number = null;
  public aboutOffset: Number = null;
  ngOnInit() {}
  ngAfterViewInit() {
    this.homeOffset = this.homeElement.nativeElement.offsetTop;
    this.conOffset = this.conElement.nativeElement.offsetTop;
    this.newOffset = this.newElement.nativeElement.offsetTop;
    this.aboutOffset = this.aboutElement.nativeElement.offsetTop;
  }

  scrollToElement(varb) {
    // scrollToElement Code :)
    console.log(varb);
    if(varb == "new"){
      this.currentActive = 2;
    }else if(varb == "con"){
      this.currentActive = 3;
    }else if(varb == "home"){
      this.currentActive = 1;
    }else if(varb == "about"){
      this.currentActive = 4;
    }else{
      this.currentActive =1;
    }
  }


  @HostListener('window:scroll', ['$event'])
  checkOffsetTop() {
    // alert(window.pageYOffset);
    if (window.pageYOffset >= this.homeOffset && window.pageYOffset < this.newOffset) {

      this.currentActive = 1;
    }else if (window.pageYOffset >= this.newOffset && window.pageYOffset < this.conOffset) {
      this.currentActive = 2;
    } else if (window.pageYOffset >= this.conOffset && window.pageYOffset < this.aboutOffset) {
      this.currentActive = 3;
    }  else if (window.pageYOffset >= this.aboutOffset) {
      this.currentActive = 4;
    } else {
      this.currentActive = 1;
    }
  }

}
