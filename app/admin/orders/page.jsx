'use client';
import React from 'react';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import Link from 'next/link';
import { FaBoxOpen, FaChartBar, FaCog, FaIdCard, FaUsers } from 'react-icons/fa'




const SalesPage = () => {
  // Dummy sales data — replace with real API data if needed
  const salesData = [
    {
      id: 'S001',
      customer: 'Ahmed Khan',
      product: 'Rolex Explorer',
      amount: 5200,
      date: '2025-06-22',
      status: 'Completed',
    },
    {
      id: 'S002',
      customer: 'Sara Ali',
      product: 'Omega Seamaster',
      amount: 3850,
      date: '2025-06-21',
      status: 'Pending',
    },
    {
      id: 'S003',
      customer: 'Bilal Haider',
      product: 'Casio G-Shock',
      amount: 0,
      date: '2025-06-20',
      status: 'Cancelled',
    },
  ];

  return (
    <>
    <Header />
    <main className="min-h-screen bg-gray-100 py-10 px-6">
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
        <h1 className="text-3xl font-bold text-center mb-10">Sales Report</h1>

        <div className="bg-white rounded-xl shadow p-6 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 border-b">Sale ID</th>
                <th className="py-3 px-4 border-b">Customer</th>
                <th className="py-3 px-4 border-b">Product</th>
                <th className="py-3 px-4 border-b">Amount</th>
                <th className="py-3 px-4 border-b">Date</th>
                <th className="py-3 px-4 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {salesData.map((sale) => (
                <tr key={sale.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b">{sale.id}</td>
                  <td className="py-3 px-4 border-b">{sale.customer}</td>
                  <td className="py-3 px-4 border-b">{sale.product}</td>
                  <td className="py-3 px-4 border-b">Rs. {sale.amount}</td>
                  <td className="py-3 px-4 border-b">{sale.date}</td>
                  <td
                    className={`py-3 px-4 border-b font-semibold ${
                      sale.status === 'Completed'
                        ? 'text-green-600'
                        : sale.status === 'Pending'
                        ? 'text-yellow-500'
                        : 'text-red-500'
                    }`}
                  >
                    {sale.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
    <Footer />
                    </>
  );
};

export default SalesPage;
