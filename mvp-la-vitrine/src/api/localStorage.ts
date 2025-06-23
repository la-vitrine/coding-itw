import type { Performance } from './api.ts';

export const getPerformancesFromStorage = (): Performance[] => {
  const data = localStorage.getItem('performances');
  if (data) {
    return JSON.parse(data) as Performance[];
  }
  return [];
};

export const savePerformancesToStorage = (
  performances: Performance[]
): void => {
  localStorage.setItem('performances', JSON.stringify(performances));
};
