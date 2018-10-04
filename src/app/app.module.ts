import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { FblabelComponent } from './fblabel/fblabel.component';
import { FbloginformComponent } from './fbloginform/fbloginform.component';
import { FbtextboxComponent } from './fbtextbox/fbtextbox.component';
import { FbcontentComponent } from './fbcontent/fbcontent.component';
import { FbsubmitComponent } from './fbsubmit/fbsubmit.component';

@NgModule({
  declarations: [
    AppComponent,
    FblabelComponent,
    FbloginformComponent,
    FbtextboxComponent,
    FbcontentComponent,
    FbsubmitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
