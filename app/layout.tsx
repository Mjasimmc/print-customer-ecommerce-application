import type { Metadata, Viewport } from 'next';
import './globals.scss';
import { AppProvider } from '../src/providers/AppProvider';
import { AppShell } from '../src/components/AppShell/AppShell';

export const metadata: Metadata = {
  title: 'LocalHub | On-Demand Local Services & Custom Manufacturing Marketplace',
  description: 'Discover nearby local service providers, 3D printing labs, embroidery studios, custom gifts, branding, and signage delivered to your doorstep in 2 hours.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'LocalHub',
  },
};

export const viewport: Viewport = {
  themeColor: '#f8fafc',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AppProvider>
          <AppShell>
            {children}
          </AppShell>
        </AppProvider>
      </body>
    </html>
  );
}

