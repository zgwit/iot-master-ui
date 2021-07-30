import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdapterDetailComponent } from './adapter-detail.component';

describe('AdapterDetailComponent', () => {
  let component: AdapterDetailComponent;
  let fixture: ComponentFixture<AdapterDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdapterDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdapterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
