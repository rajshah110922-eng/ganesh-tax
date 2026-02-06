'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';
import headerData from '@/utils/headerData.json';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);

  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const openMenu = (id: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setActiveMenu(id);
  };

  const closeMenu = () => {
    closeTimeout.current = setTimeout(() => {
      setActiveMenu(null);
    }, 120);
  };

  return (
    <div className="fixed top-2 z-50 w-full">
      <div className="container mx-auto lg:w-fit w-full px-4 sm:px-6 lg:px-8 mt-2">
        <div className="flex h-16 items-center justify-between gap-10 border-b border-gray-200 bg-white shadow-sm lg:px-8 px-4 rounded-full">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-gray-900">
            <Image
              src={headerData.logo.url}
              alt="Logo"
              height={40}
              width={100}
              className="object-cover h-auto w-14"
            />
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden md:flex items-center gap-8 relative">
            {headerData.navigation.map((item) => (
              <div
                key={item.id}
                className="relative flex flex-col items-center"
                onMouseEnter={() => openMenu(item.id)}
                onMouseLeave={closeMenu}
              >
                {/* Menu Button */}
                {item.subLinks.length > 0 ? (
                  <button className="text-sm font-medium text-gray-700 hover:text-green-600 whitespace-nowrap py-2">
                    {item.label}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-gray-700 hover:text-green-600 whitespace-nowrap py-2"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown */}
                {activeMenu === item.id && item.subLinks.length > 0 && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                    <div className="bg-white border border-gray-200 rounded-[16px] shadow-lg py-2 min-w-max z-40">
                      {item.subLinks.map((subItem: any) => (
                        <Link
                          key={subItem.id}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                          onClick={() => setActiveMenu(null)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 text-gray-900 hover:bg-gray-100 rounded-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* ================= MOBILE NAV ================= */}
        {isOpen && (
          <nav className="md:hidden border-t border-gray-200 py-4 space-y-2 bg-white px-2 rounded-[24px] border-b shadow-sm mt-1">
            {headerData.navigation.map((item) => (
              <div key={item.id}>
                {item.subLinks.length > 0 ? (
                  <>
                    <button
                      onClick={() =>
                        setExpandedMobileItem(expandedMobileItem === item.id ? null : item.id)
                      }
                      className="w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                    >
                      <span className="font-medium">{item.label}</span>
                      <svg
                        className={`w-5 h-5 transition-transform ${
                          expandedMobileItem === item.id ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </button>

                    {expandedMobileItem === item.id && (
                      <div className="bg-gray-50 rounded-lg my-1 overflow-hidden">
                        {item.subLinks.map((subItem: any) => (
                          <Link
                            key={subItem.id}
                            href={subItem.href}
                            className="block px-6 py-2 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 border-l-2 border-gray-200 hover:border-green-600"
                            onClick={() => {
                              setIsOpen(false);
                              setExpandedMobileItem(null);
                            }}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            <Link
              href={headerData.cta.href}
              className="block px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 text-center mt-2"
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
