import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserShowListComponent } from './user-show-list.component';

describe('UserShowListComponent', () => {
  let component: UserShowListComponent;
  let fixture: ComponentFixture<UserShowListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserShowListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserShowListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
