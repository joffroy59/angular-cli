import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPrimengButtonComponent } from './demo-primeng-button.component';

describe('DemoPrimengButtonComponent', () => {
  let component: DemoPrimengButtonComponent;
  let fixture: ComponentFixture<DemoPrimengButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoPrimengButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoPrimengButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
