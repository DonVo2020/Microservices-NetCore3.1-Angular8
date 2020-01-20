import { TestBed, async, inject } from '@angular/core/testing';

import { AuthMentorGuard } from './auth-mentor.guard';

describe('AuthMentorGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthMentorGuard]
    });
  });

  it('should ...', inject([AuthMentorGuard], (guard: AuthMentorGuard) => {
    expect(guard).toBeTruthy();
  }));
});
