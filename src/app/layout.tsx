import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';

import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

const appUrl = process.env.NEXT_PUBLIC_APP_URL as string;

export const metadata: Metadata = {
  title: 'SILO Agência de Produção Digital | Transformando Presença Digital',
  description:
    'Criamos experiências digitais excepcionais incluindo websites, plataformas e-commerce e landing pages de alta conversão.',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      url: '/favicon-96x96.png',
      sizes: '96x96',
    },
    {
      rel: 'icon',
      type: 'image/svg+xml',
      url: '/favicon.svg',
    },
    {
      rel: 'shortcut icon',
      url: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/apple-touch-icon.png',
    },
  ],
  manifest: '/site.webmanifest',
  alternates: {
    canonical: '/',
  },
  metadataBase: new URL(`${appUrl}`),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
