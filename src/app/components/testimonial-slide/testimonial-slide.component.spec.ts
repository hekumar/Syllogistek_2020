import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialSlideComponent } from './testimonial-slide.component';

describe('TestimonialSlideComponent', () => {
  let component: TestimonialSlideComponent;
  let fixture: ComponentFixture<TestimonialSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonialSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
