import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterLevelIndicatorComponent } from './water-level-indicator.component';

describe('WaterLevelIndicatorComponent', () => {
  let component: WaterLevelIndicatorComponent;
  let fixture: ComponentFixture<WaterLevelIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterLevelIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterLevelIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
