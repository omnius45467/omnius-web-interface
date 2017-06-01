import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AtomService } from './atom.service';
import { AtomListComponent } from './atom-list/atom-list.component';
import { AtomDetailsComponent } from './atom-details/atom-details.component';

import { AppRoutingModule } from "./app-routing.module";


@NgModule({
  declarations: [
    AppComponent,
    AtomListComponent,
    AtomDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [ AtomService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
