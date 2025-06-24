import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { Tour, Performance } from '../../api/api';
import { fetchTourById, fetchPerformances } from '../../api/api';
import {
  getPerformancesFromStorage,
  savePerformancesToStorage,
} from '../../api/localStorage';
import PerfForm from '../../components/PerfForm/PerfForm';
import type { PerformanceData } from '../../components/PerfForm/PerfForm';
import './TourDetails.css';

export default function TourDetails() {
  const [tour, setTour] = useState<Tour | null>(null);
  const [performances, setPerformances] = useState<Performance[]>([]);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { id } = useParams<{ id: string }>();

  // Récupération des données de la tournée et des performances associées
  useEffect(() => {
    const getPerformances = async () => {
      try {
        setLoading(true);
        setError(null);

        const [tourData, apiPerformances] = await Promise.all([
          fetchTourById(id),
          fetchPerformances(),
        ]);

        setTour(tourData);
        const performancesFromStorage = getPerformancesFromStorage();

        const allPerformances = apiPerformances.concat(performancesFromStorage);

        const performancesOfTour = allPerformances.filter(
          (perf) => perf.tourId === tourData.id
        );

        setPerformances(performancesOfTour);
      } catch (err) {
        setError('Tournée non trouvée.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getPerformances();
  }, [id]);

  const handleAddPerformance = (performanceToAdd: PerformanceData) => {
    const allPerformances = getPerformancesFromStorage();

    // Assignation d'un nouvel ID pour ajoute la performance créée
    const maxId = allPerformances.reduce((currentMaxId, perf) => {
      return perf.id > currentMaxId ? perf.id : currentMaxId;
    }, 0);
    const newPerformanceId = maxId + 1;

    const newPerformance: Performance = {
      ...performanceToAdd,
      id: newPerformanceId,
    };

    const updatedPerformances = [...allPerformances, newPerformance];
    savePerformancesToStorage(updatedPerformances);

    setPerformances((prev) => [...prev, newPerformance]);
  };

  if (loading) return <div>Chargement des tournées</div>;
  if (error) return <div className='error-message'>{error}</div>;
  if (!tour) return <div>Tournée non trouvée.</div>;

  const formatDate: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return (
    <>
      <h1 className='tourName'>{tour.name}</h1>
      {performances.length === 0 && 'Pas de date pour cette tournée'}
      <div className='performances'>
        {performances.map((perf) => (
          <div key={perf.id} className='performanceCard'>
            <h3>
              {perf.city} - {perf.venue}
            </h3>
            <p>
              {new Date(perf.date).toLocaleDateString('fr-CA', formatDate)} -{' '}
              {perf.time}
            </p>
            <p>
              Places vendues : {perf.ticketsSold} / {perf.capacity}
            </p>
            <p>{perf.ticketPrice}$</p>
          </div>
        ))}
      </div>
      <PerfForm tourId={tour.id} onPerformanceAdded={handleAddPerformance} />
      <Link to='/' className='retour'>
        Retour à la liste des tournées
      </Link>
    </>
  );
}
