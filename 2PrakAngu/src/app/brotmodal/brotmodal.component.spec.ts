import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrotmodalComponent } from './brotmodal.component';

describe('BrotmodalComponent', () => {
  let component: BrotmodalComponent;
  let fixture: ComponentFixture<BrotmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrotmodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrotmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
