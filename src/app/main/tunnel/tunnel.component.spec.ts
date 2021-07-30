import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TunnelComponent } from './tunnel.component';

describe('TunnelComponent', () => {
  let component: TunnelComponent;
  let fixture: ComponentFixture<TunnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TunnelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TunnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
