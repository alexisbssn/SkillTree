import { NgModule }      from '@angular/core';
import { HttpModule }      from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { SkillTreeModule } from '../tree/skillTree.module';

import { HeaderComponent }  from './header/header.component';
import { ContentComponent } from './content/content.component';


@NgModule({
    imports:[
        BrowserModule,
        HttpModule,
        SkillTreeModule
    ],
    declarations: [
        HeaderComponent,
        ContentComponent
    ],
    bootstrap: [ ContentComponent ]
})
export class WebModule { }
