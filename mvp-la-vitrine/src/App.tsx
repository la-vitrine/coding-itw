import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchTours } from './api/api';
import type { Tour } from './api/api';
import Tours from './pages/Tours/Tours';
import TourDetails from './pages/TourDetails/TourDetails';
import Dashboard from './pages/Dashboard/Dashboard';
import { NavLink } from 'react-router-dom';

function App() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Recupération des données des tournées depuis l'API
  useEffect(() => {
    const getTours = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await fetchTours();
        setTours(data);
      } catch (err) {
        console.error('Erreur affichage données des tournées:', err);
        setError('Impossible de charger les données des tournées.');
      } finally {
        setLoading(false);
      }
    };

    getTours();
  }, []);

  return (
    <BrowserRouter>
      <div className='App'>
        <header>
          <NavLink to='/'>
            <h1>MVP Tournées</h1>
          </NavLink>
          <NavLink to='/dashboard'>Dashboard</NavLink>
        </header>

        <main>
          <Routes>
            <Route
              path='/'
              element={<Tours tours={tours} loading={loading} error={error} />}
            />
            <Route path='/tours/:id/performances' element={<TourDetails />} />
            <Route
              path='/dashboard'
              element={
                <Dashboard tours={tours} loading={loading} error={error} />
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
