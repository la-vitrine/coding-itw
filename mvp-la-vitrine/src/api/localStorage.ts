import type { Performance } from './api.ts';

// Lecture des performances du local storage
export const getPerformancesFromStorage = (): Performance[] => {
  const data = localStorage.getItem('performances');
  if (data) {
    return JSON.parse(data) as Performance[];
  }
  return [];
};

// Ecriture des performances  dans le local storage
export const savePerformancesToStorage = (
  performances: Performance[]
): void => {
  localStorage.setItem('performances', JSON.stringify(performances));
};
