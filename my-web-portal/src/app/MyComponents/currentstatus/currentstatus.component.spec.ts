import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentstatusComponent } from './currentstatus.component';

describe('CurrentstatusComponent', () => {
  let component: CurrentstatusComponent;
  let fixture: ComponentFixture<CurrentstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentstatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
