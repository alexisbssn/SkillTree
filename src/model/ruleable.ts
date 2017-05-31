import { Rule } from './rules/rule';
import { Group } from './group';
import { Player } from './player';

export abstract class Ruleable {
    public Rules: Array<Rule>;
    public Name: string;
    protected _pointsIn: number;
    public abstract Type: string;
    public abstract UniqueIn(): number;
    public abstract ChildrenIn(): number;
    public PointsIn(): number{
        return this._pointsIn;
    }
    isValid(): boolean{
        var rule: Rule;
        for(rule of this.Rules){
            if(!rule.IsValid(this)){
                return false;
            }
        }
        return true;
    }

    public Pick(): void{
        this._pointsIn += 1;
    }

    public UnPick(): void{
        if(this._pointsIn > 0){
            this._pointsIn -= 1;
        }
    }

    public constructor(){
        this.Rules = new Array<Rule>();
    }
}
