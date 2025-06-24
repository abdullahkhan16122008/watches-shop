'use client';
import React from 'react';
import Link from 'next/link';
import { FaUsers, FaBoxOpen, FaChartBar, FaCog, FaIdCard } from 'react-icons/fa';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';



const SettingsPage = () => {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-100 py-10 px-6">
        {/* Quick Navigation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
          <Link href="/admin/users" className="bg-white rounded-xl shadow p-6 text-center">
            <FaUsers className="text-3xl text-blue-500 mb-2 mx-auto" />
            <h2 className="text-base font-semibold">Users</h2>
          </Link>

          <Link href="/admin/allproducts" className="bg-white rounded-xl shadow p-6 text-center">
            <FaBoxOpen className="text-3xl text-green-500 mb-2 mx-auto" />
            <h2 className="text-base font-semibold">Products</h2>
          </Link>

          <Link href="/admin/orders" className="bg-white rounded-xl shadow p-6 text-center">
            <FaChartBar className="text-3xl text-purple-500 mb-2 mx-auto" />
            <h2 className="text-base font-semibold">Sales</h2>
          </Link>

          <Link href="/admin/settings" className="bg-white rounded-xl shadow p-6 text-center border border-orange-400">
            <FaCog className="text-3xl text-orange-500 mb-2 mx-auto" />
            <h2 className="text-base font-semibold text-orange-600">Settings</h2>
          </Link>

          <Link href="/admin" className="bg-white rounded-xl shadow p-6 text-center">
            <FaIdCard className="text-3xl text-gray-700 mb-2 mx-auto" />
            <h2 className="text-base font-semibold">Dashboard</h2>
          </Link>
        </div>

        {/* Settings Form */}
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Admin Settings</h2>

          <form className="space-y-6">
            <div>
              <label htmlFor="storeName" className="block text-gray-700 font-semibold mb-2">
                Store Name
              </label>
              <input
                id="storeName"
                type="text"
                placeholder="AK Store"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-300"
              />
            </div>

            <div>
              <label htmlFor="adminEmail" className="block text-gray-700 font-semibold mb-2">
                Admin Email
              </label>
              <input
                id="adminEmail"
                type="email"
                placeholder="admin@example.com"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-300"
              />
            </div>

            <div>
              <label htmlFor="themeColor" className="block text-gray-700 font-semibold mb-2">
                Theme Color
              </label>
              <select
                id="themeColor"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-300"
              >
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
              </select>
            </div>

            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-md transition duration-200"
            >
              Save Settings
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default SettingsPage;
