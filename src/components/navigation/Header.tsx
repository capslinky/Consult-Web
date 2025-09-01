'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'Services', href: '/services' },
    { label: 'Practice Areas', href: '/practice-areas' },
    { label: 'About', href: '/about' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Resources', href: '/resources' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#1e3a8a] text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold hover:text-gray-200 transition-colors">
            Paradise Law AZ
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-gray-200 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/book" className="ml-4 bg-[#f59e0b] text-white hover:bg-[#d97706] focus:ring-2 focus:ring-[#f59e0b] focus:ring-offset-2 px-6 py-2 text-base font-semibold rounded-md transition-all duration-200 focus:outline-none inline-flex items-center justify-center shadow-md hover:shadow-lg">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" clipRule="evenodd" />
              </svg>
              Book Consultation
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-[#172e5c] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f59e0b] focus:ring-offset-2"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            type="button"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
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
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-[#172e5c]">
            <div className="flex flex-col gap-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-2 hover:text-gray-200 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/book" className="mt-4 w-full bg-[#f59e0b] text-white hover:bg-[#d97706] focus:ring-2 focus:ring-[#f59e0b] focus:ring-offset-2 px-6 py-3 text-lg font-semibold rounded-md transition-all duration-200 focus:outline-none inline-flex items-center justify-center shadow-md hover:shadow-lg">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" clipRule="evenodd" />
                </svg>
                Book Your Consultation
                <div className="ml-2 px-2 py-1 bg-[#d97706] rounded text-xs font-medium">
                  $500
                </div>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
