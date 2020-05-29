import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GenericBarloaderComponent } from './generic-barloader/generic-barloader.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, GenericBarloaderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
