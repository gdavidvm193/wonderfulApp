import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable()
export class HttpClientTestService {
    constructor() { }

    get(...args): Observable<any> {
        return undefined;
    }

}
