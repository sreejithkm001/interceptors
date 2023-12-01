import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetdatabyidComponent } from './getdatabyid.component';

describe('GetdatabyidComponent', () => {
  let component: GetdatabyidComponent;
  let fixture: ComponentFixture<GetdatabyidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetdatabyidComponent]
    });
    fixture = TestBed.createComponent(GetdatabyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
