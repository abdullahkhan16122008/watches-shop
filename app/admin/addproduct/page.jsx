'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { FaUsers, FaBoxOpen, FaChartBar, FaCog, FaIdCard, FaPlus } from 'react-icons/fa';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import LinkExtension from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import MenuBar from '@/app/components/MenuBar';




const AddProductPage = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      LinkExtension,
      Image,
      Table.configure({ resizable: true }),
      TableRow,
      TableCell,
      TableHeader,
    ],
    content: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const description = editor?.getHTML() || '';
    console.log({ title, price, description });
    // Your form submission logic here
  };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-100 py-10 px-6">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
          <h1 className="text-2xl font-bold mb-6 text-center">Add New Product</h1>
          <form onSubmit={handleSubmit}>
            {/* Title Input */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Product Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter product title"
              />
            </div>

            {/* Price Input */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Price ($)</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter price"
              />
            </div>

            {/* Tiptap Editor */}
            {editor && (
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Product Description</label>
                <div className="border border-gray-300 rounded min-h-[150px] p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <MenuBar editor={editor} />
                  <EditorContent editor={editor} />
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Add Product
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default AddProductPage;
