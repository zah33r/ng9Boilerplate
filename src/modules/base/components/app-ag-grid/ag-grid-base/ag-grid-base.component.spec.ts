import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridBaseComponent } from './ag-grid-base.component';

describe('AgGridBaseComponent', () => {
  let component: AgGridBaseComponent;
  let fixture: ComponentFixture<AgGridBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgGridBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
