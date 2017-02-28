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
    Skillz:Array<Skill>;
    SelectedSkillz: Array<Skill>;
    _entangle: Skill;

    constructor(){
        this.testSkill1 = new Skill("FireBall", "Launch a fiery ball of light that does 5 burning damage", [], 0);

        this._entangle = new Skill(
            "Entangle",
            "2 damage",
            [],
            0
        );

        this.SelectedSkillz = new Array<Skill>();
        this.Skillz = [
            new Skill(
                "Fireball",
                "2 damage",
                [
                    { Name:"rule1", Description: "descr", Type: ">", Subject: this._entangle, Value: 0 }
                ],
                0
            ),
            new Skill(
                "Frostbite",
                "2 damage",
                [],
                0
            ),
            new Skill(
                "Frostbite",
                "2 damage",
                [],
                0
            ),
            new Skill(
                "Frostbite",
                "2 damage",
                [],
                0
            ),
            new Skill(
                "Frostbite",
                "2 damage",
                [],
                0
            ),
            this._entangle,
            new Skill(
                "Magic missile",
                "2 damage",
                [],
                0
            ),
            new Skill(
                "Parry",
                "block 2 damage",
                [],
                0
            ),
            new Skill(
                "Lunge",
                "2 damage",
                [],
                0
            ),
            new Skill(
                "Slash",
                "2 damage",
                [],
                0
            ),
            new Skill(
                "Health",
                "2 hp",
                [],
                0
            )
        ]
    }
}
