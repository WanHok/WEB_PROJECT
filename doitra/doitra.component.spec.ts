import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoitraComponent } from './doitra.component';

describe('DoitraComponent', () => {
  let component: DoitraComponent;
  let fixture: ComponentFixture<DoitraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoitraComponent]
    });
    fixture = TestBed.createComponent(DoitraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
