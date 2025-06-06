import { Performance } from "../types/performance.ts";

export const performances: Performance[] = [
    {
      id: 1,
      tourId: 1,
      date: "2024-03-15",
      time: "20:00",
      city: "Paris",
      venue: "Théâtre de la Ville",
      capacity: 500,
      ticketsSold: 425,
      ticketPrice: 35,
      status: "Complet",
      category: "Première",
      technicalRequirements: {
        stageSize: "Grand",
        soundSystem: "Professionnel",
        lighting: "Complet",
        specialEffects: ["Brouillard", "Projections"]
      },
      notes: "Première représentation de la tournée"
    },
    {
      id: 2,
      tourId: 1,
      date: "2024-03-20", 
      time: "20:00",
      city: "Lyon",
      venue: "Théâtre des Célestins",
      capacity: 400,
      ticketsSold: 380,
      ticketPrice: 30,
      status: "Presque Complet",
      category: "Standard",
      technicalRequirements: {
        stageSize: "Moyen",
        soundSystem: "Professionnel",
        lighting: "Complet",
        specialEffects: ["Brouillard"]
      },
      notes: "Représentation spéciale pour les abonnés"
    },
    {
      id: 3,
      tourId: 2,
      date: "2024-07-05",
      time: "20:30", 
      city: "Marseille",
      venue: "Théâtre de la Criée",
      capacity: 300,
      ticketsSold: 0,
      ticketPrice: 25,
      status: "En vente",
      category: "Première",
      technicalRequirements: {
        stageSize: "Petit",
        soundSystem: "Basique",
        lighting: "Standard",
        specialEffects: []
      },
      notes: "Première de la tournée estivale"
    },
    {
      id: 4,
      tourId: 3,
      date: "2024-01-20",
      time: "19:30",
      city: "Bordeaux", 
      venue: "Théâtre National",
      capacity: 450,
      ticketsSold: 315,
      ticketPrice: 32,
      status: "Terminé",
      category: "Standard",
      technicalRequirements: {
        stageSize: "Grand",
        soundSystem: "Professionnel",
        lighting: "Complet",
        specialEffects: ["Projections"]
      },
      notes: "Dernière représentation de la tournée hivernale"
    },
    {
      id: 5,
      tourId: 2,
      date: "2024-07-10",
      time: "20:00",
      city: "Nice",
      venue: "Opéra de Nice",
      capacity: 550,
      ticketsSold: 0,
      ticketPrice: 28,
      status: "En vente",
      category: "Standard",
      technicalRequirements: {
        stageSize: "Grand",
        soundSystem: "Professionnel",
        lighting: "Complet",
        specialEffects: ["Brouillard", "Projections"]
      },
      notes: "Représentation dans le cadre du festival d'été"
    },
    {
      id: 6,
      tourId: 3,
      date: "2024-01-25",
      time: "19:30",
      city: "Toulouse",
      venue: "Théâtre du Capitole",
      capacity: 600,
      ticketsSold: 450,
      ticketPrice: 35,
      status: "Terminé",
      category: "Standard",
      technicalRequirements: {
        stageSize: "Grand",
        soundSystem: "Professionnel",
        lighting: "Complet",
        specialEffects: ["Projections"]
      },
      notes: "Représentation spéciale pour les étudiants"
    },
    {
      id: 7,
      tourId: 1,
      date: "2024-03-25",
      time: "20:30",
      city: "Strasbourg",
      venue: "Opéra National du Rhin",
      capacity: 475,
      ticketsSold: 400,
      ticketPrice: 33,
      status: "Presque Complet",
      category: "Standard",
      technicalRequirements: {
        stageSize: "Grand",
        soundSystem: "Professionnel",
        lighting: "Complet",
        specialEffects: ["Brouillard", "Projections"]
      },
      notes: "Représentation avec sous-titres en allemand"
    },
    {
      id: 8,
      tourId: 2,
      date: "2024-07-15",
      time: "20:00",
      city: "Montpellier",
      venue: "Opéra Comédie",
      capacity: 350,
      ticketsSold: 0,
      ticketPrice: 27,
      status: "En vente",
      category: "Standard",
      technicalRequirements: {
        stageSize: "Moyen",
        soundSystem: "Professionnel",
        lighting: "Complet",
        specialEffects: ["Brouillard"]
      },
      notes: "Représentation dans le cadre du festival de Montpellier"
    },
    {
      id: 9,
      tourId: 4,
      date: "2024-04-05",
      time: "20:00",
      city: "Nantes",
      venue: "Théâtre Graslin",
      capacity: 400,
      ticketsSold: 380,
      ticketPrice: 30,
      status: "Presque Complet",
      category: "Première",
      technicalRequirements: {
        stageSize: "Moyen",
        soundSystem: "Professionnel",
        lighting: "Complet",
        specialEffects: ["Brouillard"]
      },
      notes: "Première de la tournée printanière"
    },
    {
      id: 10,
      tourId: 5,
      date: "2024-10-10",
      time: "19:30",
      city: "Lille",
      venue: "Opéra de Lille",
      capacity: 500,
      ticketsSold: 0,
      ticketPrice: 40,
      status: "En vente",
      category: "Première",
      technicalRequirements: {
        stageSize: "Grand",
        soundSystem: "Professionnel",
        lighting: "Complet",
        specialEffects: ["Brouillard", "Projections", "Pyrotechnie"]
      },
      notes: "Première de la grande tournée automnale"
    }
];
