import type { Metadata } from "next";
import { canonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Downloadable Guides | Paradise Law AZ",
  description:
    "Checklists and preparation guides for Arizona family law matters. Free downloads coming soon.",
  alternates: { canonical: canonical('/resources/guides/') },
  openGraph: {
    title: "Downloadable Guides | Paradise Law AZ",
    description: "Checklists and preparation guides.",
    type: "website",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://azfamilylaw.wiki"}/resources/guides/`,
  },
};

export default function GuidesIndex() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-navy to-navy-light py-20">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Guides</h1>
          <p className="text-xl text-white/90">Downloads coming soon</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl text-gray-700">
          We are preparing practical checklists and worksheets to help you get ready for your case.
        </div>
      </section>
    </main>
  );
}
