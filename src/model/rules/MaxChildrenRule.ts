import { Rule } from './rule';
import { Ruleable } from '../ruleable';

export class MaxChildrenRule extends Rule{
    public Type: string = "MaxChildren";

    public Value : number;

    public IsValid(subject: Ruleable): boolean{
        if(!super.IsValid(subject)){
            return true;
        }
        return subject.ChildrenIn() < this.Value;
    }
}
