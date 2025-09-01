import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Testimonials | Paradise Law AZ",
  description:
    "Testimonials and client stories from Arizona family law matters. Social proof and outcomes.",
  alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://azfamilylaw.wiki"}/resources/testimonials/` },
  openGraph: {
    title: "Client Testimonials | Paradise Law AZ",
    description: "Client stories and outcomes.",
    type: "website",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://azfamilylaw.wiki"}/resources/testimonials/`,
  },
};

export default function TestimonialsIndex() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-navy to-navy-light py-20">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Client Testimonials</h1>
          <p className="text-xl text-white/90">Stories coming soon</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl text-gray-700">
          We are collecting verified testimonials to help you evaluate our services.
        </div>
      </section>
    </main>
  );
}
