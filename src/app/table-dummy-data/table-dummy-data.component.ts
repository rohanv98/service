import { Component, OnInit } from "@angular/core";
import { FamilyService } from "../family.service";
import { from } from "rxjs";

@Component({
  selector: "app-table-dummy-data",
  templateUrl: "./table-dummy-data.component.html",
  styleUrls: ["./table-dummy-data.component.scss"],
})
export class TableDummyDataComponent implements OnInit {
  table_Data: Object;
  term: string = "";
  p: number = 1;
  constructor(private service: FamilyService) {}

  ngOnInit() {
    this.service.gettabledata().subscribe((data) => {
      this.table_Data = data["data"];
      console.log(this.table_Data["data"]);
    });
  }
  page1(val) {
    this.p = val;
  }
  page2(val) {
    this.p = val;
  }
  page3(val) {
    this.p = val;
  }
  page4(val) {
    this.p = val;
  }
}
