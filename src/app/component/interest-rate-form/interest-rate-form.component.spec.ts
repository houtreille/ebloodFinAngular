import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestRateFormComponent } from './interest-rate-form.component';

describe('InterestRateFormComponent', () => {
  let component: InterestRateFormComponent;
  let fixture: ComponentFixture<InterestRateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterestRateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterestRateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
