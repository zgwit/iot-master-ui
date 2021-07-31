import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectEditJobsComponent } from './project-edit-jobs.component';

describe('ProjectEditJobsComponent', () => {
  let component: ProjectEditJobsComponent;
  let fixture: ComponentFixture<ProjectEditJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectEditJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectEditJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
