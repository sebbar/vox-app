import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersPage } from './users.page';
import {AuthGuard} from '../../../auth/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: UsersPage,
    canActivate: [AuthGuard],
    data: {roles: ['ROLE_USER']}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersPageRoutingModule {}
