import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  constructor(private toastr: ToastsManager, vRef: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vRef);
  }

  ngOnInit() {
  }

  /*Para teste apenas */
  onClickMe(f) {
    if ( this.username === '' || this.password === '' ) {
      this.toastr.warning('Usuário ou senha inválido!', 'Alerta!');
      console.log(f);
    }
  }
}
