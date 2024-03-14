import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { fetchSalesData } from "../../api/allApi";

const SalesReport: React.FC = () => {
  const salesData = fetchSalesData();

  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow mb-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Sales Report</h2>
        <button className="text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Export PDF
        </button>
      </div>
      <div className="relative h-64">
        {/* Render the line chart */}
        <Line data={salesData} options={options} />
      </div>
    </div>
  );
};

export default SalesReport;
