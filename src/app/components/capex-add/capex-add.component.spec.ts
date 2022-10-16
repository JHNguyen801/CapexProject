import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapexAddComponent } from './capex-add.component';

describe('CapexAddComponent', () => {
  let component: CapexAddComponent;
  let fixture: ComponentFixture<CapexAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapexAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapexAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
