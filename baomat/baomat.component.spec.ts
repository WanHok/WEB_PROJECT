import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaomatComponent } from './baomat.component';

describe('BaomatComponent', () => {
  let component: BaomatComponent;
  let fixture: ComponentFixture<BaomatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaomatComponent]
    });
    fixture = TestBed.createComponent(BaomatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
