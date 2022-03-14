import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AppToolbarComponent} from '../pages/tabs/common/app-toolbar/app-toolbar.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {KeycloakBearerInterceptor} from 'keycloak-angular';

@NgModule({
    declarations: [
        AppToolbarComponent
    ],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule
    ],
    exports: [
        IonicModule,
        CommonModule,
        FormsModule,
        AppToolbarComponent,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: KeycloakBearerInterceptor,
            multi: true
        }
    ]
})
export class SharedModule{}
