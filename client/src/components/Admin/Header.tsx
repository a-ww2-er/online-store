import { CalendarIcon, BellIcon } from 'lucide-react'; // Use any icon library you prefer
import Image from 'next/image';

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-8" style={{borderBottom: 'solid 1px grey', paddingBottom: 20}}>
      <div>
        <h1 className="text-2xl font-bold">Good Morning, Admin!</h1>
        <p>{"Here's what's happening with your store today"}</p>
      </div>
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <CalendarIcon className="w-6 h-6 text-gray-500" />
          <span className="text-gray-700">{new Date().toLocaleDateString()}</span>
        </div>
        <div className="relative">
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
            7
          </span>
          <BellIcon className="w-6 h-6 text-gray-500" />
        </div>
        <Image
          src="/img2.png"
          alt="Profile"
          className="w-10 h-10 rounded-full"
          loading="lazy"
          decoding="async"
          width="40"
          height="40"
        />
      </div>
    </header>
  );
};

export default Header;
