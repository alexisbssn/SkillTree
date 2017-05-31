import { Component, Input } from '@angular/core';
import { LeafComponent } from '../leaf/leaf.component';
import { PickListModule } from 'primeng/primeng';
import { Skill } from '../../model/skill';

@Component({
    moduleId: module.id,
    selector: 'tree-pick-list',
    templateUrl:'./pickList.component.html'
})
export class PickListComponent  {
    @Input()
    Available: Array<Skill>;

    @Input()
    Selected: Array<Skill>;

    PickSkills(skills: Skill[]): void{
        for(var skill of skills){
            skill.Pick();
        }
    }

    RemoveSkills(skills: Skill[]): void{
        for(var skill of skills){
            skill.UnPick();
        }
    }
}
