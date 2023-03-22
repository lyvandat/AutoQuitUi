import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProcessSelectComponent } from './Scan/process-select/process-select.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProcessScanComponent } from './Scan/process-scan/process-scan.component';

@NgModule({
  declarations: [
    AppComponent,
    ProcessSelectComponent,
    ProcessScanComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
