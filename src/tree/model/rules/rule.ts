import { Ruleable } from '../ruleable';

export abstract class Rule{
    public Name: string;
    public ErrorMessage: string;
    public abstract Type: string;

    // Rule is checked only if its own rules are valid
    // In other words: Rule is always valid if its own rules are invalid
    public Rules : Array<Rule>;

    public abstract IsValid(subject: Ruleable): boolean;

    public constructor(){
        this.Rules = new Array<Rule>();
    }
}
