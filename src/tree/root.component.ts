import { Component } from '@angular/core';
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

    SelectedSkillz: Array<Skill> = new Array<Skill>();
    Skillz:Array<Skill> = [
        {
            Name: "Fireball",
            Description: "2 damage",
            Rules: []
        },
        {
            Name: "Frostbite",
            Description: "2 damage",
            Rules: []
        },
        {
            Name: "Frostbite",
            Description: "2 damage",
            Rules: []
        },
        {
            Name: "Frostbite",
            Description: "2 damage",
            Rules: []
        },
        {
            Name: "Frostbite",
            Description: "2 damage",
            Rules: []
        },
        {
            Name: "Entangle",
            Description: "2 damage",
            Rules: []
        },
        {
            Name: "Magic missile",
            Description: "2 damage",
            Rules: []
        },
        {
            Name: "Parry",
            Description: "block 2 damage",
            Rules: []
        },
        {
            Name: "Lunge",
            Description: "2 damage",
            Rules: []
        },
        {
            Name: "Slash",
            Description: "2 damage",
            Rules: []
        },
        {
            Name: "Health",
            Description: "2 hp",
            Rules: []
        }
    ]
}
