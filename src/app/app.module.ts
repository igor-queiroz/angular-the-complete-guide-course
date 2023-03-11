import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServerFormComponent } from './server-form/server-form.component';
import { ServerListsComponent } from './server-lists/server-lists.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ServerFormComponent, ServerListsComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
