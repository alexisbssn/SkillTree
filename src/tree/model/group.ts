import { Skill } from './skill';
import { Ruleable } from './ruleable';

export class Group extends Ruleable {
    public Items : Array<Ruleable>;
    public Type: string = "Group";
    public PointsIn(): number
    {
        var pts = 0;
        var item: Ruleable;
        for(item of this.Items){
            pts = pts + item.PointsIn();
        }
        return pts;
    }

    public UniqueIn(): number
    {
        var pts = 0;
        var item: Ruleable;
        for(item of this.Items){
            pts = pts + item.PointsIn();
        }
        return pts;
    }

    public ChildrenIn(): number{
        var pts = 0;
        var item: Ruleable;
        for(item of this.Items){
            if(item.PointsIn() > 0){
                pts++;
            }
        }
        return pts;
    }
}
