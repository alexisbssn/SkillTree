import { Ruleable } from './ruleable';
import { CostRule } from './rules/CostRule';
import { Group } from './group';

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

    public GetAvailablePoints(pointType: string): number{
        let availablePoints: number = 0;
        let spentPoints: number = 0;
        for(let p of this.Points){
            if(p.Type === pointType){
                availablePoints = p.Value;
                break;
            }
        }

        spentPoints = this.GetSpentPoints(this.SkillBook, pointType);

        return availablePoints - spentPoints;
    }

    private GetSpentPoints(ruleables: Array<Ruleable>, pointType: string){
        let spentPoints = 0;
        for(let ruleable of ruleables){
            for(let rle of ruleable.Rules){
                if(rle.Type === "Cost"){
                    if((rle as CostRule).CostType === pointType){
                        spentPoints += (rle as CostRule).Value * ruleable.PointsIn();
                    }
                }
            }
            if(ruleable.Type === "Group"){
                spentPoints += this.GetSpentPoints((ruleable as Group).Items, pointType);
            }
        }
        return spentPoints;
    }
}

class PointsContainer{
    Type: string;
    Value: number;
}
