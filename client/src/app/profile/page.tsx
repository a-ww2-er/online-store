import React from 'react';
import Image from 'next/image';

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h1 className="text-2xl font-bold mb-4">My Profile</h1>

        {/* Profile Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <Image
              src="/img1.png" // Replace with your profile image path
              alt="Profile Picture"
              width={80}
              height={80}
              className="rounded-full"
            />
            <div className="ml-4">
              <h2 className="text-xl font-semibold">Jack Adams</h2>
              <p className="text-gray-600">Product Designer</p>
              <p className="text-gray-600">Los Angeles, California, USA</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
            Edit
          </button>
        </div>

        {/* Personal Information */}
        <div className="bg-gray-50 p-6 rounded-lg shadow mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Personal Information</h2>
            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
              Edit
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">First Name</label>
              <p className="text-gray-900">Jack</p>
            </div>
            <div>
              <label className="block text-gray-700">Last Name</label>
              <p className="text-gray-900">Adams</p>
            </div>
            <div>
              <label className="block text-gray-700">Email Address</label>
              <p className="text-gray-900">jackadams@gmail.com</p>
            </div>
            <div>
              <label className="block text-gray-700">Phone</label>
              <p className="text-gray-900">(213) 555-1234</p>
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700">Bio</label>
              <p className="text-gray-900">Product Designer</p>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="bg-gray-50 p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Address</h2>
            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
              Edit
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Country</label>
              <p className="text-gray-900">United States of America</p>
            </div>
            <div>
              <label className="block text-gray-700">City/State</label>
              <p className="text-gray-900">California, USA</p>
            </div>
            <div>
              <label className="block text-gray-700">Postal Code</label>
              <p className="text-gray-900">ERT 62574</p>
            </div>
            <div>
              <label className="block text-gray-700">TAX ID</label>
              <p className="text-gray-900">AS564178969</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
