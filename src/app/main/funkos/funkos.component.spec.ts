import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunkosComponent } from './funkos.component';

describe('FunkosComponent', () => {
  let component: FunkosComponent;
  let fixture: ComponentFixture<FunkosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunkosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunkosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
