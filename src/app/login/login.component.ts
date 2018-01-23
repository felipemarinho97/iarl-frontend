import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core/src/linker/view_container_ref';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  /*
  ERROR Error: StaticInjectorError(AppModule)[LoginComponent -> ViewContainerRef]: 
  StaticInjectorError(Platform: core)[LoginComponent -> ViewContainerRef]: 
    NullInjectorError: No provider for ViewContainerRef!
    at _NullInjector.get (core.js:994)
    at resolveToken (core.js:1292)
    at tryResolveToken (core.js:1234)
    at StaticInjector.get (core.js:1102)
    at resolveToken (core.js:1292)
    at tryResolveToken (core.js:1234)
    at StaticInjector.get (core.js:1102)
    at resolveNgModuleDep (core.js:10847)
    at NgModuleRef_.get (core.js:12080)
    at resolveDep (core.js:12570)

  constructor(private toastr: ToastsManager, vRef: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vRef);
  }
  */

  constructor() {
  }

  ngOnInit() {
  }

  onClickMe(f) {
    if ( this.username === '' || this.password === '' ) {
      /*this.toastr.warning('Usuário ou senha inválido!', 'Alerta!');*/
      console.log(f);
    }
  }
}
