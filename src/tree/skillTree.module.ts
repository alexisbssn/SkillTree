import { NgModule }      from '@angular/core';
import { HttpModule }      from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { TreeModule, ButtonModule, CarouselModule, PanelModule } from 'primeng/primeng';

import { RootComponent }  from './root.component';
import { LeafComponent }  from './leaf/leaf.component';
import { PickListComponent }  from './pickList/pickList.component';

import { RuleablesDAOService } from './DAL/ruleablesDAO.service'

@NgModule({
    imports:      [
        BrowserModule,
        TreeModule,
        HttpModule,
        CarouselModule,
        ButtonModule,
        PanelModule
     ],
    declarations: [
        RootComponent,
        LeafComponent,
        PickListComponent
    ],
    providers: [ RuleablesDAOService ],
    exports: [ RootComponent ]
})
export class SkillTreeModule { }