import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesPanneComponent } from './services-panne.component';

describe('ServicesPanneComponent', () => {
  let component: ServicesPanneComponent;
  let fixture: ComponentFixture<ServicesPanneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesPanneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesPanneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
