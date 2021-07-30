import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptorDetailComponent } from './acceptor-detail.component';

describe('AcceptorDetailComponent', () => {
  let component: AcceptorDetailComponent;
  let fixture: ComponentFixture<AcceptorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptorDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
