import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RootComponent }  from './root.component';
import { LeafComponent }  from './leaf/leaf.component';
import { NodeComponent }  from './node/node.component';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [
        RootComponent,
        LeafComponent,
        NodeComponent
    ],
    bootstrap:    [ RootComponent ]
})
export class TreeModule { }
