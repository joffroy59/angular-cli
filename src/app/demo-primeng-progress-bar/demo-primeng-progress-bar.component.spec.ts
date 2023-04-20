import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPrimengProgressBarComponent } from './demo-primeng-progress-bar.component';

describe('DemoPrimengProgressBarComponent', () => {
  let component: DemoPrimengProgressBarComponent;
  let fixture: ComponentFixture<DemoPrimengProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoPrimengProgressBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoPrimengProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
