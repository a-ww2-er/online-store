"use client"
import React from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, ArcElement);

const lineData = {
  labels: Array.from({ length: 30 }, (_, i) => i + 1),
  datasets: [
    {
      label: 'This Month',
      data: [140, 150, 180, 220, 200, 230, 210, 240, 230, 220, 240, 230, 210, 200, 220, 240, 250, 260, 240, 220, 210, 200, 220, 240, 250, 260, 240, 220, 210, 200],
      borderColor: 'rgba(107, 33, 168, 1)',
      backgroundColor: 'rgba(107, 33, 168, 0.2)',
      fill: true,
    },
    {
      label: 'Previous Month',
      data: [130, 140, 160, 200, 180, 210, 190, 220, 210, 200, 220, 210, 190, 180, 200, 220, 230, 240, 220, 200, 190, 180, 200, 220, 230, 240, 220, 200, 190, 180],
      borderColor: 'rgba(186, 104, 200, 1)',
      backgroundColor: 'rgba(186, 104, 200, 0.2)',
      fill: true,
    },
  ],
};

const doughnutData = {
  labels: ['Google.com .inc', 'Recommended flow', 'Other'],
  datasets: [
    {
      data: [3124213, 1523151, 948213],
      backgroundColor: ['#7e57c2', '#ba68c8', '#e1bee7'],
      hoverBackgroundColor: ['#7e57c2', '#ba68c8', '#e1bee7'],
    },
  ],
};

const Analytics = () => {
  return (
    <div className="min-h-screen p-6">
      <div className="bg-white p-6 rounded-lg shadow mb-8 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold mb-4">Your sales report</h2>
          <p className="text-4xl font-bold">$220,342,123</p>
          <p className="text-gray-500">This Month</p>
        </div>
        <div className="w-1/2 h-48">
          <Line data={lineData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </div>

      <div className="flex justify-between mb-8">
        <div className="bg-white p-6 rounded-lg shadow w-1/2 mr-4">
          <div className="h-48">
            <Doughnut data={doughnutData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
          <div className="text-center mt-4">
            <p className="text-2xl font-bold">5,824,213</p>
            <p className="text-gray-500">Total</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow w-1/2 ml-4">
          <h2 className="text-xl font-semibold mb-4">Active Percentage</h2>
          <p className="text-4xl font-bold">594</p>
          <div className="flex justify-between mt-4">
            <div className="text-center">
              <p className="text-xl text-purple-700">179 users</p>
              <p className="text-gray-500">Online</p>
            </div>
            <div className="text-center">
              <p className="text-xl text-purple-700">394 users</p>
              <p className="text-gray-500">Offline</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
