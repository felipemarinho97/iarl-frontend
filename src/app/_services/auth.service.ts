import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  // https://httpbin.org/post -> test post
  login(model: any) {
    this.http.post('https://httpbin.org/post', JSON.stringify(model))
    .map(res => res)
    .subscribe(dados => console.log(dados));
  }

}
