import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMethodComponent } from './contact-method.component';

describe('ContactMethodComponent', () => {
  let component: ContactMethodComponent;
  let fixture: ComponentFixture<ContactMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactMethodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
