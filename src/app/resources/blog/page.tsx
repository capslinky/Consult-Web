import type { Metadata } from "next";
import { canonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Legal Blog & Articles | Paradise Law AZ",
  description:
    "Educational articles on Arizona family law to help you prepare and make informed decisions.",
  alternates: { canonical: canonical('/resources/blog/') },
  openGraph: {
    title: "Legal Blog & Articles | Paradise Law AZ",
    description: "Educational articles on Arizona family law.",
    type: "website",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://azfamilylaw.wiki"}/resources/blog/`,
  },
};

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-navy to-navy-light py-20">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Legal Blog</h1>
          <p className="text-xl text-white/90">Articles coming soon</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl text-gray-700">
          We are preparing high-quality guides and articles. Check back soon.
        </div>
      </section>
    </main>
  );
}
