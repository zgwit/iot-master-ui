import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceEditJobsComponent } from './device-edit-jobs.component';

describe('DeviceEditJobsComponent', () => {
  let component: DeviceEditJobsComponent;
  let fixture: ComponentFixture<DeviceEditJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceEditJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceEditJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
