import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { TryInputComponent } from './try-input/try-input.component';
import {APP_ROUTE_PROVIDER} from "./app.routes";
import {DirectoryComponent} from "./directory/directory.component";
import { FilterPipe } from './filter.pipe';
import {LoggingService} from "./logging.service";
import {DataService} from "./data.service";
// import {HttpModule} from "@angular/http";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TryInputComponent, DirectoryComponent, FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule, APP_ROUTE_PROVIDER, HttpModule
  ],
  providers: [LoggingService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
