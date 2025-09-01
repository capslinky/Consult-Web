import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Paradise Law AZ",
  description:
    "Clear answers to common questions about Arizona family law and our virtual consultations.",
  alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://azfamilylaw.wiki"}/resources/faq/` },
  openGraph: {
    title: "Frequently Asked Questions | Paradise Law AZ",
    description: "Common questions and helpful answers.",
    type: "website",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://azfamilylaw.wiki"}/resources/faq/`,
  },
};

export default function FAQIndex() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-navy to-navy-light py-20">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-white/90">Common questions and helpful answers</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl text-gray-700">
          Our full FAQ is coming soon. In the meantime, see the How It Works page for process details.
        </div>
      </section>
    </main>
  );
}
