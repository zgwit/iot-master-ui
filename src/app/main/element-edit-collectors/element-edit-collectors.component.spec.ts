import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementEditCollectorsComponent } from './element-edit-collectors.component';

describe('ElementEditCollectorsComponent', () => {
  let component: ElementEditCollectorsComponent;
  let fixture: ComponentFixture<ElementEditCollectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementEditCollectorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementEditCollectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
