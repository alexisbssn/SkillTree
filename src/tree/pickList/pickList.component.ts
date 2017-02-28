import { Component, Input } from '@angular/core';
import { Skill } from '../model/skill';
import { LeafComponent } from '../leaf/leaf.component';
import { PickListModule } from 'primeng/primeng';

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

    PickSkill(skill: Skill): void{
        console.log(skill);
        // TODO: this never gets called
        skill.AddPoint();
    }

    RemoveSkill(skill: Skill): void{
        skill.RemovePoint();
    }
}
