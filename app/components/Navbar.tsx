'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import '../components/style.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="text-white p-4 shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="cursor-pointer text-2xl font-bold">
          Dr. Nitika Nigam
        </Link>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <ul className="hidden md:flex space-x-6">
          <li><Link className='cursor-pointer' href="/">Home</Link></li>
          <li><Link className='cursor-pointer' href="/about">Publications</Link></li>
          <li><Link className='cursor-pointer' href="/services">Project</Link></li>
          <li><Link className='cursor-pointer' href="/contact">Contact</Link></li>
          <li><Link className='cursor-pointer' href="/contact">Experience</Link></li>
        </ul>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 bg-gray-800 px-4 py-2 rounded-md">
          <ul className="space-y-2">
            <li><Link className='cursor-pointer' href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link className='cursor-pointer' href="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link className='cursor-pointer' href="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
            <li><Link className='cursor-pointer' href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
