import { Ruleable } from './ruleable';

export class Rule{
    public Name: string;
    public Description: string;
    public Type: string;
    public Subject: Ruleable | undefined;
    public Value : number;
    public Rules : Array<Rule>; // Rule is checked only if its own rules are valid
}
