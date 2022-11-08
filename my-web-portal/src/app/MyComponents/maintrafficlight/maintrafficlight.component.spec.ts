import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintrafficlightComponent } from './maintrafficlight.component';

describe('MaintrafficlightComponent', () => {
  let component: MaintrafficlightComponent;
  let fixture: ComponentFixture<MaintrafficlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintrafficlightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintrafficlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
