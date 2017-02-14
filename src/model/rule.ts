import { Ruleable } from './ruleable';

export class Rule{
    public Name: string;
    public Description: string;
    public Type: string;
    public Subject: Ruleable | undefined;
}
