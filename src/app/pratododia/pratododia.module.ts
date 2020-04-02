import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PratododiaPageRoutingModule } from './pratododia-routing.module';

import { PratododiaPage } from './pratododia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PratododiaPageRoutingModule
  ],
  declarations: [PratododiaPage]
})
export class PratododiaPageModule {}
