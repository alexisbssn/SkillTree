import { Rule } from './rule';
import { Ruleable } from '../ruleable';

export class PointsInRule extends Rule{
    public Type: string = "PointsIn";

    public Subject: Ruleable | undefined;
    public Value : number;
    public Operator: string;

    public IsValid(subject: Ruleable): boolean{
        switch(this.Operator){
            case "<":
                if(this.Subject.PointsIn() < this.Value){
                    return false;
                }
                break;
            case ">":
                if(this.Subject.PointsIn() > this.Value){
                    return false;
                }
                break;
            case "<=":
                if(this.Subject.PointsIn() <= this.Value){
                    return false;
                }
                break;
            case ">=":
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
