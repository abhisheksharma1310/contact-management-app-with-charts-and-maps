import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { useGraphData } from '../api';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: ' Data for cases with date',
      },
    },
};

const Charts: React.FC = () => {
  const { isLoading, data: graphData } = useGraphData();

  if (isLoading) {
    return <h3 className="text-xl mt-8">Loading...</h3>; // Handle loading or error state
  }

  const chartData = {
    labels: Object.keys(graphData.cases),
    datasets: [
      {
        label: 'Total Cases',
        data: Object.values(graphData.cases),
        borderColor: 'rgb(75, 192, 192)',
        fill: false,
      },
      // Add datasets for other data (deaths, recovered) if needed
    ],
  };

  return (
    <div>
      <h2>COVID-19 Cases Over Time</h2>
      <Line options={options} data={chartData} />
    </div>
  );
};

export default Charts;
