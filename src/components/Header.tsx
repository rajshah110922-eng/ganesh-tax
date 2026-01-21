'use client';

import Link from 'next/link';
import { useState } from 'react';
import headerData from '@/utils/headerData.json';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const [subMenuData, setSubMenuData] = useState([]);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);

  console.log('headerData', headerData);
  const handleSubmenu = (subLinks: any) => {
    if (subLinks.length > 0) {
      setOpenSubMenu(true)
      setSubMenuData(subLinks);
    } else {
      setOpenSubMenu(false)
      setSubMenuData([]);
    }
  }

  console.log('openSubMenu', openSubMenu)
  console.log('subMenuData', subMenuData)

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
          <nav className="hidden md:flex items-center gap-8 relative">
            {headerData.navigation.map((item) => (
              <div key={item.id}>
                {item.subLinks.length > 0 ?
                  <button
                    className="cursor-pointer text-sm font-medium text-gray-700 transition-colors hover:text-green-600 whitespace-nowrap"
                    onMouseEnter={() => handleSubmenu(item?.subLinks)} >
                    {item.label}
                  </button>
                  :
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-gray-700 transition-colors hover:text-green-600 whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                }
              </div>
            ))}

            {/* Submenu Dropdown */}
            {openSubMenu && subMenuData.length > 0 && (
              <div 
                className="absolute top-full left-0 mt-7 bg-white border border-gray-200 rounded-[16px] shadow-lg py-2 min-w-max z-40 overflow-hidden"
                onMouseEnter={() => setOpenSubMenu(true)}
                onMouseLeave={() => { setOpenSubMenu(false); setSubMenuData([]);}}
              >
                {subMenuData.map((subItem: any) => (
                  <Link
                    key={subItem.id}
                    href={`${subItem.href}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                    onClick={() => { setOpenSubMenu(false); setSubMenuData([]);}}
                  >
                    {subItem.label}
                  </Link>
                ))}
              </div>
            )}
          </nav>

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
              <div key={item.id}>
                {item.subLinks.length > 0 ? (
                  <>
                    <button
                      onClick={() => setExpandedMobileItem(expandedMobileItem === item.id ? null : item.id)}
                      className="w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <span className="font-medium">{item.label}</span>
                      <svg
                        className={`w-5 h-5 transition-transform duration-300 ${
                          expandedMobileItem === item.id ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    </button>
                    {expandedMobileItem === item.id && (
                      <div className="bg-gray-50 rounded-lg my-1 overflow-hidden">
                        {item.subLinks.map((subItem: any) => (
                          <Link
                            key={subItem.id}
                            href={subItem.href}
                            className="block px-6 py-2 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors border-l-2 border-gray-200 hover:border-green-600"
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
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
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
