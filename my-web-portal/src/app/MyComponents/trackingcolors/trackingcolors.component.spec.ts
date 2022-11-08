import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingcolorsComponent } from './trackingcolors.component';

describe('TrackingcolorsComponent', () => {
  let component: TrackingcolorsComponent;
  let fixture: ComponentFixture<TrackingcolorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackingcolorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackingcolorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
