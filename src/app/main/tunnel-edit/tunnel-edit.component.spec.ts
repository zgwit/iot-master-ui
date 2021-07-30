import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TunnelEditComponent } from './tunnel-edit.component';

describe('TunnelEditComponent', () => {
  let component: TunnelEditComponent;
  let fixture: ComponentFixture<TunnelEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TunnelEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TunnelEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
