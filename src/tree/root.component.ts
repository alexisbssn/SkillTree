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
            this.Skillz = Player.GetInstance().GetFlatSkillBook();
        });
    }

    private GetAvailablePoints(){
        return Player.GetInstance().GetAvailablePoints("competence");
    }

    private GetTotalPoints(){
        return Player.GetInstance().GetTotalPoints("competence");
    }

    private GetAvailableSpellPoints(){
        return Player.GetInstance().GetAvailablePoints("spell");
    }

    private AddSkillPoint(type: string){
        Player.GetInstance().AddSkillPoints("competence", 1);
    }

    private RemoveSkillPoint(type: string){
        Player.GetInstance().AddSkillPoints("competence", -1);
    }

    GetTakenSkills(){
        return Player.GetInstance().GetTakenSkills();
    }

    private LogRulebook(){
        console.log(Player.GetInstance().SkillBook);
    }
}
