import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastModule, ToastsManager } from 'ng2-toastr/ng2-toastr';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';

import { AppRoutingModule } from './/app-routing.module';
import { DeskboardComponent } from './deskboard/deskboard.component';
import { AuthGuard } from './_guards/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    DeskboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [ ToastsManager, AuthGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
