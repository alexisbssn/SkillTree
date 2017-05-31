import { NgModule }      from '@angular/core';
import { HttpModule }      from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { PickListModule } from 'primeng/primeng';

import { RootComponent }  from './root.component';
import { LeafComponent }  from './leaf/leaf.component';
import { PickListComponent }  from './pickList/pickList.component';

import { RuleablesDAOService } from './DAL/ruleablesDAO.service'

@NgModule({
    imports:      [
        BrowserModule,
        PickListModule,
        HttpModule
     ],
    declarations: [
        RootComponent,
        LeafComponent,
        PickListComponent
    ],
    bootstrap:    [ RootComponent ],
    providers: [ RuleablesDAOService ]
})
export class TreeModule { }
