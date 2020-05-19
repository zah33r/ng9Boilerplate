import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BordereauComponent } from './bordereau.component';

describe('BordereauComponent', () => {
  let component: BordereauComponent;
  let fixture: ComponentFixture<BordereauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BordereauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BordereauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
