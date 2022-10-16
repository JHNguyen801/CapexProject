import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapexEntryComponent } from './capex-entry.component';

describe('CapexEntryComponent', () => {
  let component: CapexEntryComponent;
  let fixture: ComponentFixture<CapexEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapexEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapexEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
