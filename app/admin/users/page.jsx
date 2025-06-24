'use client'
import React from 'react';
import { FaBoxOpen, FaChartBar, FaCog, FaIdCard, FaUsers } from 'react-icons/fa'
import Link from 'next/link'
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

const UsersPage = () => {
  return (
    <>
      <Header />

      

      <main className="min-h-screen bg-gray-100 py-10 px-30">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                        <Link href={'/admin/users'} className="bg-white rounded-xl shadow p-6 text-center">
                            <FaUsers className="text-4xl text-blue-500 mb-2 mx-auto" />
                            <h2 className="text-xl font-semibold">Users</h2>
                            <p className="text-gray-500">1,245</p>
                        </Link>

                        <Link href={'/admin/allproducts'} className="bg-white rounded-xl shadow p-6 text-center">
                            <FaBoxOpen className="text-4xl text-green-500 mb-2 mx-auto" />
                            <h2 className="text-xl font-semibold">Products</h2>
                            <p className="text-gray-500">328</p>
                        </Link>

                        <Link href={'/admin/orders'} className="bg-white rounded-xl shadow p-6 text-center">
                            <FaChartBar className="text-4xl text-purple-500 mb-2 mx-auto" />
                            <h2 className="text-xl font-semibold">Sales</h2>
                            <p className="text-gray-500">Rs. 1,23,400</p>
                        </Link>

                        <Link href={'/admin/settings'} className="bg-white rounded-xl shadow p-6 text-center">
                            <FaCog className="text-4xl text-orange-500 mb-2 mx-auto" />
                            <h2 className="text-xl font-semibold">Settings</h2>
                            <p className="text-gray-500">Manage</p>
                        </Link>
                        <Link href={'/admin'} className="bg-white rounded-xl shadow p-6 text-center">
                            <FaIdCard className="text-4xl text-orange-500 mb-2 mx-auto" />
                            <h2 className="text-xl font-semibold">Dashboard</h2>
                            <p className="text-gray-500">Admin Panel</p>
                        </Link>
                    </div>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-10">Users Management</h1>

          <div className="overflow-x-auto bg-white rounded-xl shadow p-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="pb-2 border-b">User ID</th>
                  <th className="pb-2 border-b">Name</th>
                  <th className="pb-2 border-b">Email</th>
                  <th className="pb-2 border-b">Role</th>
                  <th className="pb-2 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-2">#U001</td>
                  <td className="py-2">Ahmed Khan</td>
                  <td className="py-2">ahmed@example.com</td>
                  <td className="py-2">Admin</td>
                  <td className="py-2">
                    <button className="text-blue-500 hover:underline mr-2">Edit</button>
                    <button className="text-red-500 hover:underline">Delete</button>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-2">#U002</td>
                  <td className="py-2">Sara Ali</td>
                  <td className="py-2">sara@example.com</td>
                  <td className="py-2">User</td>
                  <td className="py-2">
                    <button className="text-blue-500 hover:underline mr-2">Edit</button>
                    <button className="text-red-500 hover:underline">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default UsersPage;
