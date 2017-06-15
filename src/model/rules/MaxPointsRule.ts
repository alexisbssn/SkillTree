import { Rule } from './rule';
import { Ruleable } from '../ruleable';

export class MaxPointsRule extends Rule{
    public Type: string = "MaxPoints";

    public Value : number;

    public IsValid(subject: Ruleable): boolean{
        if(!super.IsValid(subject)){
            return true;
        }
        return subject.PointsIn() < this.Value;
    }
}
