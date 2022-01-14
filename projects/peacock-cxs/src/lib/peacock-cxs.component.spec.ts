import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeacockCxsComponent } from './peacock-cxs.component';

describe('PeacockCxsComponent', () => {
  let component: PeacockCxsComponent;
  let fixture: ComponentFixture<PeacockCxsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeacockCxsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeacockCxsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
