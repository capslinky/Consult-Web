import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enforcement & Contempt Actions | Paradise Law AZ",
  description:
    "Enforce Arizona family court orders through contempt, wage garnishment, and asset seizure options.",
};

export default function EnforcementPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-navy to-navy-light py-20">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Enforcement Actions</h1>
          <p className="text-xl text-white/90">Making court orders count</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          <p className="text-gray-700">
            When support or parenting orders are ignored, we pursue enforcement—contempt motions,
            income withholding, liens, and other remedies—focused on quick, practical results.
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

