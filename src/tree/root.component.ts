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
    ShowAll: boolean;

    constructor(private dataSource : RuleablesDAOService){
        this.ShowAll = true;

        //TODO move because this causes a bug when we change page and come back. Load on app start instead?
        dataSource.GetData('../SentiersDeLOubli.json').subscribe(ruleable => {
            Player.GetInstance().SkillBook.push(ruleable);
        });

        // will reset to 6 every time the component is loaded, only if there was less than 6 when the user left.
        while(this.GetTotalPoints() < 6) {
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
