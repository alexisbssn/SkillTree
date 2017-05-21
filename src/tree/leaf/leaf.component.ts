import { Component, Input } from '@angular/core';
import { Skill } from "../../model/skill";

@Component({
    moduleId: module.id,
    selector: 'tree-leaf',
    templateUrl:'./leaf.component.html'
})
export class LeafComponent  {
    @Input()
    skill: Skill;
}
