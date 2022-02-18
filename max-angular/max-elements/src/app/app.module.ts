import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AlertComponent } from './alert.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [AlertComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
