// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import FloatingBookingButton from "@/components/FloatingBookingButton";

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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-background text-foreground antialiased transition-colors duration-300`}
      >
        <Header />
        <main className="pt-24">{children}</main>
        <FloatingBookingButton />
      </body>
    </html>
  );
}
