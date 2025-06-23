import { useState, useEffect } from 'react';
import type { Tour } from '../api/api';
import { fetchTours } from '../api/api';
import './Tours.css';

export default function Tours() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  const [search, setSearch] = useState<string>('');

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
  const filtre = tours
    .filter((tour) => {
      return selectedStatus ? tour.status === selectedStatus : tours;
    })
    .filter((tour) => {
      return tour.name.toLowerCase().includes(search.toLowerCase());
    });

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
      <input
        type='text'
        placeholder='Rechercher par titre de spectacle'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className='tours'>
        {filtre.length === 0 && 'Pas de tournée correspondante.'}
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
