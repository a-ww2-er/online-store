import React from "react";
import { BoxIcon, BookCheck, MedalIcon } from "lucide-react";
import Header from "@/components/Admin/Header";
import { FcCancel } from "react-icons/fc";
import SalesReport from "@/components/Admin/SalesReport";
const AdminHome = () => {
  return (
    <div className="min-h-screen flex">
      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <Header />
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <BoxIcon />
            <h3 className="text-lg font-semibold">Total products</h3>
            <p className="text-2xl font-bold">
              250 <span className="text-green-500 text-sm">+2.5%</span>
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <BookCheck />
            <h3 className="text-lg font-semibold">Completed orders</h3>
            <p className="text-2xl font-bold">
              124 <span className="text-green-500 text-sm">+2.5%</span>
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <FcCancel size={20} />
            <h3 className="text-lg font-semibold">Canceled orders</h3>
            <p className="text-2xl font-bold">
              14 <span className="text-red-500 text-sm">-1.5%</span>
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <MedalIcon />
            <h3 className="text-lg font-semibold">Top products</h3>
            <p className="text-2xl font-bold">
              119 <span className="text-green-500 text-sm">+2.5%</span>
            </p>
          </div>
        </div>
        {/* Sales Report */}
        <SalesReport />
        {/* Last Transactions */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Last transactions</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Item
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Platform
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">CTG0291</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Crop top pants
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">12/02/2022</td>
                  <td className="px-6 py-4 whitespace-nowrap">$599</td>
                  <td className="px-6 py-4 whitespace-nowrap">Shopee</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">CTG0292</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    T-shirt rainbow
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">12/02/2022</td>
                  <td className="px-6 py-4 whitespace-nowrap">$49</td>
                  <td className="px-6 py-4 whitespace-nowrap">Tokopedia</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">CTG0293</td>
                  <td className="px-6 py-4 whitespace-nowrap">Sneakers</td>
                  <td className="px-6 py-4 whitespace-nowrap">13/02/2022</td>
                  <td className="px-6 py-4 whitespace-nowrap">$120</td>
                  <td className="px-6 py-4 whitespace-nowrap">Amazon</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">CTG0294</td>
                  <td className="px-6 py-4 whitespace-nowrap">Watch</td>
                  <td className="px-6 py-4 whitespace-nowrap">14/02/2022</td>
                  <td className="px-6 py-4 whitespace-nowrap">$250</td>
                  <td className="px-6 py-4 whitespace-nowrap">eBay</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">CTG0295</td>
                  <td className="px-6 py-4 whitespace-nowrap">Laptop</td>
                  <td className="px-6 py-4 whitespace-nowrap">15/02/2022</td>
                  <td className="px-6 py-4 whitespace-nowrap">$899</td>
                  <td className="px-6 py-4 whitespace-nowrap">Best Buy</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminHome;
