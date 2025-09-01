import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Header } from "@/components/navigation/Header";

export const metadata: Metadata = {
  title: "Paradise Law AZ - Family Law Virtual Consultations",
  description: "Expert Arizona family law attorneys offering virtual consultations for $500. Get personalized legal guidance for divorce, custody, and family financial matters.",
  keywords: "Arizona family law, virtual consultation, divorce attorney, custody lawyer, family law Phoenix",
  authors: [{ name: "Paradise Law AZ" }],
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://azfamilylaw.wiki",
  },
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
        <footer className="bg-gray-800 text-white py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            {/* Main Footer Content */}
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              {/* Company Info */}
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-white mb-4">Paradise Law AZ</h3>
                <p className="text-gray-300 mb-4 leading-relaxed max-w-md">
                  Experienced Arizona family law attorneys providing compassionate guidance during life&apos;s most challenging times. Dedicated to helping families through divorce, custody, and financial matters.
                </p>
                <div className="flex space-x-4">
                  <div className="flex items-center text-sm text-gray-400">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Emergency Call: (480) 555-0123
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
                <ul className="space-y-3">
                  <li><Link href="/practice-areas/divorce" className="text-gray-400 hover:text-white transition-colors">Divorce Law</Link></li>
                  <li><Link href="/practice-areas/custody" className="text-gray-400 hover:text-white transition-colors">Child Custody</Link></li>
                  <li><Link href="/practice-areas/financial" className="text-gray-400 hover:text-white transition-colors">Financial Matters</Link></li>
                  <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">All Services</Link></li>
                  <li><Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
                </ul>
              </div>

              {/* Contact & Legal */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Contact & Legal</h4>
                <ul className="space-y-3">
                  <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
                  <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Attorney</Link></li>
                  <li><Link href="/how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</Link></li>
                  <li><Link href="/resources" className="text-gray-400 hover:text-white transition-colors">Resources</Link></li>
                  <li><Link href="/book" className="text-gray-400 hover:text-[#f59e0b] transition-colors font-semibold">Book Consultation</Link></li>
                </ul>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="border-t border-gray-700 pt-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex flex-col md:flex-row items-center gap-6 mb-4 md:mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <svg className="w-5 h-5 text-[#10b981]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Licensed Arizona Attorneys
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <svg className="w-5 h-5 text-[#10b981]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    100% Confidential
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <svg className="w-5 h-5 text-[#f59e0b]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Avvo 5-Star Rating
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright & Legal */}
            <div className="border-t border-gray-700 pt-8 mt-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center gap-6">
                  <p className="text-sm text-gray-400">&copy; 2025 Paradise Law AZ. All rights reserved.</p>
                </div>
                <div className="flex items-center gap-4 mt-4 md:mt-0">
                  <p className="text-xs text-gray-500">
                    Attorney Advertising | Licensed in Arizona | AZ State Bar Member
                  </p>
                  <Link
                    href="/dev-sitemap"
                    className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
                    title="Developer Progress Tracking"
                  >
                    Developer Sitemap
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
