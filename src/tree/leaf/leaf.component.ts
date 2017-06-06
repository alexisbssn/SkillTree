import { Component, Input } from '@angular/core';
import { Skill } from "../../model/skill";
import { MaxPointsRule } from "../../model/rules/MaxPointsRule";
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

    public IsMaxOnePoint() : boolean{
        for(let rule of this.skill.Rules){
            if(rule.Type === "MaxPoints"){
                if((rule as MaxPointsRule).Value == 1){
                    return true;
                }
                return false;
            }
        }
        return false;
    }
}
