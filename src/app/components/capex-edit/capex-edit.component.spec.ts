import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapexEditComponent } from './capex-edit.component';

describe('CapexEditComponent', () => {
  let component: CapexEditComponent;
  let fixture: ComponentFixture<CapexEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapexEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapexEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
