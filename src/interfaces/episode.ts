export interface IEpisode {
    id: number;
    name: string;
    season: number;
    number: number;
    rating: {
        average: number;
    };
    image: {
        medium: string;
        original: string;
    };
    summary: string;
}
