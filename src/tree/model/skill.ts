import { Ruleable } from './ruleable';

export class Skill extends Ruleable{
    public Description: string;
    public PointsIn(): number{ return this._pointsIn; }
    public SetPointsIn(value: number){ this._pointsIn = value; }
    private _pointsIn: number;
}
