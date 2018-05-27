import { TestBed, fakeAsync } from '@angular/core/testing';

import { Hero as Target } from './hero';

describe('ngk-hero', () => {
  let target: Target;
  beforeEach(() => {
    const fixture = TestBed.configureTestingModule({
      declarations: [Target]
    }).createComponent(Target);
    target = fixture.componentInstance;
  });
  it('should be created', () => {
    expect(target).toBeTruthy();
  });
});
