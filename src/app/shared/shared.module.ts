import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AppToolbarComponent} from '../pages/common/app-toolbar/app-toolbar.component';

@NgModule({
    declarations: [
        AppToolbarComponent
    ],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
    ],
    exports: [
        IonicModule,
        CommonModule,
        FormsModule,
    ]
})
export class SharedModule{}
