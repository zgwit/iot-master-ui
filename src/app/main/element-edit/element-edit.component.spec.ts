import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementEditComponent } from './element-edit.component';

describe('ElementEditComponent', () => {
  let component: ElementEditComponent;
  let fixture: ComponentFixture<ElementEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
