import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserapiservicesService {

  constructor(private _http:HttpClient) { }
  userApiUrl="https://reqres.in/api/users?%20page=2"
  user():Observable<any>
  {
    return this._http.get(this.userApiUrl);
  }
}
