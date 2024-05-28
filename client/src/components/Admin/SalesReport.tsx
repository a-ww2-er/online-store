"use client"
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';
import Image from 'next/image';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Sales',
      data: [1500, 2000, 1800, 2200, 2500, 2100, 2700],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      fill: true,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      beginAtZero: true,
    },
    y: {
      beginAtZero: true,
    },
  },
};

const SalesReport = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow mb-8 flex justify-between">
      <div>
        <h2 className="text-xl font-semibold mb-4">Your sales report</h2>
        <p className="text-4xl font-bold">$4,435.70</p>
        <p className="text-green-500">+2,330.00 (+2.5%)</p>
      </div>
      {/* Sales chart */}
      <div className="mt-4 w-1/2">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default SalesReport;
