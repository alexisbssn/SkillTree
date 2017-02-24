import { Skill } from './skill';
import { Ruleable } from './ruleable';

export class Group extends Ruleable {
    public Skills : Array<Skill>;
    public PointsIn(): number { return this.Skills.length; }
}
