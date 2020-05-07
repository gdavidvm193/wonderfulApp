import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarComponent } from './side-bar.component';

describe('SideBarComponent', () => {
  let component: SideBarComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        SideBarComponent
      ],
      declarations: [
      ],
    });
  }));

  beforeEach(() => {
    component = TestBed.get(SideBarComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
