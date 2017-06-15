import { Rule } from './rule';
import { Ruleable } from '../ruleable';
import { Player } from '../player';

// This rule verifies that the player does NOT as much available points as the value
export class InverseCostRule extends Rule{
    public Type: string = "InverseCost";

    public CostType: string;
    public Value : number;

    public IsValid(subject: Ruleable): boolean{
        if(!super.IsValid(subject)){
            return true;
        }
        return Player.GetInstance().GetAvailablePoints(this.CostType) < this.Value;
    }
}
