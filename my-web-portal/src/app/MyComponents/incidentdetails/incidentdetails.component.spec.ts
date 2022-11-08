import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentdetailsComponent } from './incidentdetails.component';

describe('IncidentdetailsComponent', () => {
  let component: IncidentdetailsComponent;
  let fixture: ComponentFixture<IncidentdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
