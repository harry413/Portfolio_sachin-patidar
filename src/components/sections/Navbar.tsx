'use client';

import { useState } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <header className="fixed  top-0 left-0 right-0 md:top-8 md:left-18 md:right-18 z-30">
      <nav className="glass border border-white/20 shadow-lg shadow-black/30 backdrop-blur-xl bg-white/10 backdrop-filter transition-all duration-300 md:rounded-full ">
        <div className="mx-auto w-full md:w-11/12 lg:w-10/12 2xl:w-9/12 px-4 sm:px-6 py-3 md:py-4 flex items-center justify-between">
          <a
            href="#home"
            className="text-xl sm:text-2xl font-bold tracking-wide text-white hover:text-cyan-300 inline-flex items-center gap-2"
            onClick={closeMobileMenu}
          >
            <img
              src="/models/avatar.webp"
              className="w-8 h-8"
              alt="hero image"
            />
          </a>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:text-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <span className="sr-only">Open menu</span>
            {mobileOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          <ul className="hidden md:flex md:items-center md:justify-center md:gap-4 lg:gap-8 text-sm uppercase tracking-widest font-medium text-white">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="px-3 py-2 rounded-md hover:bg-white/15 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/40 ">
          <ul className="flex flex-col gap-1 px-4 pb-4 pt-2 text-white">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="block w-full px-3 py-2 rounded-md hover:bg-white/20 transition-colors text-2xl"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
