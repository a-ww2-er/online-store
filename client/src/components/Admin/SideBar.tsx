import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { CloudLightningIcon, SquareGanttChartIcon, ShoppingCart, TagIcon, PersonStanding, BarChart, PinIcon, CurrencyIcon, StoreIcon, ShoppingBagIcon } from 'lucide-react'; 

type SidebarProps =  { className?: string }
const Sidebar = ({ className }: SidebarProps) => {
  const currentRoute = usePathname()

  const getLinkClasses = (path: string) => {
    return `p-4 rounded-lg mb-2 flex items-center gap-2 hover:bg-gray-300 ${
      currentRoute === path ? 'bg-gray-300' : ''
    }`;
  };

  return (
    <aside className={`w-64 bg-lightGray shadow-md px-5 h-full ${className}`}>
      <section id="logo" className="mt-10">
        <h2 className="capitalize font-bold text-[1.5rem] flex gap-2 items-center">
          <CloudLightningIcon className="text-blue-500 h-12 w-12" />
          ONE FASTER
        </h2>
      </section>
      <nav className="mt-8">
        <ul>
          <li className={getLinkClasses('/admin')}>
            <Link href="/admin" className="flex items-center gap-2 w-full">
              <SquareGanttChartIcon /> Overview
            </Link>
          </li>
          <li className={getLinkClasses('/admin/orders')}>
            <Link href="/admin/orders" className="flex items-center gap-2 w-full">
              <ShoppingCart /> Orders
            </Link>
          </li>
          <li className={getLinkClasses('/admin/products')}>
            <Link href="/admin/products" className="flex items-center gap-2 w-full">
              <TagIcon /> Products
            </Link>
          </li>
          <li className={getLinkClasses('/admin/customer')}>
            <Link href="/admin/customer" className="flex items-center gap-2 w-full">
              <PersonStanding /> Customer
            </Link>
          </li>
          <li className={getLinkClasses('/admin/analytics')}>
            <Link href="/admin/analytics" className="flex items-center gap-2 w-full">
              <BarChart /> Analytics
            </Link>
          </li>
          <li className={getLinkClasses('/admin/marketing')}>
            <Link href="/admin/marketing" className="flex items-center gap-2 w-full">
              <PinIcon /> Marketing
            </Link>
          </li>
          <li className={getLinkClasses('/admin/discount')}>
            <Link href="/admin/discount" className="flex items-center gap-2 w-full">
              <CurrencyIcon /> Discount
            </Link>
          </li>
          <li className={getLinkClasses('/admin/online-store')}>
            <Link href="/admin/online-store" className="flex items-center gap-2 w-full">
              <StoreIcon /> Online Store
            </Link>
          </li>
          <li className={getLinkClasses('/admin/point-of-sale')}>
            <Link href="/admin/point-of-sale" className="flex items-center gap-2 w-full">
              <ShoppingBagIcon /> Point of Sale
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
