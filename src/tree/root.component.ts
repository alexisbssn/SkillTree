import { Component } from '@angular/core';
import { Group } from "../model/group";
import { Skill } from "../model/skill";
import { Ruleable } from "../model/ruleable";
import { Player } from "../model/player";
import { RuleablesDAOService } from './DAL/ruleablesDAO.service'

@Component({
    moduleId: module.id,
    selector: 'tree-root',
    templateUrl: './root.component.html',
    providers: [ RuleablesDAOService ]
})
export class RootComponent  {
    Skillz:Array<Skill>;

    constructor(private dataSource : RuleablesDAOService){
        this.Skillz = new Array<Skill>();
        dataSource.GetData('../SentiersDeLOubli.json').subscribe(ruleable => {
            Player.GetInstance().SkillBook.push(ruleable);
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

    private GetAvailablePoints(){
        return Player.GetInstance().GetAvailablePoints("competence");
    }

    private GetTotalPoints(){
        return Player.GetInstance().GetTotalPoints("competence");
    }

    private AddSkillPoint(type: string){
        Player.GetInstance().AddSkillPoints("competence", 1);
    }

    private RemoveSkillPoint(type: string){
        Player.GetInstance().AddSkillPoints("competence", -1);
    }

    private LogRulebook(){
        console.log(Player.GetInstance().SkillBook);
    }
}
