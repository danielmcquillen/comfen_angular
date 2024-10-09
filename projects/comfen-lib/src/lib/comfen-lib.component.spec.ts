import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComfenLibComponent } from './comfen-lib.component';

describe('ComfenLibComponent', () => {
  let component: ComfenLibComponent;
  let fixture: ComponentFixture<ComfenLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComfenLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComfenLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
