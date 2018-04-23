import { Season } from './season';

export class Serie {
    id: number;
    Title: string;
    Image: string;
    Country: string;
    Description: string;
    First_Episode_Air_Date: string;
    Seasons: Array<Season>;
}
