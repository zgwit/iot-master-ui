import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectEditStrategiesComponent } from './project-edit-strategies.component';

describe('ProjectEditStrategiesComponent', () => {
  let component: ProjectEditStrategiesComponent;
  let fixture: ComponentFixture<ProjectEditStrategiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectEditStrategiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectEditStrategiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
