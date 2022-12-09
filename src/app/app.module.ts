import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InterestRateListComponent } from './component/interest-rate-list/interest-rate-list.component';
import { InterestRateFormComponent } from './component/interest-rate-form/interest-rate-form.component';
import {FormsModule} from "@angular/forms";
import {InterestRateService} from "./service/interest-rate.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    InterestRateListComponent,
    InterestRateFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [InterestRateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
