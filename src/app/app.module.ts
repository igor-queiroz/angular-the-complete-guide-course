import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServerFormComponent } from './server-form/server-form.component';
import { FormsModule } from '@angular/forms';
import { ServerComponent } from './server/server.component';

@NgModule({
  declarations: [AppComponent, ServerFormComponent, ServerComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
