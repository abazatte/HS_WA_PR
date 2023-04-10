import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { IndexComponent } from './index/index.component';
import { BackenComponent } from './backen/backen.component';
import { ShowComponent } from './show/show.component';
import { BrotmodalComponent } from './brotmodal/brotmodal.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    IndexComponent,
    BackenComponent,
    ShowComponent,
    BrotmodalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
