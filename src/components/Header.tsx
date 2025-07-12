"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm transition-all border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo as text */}
        <Link
          href=""
          className="text-2xl font-extrabold text-rose-600 tracking-tight hover:opacity-90 transition"
        >
          Holistically
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-800 hover:text-rose-600 font-medium transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
          onClick={() => setOpen(!open)}
        >
          <Menu className="h-6 w-6 text-gray-800" />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-inner animate-in slide-in-from-top duration-300">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-gray-800 hover:text-rose-600 font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
