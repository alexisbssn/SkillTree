import { Ruleable } from './ruleable';

export class Player {
    points: Array<PointsContainer>;
    competencies: Array<Ruleable>;
}

export class PointsContainer{
    type: string;
    value: number;
}
