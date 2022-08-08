import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSurveysTableComponent } from './all-surveys-table.component';

describe('AllSurveysTableComponent', () => {
  let component: AllSurveysTableComponent;
  let fixture: ComponentFixture<AllSurveysTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllSurveysTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSurveysTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
