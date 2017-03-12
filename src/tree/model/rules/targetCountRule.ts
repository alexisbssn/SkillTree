import { Rule } from './rule';
import { Ruleable } from '../ruleable';

export class TargetCountRule extends Rule{
    public Type: string = "Target";

    public Subject: Ruleable | undefined;
    public Value : number;
    public Operator: string;

    public IsValid(subject: Ruleable): boolean{
        switch(this.Operator){
            case ">=":
                if(this.Subject.PointsIn() < this.Value){
                    return false;
                }
                break;
            case "<=":
                if(this.Subject.PointsIn() > this.Value){
                    return false;
                }
                break;
            case ">":
                if(this.Subject.PointsIn() <= this.Value){
                    return false;
                }
                break;
            case "<":
                if(this.Subject.PointsIn() >= this.Value){
                    return false;
                }
                break;
            case "=":
                if(this.Subject.PointsIn() === this.Value){
                    return false;
                }
                break;
            case "!=":
                if(this.Subject.PointsIn() !== this.Value){
                    return false;
                }
                break;
        }
    }
}
