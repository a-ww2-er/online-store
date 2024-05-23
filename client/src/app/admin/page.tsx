import React from "react";
import Image from "next/image";
import {
  CloudLightningIcon,
  SquareGanttChartIcon,
  ShoppingCart,
  TagIcon,
  PersonStanding,
  BarChart,
  PinIcon,
  CurrencyIcon,
  StoreIcon,
  ShoppingBagIcon,
} from "lucide-react";

const AdminHome = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-lightGray shadow-md px-5 h-full">
        <section id="logo" className="mt-10">
          <h2 className="capitalize font-bold text-[1.5rem] flex gap-2 items-center">
            <CloudLightningIcon className="text-blue-500 h-12 w-12" />
            ONE FASTER
          </h2>
        </section>
        <nav className="mt-8">
          <ul>
            <li className="p-4 bg-gray-200 rounded-lg mb-2 flex items-center border-2 gap-2">
              <SquareGanttChartIcon /> Overview
            </li>
            <li className="p-4 rounded-lg mb-2 flex items-center gap-2">
              <ShoppingCart /> Orders
            </li>
            <li className="p-4 rounded-lg mb-2 flex items-center gap-2">
              <TagIcon /> Products
            </li>
            <li className="p-4 rounded-lg mb-2 flex items-center gap-2">
              <PersonStanding /> Customer
            </li>
            <li className="p-4 rounded-lg mb-2 flex items-center gap-2">
              <BarChart /> Analytics
            </li>
            <li className="p-4 rounded-lg mb-2 flex items-center gap-2">
              <PinIcon /> Marketing
            </li>
            <li className="p-4 rounded-lg mb-2 flex items-center gap-2">
              <CurrencyIcon /> Discount
            </li>
            <li className="p-4 rounded-lg mb-2 flex items-center gap-2">
              <StoreIcon /> Online Store
            </li>
            <li className="p-4 rounded-lg mb-2 flex items-center gap-2">
              <ShoppingBagIcon /> Point of Sale
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold">Good Morning, Jonathan!</h1>
            <p>{"Here's what's happening with your store today"}</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                7
              </span>
              <i className="fas fa-bell text-xl"></i>
            </div>
            <Image
              src="/img2.png"
              alt="Profile"
              className="w-10 h-10 rounded-full"
              loading="lazy"
              decoding="async"
              width="244"
              height="150"
              className="w-36 h-auto"
            />
          </div>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Total products</h3>
            <p className="text-2xl font-bold">
              250 <span className="text-green-500 text-sm">+2.5%</span>
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Completed orders</h3>
            <p className="text-2xl font-bold">
              124 <span className="text-green-500 text-sm">+2.5%</span>
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Canceled orders</h3>
            <p className="text-2xl font-bold">
              14 <span className="text-red-500 text-sm">-1.5%</span>
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Top products</h3>
            <p className="text-2xl font-bold">
              119 <span className="text-green-500 text-sm">+2.5%</span>
            </p>
          </div>
        </div>

        {/* Sales Report */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-xl font-semibold mb-4">Your sales report</h2>
          <p className="text-4xl font-bold">$4,435.70</p>
          <p className="text-green-500">+2,330.00 (+2.5%)</p>
          {/* Sales chart placeholder */}
          <div className="mt-4">
            <Image
              src="/img1.png"
              alt="Sales Chart"
              loading="lazy"
              decoding="async"
              width="244"
              height="150"
            />
          </div>
        </div>

        {/* Last Transactions */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Last transaction</h2>
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
