import { Component, OnInit } from '@angular/core';
import { FamilyService } from '../family.service';

@Component({
  selector: 'app-family-list',
  templateUrl: './family-list.component.html',
  styleUrls: ['./family-list.component.scss']
})
export class FamilyListComponent implements OnInit {

  familyMems : any = [];
  // xepOnline :any;
  constructor(private service : FamilyService) { }

  ngOnInit() {
   this.service.getFamilyMems().subscribe(data => this.familyMems = data);
  }
  public downloadpdf(){
    return xepOnline.Formatter.Format('content', {render : 'download'});
  }
}
