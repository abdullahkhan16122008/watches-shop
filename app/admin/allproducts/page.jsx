'use client'
import React from 'react'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const AllProducts = () => {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-100 py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">All Products</h1>
            <Link href="/admin/addproduct">
              <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">Add Product</button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((id) => (
              <div key={id} className="bg-white shadow rounded-lg overflow-hidden">
                <img
                  src="https://via.placeholder.com/300"
                  alt="Product"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h2 className="font-bold text-lg mb-1">Product {id}</h2>
                  <p className="text-gray-600">Rs. 999</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default AllProducts
