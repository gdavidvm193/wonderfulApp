import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMovieComponent } from './list-movie.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestService } from '../../../../mocks/core/http-client/http-client.test.service';

describe('ListMovieComponent', () => {
  let component: ListMovieComponent;
  let http: HttpClient;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        ListMovieComponent,
        { provide: HttpClient, useClass: HttpClientTestService },
      ],
      declarations: [
      ],
    });
  }));

  beforeEach(() => {
    component = TestBed.get(ListMovieComponent);
    http = TestBed.get(HttpClient);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
