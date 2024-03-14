import React from "react";
import { fetchTransactionsData } from "../../api/allApi";

const Transactions: React.FC = () => {
  const transactionsData = fetchTransactionsData();
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
        <div
          role="button"
          className="text-blue-600 hover:text-blue-800 text-sm font-semibold"
        >
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
