const API_URL = 'http://localhost:8000';

export interface TourTeam {
  director: string;
  stageManager: string;
  technicalDirector: string;
  costumeDesigner: string;
}

export interface Tour {
  id: number;
  showId: number;
  name: string;
  status: 'En cours' | 'Planifiée' | 'Terminée' | 'Annulée';
  startDate: string;
  endDate: string;
  totalPerformances: number;
  totalRevenue: number;
  averageFillRate: number;
  productionCost: number;
  marketingBudget: number;
  team: TourTeam;
  notes: string;
}

export const fetchTours = async (): Promise<Tour[]> => {
  try {
    const response = await fetch(`${API_URL}/tours`);
    if (!response.ok) {
      throw new Error(
        `Échec de la récupération des tournées: ${response.status} ${response.statusText}`
      );
    }
    return response.json();
  } catch (error) {
    console.error(
      'Erreur lors de la tentative de récupération des tournées:',
      error
    );
    throw error;
  }
};

export const fetchTourById = async (id: string): Promise<Tour[]> => {
  try {
    const response = await fetch(`${API_URL}/tours/${id}`);
    if (!response.ok) {
      throw new Error(
        `Échec de la récupération de la tournée: ${response.status}`
      );
    }
    return response.json();
  } catch (error) {
    console.error(`Erreur lors de la récupération de la tournée ${id}:`, error);
    throw error;
  }
};

export interface TechnicalRequirements {
  stageSize: 'Petit' | 'Moyen' | 'Grand';
  soundSystem: 'Basique' | 'Standard' | 'Professionnel';
  lighting: 'Standard' | 'Complet';
  specialEffects: string[];
}

export interface Performance {
  id: number;
  tourId: number;
  date: string;
  time: string;
  city: string;
  venue: string;
  capacity: number;
  ticketsSold: number;
  ticketPrice: number;
  status: 'Complet' | 'Presque Complet' | 'En vente' | 'Terminé' | 'Annulé';
  category: 'Première' | 'Standard' | 'Spéciale';
  technicalRequirements: TechnicalRequirements;
  notes: string;
}

export const fetchPerformances = async (): Promise<Performance[]> => {
  try {
    const response = await fetch(`${API_URL}/performances`);
    if (!response.ok) {
      throw new Error(
        `Échec de la récupération des performances: ${response.status} ${response.statusText}`
      );
    }
    return response.json();
  } catch (error) {
    console.error(
      'Erreur lors de la tentative de récupération des performances:',
      error
    );
    throw error;
  }
};
