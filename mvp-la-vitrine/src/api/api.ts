// api.ts (Corrected version)
export interface TourTeam {
  // This should also be exported if used elsewhere
  director: string;
  stageManager: string;
  technicalDirector: string;
  costumeDesigner: string;
}

// IMPORTANT: Add 'export' here for the Tour interface
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

const API_URL = 'http://localhost:8000'; // Your API base URL

export const fetchTours = async (): Promise<Tour[]> => {
  try {
    const response = await fetch(`${API_URL}/tours`); // Added '/' for robust path
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
    throw error; // Re-throw the error so the calling component can handle it
  }
};
