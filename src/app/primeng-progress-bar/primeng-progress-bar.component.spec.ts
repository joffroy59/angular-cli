import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengProgressBarComponent } from './primeng-progress-bar.component';

describe('PrimengProgressBarComponent', () => {
  let component: PrimengProgressBarComponent;
  let fixture: ComponentFixture<PrimengProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimengProgressBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimengProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
