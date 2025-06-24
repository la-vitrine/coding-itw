import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchTours } from './api/api';
import type { Tour } from './api/api';
import Tours from './components/Tours';
import TourDetails from './components/TourDetails';
import Dashboard from './pages/Dashboard';
import { Link } from 'react-router-dom';

function App() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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
          <h1>MVP Tournées</h1>
          <Link to='/dashboard'>Dashboard</Link>
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
