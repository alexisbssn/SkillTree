import { Component, Input, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Skill } from '../../model/skill';

@Component({
    moduleId: module.id,
    selector: 'tree-skill-list',
    templateUrl:'./skill-list.component.html',
    //styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent  {

   constructor() {}

    @Input()
    Skills: Array<Skill>;
}
