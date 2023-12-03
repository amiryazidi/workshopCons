import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonComposantComponent } from './mon-composant.component';

describe('MonComposantComponent', () => {
  let component: MonComposantComponent;
  let fixture: ComponentFixture<MonComposantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonComposantComponent]
    });
    fixture = TestBed.createComponent(MonComposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
