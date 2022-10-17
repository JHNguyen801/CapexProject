import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapexAddComponent } from './components/capex-add-edit/capex-add-edit.component';
import { CapexRemoveComponent } from './components/capex-remove/capex-remove.component';
import { CapexComponent } from './components/capex/capex.component';
import { CapexEntryComponent } from './components/capex-entry/capex-entry.component';
import { CapeSearchComponent } from './components/capex-search/cape-search/cape-search.component';

@NgModule({
  declarations: [
    AppComponent,
    CapexAddComponent,
    CapexRemoveComponent,
    CapexComponent,
    CapexEntryComponent,
    CapeSearchComponent
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
