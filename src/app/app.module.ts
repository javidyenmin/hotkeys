import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {HotkeyModule} from 'angular2-hotkeys';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HotkeyModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
