import { async, TestBed } from '@angular/core/testing';

import { AddMovieComponent } from './add-movie.component';
import { HttpClientTestService } from '../../../../mocks/core/http-client/http-client.test.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterTestService } from '../../../../mocks/test/angular/router/router.service';
import { FormBuilder } from '@angular/forms';
import { FormBuilderTestService } from '../../../../mocks/test/angular/formBuilder/form-builder.test.service';

describe('AddMovieComponent', () => {
  let component: AddMovieComponent;
  let http: HttpClient;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        AddMovieComponent,
        { provide: HttpClient, useClass: HttpClientTestService },
        { provide: Router, useClass: RouterTestService },
        { provide: FormBuilder, useClass: FormBuilderTestService }
      ],
      declarations: [
      ],
    });
  }));

  beforeEach(() => {
    component = TestBed.get(AddMovieComponent);
    http = TestBed.get(HttpClient);
    router = TestBed.get(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
