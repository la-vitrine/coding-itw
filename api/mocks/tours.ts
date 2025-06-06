import { Tour } from "../types/tour.ts";

export const tours: Tour[] = [
  {
    id: 1,
    showId: 1,
    name: "Tournée Roméo et Juliette 2024",
    status: "En cours",
    startDate: "2024-03-01",
    endDate: "2024-06-30",
    totalPerformances: 12,
    totalRevenue: 24000,
    averageFillRate: 85,
    productionCost: 150000,
    marketingBudget: 50000,
    team: {
      director: "Jean Dupont",
      stageManager: "Marie Laurent",
      technicalDirector: "Pierre Martin",
      costumeDesigner: "Sophie Dubois"
    },
    notes: "Tournée nationale avec focus sur les grandes villes"
  },
  {
    id: 2,
    showId: 2,
    name: "Le Misanthrope - Tournée Estivale",
    status: "Planifiée",
    startDate: "2024-07-01",
    endDate: "2024-09-30",
    totalPerformances: 8,
    totalRevenue: 0,
    averageFillRate: 0,
    productionCost: 120000,
    marketingBudget: 40000,
    team: {
      director: "Marie Martin",
      stageManager: "Thomas Dubois",
      technicalDirector: "Jean Petit",
      costumeDesigner: "Catherine Moreau"
    },
    notes: "Tournée estivale dans les festivals"
  },
  {
    id: 3,
    showId: 3,
    name: "Antigone - Tournée Hivernale",
    status: "Terminée",
    startDate: "2024-01-01",
    endDate: "2024-02-28",
    totalPerformances: 10,
    totalRevenue: 18000,
    averageFillRate: 75,
    productionCost: 100000,
    marketingBudget: 30000,
    team: {
      director: "Pierre Durand",
      stageManager: "Isabelle Martin",
      technicalDirector: "Robert Dubois",
      costumeDesigner: "Anne Laurent"
    },
    notes: "Tournée hivernale dans les théâtres nationaux"
  },
  {
    id: 4,
    showId: 4,
    name: "Les Fourberies de Scapin - Tournée Printemps",
    status: "En cours",
    startDate: "2024-04-01",
    endDate: "2024-05-31",
    totalPerformances: 6,
    totalRevenue: 12000,
    averageFillRate: 90,
    productionCost: 80000,
    marketingBudget: 25000,
    team: {
      director: "Sophie Bernard",
      stageManager: "Philippe Martin",
      technicalDirector: "Lucie Dubois",
      costumeDesigner: "Michel Moreau"
    },
    notes: "Tournée printanière dans les théâtres municipaux"
  },
  {
    id: 5,
    showId: 5,
    name: "Hamlet - Tournée Automnale",
    status: "Planifiée",
    startDate: "2024-10-01",
    endDate: "2024-12-31",
    totalPerformances: 15,
    totalRevenue: 0,
    averageFillRate: 0,
    productionCost: 200000,
    marketingBudget: 75000,
    team: {
      director: "Thomas Laurent",
      stageManager: "Émilie Dubois",
      technicalDirector: "David Martin",
      costumeDesigner: "Marie Bernard"
    },
    notes: "Grande tournée automnale dans les opéras nationaux"
  }
];
