import Link from "next/link";
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grandparents' Rights in Arizona | Paradise Law AZ",
  description:
    "Understand visitation and third-party rights for grandparents in Arizona. Learn options under in loco parentis and how courts decide.",
  alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://azfamilylaw.wiki"}/practice-areas/custody/grandparents-rights/` },
  openGraph: {
    title: "Grandparents' Rights in Arizona | Paradise Law AZ",
    description: "Visitation and third-party rights for grandparents in Arizona.",
    type: "article",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://azfamilylaw.wiki"}/practice-areas/custody/grandparents-rights/`,
  },
};

export default function GrandparentsRightsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-navy to-navy-light py-20">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Grandparents&apos; Rights</h1>
          <p className="text-xl text-white/90">
            Visitation and custody options for Arizona grandparents and third parties
          </p>
        </div>
      </section>
      <div className="container mx-auto px-4 max-w-5xl mt-6">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Practice Areas', href: '/practice-areas/' },
            { label: 'Child Custody & Parenting', href: '/practice-areas/custody/' },
            { label: "Grandparents' Rights" },
          ]}
        />
      </div>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          <p className="text-gray-700">
            Arizona recognizes limited circumstances where grandparents and other third parties may
            seek visitation or even legal decision-making and placement when in the child&apos;s best
            interests. Courts consider the child&apos;s welfare, family history, and existing
            relationships when evaluating requests.
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Visitation requests after divorce, death, or if a child was born outside marriage</li>
            <li>In loco parentis claims based on a meaningful parental relationship</li>
            <li>Best interests factors and evidentiary standards</li>
          </ul>
          <div className="flex gap-4 pt-4">
            <Link href="/book/" className="bg-gold text-white hover:bg-gold-dark px-6 py-3 rounded-md font-semibold">Book Consultation</Link>
            <Link href="/contact/" className="border-2 border-navy text-navy hover:bg-navy hover:text-white px-6 py-3 rounded-md font-semibold">Contact Us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
