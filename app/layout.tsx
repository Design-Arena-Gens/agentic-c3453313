import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MAYIN EXPRESS | Entregas 24/7 en Zaragoza, Puebla",
  description: "Servicio de entregas a domicilio 24/7. Tu mejor aliado en Zaragoza y municipios cercanos. Pedidos de fondas, tiendas, farmacias y más.",
  keywords: "entregas a domicilio, Zaragoza Puebla, delivery 24/7, MAYIN EXPRESS, GRUPO MAYIN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
