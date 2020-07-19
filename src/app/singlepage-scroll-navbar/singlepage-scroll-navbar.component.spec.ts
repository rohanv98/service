import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglepageScrollNavbarComponent } from './singlepage-scroll-navbar.component';

describe('SinglepageScrollNavbarComponent', () => {
  let component: SinglepageScrollNavbarComponent;
  let fixture: ComponentFixture<SinglepageScrollNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglepageScrollNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglepageScrollNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
