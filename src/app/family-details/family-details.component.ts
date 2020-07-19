import { Component, OnInit } from '@angular/core';
import { FamilyService } from '../family.service';

@Component({
  selector: 'app-family-details',
  templateUrl: './family-details.component.html',
  styleUrls: ['./family-details.component.scss']
})
export class FamilyDetailsComponent implements OnInit {
  familyData : any =[];
  constructor( private service: FamilyService) { }

  ngOnInit(): void {
    this.service.getFamilyMems().subscribe(data => this.familyData = data);
  }

}
