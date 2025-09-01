import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prenuptial Agreements in Arizona | Paradise Law AZ",
  description:
    "Protect assets and set expectations before marriage with a valid Arizona prenuptial agreement. Understand enforceability and best practices.",
};

export default function PrenuptialPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-navy to-navy-light py-20">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Prenuptial Agreements</h1>
          <p className="text-xl text-white/90">Clarity and protection before marriage</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          <p className="text-gray-700">
            A well-drafted prenup can protect separate property, define community vs. separate
            income, and set expectations for spousal maintenance. We advise on fairness, full
            disclosure, and timing—key elements for enforceability in Arizona.
          </p>
          <div className="flex gap-4 pt-4">
            <Link href="/book/" className="bg-gold text-white hover:bg-gold-dark px-6 py-3 rounded-md font-semibold">Book Consultation</Link>
            <Link href="/contact/" className="border-2 border-navy text-navy hover:bg-navy hover:text-white px-6 py-3 rounded-md font-semibold">Contact Us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

