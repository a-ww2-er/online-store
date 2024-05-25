import Link from 'next/link';
import React from 'react';
import { CloudLightningIcon, SquareGanttChartIcon, ShoppingCart, TagIcon, PersonStanding, BarChart, PinIcon, CurrencyIcon, StoreIcon, ShoppingBagIcon } from 'lucide-react'; 

const Sidebar = () => {
  return (
    <aside className="w-64 bg-lightGray shadow-md px-5 h-full">
      <section id="logo" className="mt-10">
        <h2 className="capitalize font-bold text-[1.5rem] flex gap-2 items-center">
          <CloudLightningIcon className="text-blue-500 h-12 w-12" />
          ONE FASTER
        </h2>
      </section>
      <nav className="mt-8">
        <ul>
          <li className="p-4 bg-gray-200 rounded-lg mb-2 flex items-center border-2 gap-2 hover:bg-gray-300">
            <Link href="/overview" className="flex items-center gap-2 w-full">
              <SquareGanttChartIcon /> Overview
            </Link>
          </li>
          <li className="p-4 rounded-lg mb-2 flex items-center gap-2 hover:bg-gray-300">
            <Link href="/orders" className="flex items-center gap-2 w-full">
              <ShoppingCart /> Orders
            </Link>
          </li>
          <li className="p-4 rounded-lg mb-2 flex items-center gap-2 hover:bg-gray-300">
            <Link href="/products" className="flex items-center gap-2 w-full">
              <TagIcon /> Products
            </Link>
          </li>
          <li className="p-4 rounded-lg mb-2 flex items-center gap-2 hover:bg-gray-300">
            <Link href="/customer" className="flex items-center gap-2 w-full">
              <PersonStanding /> Customer
            </Link>
          </li>
          <li className="p-4 rounded-lg mb-2 flex items-center gap-2 hover:bg-gray-300">
            <Link href="/analytics" className="flex items-center gap-2 w-full">
              <BarChart /> Analytics
            </Link>
          </li>
          <li className="p-4 rounded-lg mb-2 flex items-center gap-2 hover:bg-gray-300">
            <Link href="/marketing" className="flex items-center gap-2 w-full">
              <PinIcon /> Marketing
            </Link>
          </li>
          <li className="p-4 rounded-lg mb-2 flex items-center gap-2 hover:bg-gray-300">
            <Link href="/discount" className="flex items-center gap-2 w-full">
              <CurrencyIcon /> Discount
            </Link>
          </li>
          <li className="p-4 rounded-lg mb-2 flex items-center gap-2 hover:bg-gray-300">
            <Link href="/online-store" className="flex items-center gap-2 w-full">
              <StoreIcon /> Online Store
            </Link>
          </li>
          <li className="p-4 rounded-lg mb-2 flex items-center gap-2 hover:bg-gray-300">
            <Link href="/point-of-sale" className="flex items-center gap-2 w-full">
              <ShoppingBagIcon /> Point of Sale
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
