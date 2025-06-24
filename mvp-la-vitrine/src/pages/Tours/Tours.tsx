import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Tour } from '../../api/api';
import './Tours.css';

interface ToursProps {
  tours: Tour[];
  loading: boolean;
  error: string | null;
}

export default function Tours({ tours, loading, error }: ToursProps) {
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  const [search, setSearch] = useState<string>('');

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
      {/* Boutons de filtre */}
      <div className='filtre'>
        <button
          onClick={() => setSelectedStatus(null)}
          className={!selectedStatus ? 'active' : ''}
        >
          Toutes les tournées
        </button>
        {statuses.map((status) => (
          <button
            key={status}
            onClick={() => setSelectedStatus(status)}
            className={selectedStatus === status ? 'active' : ''}
          >
            {status}
          </button>
        ))}
      </div>
      {/* Searchbar */}
      <input
        type='text'
        placeholder='Rechercher par titre de spectacle'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='searchBar'
      />
      {/* Affichage des tournées */}

      <div className='tours'>
        {filtre.length === 0 && 'Pas de tournée correspondante.'}
        {filtre.map((tour) => (
          <Link
            to={`/tours/${tour.id}/performances`}
            key={tour.id}
            className='tourLink'
          >
            <div className='tourCard'>
              <h2>{tour.name}</h2>
              <p>{tour.status}</p>
              <p>Nombre de représentations : {tour.totalPerformances}</p>
              <p>Revenus totaux : {tour.totalRevenue}$ </p>
              <p>Taux de remplissage moyen : {tour.averageFillRate}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
