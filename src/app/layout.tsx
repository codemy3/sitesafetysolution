import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navigation/Navbar';
import Footer from '@/components/Navigation/Footer';
import ScrollToTopButton from '@/components/Navigation/ScrollToTopButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sitesafety-solutions.co.uk'),
  title: {
    default: 'Health & Safety Consultants Manchester | Site Safety Solutions',
    template: '%s | Site Safety Solutions',
  },
  description: 'OSHCR Registered Consultant providing practical, reliable and cost-effective health and safety consultancy, CDM support, and site support across all UK sectors.',
  keywords: ['Health and Safety', 'CDM Support', 'Risk Assessment', 'Fire Risk Assessment', 'RAMS', 'Site Safety', 'UK Health and Safety Consultancy'],
  authors: [{ name: 'Site Safety Solutions' }],
  openGraph: {
    title: 'Site Safety Solutions | Practical Health & Safety Support',
    description: 'Practical, reliable and cost-effective health and safety consultancy, CDM support, and site support across the UK.',
    url: 'https://www.sitesafety-solutions.co.uk',
    siteName: 'Site Safety Solutions',
    images: [
      {
        url: '/logo-bg-black.webp',
        width: 1200,
        height: 630,
        alt: 'Site Safety Solutions',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Site Safety Solutions | Practical Health & Safety Support',
    description: 'Practical, reliable and cost-effective health and safety consultancy across the UK.',
    images: ['/logo-bg-black.webp'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Site Safety Solutions Ltd',
    url: 'https://www.sitesafety-solutions.co.uk',
    logo: 'https://www.sitesafety-solutions.co.uk/logo-bg-black.webp',
    image: 'https://www.sitesafety-solutions.co.uk/logo-bg-black.webp',
    description: 'OSHCR Registered Consultant providing practical, reliable and cost-effective health and safety consultancy, CDM support, and site support across all UK sectors.',
    telephone: '+447468010989',
    email: 'symon@sitesafety-solutions.co.uk',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '188 Moorcroft Road, Wythenshawe',
      addressLocality: 'Manchester',
      addressRegion: 'Greater Manchester',
      postalCode: 'M23 0AJ',
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 53.3835,
      longitude: -2.2854,
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    priceRange: '££',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    sameAs: [],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Health & Safety Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fire Risk Assessments' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'RAMS & Method Statements' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'H&S Policies & Procedures' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Site Inspections & Audits' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CDM 2015 Support' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'COSHH Assessments' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Accident Investigations' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Training & Toolbox Talks' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ongoing H&S Consultancy' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Risk Assessments (MHSWR 1999)' } },
      ],
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
