import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindbusComponent } from './findbus.component';

describe('FindbusComponent', () => {
  let component: FindbusComponent;
  let fixture: ComponentFixture<FindbusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindbusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindbusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
