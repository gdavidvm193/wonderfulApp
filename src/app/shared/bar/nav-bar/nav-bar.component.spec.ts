import { async, TestBed } from '@angular/core/testing';

import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        NavBarComponent
      ],
      declarations: [
      ],
    });
  }));

  beforeEach(() => {
    component = TestBed.get(NavBarComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
