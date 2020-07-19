import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDummyDataComponent } from './table-dummy-data.component';

describe('TableDummyDataComponent', () => {
  let component: TableDummyDataComponent;
  let fixture: ComponentFixture<TableDummyDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDummyDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDummyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
