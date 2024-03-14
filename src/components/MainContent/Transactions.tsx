import React from "react";

const transactionsData = [
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
    type: "Completed",
    method: "Mastercard **** 6442",
    amount: "$99.00",
    date: "Jan 17, 2022",
    vendor: "Facebook",
    statusColor: "bg-green-500",
    methodType: "Card Payment",
  },
];

const Transactions: React.FC = () => {
  const statusClasses = (status: string) => {
    switch (status) {
      case "Completed":
        return "text-green-600 bg-green-100";
      case "Pending":
        return "text-yellow-600 bg-yellow-100";
      case "Canceled":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };
  return (
    <div className="bg-white p-6 rounded-lg shadow mb-4">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold mb-4">Transactions</h2>
        <div className="text-blue-600 hover:text-blue-800 text-sm font-semibold">
          See All Transactions
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm divide-y divide-gray-200">
          <tbody className="divide-y divide-gray-200">
            {transactionsData.map((transaction) => (
              <tr key={transaction.id}>
                <td className={`py-4 pl-4 pr-3}`}>
                  <span
                    className={`p-2 rounded-full ${statusClasses(
                      transaction.type
                    )}`}
                  >
                    <span
                      className={`inline-block w-3 h-3 rounded-full ${transaction.statusColor} mr-2`}
                    />
                    {transaction.type}
                  </span>
                </td>
                <td className="py-4">
                  <div className="font-bold">{transaction.method}</div>
                  <div className="text-gray-500">{transaction.methodType}</div>
                </td>
                <td className="py-4">
                  <div className="font-bold">{transaction.amount}</div>
                  <div className="text-gray-500">{transaction.date}</div>
                </td>
                <td className="py-4 text-gray-500">{transaction.vendor}</td>
                <td className="py-4 flex justify-center items-center font-bold">
                  ...
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
