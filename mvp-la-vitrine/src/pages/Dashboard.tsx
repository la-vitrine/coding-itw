import type { Tour } from '../api/api';

interface DashboardProps {
  tours: Tour[];
  loading: boolean;
  error: string | null;
}

export default function Dashboard({ tours, loading, error }: DashboardProps) {
  const totalRepresentations = tours.reduce((total, tour) => {
    return total + tour.totalPerformances;
  }, 0);

  const revenusCumules = tours.reduce((total, tour) => {
    return total + tour.totalRevenue;
  }, 0);

  const sommeRemplissage = tours.reduce((total, tour) => {
    return total + tour.averageFillRate;
  }, 0);

  const tauxRemplissage =
    sommeRemplissage / tours.length || "Aucun spectacle n'a été joué";

  if (loading) {
    return <div>Chargement des tournées...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='dashboard'>
      <h2>Tableau de bord</h2>

      <div className='statCard'>
        <h3>Total représentations</h3>
        <p>{totalRepresentations}</p>
      </div>
      <div className='statCard'>
        <h3>Revenus cumulés</h3>
        <p>{revenusCumules}</p>
      </div>
      <div className='statCard'>
        <h3>Taux de remplissage moyen</h3>
        <p>{tauxRemplissage}%</p>
      </div>
    </div>
  );
}
