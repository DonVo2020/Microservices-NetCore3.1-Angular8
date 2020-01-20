import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorBodyComponent } from './mentor-body.component';

describe('MentorBodyComponent', () => {
  let component: MentorBodyComponent;
  let fixture: ComponentFixture<MentorBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
