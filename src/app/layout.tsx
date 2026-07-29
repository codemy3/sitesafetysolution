import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navigation/Navbar';
import Footer from '@/components/Navigation/Footer';
import FloatingWhatsApp from '@/components/Navigation/FloatingWhatsApp';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TechFin | Security Solutions',
  description: 'Professional security solutions, CCTV, home automation, and access control in Mangalore and beyond.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
