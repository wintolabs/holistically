"use client";

import { IconBrandInstagram, IconBrandWhatsapp } from "@tabler/icons-react";
// import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 px-6 py-12 relative">
      {/* subtle top border / separator */}
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pink-300/40 to-transparent" />

      <div className="mx-auto max-w-6xl flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
        {/* Brand & tagline */}
        <div className="space-y-2 text-center md:text-left">
          <h2 className="text-2xl font-extrabold text-pink-500">
            Holistically
          </h2>
          <p className="text-sm font-medium">
            Wellness through&nbsp;Homeopathy
          </p>
          {/* <div className="flex justify-center md:justify-start gap-4 pt-2">
            <a
              href="mailto:info@holistically.in"
              className="group inline-flex items-center gap-1 text-sm hover:text-pink-600"
            >
              <Mail size={16} className="group-hover:scale-110 transition" />
              Email
            </a>
            <a
              href="tel:+911234567890"
              className="group inline-flex items-center gap-1 text-sm hover:text-pink-600"
            >
              <Phone size={16} className="group-hover:scale-110 transition" />
              Call
            </a>
          </div> */}
        </div>

        {/* Social */}
        <div className="mx-auto md:mx-0">
          <h3 className="text-sm font-semibold mb-3 text-center md:text-left">
            Connect
          </h3>
          <div className="flex justify-center md:justify-start gap-4">
            {/* Instagram */}
            <a
              aria-label="Instagram"
              href="https://www.instagram.com/the__holistic_clinic"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white shadow hover:bg-pink-50 transition"
            >
              <IconBrandInstagram className="h-5 w-5 text-pink-600" />
            </a>

            {/* WhatsApp */}
            <a
              aria-label="WhatsApp"
              href="https://whatsapp.com/channel/0029Vb5wf8EDZ4LTzqSA2P2J"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white shadow hover:bg-pink-50 transition"
            >
              <IconBrandWhatsapp className="h-5 w-5 text-pink-600" />
            </a>
          </div>
        </div>
      </div>

      {/* copyright bar */}
      <div className="mt-12 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Holistically. All rights&nbsp;reserved.
      </div>
    </footer>
  );
}
