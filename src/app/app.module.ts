import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EntryModule} from "./entry/entry.module";
import {ClientCommonModule} from "./client-common/client-common.module";
import {BookShelfModule} from "./book-shelf/book-shelf.module";
import {HttpClientModule} from "@angular/common/http";
import {MyFormsModule} from "./my-forms/my-forms.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EntryModule,
    ClientCommonModule,
    BookShelfModule,
    HttpClientModule,
    MyFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
