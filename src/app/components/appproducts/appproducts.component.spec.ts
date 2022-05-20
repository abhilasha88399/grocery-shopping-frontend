import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppproductsComponent } from './appproducts.component';

describe('AppproductsComponent', () => {
  let component: AppproductsComponent;
  let fixture: ComponentFixture<AppproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
