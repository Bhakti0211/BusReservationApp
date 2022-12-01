import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingcancelComponent } from './bookingcancel.component';

describe('BookingcancelComponent', () => {
  let component: BookingcancelComponent;
  let fixture: ComponentFixture<BookingcancelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingcancelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingcancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
