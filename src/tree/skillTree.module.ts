import { NgModule }      from '@angular/core';
import { HttpModule }      from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TreeModule, ButtonModule, CarouselModule, PanelModule, ToggleButtonModule } from 'primeng/primeng';

import { RootComponent }  from './root.component';
import { LeafComponent }  from './leaf/leaf.component';
import { PickListComponent }  from './pickList/pickList.component';
import { SkillListComponent } from './skill-list/skill-list.component';
import { PickWallComponent } from './pick-wall/pick-wall.component';

import { RuleablesDAOService } from './DAL/ruleablesDAO.service';

@NgModule({
    imports:      [
        BrowserModule,
        TreeModule,
        HttpModule,
        CarouselModule,
        ButtonModule,
        PanelModule,
        ToggleButtonModule,
        FormsModule // necessary for ToggleButton
     ],
    declarations: [
        RootComponent,
        LeafComponent,
        PickListComponent,
        SkillListComponent,
        PickWallComponent
    ],
    providers: [ RuleablesDAOService ],
    exports: [ RootComponent ]
})
export class SkillTreeModule { }
