import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RideDetailsComponentComponent } from './ride-details-component.component';

describe('RideDetailsComponentComponent', () => {
  let component: RideDetailsComponentComponent;
  let fixture: ComponentFixture<RideDetailsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RideDetailsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RideDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
