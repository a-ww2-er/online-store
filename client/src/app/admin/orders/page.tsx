import React from 'react';

const orders = [
  {
    id: '12345',
    customer: 'John Doe',
    date: '2024-05-26',
    status: 'Shipped',
    total: '$123.45',
    paymentStatus: 'Paid',
  },
  {
    id: '12346',
    customer: 'Jane Smith',
    date: '2024-05-25',
    status: 'Pending',
    total: '$234.56',
    paymentStatus: 'Pending',
  },
  {
    id: '12346',
    customer: 'Jane Smith',
    date: '2024-05-25',
    status: 'Pending',
    total: '$234.56',
    paymentStatus: 'Pending',
  },
  {
    id: '12346',
    customer: 'Jane Smith',
    date: '2024-05-25',
    status: 'Pending',
    total: '$234.56',
    paymentStatus: 'Pending',
  },
  {
    id: '12346',
    customer: 'Jane Smith',
    date: '2024-05-25',
    status: 'Pending',
    total: '$234.56',
    paymentStatus: 'Pending',
  },
  {
    id: '12346',
    customer: 'Jane Smith',
    date: '2024-05-25',
    status: 'Pending',
    total: '$234.56',
    paymentStatus: 'Pending',
  },
  {
    id: '12346',
    customer: 'Jane Smith',
    date: '2024-05-25',
    status: 'Pending',
    total: '$234.56',
    paymentStatus: 'Pending',
  },
  {
    id: '12346',
    customer: 'Jane Smith',
    date: '2024-05-25',
    status: 'Pending',
    total: '$234.56',
    paymentStatus: 'Pending',
  },
  {
    id: '12346',
    customer: 'Jane Smith',
    date: '2024-05-25',
    status: 'Pending',
    total: '$234.56',
    paymentStatus: 'Pending',
  },
  {
    id: '12346',
    customer: 'Jane Smith',
    date: '2024-05-25',
    status: 'Pending',
    total: '$234.56',
    paymentStatus: 'Pending',
  },
  {
    id: '12346',
    customer: 'Jane Smith',
    date: '2024-05-25',
    status: 'Pending',
    total: '$234.56',
    paymentStatus: 'Pending',
  },
  {
    id: '12346',
    customer: 'Jane Smith',
    date: '2024-05-25',
    status: 'Pending',
    total: '$234.56',
    paymentStatus: 'Pending',
  },
];

const OrdersPage = () => {
  return (
    <div className="min-h-screen p-6">
      <header className="mb-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Orders</h1>
        <div>
          <input
            type="text"
            placeholder="Search Orders"
            className="px-4 py-2 border rounded-lg"
          />
        </div>
      </header>

      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Order ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Payment Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="px-6 py-4 whitespace-nowrap">{order.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{order.customer}</td>
                <td className="px-6 py-4 whitespace-nowrap">{order.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">{order.status}</td>
                <td className="px-6 py-4 whitespace-nowrap">{order.total}</td>
                <td className="px-6 py-4 whitespace-nowrap">{order.paymentStatus}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-blue-600 hover:text-blue-900 mr-4">View</button>
                  <button className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination - Placeholder */}
      <div className="flex justify-between items-center mt-4">
        <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg">Previous</button>
        <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg">Next</button>
      </div>
    </div>
  );
};

export default OrdersPage;
