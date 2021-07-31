import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementEditCommandsComponent } from './element-edit-commands.component';

describe('ElementEditCommandsComponent', () => {
  let component: ElementEditCommandsComponent;
  let fixture: ComponentFixture<ElementEditCommandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementEditCommandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementEditCommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
