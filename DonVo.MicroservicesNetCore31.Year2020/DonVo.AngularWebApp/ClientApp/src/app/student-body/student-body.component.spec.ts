import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentBodyComponent } from './student-body.component';

describe('StudentBodyComponent', () => {
  let component: StudentBodyComponent;
  let fixture: ComponentFixture<StudentBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
