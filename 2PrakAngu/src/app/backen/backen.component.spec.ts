import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackenComponent } from './backen.component';

describe('BackenComponent', () => {
  let component: BackenComponent;
  let fixture: ComponentFixture<BackenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
