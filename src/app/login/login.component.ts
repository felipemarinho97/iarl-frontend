import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core/src/linker/view_container_ref';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  entryComponents: [FooterComponent],
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  constructor(public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
   }

  ngOnInit() {
  }

  onClickMe(f) {
    if ( this.username === '' || this.password === '' ) {
      this.toastr.warning('Usuário ou senha inválido!', 'Alerta!');
    }
  }
}
