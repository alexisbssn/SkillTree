import { Component } from '@angular/core';
import { Group } from "../model/group";
import { Skill } from "../model/skill";
import { Ruleable } from "../model/ruleable";
import { RuleablesDAOService } from './DAL/ruleablesDAO.service'

@Component({
    moduleId: module.id,
    selector: 'tree-root',
    templateUrl: './root.component.html',
    providers: [ RuleablesDAOService ]
})
export class RootComponent  {
    name = 'Angular';
    Rulebook: Array<Ruleable>;
    Skillz:Array<Skill>;
    SelectedSkillz: Array<Skill>;
    _entangle: Skill;

    constructor(private dataSource : RuleablesDAOService){
        this.SelectedSkillz = new Array<Skill>();
        this.Skillz = new Array<Skill>();
        this.Rulebook = new Array<Ruleable>();
        dataSource.GetData('../SentiersDeLOubli.json').subscribe(ruleable => {
            this.Rulebook.push(ruleable);
            this.Skillz = this.Skillz.concat(this.FlattenRuleable(ruleable));
        });
    }

    private FlattenRuleable(ruleable: Ruleable): Array<Skill>{
        let skills = new Array<Skill>();
        if(ruleable.Type === "Group"){
            for(let r of (<Group>ruleable).Items){
                skills = skills.concat(this.FlattenRuleable(r));
            }
        }
        else{
            skills.push(<Skill>ruleable);
        }
        return skills;
    }

    private LogRulebook(){
        console.log(this.Rulebook);
    }
}
