import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { TryInputComponent } from './try-input/try-input.component';
import {APP_ROUTE_PROVIDER} from "./app.routes";
import {DirectoryComponent} from "./directory/directory.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TryInputComponent, DirectoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, APP_ROUTE_PROVIDER
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
