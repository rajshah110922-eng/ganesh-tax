import type { Metadata } from "next";
import "./globals.scss";
import Footer from "@/components/Footer";
import { Analytics } from '@vercel/analytics/next'
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Ganesh Tax",
  description: "Automate your tax filing, GST registration, and business compliance. Trust millions of businesses in India to simplify regulatory requirements.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
