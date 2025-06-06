import { Show } from "../types/show.ts";

export const shows: Show[] = [
    {
      id: 1,
      title: "Roméo et Juliette",
      description: "La tragique histoire d'amour de Roméo et Juliette, deux jeunes amants de Vérone dont la mort réconcilie leurs familles ennemies.",
      duration: 180,
      genre: "Tragédie",
      director: "Jean Dupont",
      cast: [
        "Marie Laurent - Juliette",
        "Thomas Dubois - Roméo",
        "Sophie Martin - La Nourrice",
        "Pierre Durand - Mercutio"
      ],
      year: 2024,
      language: "Français",
      intermission: true,
      intermissionDuration: 20
    },
    {
      id: 2,
      title: "Le Misanthrope",
      description: "Comédie de Molière sur l'hypocrisie sociale, où Alceste, misanthrope, critique la société mondaine tout en étant amoureux de Célimène, une coquette.",
      duration: 150,
      genre: "Comédie",
      director: "Marie Martin",
      cast: [
        "Louis Bernard - Alceste",
        "Julie Moreau - Célimène",
        "Paul Dubois - Philinte",
        "Anne Petit - Arsinoé"
      ],
      year: 2024,
      language: "Français",
      intermission: true,
      intermissionDuration: 15
    },
    {
      id: 3,
      title: "Antigone",
      description: "Tragédie grecque sur le conflit entre la loi divine et la loi humaine, où Antigone défie le roi Créon pour enterrer son frère Polynice.",
      duration: 120,
      genre: "Tragédie",
      director: "Pierre Durand",
      cast: [
        "Claire Dubois - Antigone",
        "Marc Laurent - Créon",
        "Isabelle Martin - Ismène",
        "Jean Dupont - Hémon"
      ],
      year: 2024,
      language: "Français",
      intermission: true,
      intermissionDuration: 15
    },
    {
      id: 4,
      title: "Les Fourberies de Scapin",
      description: "Comédie de Molière où Scapin, valet rusé, aide deux jeunes gens à obtenir l'argent nécessaire pour épouser leurs bien-aimées.",
      duration: 140,
      genre: "Comédie",
      director: "Sophie Bernard",
      cast: [
        "Michel Dubois - Scapin",
        "Catherine Moreau - Zerbinette",
        "Philippe Martin - Géronte",
        "Lucie Petit - Hyacinte"
      ],
      year: 2024,
      language: "Français",
      intermission: true,
      intermissionDuration: 15
    },
    {
      id: 5,
      title: "Hamlet",
      description: "Tragédie de Shakespeare où le prince Hamlet cherche à venger le meurtre de son père par son oncle, devenu roi et époux de sa mère.",
      duration: 200,
      genre: "Tragédie",
      director: "Thomas Laurent",
      cast: [
        "David Martin - Hamlet",
        "Émilie Dubois - Ophélie",
        "Robert Petit - Claudius",
        "Marie Bernard - Gertrude"
      ],
      year: 2024,
      language: "Français",
      intermission: true,
      intermissionDuration: 20
    }
];
