import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetfulldataComponent } from './getfulldata.component';

describe('GetfulldataComponent', () => {
  let component: GetfulldataComponent;
  let fixture: ComponentFixture<GetfulldataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetfulldataComponent]
    });
    fixture = TestBed.createComponent(GetfulldataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
