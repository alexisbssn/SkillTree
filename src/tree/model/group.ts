import { Skill } from './skill';
import { Ruleable } from './ruleable';

export class Group extends Ruleable {
    Name: string;
    public Skills : Array<Skill>;
}
