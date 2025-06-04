import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactmodaleComponent } from './contactmodale.component';

describe('ContactmodaleComponent', () => {
  let component: ContactmodaleComponent;
  let fixture: ComponentFixture<ContactmodaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactmodaleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactmodaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
