import { Rule } from './rule';
import { Ruleable } from '../ruleable';

export class MaxPointsPerRule extends Rule{
    public Type: string = "MaxPointsPer";

    public Subject: Ruleable | undefined;
    public Value : number;

    public IsValid(subject: Ruleable) : boolean{
        if(!super.IsValid(subject)){
            return true;
        }
        return subject.PointsIn() < this.Subject.PointsIn() * this.Value;
    }
}
