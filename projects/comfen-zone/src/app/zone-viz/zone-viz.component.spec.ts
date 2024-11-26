import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneVizComponent } from './zone-viz.component';

describe('ZoneVizComponent', () => {
  let component: ZoneVizComponent;
  let fixture: ComponentFixture<ZoneVizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZoneVizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZoneVizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
