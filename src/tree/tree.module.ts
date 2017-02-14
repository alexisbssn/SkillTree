import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RootComponent }  from './root.component';
import { LeafComponent }  from './leaf/leaf.component';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [
        RootComponent,
        LeafComponent
    ],
    bootstrap:    [ RootComponent ]
})
export class TreeModule { }
