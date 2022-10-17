import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CapexAddComponent } from './components/capex-add-edit/capex-add-edit.component';
import { CapexEntryComponent } from './components/capex-entry/capex-entry.component';
import { CapexRemoveComponent } from './components/capex-remove/capex-remove.component';
import { CapexComponent } from './components/capex/capex.component';

// Route Module
const routes: Routes = [
  // { path: '', 						component: CapexComponent },
  { path: 'details/:id', 	component: CapexComponent },
  { path: 'add', 					component: CapexAddComponent },
  { path: 'edit/:id', 		component: CapexAddComponent },
  // { path: 'delete/:id', 	component: CapexRemoveComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}

