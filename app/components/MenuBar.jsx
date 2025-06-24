"use client"
import React from 'react'
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';


const MenuBar = ({ editor }) => {
  if (!editor) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-3 bg-gray-100 p-2 rounded border">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`px-2 py-1 border rounded ${editor.isActive('bold') ? 'bg-blue-500 text-white' : ''}`}
      >
        Bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`px-2 py-1 border rounded ${editor.isActive('italic') ? 'bg-blue-500 text-white' : ''}`}
      >
        Italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={`px-2 py-1 border rounded ${editor.isActive('underline') ? 'bg-blue-500 text-white' : ''}`}
      >
        Underline
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`px-2 py-1 border rounded ${editor.isActive('heading', { level: 1 }) ? 'bg-blue-500 text-white' : ''}`}
      >
        H1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`px-2 py-1 border rounded ${editor.isActive('heading', { level: 2 }) ? 'bg-blue-500 text-white' : ''}`}
      >
        H2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`px-2 py-1 border rounded ${editor.isActive('bulletList') ? 'bg-blue-500 text-white' : ''}`}
      >
        • List
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`px-2 py-1 border rounded ${editor.isActive('orderedList') ? 'bg-blue-500 text-white' : ''}`}
      >
        1. List
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`px-2 py-1 border rounded ${editor.isActive('blockquote') ? 'bg-blue-500 text-white' : ''}`}
      >
        "
      </button>
      <button
        onClick={() => {
          const url = window.prompt('Enter URL');
          if (url) {
            editor.chain().focus().setLink({ href: url }).run();
          }
        }}
        className="px-2 py-1 border rounded"
      >
        Link
      </button>
    </div>
  );
};


export default MenuBar