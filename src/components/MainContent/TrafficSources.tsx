import React from "react";

const trafficSourcesData = [
  {
    id: 1,
    source: "Direct",
    visitors: 143382,
    maxVisitors: 200000,
  },
  {
    id: 2,
    source: "Referral",
    visitors: 87974,
    maxVisitors: 200000,
  },
  {
    id: 3,
    source: "Social Media",
    visitors: 45211,
    maxVisitors: 200000,
  },
  {
    id: 4,
    source: "Twitter",
    visitors: 21893,
    maxVisitors: 200000,
  },
];

const TrafficSources: React.FC = () => {
  const calculatePercentage = (visitors: number, maxVisitors: number) => {
    return (visitors / maxVisitors) * 100;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow mb-4">
      <h2 className="text-xl font-semibold mb-4">Traffic Sources</h2>
      {trafficSourcesData.map((source) => (
        <div key={source.id} className="mb-4 last:mb-0">
          <div className="flex justify-between items-center">
            <div className="text-sm font-medium text-gray-600">
              {source.source}
            </div>
            <div className="text-sm font-semibold text-gray-800">
              {source.visitors.toLocaleString()}
            </div>
          </div>
          <div className="w-full bg-[#F4F4F5] rounded h-2 ">
            <div
              className="bg-[#4F46E5] h-2 rounded"
              style={{
                width: `${calculatePercentage(
                  source.visitors,
                  source.maxVisitors
                )}%`,
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrafficSources;
