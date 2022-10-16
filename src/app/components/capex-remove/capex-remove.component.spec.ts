import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapexRemoveComponent } from './capex-remove.component';

describe('CapexRemoveComponent', () => {
  let component: CapexRemoveComponent;
  let fixture: ComponentFixture<CapexRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapexRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapexRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
