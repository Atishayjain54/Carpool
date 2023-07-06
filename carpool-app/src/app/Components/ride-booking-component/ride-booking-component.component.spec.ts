import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RideBookingComponentComponent } from './ride-booking-component.component';

describe('RideBookingComponentComponent', () => {
  let component: RideBookingComponentComponent;
  let fixture: ComponentFixture<RideBookingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RideBookingComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RideBookingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
