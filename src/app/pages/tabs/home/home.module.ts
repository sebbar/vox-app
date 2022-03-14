import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {SharedModule} from '../../../shared/shared.module';
import {HomeRoutingModule} from './home-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
// import {KeycloakAngularModule, KeycloakBearerInterceptor} from 'keycloak-angular';

@NgModule({
    declarations: [ HomeComponent],
    imports: [
        SharedModule,
        HomeRoutingModule,
        HttpClientModule
    ]
})
export class HomeModule{}
