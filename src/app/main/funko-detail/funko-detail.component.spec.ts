import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunkoDetailComponent } from './funko-detail.component';

describe('FunkoDetailComponent', () => {
  let component: FunkoDetailComponent;
  let fixture: ComponentFixture<FunkoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunkoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunkoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
