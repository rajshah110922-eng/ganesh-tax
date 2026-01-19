'use client';

import Link from 'next/link';
import { useState } from 'react';
import headerData from '@/utils/headerData.json';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-2 z-50 w-full">
      <div className={`container mx-auto lg:w-fit w-full px-4 sm:px-6 lg:px-8 mt-2  `}>
        <div className="flex h-16 items-center justify-between gap-10 transition-all duration-300 border-b border-gray-200 bg-white shadow-sm lg:px-8 px-4 rounded-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-gray-900">
            <Image src={headerData.logo.url} alt='Logo' height={40} width={100} className='object-cover h-auto w-14' />
            {/* <span className="hidden sm:inline text-xl">{headerData.logo.text}</span> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {headerData.navigation.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-green-600"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          {/* <Link
            href={headerData.cta.href}
            className="hidden md:inline-flex px-6 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
          >
            {headerData.cta.text}
          </Link> */}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden border-t border-gray-200 py-4 space-y-2 bg-white px-2 rounded-[24px]  border-b border-gray-200 shadow-sm mt-1">
            {headerData.navigation.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={headerData.cta.href}
              className="block px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors text-center mt-2"
              onClick={() => setIsOpen(false)}
            >
              {headerData.cta.text}
            </Link>
          </nav>
        )}
      </div>
    </div>
  );
}
