import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameMatchingComponent } from './name-matching.component';

describe('NameMatchingComponent', () => {
  let component: NameMatchingComponent;
  let fixture: ComponentFixture<NameMatchingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameMatchingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameMatchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
