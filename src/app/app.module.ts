import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapexAddComponent } from './components/capex-add/capex-add.component';
import { CapexRemoveComponent } from './components/capex-remove/capex-remove.component';
import { CapexEditComponent } from './components/capex-edit/capex-edit.component';
import { CapexComponent } from './components/capex/capex.component';
import { CapexEntryComponent } from './components/capex-entry/capex-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    CapexAddComponent,
    CapexRemoveComponent,
    CapexEditComponent,
    CapexComponent,
    CapexEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
