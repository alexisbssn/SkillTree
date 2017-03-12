import { Rule } from './rule';
import { Ruleable } from '../ruleable';

export class MaxPointsRule extends Rule{
    public Type: string = "Maximum";

    public Value : number;

    public IsValid(subject: Ruleable): boolean{
        return subject.PointsIn() < Value;
    }
}
