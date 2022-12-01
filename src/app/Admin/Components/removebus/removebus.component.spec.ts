import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovebusComponent } from './removebus.component';

describe('RemovebusComponent', () => {
  let component: RemovebusComponent;
  let fixture: ComponentFixture<RemovebusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovebusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemovebusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
