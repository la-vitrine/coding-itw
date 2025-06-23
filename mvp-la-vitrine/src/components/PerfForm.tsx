import React, { useState } from 'react';
import type { Performance } from '../api/api';

export type PerformanceData = Omit<Performance, 'id'>;

export interface PerfFormProps {
  tourId: number;
  onPerformanceAdded: (performanceData: PerformanceData) => void;
}

type NewPerformanceData = Omit<Performance, 'id' | 'tourId'>;

const initialForm: NewPerformanceData = {
  date: '',
  time: '',
  city: '',
  venue: '',
  ticketsSold: 0,
  capacity: 0,
  ticketPrice: 0,

  //Valeur que j'ai choisies par défaut car rien n'est précisé dans l'énoncé.
  status: 'En vente',
  category: 'Standard',
  technicalRequirements: {
    stageSize: 'Moyen',
    soundSystem: 'Standard',
    lighting: 'Standard',
    specialEffects: [],
  },
  notes: 'Nouvelle date de représentation',
};

export default function PerfForm({
  tourId,
  onPerformanceAdded,
}: PerfFormProps) {
  const [formData, setFormData] = useState<NewPerformanceData>(initialForm);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'number' ? parseFloat(value) || 0 : value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const performanceData: PerformanceData = {
      ...formData,
      tourId: tourId,
    };

    onPerformanceAdded(performanceData);

    setFormData(initialForm);
  };

  return (
    <div className='form'>
      <h3>Ajouter une performance</h3>
      <form onSubmit={handleSubmit}>
        <div className='form-row'>
          <div className='form-group'>
            <label htmlFor='date'>Date</label>
            <input
              type='date'
              id='date'
              name='date'
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='time'>Heure</label>
            <input
              type='time'
              id='time'
              name='time'
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className='form-row'>
          <div className='form-group'>
            <label htmlFor='city'>Ville</label>
            <input
              type='text'
              id='city'
              name='city'
              placeholder='Montréal'
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='venue'>Lieu</label>
            <input
              type='text'
              id='venue'
              name='venue'
              placeholder='Centre Bell'
              value={formData.venue}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className='form-row'>
          <div className='form-group'>
            <label htmlFor='ticketsSold'>Places vendues</label>
            <input
              type='number'
              id='ticketsSold'
              name='ticketsSold'
              value={formData.ticketsSold}
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='capacity'>Capacité totale</label>
            <input
              type='number'
              id='capacity'
              name='capacity'
              value={formData.capacity}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='ticketPrice'>Prix du billet</label>
            <input
              type='number'
              id='ticketPrice'
              name='ticketPrice'
              value={formData.ticketPrice}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button type='submit'>Ajouter la représentation</button>
      </form>
    </div>
  );
}
