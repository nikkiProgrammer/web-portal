import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerlightComponent } from './serverlight.component';

describe('ServerlightComponent', () => {
  let component: ServerlightComponent;
  let fixture: ComponentFixture<ServerlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerlightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
