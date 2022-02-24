import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsersPageRoutingModule } from './users-routing.module';

import { UsersPage } from './users.page';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
    UsersPageRoutingModule,
    SharedModule
  ],
  declarations: [UsersPage]
})
export class UsersPageModule {}
