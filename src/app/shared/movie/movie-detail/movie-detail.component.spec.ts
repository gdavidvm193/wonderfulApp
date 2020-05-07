import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailComponent } from './movie-detail.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestService } from '../../../../mocks/core/http-client/http-client.test.service';

describe('MovieDetailComponent', () => {
  let component: MovieDetailComponent;
  let http: HttpClient;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        MovieDetailComponent,
        { provide: HttpClient, useClass: HttpClientTestService },
      ],
      declarations: [
      ],
    });
  }));

  beforeEach(() => {
    component = TestBed.get(MovieDetailComponent);
    http = TestBed.get(HttpClient);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
