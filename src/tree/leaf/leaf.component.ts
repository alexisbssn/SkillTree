import { Component, Input } from '@angular/core';
import { Skill } from "../../model/skill";
import { ButtonModule } from 'primeng/primeng';

@Component({
    moduleId: module.id,
    selector: 'tree-leaf',
    templateUrl:'./leaf.component.html',
    styleUrls: ['./leaf.component.css']
})
export class LeafComponent  {
    @Input()
    skill: Skill;
}
