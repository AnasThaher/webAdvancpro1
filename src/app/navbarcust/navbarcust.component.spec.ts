import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarcustComponent } from './navbarcust.component';

describe('NavbarcustComponent', () => {
  let component: NavbarcustComponent;
  let fixture: ComponentFixture<NavbarcustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarcustComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarcustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
