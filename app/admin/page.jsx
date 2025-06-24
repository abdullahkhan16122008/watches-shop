"use client"
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { FaBoxOpen, FaChartBar, FaCog, FaUsers } from 'react-icons/fa'
import Link from 'next/link'




const page = () => {
    return (
        <>
            <Header />

            <main className="min-h-screen bg-gray-100 py-10 px-6">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold text-center mb-10">Admin Dashboard</h1>

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
                    </div>

                    <div className="bg-white rounded-xl shadow p-6">
                        <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
                        <table className="w-full text-left">
                            <thead>
                                <tr>
                                    <th className="pb-2 border-b">Order ID</th>
                                    <th className="pb-2 border-b">Customer</th>
                                    <th className="pb-2 border-b">Status</th>
                                    <th className="pb-2 border-b">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b hover:bg-gray-50">
                                    <td className="py-2">#00124</td>
                                    <td className="py-2">Ahmed Khan</td>
                                    <td className="py-2 text-green-600 font-semibold">Completed</td>
                                    <td className="py-2">Rs. 5,200</td>
                                </tr>
                                <tr className="border-b hover:bg-gray-50">
                                    <td className="py-2">#00125</td>
                                    <td className="py-2">Sara Ali</td>
                                    <td className="py-2 text-yellow-500 font-semibold">Pending</td>
                                    <td className="py-2">Rs. 3,850</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="py-2">#00126</td>
                                    <td className="py-2">Bilal Haider</td>
                                    <td className="py-2 text-red-500 font-semibold">Cancelled</td>
                                    <td className="py-2">Rs. 0</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}

export default page