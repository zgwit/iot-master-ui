import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementEditVariablesComponent } from './element-edit-variables.component';

describe('ElementEditVariablesComponent', () => {
  let component: ElementEditVariablesComponent;
  let fixture: ComponentFixture<ElementEditVariablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementEditVariablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementEditVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
