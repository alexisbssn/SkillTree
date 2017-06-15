import { Rule } from './rules/rule';
import { CostRule } from './rules/CostRule';
import { InverseCostRule } from './rules/InverseCostRule';
import { Group } from './group';
import { Player } from './player';
import { PointsContainer } from './PointsContainer';

export abstract class Ruleable {
    public Rules: Array<Rule>;
    public Name: string;
    public abstract Type: string;
    public abstract UniqueIn(): number;
    public abstract ChildrenIn(): number;

    private pointsIn: number;
    private spentPoints : Array<PointsContainer>;

    public PointsIn(): number{
        return this.pointsIn;
    }

    public GetSpentPoints(type : string) : number{
        let pts = this.spentPoints.find(p => p.Type === type);
        if(pts !== undefined){
            return pts.Value;
        }
        return 0;
    }

    public isValid(): boolean{
        var rule: Rule;
        for(rule of this.Rules){
            if(!rule.IsValid(this)){
                return false;
            }
        }
        return true;
    }

    public Pick(): void{
        this.SpendPoints();
        this.pointsIn += 1;
    }

    public UnPick(): void{
        if(this.pointsIn > 0){
            this.pointsIn -= 1;
            this.UnSpendPoints();
        }
    }

    public constructor(){
        this.Rules = new Array<Rule>();
        this.pointsIn = 0;
        this.spentPoints = new Array<PointsContainer>();
    }

    private SpendPoints(){
        let costRules = this.Rules.filter(r => r.Type === "Cost");
        for(let rle of costRules){
            let rule = rle as CostRule;
            let inverse = new InverseCostRule();
            inverse.CostType = rule.CostType;
            inverse.Value = rule.Value;

            if(inverse.IsValid(this) && rule.IsValid(this)){
                // forget about this rule, it is invalidated by a sub-rule.
                continue;
            }

            let point = this.spentPoints.find(p => p.Type === rule.CostType)
            if(point !== undefined){
                point.Value += rule.Value;
            }
            else{
                point = new PointsContainer();
                point.Type = rule.CostType;
                point.Value = rule.Value;
                this.spentPoints.push(point);
            }
        }
    }

    private UnSpendPoints(){
        let costRules = this.Rules.filter(r => r.Type == "Cost");
        for(let rle of costRules){
            let rule = rle as CostRule;
            let inverse = new InverseCostRule();
            inverse.CostType = rule.CostType;
            inverse.Value = rule.Value;

            if(inverse.IsValid(this) && rule.IsValid(this)){
                // forget about this rule, it is invalidated by a sub-rule.
                continue;
            }

            let point = this.spentPoints.find(p => p.Type === rule.CostType)
            if(point !== undefined){
                point.Value -= rule.Value;
            }
            else{
                console.log("error reimbursing skill");
            }
        }
    }
}
