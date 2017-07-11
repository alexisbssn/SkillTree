import { NgModule }      from '@angular/core';
import { HttpModule }      from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ToggleButtonModule } from 'primeng/primeng';

import { HomepageComponent } from './homepage/homepage.component';
import { UniverseComponent } from './universe/universe.component';

@NgModule({
    imports:      [
        BrowserModule,
        HttpModule,
        ToggleButtonModule,
        FormsModule // necessary for ToggleButton
     ],
    declarations: [
        HomepageComponent,
        UniverseComponent
    ],
    providers: [  ],
    exports: [ 
        HomepageComponent,
        UniverseComponent
    ]
})
export class BioModule { }
