import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  constructor() { }

  ngOnInit() {
  }

  /*onClickMe(f) {
    console.log(f);
    if ( this.username === '') {
      alert('Usuario vazio!');
    } else if ( this.password === '' ) {
      alert('Senha vazia!');
    }
  }*/
}
