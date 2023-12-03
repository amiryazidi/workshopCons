import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormApartmentComponent } from './form-apartment.component';

describe('FormApartmentComponent', () => {
  let component: FormApartmentComponent;
  let fixture: ComponentFixture<FormApartmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormApartmentComponent]
    });
    fixture = TestBed.createComponent(FormApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
