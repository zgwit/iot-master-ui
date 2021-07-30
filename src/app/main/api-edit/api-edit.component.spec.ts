import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiEditComponent } from './api-edit.component';

describe('ApiEditComponent', () => {
  let component: ApiEditComponent;
  let fixture: ComponentFixture<ApiEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
