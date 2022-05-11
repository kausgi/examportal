import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSideberComponent } from './user-sideber.component';

describe('UserSideberComponent', () => {
  let component: UserSideberComponent;
  let fixture: ComponentFixture<UserSideberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSideberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSideberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
