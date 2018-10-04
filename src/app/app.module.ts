import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { FblabelComponent } from './fblabel/fblabel.component';
import { FbloginformComponent } from './fbloginform/fbloginform.component';

@NgModule({
  declarations: [
    AppComponent,
    FblabelComponent,
    FbloginformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
