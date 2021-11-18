import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinuListComponent } from './minu-list.component';

describe('MinuListComponent', () => {
  let component: MinuListComponent;
  let fixture: ComponentFixture<MinuListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinuListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
