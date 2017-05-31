import { Rule } from './rule';
import { Ruleable } from '../ruleable';

export class ChildrenInRule extends Rule{
    public Type: string = "ChildrenIn";

    public Subject: Ruleable | undefined;
    public Value : number;
    public Operator: string;

    public IsValid(subject: Ruleable): boolean{
        switch(this.Operator){
            case "<":
                if(this.Subject.ChildrenIn() < this.Value){
                    return false;
                }
                break;
            case ">":
                if(this.Subject.ChildrenIn() > this.Value){
                    return false;
                }
                break;
            case "<=":
                if(this.Subject.ChildrenIn() <= this.Value){
                    return false;
                }
                break;
            case ">=":
                if(this.Subject.ChildrenIn() >= this.Value){
                    return false;
                }
                break;
            case "=":
                if(this.Subject.ChildrenIn() === this.Value){
                    return false;
                }
                break;
            case "!=":
                if(this.Subject.ChildrenIn() !== this.Value){
                    return false;
                }
                break;
        }
    }
}
