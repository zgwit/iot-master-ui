import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptorEditDevicesComponent } from './acceptor-edit-devices.component';

describe('AcceptorEditDevicesComponent', () => {
  let component: AcceptorEditDevicesComponent;
  let fixture: ComponentFixture<AcceptorEditDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptorEditDevicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptorEditDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
