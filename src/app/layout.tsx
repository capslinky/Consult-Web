import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Header } from "@/components/navigation/Header";

export const metadata: Metadata = {
  title: "Paradise Law AZ - Family Law Virtual Consultations",
  description: "Expert Arizona family law attorneys offering virtual consultations for $500. Get personalized legal guidance for divorce, custody, and family financial matters.",
  keywords: "Arizona family law, virtual consultation, divorce attorney, custody lawyer, family law Phoenix",
  authors: [{ name: "Paradise Law AZ" }],
  openGraph: {
    title: "Paradise Law AZ - Family Law Virtual Consultations",
    description: "Expert Arizona family law attorneys offering virtual consultations for $500",
    type: "website",
    locale: "en_US",
    url: "https://azfamilylaw.wiki",
    siteName: "Paradise Law AZ",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <footer className="bg-gray-800 text-white py-8 px-4">
          <div className="container mx-auto text-center">
            <p>&copy; 2025 Paradise Law AZ. All rights reserved.</p>
            <p className="mt-2 text-sm text-gray-400">Attorney Advertising | Licensed in Arizona</p>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <Link 
                href="/dev-sitemap" 
                className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
                title="Developer Progress Tracking"
              >
                Developer Sitemap
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
