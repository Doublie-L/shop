import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {UrlService} from '../../../common/service/url.service';
import {HttpClient} from '@angular/common/http';
import {User} from '../../../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private  urlService: UrlService,
              private http: HttpClient) {
  }

  getAllUser(): Observable<any> {
    const url = this.urlService.getUrl('/user/all');
    return this.http.get(url);
  }

  editUser(user: User) {
    const url = this.urlService.getUrl('/user/edit');
    return this.http.post(url, user);
  }
}
