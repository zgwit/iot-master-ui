import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TunnelDetailComponent } from './tunnel-detail.component';

describe('TunnelDetailComponent', () => {
  let component: TunnelDetailComponent;
  let fixture: ComponentFixture<TunnelDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TunnelDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TunnelDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
