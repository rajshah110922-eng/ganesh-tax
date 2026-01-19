'use client';

import Link from 'next/link';
import footerData from '@/utils/footerData.json';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const iconComponents: Record<string, React.ReactNode> = {
  facebook: <Facebook size={20} />,
  twitter: <Twitter size={20} />,
  linkedin: <Linkedin size={20} />,
  instagram: <Instagram size={20} />,
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4 bg-white p-4 w-fit rounded-lg">
              <Image src={footerData.company.logo.url} alt='Logo' height={40} width={100} className='object-cover h-auto w-14' />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {footerData.company.description}
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {footerData.social.map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  className="inline-flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-lg transition-colors"
                >
                  {iconComponents[social.icon] || social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links Sections */}
          {footerData.sections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-green-400 text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                Email
              </p>
              <a
                href={`mailto:${footerData.contact.email}`}
                className="text-gray-100 hover:text-green-400 transition-colors"
              >
                {footerData.contact.email}
              </a>
            </div>
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                Phone
              </p>
              <a
                href={`tel:${footerData.contact.phone.replace(/\s/g, '')}`}
                className="text-gray-100 hover:text-green-400 transition-colors"
              >
                {footerData.contact.phone}
              </a>
            </div>
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                Address
              </p>
              <p className="text-gray-100 text-sm">{footerData.contact.address}</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">{footerData.copyright}</p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Made with</span>
              <span className="text-green-500">💚</span>
              <span>for Indian businesses</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
