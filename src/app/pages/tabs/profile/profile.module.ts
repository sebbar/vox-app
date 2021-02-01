import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import {SharedModule} from '../../../shared/shared.module';
// import {AppToolbarModule} from '../common/app-toolbar/app-toolbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ProfilePageRoutingModule,
//    AppToolbarModule
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
