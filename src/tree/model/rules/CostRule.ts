import { Rule } from './rule';
import { Ruleable } from '../ruleable';

export class CostRule extends Rule{
    public Type: string = "Cost";

    public CostType: string;
    public Value : number;

    public IsValid(subject: Ruleable): boolean{
        return true;
        // TODO Implement

    }
}
