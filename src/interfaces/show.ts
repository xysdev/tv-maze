export interface Show {
    id: number;
    name: string;
    genres: string[];
    status: string;
    runtime: number;
    premiered: string;
    officialSite: string;
    schedule: {
      time: string;
      days: string[];
    };
    rating: {
      average: number;
    };
    network: {
      id: number;
      name: string;
      country: {
        name: string;
        code: string;
        timezone: string;
      };
    };
    webChannel?: {
      id: number;
      name: string;
      country: {
        name: string;
        code: string;
        timezone: string;
      };
    };
    image: {
      medium: string;
      original: string;
    };
    summary: string;
    updated: number;
  }
