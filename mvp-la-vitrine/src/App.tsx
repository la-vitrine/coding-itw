import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tours from './components/Tours';
import TourDetails from './components/TourDetails';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <h1>MVP Tournées</h1>
        <main>
          <Routes>
            <Route path='/' element={<Tours />} />
            <Route path='/tours/:id/performances' element={<TourDetails />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
