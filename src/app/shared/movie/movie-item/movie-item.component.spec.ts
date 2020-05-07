import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieItemComponent } from './movie-item.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestService } from '../../../../mocks/core/http-client/http-client.test.service';

describe('MovieItemComponent', () => {
  let component: MovieItemComponent;
  let http: HttpClient;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        MovieItemComponent,
        { provide: HttpClient, useClass: HttpClientTestService },
      ],
      declarations: [
      ],
    });
  }));

  beforeEach(() => {
    component = TestBed.get(MovieItemComponent);
    http = TestBed.get(HttpClient);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
