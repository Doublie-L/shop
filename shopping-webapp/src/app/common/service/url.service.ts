import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser, Location} from '@angular/common';
import {environment} from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() {
  }

  getUrl(url: string) {
    return '/api' + url;
  }

}
