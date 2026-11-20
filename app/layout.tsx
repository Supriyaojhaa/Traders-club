import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "The Professional Traders Club",
    template: "%s · The Professional Traders Club",
  },
  description:
    "A private ecosystem for professional traders to connect, learn, exchange ideas and grow beyond the markets. Trade Better. Think Better. Live Better.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,wght@0,400..700;1,400..700&display=swap"
        />
      </head>
      <body className="grain">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
