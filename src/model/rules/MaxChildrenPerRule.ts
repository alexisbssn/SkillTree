import { Rule } from './rule';
import { Ruleable } from '../ruleable';

export class MaxChildrenPerRule extends Rule{
    public Type: string = "MaxChildrenPer";

    public Subject: Ruleable | undefined;
    public Value : number;

    public IsValid(subject: Ruleable) : boolean{
        if(!super.IsValid(subject)){
            return true;
        }
        return subject.ChildrenIn() < this.Subject.PointsIn() * this.Value;
    }
}
