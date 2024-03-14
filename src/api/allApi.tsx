export const fetchStatsData = () => {
  return [
    {
      label: "TODAY'S SALE",
      value: "$12,426",
      change: "+36%",
      changeType: "increase",
    },
    {
      label: "TOTAL SALES",
      value: "$238,485",
      change: "+14%",
      changeType: "decrease",
    },
    {
      label: "TOTAL ORDERS",
      value: "84,382",
      change: "+36%",
      changeType: "increase",
    },
    {
      label: "TOTAL CUSTOMERS",
      value: "33,493",
      change: "+36%",
      changeType: "increase",
    },
  ];
};
export const fetchSalesData = () => {
  return {
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
          30000, 50000, 45000, 60000, 70000, 65000, 75000, 80000, 85000, 90000,
          100000, 110000,
        ],
        fill: true,
        backgroundColor: "rgba(117, 156, 250, 0.2)",
        borderColor: "rgb(117, 156, 250)",
        // tension: 0.3,
      },
      {
        label: "Sales",
        data: [
          10000, 20000, 30000, 50000, 45000, 60000, 70000, 65000, 75000, 80000,
          85000, 90000,
        ],
        fill: true,
        backgroundColor: "rgba(117, 156, 250, 0.2)",
        borderColor: "rgb(117, 156, 250)",
        // tension: 0.3,
      },
    ],
  };
};
export const fetchTransactionsData = () => {
  return [
    {
      id: 1,
      type: "Completed",
      method: "Visa card **** 4831",
      amount: "$182.94",
      date: "Jan 17, 2022",
      vendor: "Amazon",
      statusColor: "bg-green-500",
      methodType: "Card Payment",
    },
    {
      id: 2,
      type: "Pending",
      method: "Mastercard **** 6442",
      amount: "$99.00",
      date: "Jan 17, 2022",
      vendor: "Facebook",
      statusColor: "bg-green-500",
      methodType: "Card Payment",
    },
  ];
};
export const fetchTrafficSourcesData = () => {
  return [
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
};
export const fetchRecentCustomersData = () => {
  return [
    {
      id: 1,
      name: "Jenny Wilson",
      email: "j.wilson@example.com",
      purchase: "$11,234",
      city: "Austin",
    },
    {
      id: 2,
      name: "Devon Lane",
      email: "d.lane@example.com",
      purchase: "$11,159",
      city: "New York",
    },
  ];
};
