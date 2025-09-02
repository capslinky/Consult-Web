import Link from "next/link";
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import type { Metadata } from "next";
import { canonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Appeals & Post-Decree Relief | Paradise Law AZ",
  description:
    "Arizona family law appeals, post-decree modifications, and Rule 85 motions explained.",
  alternates: { canonical: canonical('/practice-areas/special/appeals/') },
  openGraph: {
    title: "Appeals & Post-Decree Relief | Paradise Law AZ",
    description: "Appeals, post-decree modifications, and Rule 85 motions.",
    type: "article",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://azfamilylaw.wiki"}/practice-areas/special/appeals/`,
  },
};

export default function AppealsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-navy to-navy-light py-20">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Appeals & Post-Decree</h1>
          <p className="text-xl text-white/90">Challenging and refining court orders</p>
        </div>
      </section>
      <div className="container mx-auto px-4 max-w-5xl mt-6">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Practice Areas', href: '/practice-areas/' },
            { label: 'Special Circumstances', href: '/practice-areas/special/' },
            { label: 'Appeals & Post-Decree' },
          ]}
        />
      </div>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          <p className="text-gray-700">
            We evaluate grounds for appeal, deadlines, and the likelihood of success, as well as
            pursue modifications or relief from judgment when circumstances change.
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
