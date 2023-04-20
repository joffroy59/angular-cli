import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoProgressBarComponent } from './demo-progress-bar.component';

describe('DemoProgressBarComponent', () => {
  let component: DemoProgressBarComponent;
  let fixture: ComponentFixture<DemoProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoProgressBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
