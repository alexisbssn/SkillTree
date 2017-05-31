import { Rule } from './rule';
import { Ruleable } from '../ruleable';
import { Player } from '../player';

export class CostRule extends Rule{
    public Type: string = "Cost";

    public CostType: string;
    public Value : number;

    public IsValid(subject: Ruleable): boolean{
        return Player.GetInstance().GetAvailablePoints(this.CostType) >= this.Value;
    }
}
