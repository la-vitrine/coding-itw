import { useState, useEffect } from 'react';
import type { Tour } from '../api/api';
import { fetchTours } from '../api/api';
import './Tours.css';

export default function Tours() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  useEffect(() => {
    const getTours = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await fetchTours();
        setTours(data);
      } catch (err) {
        console.error('Erreur affichage des tournées:', err);
        setError(
          'Impossible de charger les tournées. Veuillez réessayer plus tard.'
        );
      } finally {
        setLoading(false);
      }
    };

    getTours();
  }, []);

  if (loading) {
    return <div>Chargement des tournées...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (tours.length === 0) {
    return <div>Aucune tournée disponible pour le moment.</div>;
  }

  const statuses = ['En cours', 'Planifiée', 'Terminée', 'Annulée'];
  const filtre = selectedStatus
    ? tours.filter((tour) => tour.status === selectedStatus)
    : tours;

  return (
    <>
      <div className='filtre'>
        {statuses.map((status) => (
          <button
            key={status}
            onClick={() => setSelectedStatus(status)}
            className={selectedStatus === status ? 'active' : ''}
          >
            {status}
          </button>
        ))}
        <button onClick={() => setSelectedStatus(null)}>
          Toutes les tournées
        </button>
      </div>
      <div className='tours'>
        {filtre.map((tour) => (
          <div key={tour.id} className='tourCard'>
            <h2>{tour.name}</h2>
            <p>{tour.status}</p>
            <p>Nombre de représentations : {tour.totalPerformances}</p>
            <p>Revenus totaux : {tour.totalRevenue} </p>
            <p>Taux de remplissage moyen : {tour.averageFillRate}</p>
          </div>
        ))}
      </div>
    </>
  );
}
