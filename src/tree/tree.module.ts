import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PickListModule } from 'primeng/primeng';

import { RootComponent }  from './root.component';
import { LeafComponent }  from './leaf/leaf.component';
import { NodeComponent }  from './node/node.component';
import { PickListComponent }  from './pickList/pickList.component';

@NgModule({
    imports:      [
        BrowserModule,
        PickListModule
     ],
    declarations: [
        RootComponent,
        LeafComponent,
        NodeComponent,
        PickListComponent
    ],
    bootstrap:    [ RootComponent ]
})
export class TreeModule { }
