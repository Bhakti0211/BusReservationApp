import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassbookedComponent } from './passbooked.component';

describe('PassbookedComponent', () => {
  let component: PassbookedComponent;
  let fixture: ComponentFixture<PassbookedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassbookedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassbookedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
