import { Ruleable } from './ruleable';
import { Rule } from './rules/rule';

export class Skill extends Ruleable{
    public Description: string;
    public Type: string = "Skill";
    public PointsIn(): number{
        return this._pointsIn;
    };
    public SetPointsIn(value: number){
        this._pointsIn = value;
    };
    private _pointsIn: number;

    public UniqueIn(): number{
        return this._pointsIn > 0 ? 1 : 0;
    }

    public ChildrenIn() : number{
        return 0;
    }

    public constructor(){
        super();
        this._pointsIn = 0;
    }

    AddPoint(): void{
        this._pointsIn += 1;
    }

    RemovePoint(): void{
        this._pointsIn -= 1;
    }
}
