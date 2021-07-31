import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateEditDevicesComponent } from './template-edit-devices.component';

describe('TemplateEditDevicesComponent', () => {
  let component: TemplateEditDevicesComponent;
  let fixture: ComponentFixture<TemplateEditDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateEditDevicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateEditDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
