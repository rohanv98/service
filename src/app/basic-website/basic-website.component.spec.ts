import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicWebsiteComponent } from './basic-website.component';

describe('BasicWebsiteComponent', () => {
  let component: BasicWebsiteComponent;
  let fixture: ComponentFixture<BasicWebsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicWebsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
