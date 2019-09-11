import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroToServicesComponent } from './intro-to-services/intro-to-services.component';
import { GetDemoComponent } from './gets/get-demo/get-demo.component';
import { GetListDemoComponent } from './get-list-demo/get-list-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroToServicesComponent,
    GetDemoComponent,
    GetListDemoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
