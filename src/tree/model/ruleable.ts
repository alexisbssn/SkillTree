import { Rule } from './rule';
import { Group } from './group';

export abstract class Ruleable {
    public Rules: Array<Rule>;
    public Name: string;
    public abstract PointsIn(): number;
    isValid(): boolean{
        var _rule: any;
        for(_rule of this.Rules){
            var rule: Rule = _rule;
            var _ruleable: any;
            var found: boolean;

            if(rule.Type === "cost"){
                // TODO implement
            }
            switch(rule.Type){
                case ">=":
                    if(rule.Subject.PointsIn() < rule.Value){
                        return false;
                    }
                    break;
                case "<=":
                    if(rule.Subject.PointsIn() > rule.Value){
                        return false;
                    }
                    break;
                case ">":
                    if(rule.Subject.PointsIn() <= rule.Value){
                        return false;
                    }
                    break;
                case "<":
                    if(rule.Subject.PointsIn() >= rule.Value){
                        return false;
                    }
                    break;
                case "=":
                    if(rule.Subject.PointsIn() === rule.Value){
                        return false;
                    }
                    break;
                case "!=":
                    if(rule.Subject.PointsIn() !== rule.Value){
                        return false;
                    }
                    break;
            }
        }
        return true;
    }
}
