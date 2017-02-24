import { Rule } from './rule';
import { Group } from './group';

export abstract class Ruleable {
    public Rules: Array<Rule>;
    public Name: string;
    public abstract PointsIn(): number;
    isValid(currentStats: Array<Ruleable>): boolean{
        var _rule: any;
        for(_rule in this.Rules){
            var rule: Rule = _rule;
            var _ruleable: any;
            var found: boolean;
            for(_ruleable in currentStats){
                var ruleable : Ruleable = _ruleable;
                found = false;
                if(rule.Subject.Name == ruleable.Name){
                    if(ruleable.PointsIn() >= rule.Value){
                        found = true;
                        break;
                    }
                    else {
                        return false;
                    }
                }
            }
            if(found){
                return false;
            }
        }
        return true;
    }
}
