import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestRateListComponent } from './interest-rate-list.component';

describe('InterestRateListComponent', () => {
  let component: InterestRateListComponent;
  let fixture: ComponentFixture<InterestRateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterestRateListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterestRateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
