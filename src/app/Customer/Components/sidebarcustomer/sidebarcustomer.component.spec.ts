import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarcustomerComponent } from './sidebarcustomer.component';

describe('SidebarcustomerComponent', () => {
  let component: SidebarcustomerComponent;
  let fixture: ComponentFixture<SidebarcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarcustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
