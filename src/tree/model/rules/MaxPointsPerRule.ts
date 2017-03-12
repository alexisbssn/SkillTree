import { Rule } from './rule';
import { Ruleable } from '../ruleable';

export class MaxPointsPerRule extends Rule{
    public Type: string = "MaxPer";

    public Subject: Ruleable | undefined;
    public Multiplier: number;
    public Value : number;

    public IsValid(subject: Ruleable) : boolean{
        var multiplier = 1;
        if(this.Multiplier !== undefined){
            multiplier = this.Multiplier;
        }
        return subject.PointsIn() < this.Subject.PointsIn() * multiplier;
    }
}
