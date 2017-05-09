import { Rule } from './rule';
import { Ruleable } from '../ruleable';

export class MaxChildrenRule extends Rule{
    public Type: string = "MaxChildren";

    public Value : number;

    public IsValid(subject: Ruleable): boolean{
        console.log(subject.ChildrenIn()); //TODO groups are not validated
        return subject.ChildrenIn() < this.Value;
    }
}
