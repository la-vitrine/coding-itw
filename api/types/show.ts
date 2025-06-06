export type Show = {
  id: number;
  title: string;
  description: string;
  duration: number;
  genre: "Tragédie" | "Comédie" | "Drame" | "Opéra";
  director: string;
  cast: string[];
  year: number;
  language: string;
  intermission: boolean;
  intermissionDuration: number;
};
