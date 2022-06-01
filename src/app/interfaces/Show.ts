export interface Show {
  genres: string[];
  id: number;
  image: {
    original: string;
  };
  name: string;
  rating: {
    average: number;
  };
  summary: string;
  ended: string;
  premiered: string;
}
