import { Component, Input, ViewChild, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { LeafComponent } from '../leaf/leaf.component';
import { Carousel } from 'primeng/primeng';
import { Skill } from '../../model/skill';

@Component({
    moduleId: module.id,
    selector: 'tree-pick-list',
    templateUrl:'./pickList.component.html',
    encapsulation: ViewEncapsulation.None, // Necessary to style PrimeNg's Carousel.
    styleUrls: ['./pickList.component.css']
})
export class PickListComponent {

   constructor(private sanitizer: DomSanitizer) {}

    @Input()
    Available: Array<Skill>;

    private myEasing = this.sanitizer.bypassSecurityTrustStyle('cubic-bezier(0.42,0,0.58,1)');
}
