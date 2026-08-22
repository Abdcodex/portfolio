import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyHireMeComponent } from './why-hire-me.component';

describe('WhyHireMeComponent', () => {
  let component: WhyHireMeComponent;
  let fixture: ComponentFixture<WhyHireMeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhyHireMeComponent]
    });
    fixture = TestBed.createComponent(WhyHireMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
