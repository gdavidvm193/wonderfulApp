import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        AppComponent
      ],
      declarations: [
      ],
    });
  }));

  beforeEach(async(() => {
    component = TestBed.get(AppComponent);
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });


});
