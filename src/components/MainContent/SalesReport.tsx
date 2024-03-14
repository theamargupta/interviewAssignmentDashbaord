import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const SalesReport: React.FC = () => {
  const salesData = {
    labels: [
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
    ],
    datasets: [
      {
        label: "Sales",
        data: [
          20000, 40000, 30000, 50000, 45000, 60000, 70000, 65000, 75000, 80000,
          85000, 90000,
        ],
        fill: true,
        backgroundColor: "rgba(117, 156, 250, 0.2)",
        borderColor: "rgb(117, 156, 250)",
        tension: 0.3,
      },
    ],
  };

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
        grid: {
          borderDash: [5, 5],
        },
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
