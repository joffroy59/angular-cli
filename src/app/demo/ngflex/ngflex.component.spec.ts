import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DemoNgflexComponent } from "./ngflex.component";

describe("DemoNgflexComponent", () => {
  let component: DemoNgflexComponent;
  let fixture: ComponentFixture<DemoNgflexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemoNgflexComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DemoNgflexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
