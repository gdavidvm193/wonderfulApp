import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NavigationEnd } from '@angular/router';


@Injectable()
export class RouterTestService {

    urlR = '';
    constructor() { }
    url = {
        includes: () => { }
    };
    events = of(new NavigationEnd(1, 'url', 'url'));
    navigate(...args) {
    }
    setUrl(url) {
        this.urlR = url;
    }

}
