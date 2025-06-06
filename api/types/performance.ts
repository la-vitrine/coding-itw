export type TechnicalRequirements = {
    stageSize: "Petit" | "Moyen" | "Grand";
    soundSystem: "Basique" | "Standard" | "Professionnel";
    lighting: "Standard" | "Complet";
    specialEffects: string[];
  };
  
  export type Performance = {
    id: number;
    tourId: number;
    date: string;
    time: string;
    city: string;
    venue: string;
    capacity: number;
    ticketsSold: number;
    ticketPrice: number;
    status: "Complet" | "Presque Complet" | "En vente" | "Terminé" | "Annulé";
    category: "Première" | "Standard" | "Spéciale";
    technicalRequirements: TechnicalRequirements;
    notes: string;
  }; 