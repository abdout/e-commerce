import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const rubik = Rubik({
  subsets: ['arabic', 'latin'],
  variable: '--font-rubik',
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Nike",
  description: "An e-commerce platform for Nike shoes",
};

export default function RootShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body className={`${inter.variable} ${rubik.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
