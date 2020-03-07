import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UrlService} from '../common/service/url.service';
import {ProduceAdmin} from '../common/model/produce-admin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http: HttpClient,
              private urlService: UrlService) {
  }

  login(admin: ProduceAdmin): Observable<any> {
    const url = this.urlService.getUrl('/login');
    return this.http.post(url, admin);
  }

  register(admin: ProduceAdmin) {
    const url = this.urlService.getUrl('/user/add');
    return this.http.post(url, admin);
  }


}
