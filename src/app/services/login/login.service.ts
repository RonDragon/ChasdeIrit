import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from 'src/app/models/beans/user/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }
  public login(user: User): Observable<User> {
    return this.httpClient.post<User>('http://localhost:8080/login', user, {withCredentials: true});
  }
}
