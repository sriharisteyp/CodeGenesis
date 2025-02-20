"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 text-white py-4 border-b border-gray-700">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-bold">
          <Link href="/" className="text-white hover:text-gray-300 transition-colors flex">
          <img src="/logo.jpg" alt="logo" width="50" height="50" />
            <span className="pt-2 pl-1">CodeGenesis</span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-lg">
          <Link href="/" className="text-white hover:text-gray-300 transition-colors">Home</Link>
          <Link href="/tutorials" className="text-white hover:text-gray-300 transition-colors">Vidios</Link>
          <Link href="/about" className="text-white hover:text-gray-300 transition-colors">About</Link>
          <Link href="/contact" className="text-white hover:text-gray-300 transition-colors">Contact</Link>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-800">
          <ul className="space-y-4 text-center py-4">
            <li>
              <Link href="/" className="text-white hover:text-gray-300 transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/vidios" className="text-white hover:text-gray-300 transition-colors">Vidios</Link>
            </li>
            <li>
              <Link href="/about" className="text-white hover:text-gray-300 transition-colors">About</Link>
            </li>
            <li>
              <Link href="/contact" className="text-white hover:text-gray-300 transition-colors">Contact</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
