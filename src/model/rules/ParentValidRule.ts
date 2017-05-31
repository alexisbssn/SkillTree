import { Rule } from './rule';
import { Ruleable } from '../ruleable';
import { Group } from '../group';

export class ParentValidRule extends Rule{
    public Type: string = "ParentValid";

    public Parent: Group

    public IsValid(subject: Ruleable): boolean{
        return this.Parent.isValid();
    }
}
