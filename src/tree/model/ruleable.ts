import { Rule } from './rules/rule';
import { Group } from './group';

export abstract class Ruleable {
    public Rules: Array<Rule>;
    public Name: string;
    public abstract PointsIn(): number;
    public abstract UniqueIn(): number;
    public abstract ChildrenIn(): number;
    public abstract Type: string;
    isValid(): boolean{
        var rule: Rule;
        for(rule of this.Rules){
            if(!rule.IsValid(this)){
                return false;
            }
        }
        return true;
    }

    public constructor(){
        this.Rules = new Array<Rule>();
    }
}
