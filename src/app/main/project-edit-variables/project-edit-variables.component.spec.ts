import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectEditVariablesComponent } from './project-edit-variables.component';

describe('ProjectEditVariablesComponent', () => {
  let component: ProjectEditVariablesComponent;
  let fixture: ComponentFixture<ProjectEditVariablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectEditVariablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectEditVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
