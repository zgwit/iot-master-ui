import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TunnelMonitorComponent } from './tunnel-monitor.component';

describe('TunnelMonitorComponent', () => {
  let component: TunnelMonitorComponent;
  let fixture: ComponentFixture<TunnelMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TunnelMonitorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TunnelMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
