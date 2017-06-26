import { Component, Input, ViewChild, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { LeafComponent } from '../leaf/leaf.component';
import { Carousel } from 'primeng/primeng';
import { Skill } from '../../model/skill';

@Component({
    moduleId: module.id,
    selector: 'tree-pick-wall',
    templateUrl:'./pick-wall.component.html',
    styleUrls: ['./pick-wall.component.css']
})
export class PickWallComponent {

   constructor(private sanitizer: DomSanitizer) {}

    @Input()
    Skills: Array<Skill>;
}
