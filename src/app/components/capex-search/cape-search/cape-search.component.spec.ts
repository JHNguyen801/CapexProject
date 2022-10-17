import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapeSearchComponent } from './cape-search.component';

describe('CapeSearchComponent', () => {
  let component: CapeSearchComponent;
  let fixture: ComponentFixture<CapeSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapeSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
