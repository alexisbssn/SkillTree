import { Ruleable } from './ruleable';
import { CostRule } from './rules/CostRule';
import { Group } from './group';
import { Skill } from './skill';
import { PointsContainer } from './PointsContainer';

export class Player {

    private constructor(){
        this.Points = new Array<PointsContainer>();
        this.SkillBook = new Array<Ruleable>();
    }
    private static instance: Player = new Player();
    public static GetInstance(): Player{
        return Player.instance;
    }

    public Points: Array<PointsContainer>;
    public SkillBook: Array<Ruleable>;

    public GetTakenSkills(): Array<Skill>{
        let skills = new Array<Skill>();
        for(let skill of this.GetFlatSkillBook()){
            if(skill.Type == "Skill" && skill.UniqueIn() === 1){
                skills.push(skill as Skill);
            }
        }
        return skills;
    }

    GetFlatSkillBook(): Array<Skill>{
        let skills = new Array<Skill>();
        for(let r of this.SkillBook){
            skills = skills.concat(this.FlattenRuleable(r));
        }
        return skills
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

    public AddSkillPoints(type: string, value: number){
        let found = false;
        for(let pt of this.Points){
            if(pt.Type == type){
                found = true;
                pt.Value += value;
            }
        }
        if(!found){
            let pt = new PointsContainer();
            pt.Type = type;
            pt.Value = value;
            this.Points.push(pt);
        }
    }

    public GetTotalPoints(pointType: string): number{
        for(let p of this.Points){
            if(p.Type === pointType){
                return p.Value;
            }
        }
        return 0;
    }

    public GetAvailablePoints(pointType: string): number{
        let availablePoints: number = 0;
        let spentPoints: number = 0;
        for(let p of this.Points){
            if(p.Type === pointType){
                availablePoints = p.Value;
                break;
            }
        }

        spentPoints = this.GetSpentPoints(pointType);

        return availablePoints - spentPoints;
    }

    public GetSpentPoints(pointType: string): number{
        return this.GetSpentPointsFromArray(this.SkillBook, pointType);
    }

    private GetSpentPointsFromArray(ruleables: Array<Ruleable>, pointType: string){
        let spentPoints = 0;
        for(let ruleable of ruleables){
            /*for(let rle of ruleable.Rules){
                if(rle.Type === "Cost"){
                    if((rle as CostRule).CostType === pointType){
                        spentPoints += (rle as CostRule).Value * ruleable.PointsIn();
                    }
                }
            }*/
            spentPoints += ruleable.GetSpentPoints(pointType);
            if(ruleable.Type === "Group"){
                spentPoints += this.GetSpentPointsFromArray((ruleable as Group).Items, pointType);
            }
        }
        return spentPoints;
    }
}
