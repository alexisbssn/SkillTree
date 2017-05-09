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

    //public constructor(name: string, description: string, rules: Array<Rule>, pointsIn: number){
    //    super();
    //    this.Rules = rules;
    //    this.Description = description;
    //    this.Name = name;
    //    this._pointsIn = pointsIn;
    //}

    AddPoint(): void{
        this._pointsIn += 1;
    }

    RemovePoint(): void{
        this._pointsIn -= 1;
    }
}
