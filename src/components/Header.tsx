"use client";

import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavBody,
  NavItems,
} from "@/components/ui/resizable-navbar";
import Link from "next/link";
import { useState } from "react";
import CalendlyPopup from "./CalendlyPopup";
import Image from "next/image";

export function Header() {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <Link href="/" replace>
            <div className="relative w-[60px] h-[60px] cursor-pointer z-[70]">
              <Image
                src="/holistic-logo.png"
                alt="Holistically Logo"
                fill
                sizes="60px"
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <NavItems items={navItems} />

          <div className="flex items-center gap-4">
            <CalendlyPopup />
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <Link href="/" replace>
              <div className="relative w-[50px] h-[50px] cursor-pointer z-[60]">
                <Image
                  src="/holistic-logo.png"
                  alt="Holistically Logo"
                  fill
                  sizes="50px"
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block font-medium">{item.name}</span>
              </a>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}

export default Header;
