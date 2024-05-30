"use client";
import React from 'react';
import Image from 'next/image';
import { IoArrowBack } from 'react-icons/io5';
import { useAppSelector, useAppDispatch } from "@/redux/hooks";

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.persistedReducer.auth.user);
  console.log("User", user);

  const firstName = user?.name.split(' ')[0]
  const lastName = user?.name.split(' ')[1]

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <div className="flex items-center mb-8">
          <IoArrowBack className="text-gray-600 text-2xl cursor-pointer" />
          <h1 className="text-3xl font-bold ml-4">My Profile</h1>
        </div>
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
              <h2 className="text-2xl font-semibold">{user?.name}</h2>
              <p className="text-gray-500">Product Designer</p>
              <p className="text-gray-500">Los Angeles, California, USA</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mr-6">
            Edit
          </button>
        </div>

        {/* Personal Information */}
        <div className="bg-gray-50 p-6 rounded-lg shadow mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Personal Information</h2>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Edit
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 font-bold">First Name</label>
              <p className="text-gray-900">{firstName}</p>
            </div>
            <div>
              <label className="block text-gray-600 font-bold">Last Name</label>
              <p className="text-gray-900">{lastName}</p>
            </div>
            <div>
              <label className="block text-gray-600 font-bold">Email Address</label>
              <p className="text-gray-900">{user?.email}</p>
            </div>
            <div>
              <label className="block text-gray-600 font-bold">Phone</label>
              <p className="text-gray-900">(213) 555-1234</p>
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-600 font-bold">Bio</label>
              <p className="text-gray-900">Product Designer</p>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="bg-gray-50 p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Address</h2>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Edit
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 font-bold">Country</label>
              <p className="text-gray-900">United States of America</p>
            </div>
            <div>
              <label className="block text-gray-600 font-bold">City/State</label>
              <p className="text-gray-900">California, USA</p>
            </div>
            <div>
              <label className="block text-gray-600 font-bold">Postal Code</label>
              <p className="text-gray-900">ERT 62574</p>
            </div>
            <div>
              <label className="block text-gray-600 font-bold">TAX ID</label>
              <p className="text-gray-900">AS564178969</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
