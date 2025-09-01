'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { trackEvent } from '@/lib/analytics';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Normalize paths to compare consistently regardless of trailing slashes
  const normalizePath = (p: string) => {
    if (!p) return '/';
    if (p === '/') return '/';
    return p.endsWith('/') ? p.slice(0, -1) : p;
  };

  const navigationItems = [
    { label: 'Services', href: '/services/' },
    { label: 'Practice Areas', href: '/practice-areas/' },
    { label: 'About', href: '/about/' },
    { label: 'How It Works', href: '/how-it-works/' },
    { label: 'Resources', href: '/resources/' },
    { label: 'Contact', href: '/contact/' },
  ];

  // Lock body scroll when mobile menu is open and handle Escape to close
  useEffect(() => {
    if (isMenuOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsMenuOpen(false);
          toggleRef.current?.focus();
        }
      };
      document.addEventListener('keydown', onKeyDown);

      // Focus the first focusable element within the menu
      const focusables = menuRef.current?.querySelectorAll<HTMLElement>(
        'a, button, [tabindex]:not([tabindex="-1"])'
      );
      focusables?.[0]?.focus();

      return () => {
        document.body.style.overflow = original;
        document.removeEventListener('keydown', onKeyDown);
      };
    }
  }, [isMenuOpen]);

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
            {navigationItems.map((item) => {
              const isActive = normalizePath(pathname) === normalizePath(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`hover:text-gray-200 transition-colors ${isActive ? 'underline underline-offset-4' : ''}`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/book/"
              onClick={() => trackEvent('book_cta_click', { location: 'header_desktop' })}
              className="ml-4 bg-[#f59e0b] text-white hover:bg-[#d97706] focus:ring-2 focus:ring-[#f59e0b] focus:ring-offset-2 px-6 py-2 text-base font-semibold rounded-md transition-all duration-200 focus:outline-none inline-flex items-center justify-center shadow-md hover:shadow-lg"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" clipRule="evenodd" />
              </svg>
              Book Consultation
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            ref={toggleRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-[#172e5c] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f59e0b] focus:ring-offset-2"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
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
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
              aria-hidden="true"
              onClick={() => { setIsMenuOpen(false); toggleRef.current?.focus(); }}
            />
            {/* Mobile Navigation */}
            <nav
              id="mobile-menu"
              ref={menuRef}
              className="lg:hidden py-4 border-t border-[#172e5c] relative z-50"
              aria-label="Mobile Navigation"
              onKeyDown={(e) => {
                if (e.key !== 'Tab') return;
                const focusables = menuRef.current?.querySelectorAll<HTMLElement>(
                  'a, button, [tabindex]:not([tabindex="-1"])'
                );
                if (!focusables || focusables.length === 0) return;
                const first = focusables[0];
                const last = focusables[focusables.length - 1];
                if (e.shiftKey && document.activeElement === first) {
                  e.preventDefault();
                  last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                  e.preventDefault();
                  first.focus();
                }
              }}
            >
              <div className="flex flex-col gap-4 bg-[#1e3a8a]">
                {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-2 hover:text-gray-200 transition-colors"
                  aria-current={normalizePath(pathname) === normalizePath(item.href) ? 'page' : undefined}
                  onClick={() => { setIsMenuOpen(false); toggleRef.current?.focus(); }}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/book/"
                onClick={() => trackEvent('book_cta_click', { location: 'header_mobile_menu' })}
                className="mt-4 w-full bg-[#f59e0b] text-white hover:bg-[#d97706] focus:ring-2 focus:ring-[#f59e0b] focus:ring-offset-2 px-6 py-3 text-lg font-semibold rounded-md transition-all duration-200 focus:outline-none inline-flex items-center justify-center shadow-md hover:shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" clipRule="evenodd" />
                </svg>
                Book Your Consultation
                <div className="ml-2 px-2 py-1 bg-[#d97706] rounded text-xs font-medium">
                  $500
                </div>
              </Link>
              </div>
            </nav>
          </>
        )}
      </div>

      {/* Floating Mobile CTA */}
      {!isMenuOpen && (
        <Link
          href="/book/"
          onClick={() => trackEvent('book_cta_click', { location: 'floating_mobile' })}
          className="lg:hidden fixed right-4 z-50 bg-[#f59e0b] text-white hover:bg-[#d97706] focus:outline-none focus:ring-2 focus:ring-[#f59e0b] focus:ring-offset-2 px-5 py-3 rounded-full shadow-lg transition-all duration-200"
          style={{ bottom: 'calc(1rem + env(safe-area-inset-bottom))' }}
          aria-label="Book consultation"
        >
          Book Now
        </Link>
      )}
    </header>
  );
}
