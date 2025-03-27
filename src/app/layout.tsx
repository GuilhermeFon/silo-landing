import type {Metadata} from "next";
import "./globals.css";
import {Inter} from "next/font/google";
import Providers from "./providers";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Digital Production Agency | Transformando Presença Digital",
  description:
    "Criamos experiências digitais excepcionais incluindo websites, plataformas e-commerce e landing pages de alta conversão.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Providers >
          {children}
        </Providers>
      </body>
    </html>
  );
}
