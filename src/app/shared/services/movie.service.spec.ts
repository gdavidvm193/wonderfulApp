import { TestBed, async } from '@angular/core/testing';

import { MovieService } from './movie.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestService } from '../../../mocks/core/http-client/http-client.test.service';

describe('MovieService', () => {
  let service: MovieService;
  let http: HttpClient;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        MovieService,
        { provide: HttpClient, useClass: HttpClientTestService },
      ],
      declarations: [
      ],
    });
  }));

  beforeEach(() => {
    service = TestBed.get(MovieService);
    http = TestBed.get(HttpClient);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});

