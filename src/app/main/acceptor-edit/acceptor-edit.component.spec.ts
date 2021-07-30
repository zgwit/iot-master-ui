import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptorEditComponent } from './acceptor-edit.component';

describe('AcceptorEditComponent', () => {
  let component: AcceptorEditComponent;
  let fixture: ComponentFixture<AcceptorEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptorEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
