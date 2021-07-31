import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectEditDevicesComponent } from './project-edit-devices.component';

describe('ProjectEditDevicesComponent', () => {
  let component: ProjectEditDevicesComponent;
  let fixture: ComponentFixture<ProjectEditDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectEditDevicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectEditDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
