import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateappartementComponent } from './updateappartement.component';

describe('UpdateappartementComponent', () => {
  let component: UpdateappartementComponent;
  let fixture: ComponentFixture<UpdateappartementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateappartementComponent]
    });
    fixture = TestBed.createComponent(UpdateappartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
