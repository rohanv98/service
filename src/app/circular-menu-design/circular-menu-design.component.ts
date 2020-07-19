import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-circular-menu-design',
  templateUrl: './circular-menu-design.component.html',
  styleUrls: ['./circular-menu-design.component.scss']
})
export class CircularMenuDesignComponent implements OnInit {
  isIcon : boolean = true;
  dashboardicon : boolean = true;
  jobicon : boolean = true;
  stressicon : boolean = true;
  profilebuildicon : boolean = true;
  themeicon : boolean = true;
  cvedit : boolean = true;
  profilecatg : boolean = true;
  constructor(public router: Router) { }

  ngOnInit(): void {
  }


  changeIcon(){    
    this.isIcon = !this.isIcon;
  }
  cvEdit(){
    this.cvedit = false;
    this.router.navigateByUrl('/cv-edit');
  }
  profileCatg(){
    this.profilecatg = false;
    this.router.navigateByUrl('/profile-category');
  }

  jobpage(){
    this.jobicon = false;
    this.router.navigateByUrl('/jobs');
  }

  profilebuildpage(){
    this.stressicon = false;
    this.router.navigateByUrl('/profile-category');
  }

  stressbusterpage(){
    this.stressicon = false;
    this.router.navigateByUrl('/stressbuster');
  }
  dashboard(){
    this.dashboardicon = !this.dashboard;
    this.router.navigateByUrl('/dashboard');
  }


}
