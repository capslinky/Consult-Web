import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download Ready | Paradise Law AZ",
  description: "Your requested guide is ready to download.",
  robots: { index: false, follow: false },
};

export default function DownloadSuccessPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h1 className="text-3xl font-bold text-navy mb-4">Your Download Is Ready</h1>
          <p className="text-gray-700 mb-6">Check your email for the file link.</p>
          <Link href="/resources/guides/" className="bg-gold text-white hover:bg-gold-dark px-6 py-3 rounded-md font-semibold">See More Guides</Link>
        </div>
      </section>
    </main>
  );
}

