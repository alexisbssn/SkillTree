import { Component } from '@angular/core';
import { LeafComponent } from './leaf/leaf.component';
import { Skill } from "./model/skill";

@Component({
    moduleId: module.id,
    selector: 'tree-root',
    templateUrl: './root.component.html'
})
export class RootComponent  {
    name = 'Angular';
    testSkill1: Skill;
    constructor(){
        this.testSkill1 = new Skill();
        this.testSkill1.Name = "FireBall";
        this.testSkill1.Description = "Launch a fiery ball of light that does 5 burning damage";
    }
}
