import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToEuroConvertComponent } from './to-euro-convert.component';

describe('ToEuroConvertComponent', () => {
  let component: ToEuroConvertComponent;
  let fixture: ComponentFixture<ToEuroConvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToEuroConvertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToEuroConvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
