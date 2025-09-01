import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paternity & Parentage in Arizona | Paradise Law AZ",
  description:
    "Establish parentage, rights, and responsibilities in Arizona paternity cases, including genetic testing.",
};

export default function PaternityPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-navy to-navy-light py-20">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Paternity Cases</h1>
          <p className="text-xl text-white/90">Establishing parentage and legal rights</p>
        </div>
      </section>
      <div className="container mx-auto px-4 max-w-5xl mt-6">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Practice Areas', href: '/practice-areas/' },
            { label: 'Special Circumstances', href: '/practice-areas/special/' },
            { label: 'Paternity' },
          ]}
        />
      </div>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          <p className="text-gray-700">
            We assist with voluntary acknowledgments, court petitions, and genetic testing orders,
            and address child support and legal decision-making following establishment of
            parentage.
import { Breadcrumb } from '@/components/ui/Breadcrumb';
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
