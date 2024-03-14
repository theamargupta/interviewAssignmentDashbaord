import React from "react";

const recentCustomersData = [
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

const RecentCustomers: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow mb-4">
      <h2 className="text-xl font-semibold mb-4">Recent Customers</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm ">
          <tbody className="">
            {recentCustomersData.map((customer) => (
              <tr key={customer.id} className="hover:bg-gray-50">
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
        <div className="text-gray-600 hover:text-gray-800 text-sm font-semibold">
          See All Customers
        </div>
      </div>
    </div>
  );
};

export default RecentCustomers;
