import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopComponent } from './top.component';
import { HttpClientTestService } from '../../../../mocks/core/http-client/http-client.test.service';
import { HttpClient } from '@angular/common/http';

describe('TopComponent', () => {
  let component: TopComponent;
  let http: HttpClient;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        TopComponent,
        { provide: HttpClient, useClass: HttpClientTestService },
      ],
      declarations: [
      ],
    });
  }));

  beforeEach(() => {
    component = TestBed.get(TopComponent);
    http = TestBed.get(HttpClient);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
