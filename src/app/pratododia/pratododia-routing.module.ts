import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PratododiaPage } from './pratododia.page';

const routes: Routes = [
  {
    path: '',
    component: PratododiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PratododiaPageRoutingModule {}
