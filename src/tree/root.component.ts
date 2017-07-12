import { Component } from '@angular/core';
import { ToggleButtonModule } from 'primeng/primeng';
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
    ShowAll: boolean;

    constructor(private dataSource : RuleablesDAOService){
        this.ShowAll = true;
        this.Skillz = new Array<Skill>();
        dataSource.GetData('../SentiersDeLOubli.json').subscribe(ruleable => {
            Player.GetInstance().SkillBook.push(ruleable);
            this.Skillz = Player.GetInstance().GetFlatSkillBook();
        });
        for(let i = 0; i < 6; i++) {
            this.AddSkillPoint();
        }
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

    private AddSkillPoint(){
        Player.GetInstance().AddSkillPoints("competence", 1);
    }

    private RemoveSkillPoint(){
        Player.GetInstance().AddSkillPoints("competence", -1);
    }

    GetTakenSkills(){
        return Player.GetInstance().GetTakenSkills();
    }

    GetDisplaySkills(){
        if(this.ShowAll){
            return Player.GetInstance().GetFlatSkillBook();
        }
        return Player.GetInstance().GetAvailableSkills();        
    }

    private LogRulebook(){
        console.log(Player.GetInstance().SkillBook);
    }
}
