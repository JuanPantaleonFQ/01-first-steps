import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className='bg-slate-700 text-white flex items-center justify-center'>
        {children}
        </body>
    </html>
  );
}
