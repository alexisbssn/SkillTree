import { Component } from '@angular/core';
import { RuleablesDAOService } from './DAL/RuleablesDAO.service';
import { Skill } from "./model/skill";
import { Ruleable } from "./model/ruleable";

@Component({
    moduleId: module.id,
    selector: 'tree-root',
    templateUrl: './root.component.html',
    providers: [ RuleablesDAOService ]
})
export class RootComponent  {
    name = 'Angular';
    testSkill1: Skill;
    Skillz:Array<Ruleable>;
    SelectedSkillz: Array<Skill>;
    _entangle: Skill;

    constructor(private dataSource : RuleablesDAOService){
        //this.testSkill1 = new Skill("Fireball", "Launch a fiery ball of light that does 5 burning damage", [], 0);

        /*this._entangle = new Skill(
            "Entangle",
            "2 damage",
            [],
            0
        );*/

        this.SelectedSkillz = new Array<Skill>();
        this.Skillz = new Array<Skill>();

        dataSource.GetData('../TraitreLame.json').subscribe(ruleable => this.Skillz.push(ruleable));
        /*this.Skillz = [
            this._entangle,
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
        ]*/
    }
}
