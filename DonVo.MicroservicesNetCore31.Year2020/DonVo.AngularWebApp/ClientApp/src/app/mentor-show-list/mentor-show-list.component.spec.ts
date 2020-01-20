import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorShowListComponent } from './mentor-show-list.component';

describe('MentorShowListComponent', () => {
  let component: MentorShowListComponent;
  let fixture: ComponentFixture<MentorShowListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorShowListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorShowListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
