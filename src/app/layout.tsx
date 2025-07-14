// src/app/layout.tsx
import CalendlyPopup from "@/components/CalendlyPopup";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Holistically – Dr. Priyanka Sharma",
  description:
    "A holistic health and wellness clinic led by Dr. Priyanka Sharma.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-background text-foreground antialiased transition-colors duration-300`}
        id="__next"
      >
        <Header />

        <main className="pt-24">{children}</main>
        <div className="fixed bottom-6 right-6 block lg:hidden z-50">
          <CalendlyPopup />
        </div>
      </body>
    </html>
  );
}
