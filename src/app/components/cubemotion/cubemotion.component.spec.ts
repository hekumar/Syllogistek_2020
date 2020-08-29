import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CubemotionComponent } from './cubemotion.component';

describe('CubemotionComponent', () => {
  let component: CubemotionComponent;
  let fixture: ComponentFixture<CubemotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CubemotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CubemotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
