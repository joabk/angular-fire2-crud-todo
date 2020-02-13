import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { AngularFireModule } from 'angularfire2';
//import { AngularFireAuth } from

import { configs } from './configs/configs';
import { AuthService } from './auth.service'

@NgModule({
  imports: [
    BrowserModule, 
    FormsModule,
    AngularFireModule.initializeApp(configs.firebase) 
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent
  ],
  providers:[

  AuthService],
  bootstrap: [ 
    AppComponent 
  ]
})
export class AppModule { }
