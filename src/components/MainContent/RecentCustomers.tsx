import React from "react";
import { fetchRecentCustomersData } from "../../api/allApi";

const RecentCustomers: React.FC = () => {
  const recentCustomersData = fetchRecentCustomersData();
  return (
    <div className="bg-white p-6 rounded-lg shadow mb-4">
      <h2 className="text-xl font-semibold mb-4">Recent Customers</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm ">
          <tbody className="">
            {recentCustomersData.map((customer) => (
              <tr role="button" key={customer.id} className="hover:bg-gray-50">
                <td className="py-4 ">
                  <img src="/image1.png" className="w-10 h-10" alt="" />
                </td>
                <td className="py-4 ">
                  <div className="font-bold">{customer.name}</div>
                  <div className="text-gray-500">{customer.email}</div>
                </td>
                <td className="py-4 ">
                  <div className="font-bold">{customer.purchase}</div>
                  <div className="text-gray-500">{customer.city}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-left mt-4">
        <div
          role="button"
          className="text-gray-600 hover:text-gray-800 text-sm font-semibold"
        >
          See All Customers
        </div>
      </div>
    </div>
  );
};

export default RecentCustomers;
