import { Episode } from './episode';

export class Season {
    Number: number;
    Image: string;
    First_Episode_Air_Date: string;
    Last_Episode_Air_Date: string;
    Episodes: Array<Episode>;
}
