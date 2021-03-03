import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BarChartModule } from '@uimf/uitk';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BarChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
