import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularMenuDesignComponent } from './circular-menu-design.component';

describe('CircularMenuDesignComponent', () => {
  let component: CircularMenuDesignComponent;
  let fixture: ComponentFixture<CircularMenuDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircularMenuDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircularMenuDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
