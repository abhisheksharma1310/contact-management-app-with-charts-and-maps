
import { useQuery } from 'react-query';

// Use useQuery to fetch data and manage state
export const useWorldWideData = () => {
  return useQuery('worldWideData', () => fetch('https://disease.sh/v3/covid-19/all').then(res =>
      res.json()
    ));
};

export const useCountryData = () => {
  return useQuery('countryData', () => fetch('https://disease.sh/v3/covid-19/countries').then(res =>
      res.json()
    ));
};

export const useGraphData = () => {
  return useQuery('graphData', () => fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all').then(res =>
      res.json()
    ));
};
