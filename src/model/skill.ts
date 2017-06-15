import { Ruleable } from './ruleable';
import { Rule } from './rules/rule';
import { MaxPointsRule } from "./rules/MaxPointsRule";

export class Skill extends Ruleable{
    public Description: string;
    public Type: string = "Skill";

    public UniqueIn(): number{
        return this.PointsIn() > 0 ? 1 : 0;
    }

    public ChildrenIn() : number{
        return 0;
    }

    public constructor(){
        super();
    }

    public IsMaxOnePoint() : boolean{
        for(let rule of this.Rules){
            if(rule.Type === "MaxPoints"){
                if((rule as MaxPointsRule).Value == 1){
                    return true;
                }
                return false;
            }
        }
        return false;
    }
}
