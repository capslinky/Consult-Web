import type { Metadata } from "next";
import { canonical } from "@/lib/seo";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Paradise Law AZ",
  description:
    "Clear answers to common questions about Arizona family law and our virtual consultations.",
  alternates: { canonical: canonical('/resources/faq/') },
  openGraph: {
    title: "Frequently Asked Questions | Paradise Law AZ",
    description: "Common questions and helpful answers.",
    type: "website",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://azfamilylaw.wiki"}/resources/faq/`,
  },
};

export default function FAQIndex() {
  const faqs = [
    {
      q: 'What exactly is included in the $500 consultation?',
      a: 'A 60-minute video meeting with an experienced Arizona family law attorney, case review, strategy discussion, and a written action plan within 24 hours. You can also share documents for focused feedback.'
    },
    {
      q: 'Is my consultation confidential?',
      a: 'Yes. All communications are protected by attorney-client privilege to the extent permitted by law. We do not share your information without your consent.'
    },
    {
      q: 'Can I reschedule if something comes up?',
      a: 'Absolutely. You can reschedule up to 24 hours in advance at no cost. For last-minute changes, please contact us—we do our best to accommodate.'
    },
    {
      q: 'Do you offer refunds?',
      a: 'Your satisfaction matters. If you are not satisfied with your consultation, contact us within 7 days and we will make it right, including a full refund when appropriate per our Refund Policy.'
    },
    {
      q: 'Will this consultation create an ongoing attorney-client relationship?',
      a: 'No. The consultation provides legal advice and guidance tailored to your situation. Ongoing representation requires a separate engagement agreement.'
    }
  ];

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <main className="min-h-screen bg-white">
      <Script id="ld-faq" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(ld)}
      </Script>
      <section className="bg-gradient-to-b from-navy to-navy-light py-20">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-white/90">Clear answers to common concerns about our consultation</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl text-gray-700">
          <div className="divide-y">
            {faqs.map((f, i) => (
              <div key={i} className="py-6">
                <h2 className="text-lg font-semibold text-navy mb-2">{f.q}</h2>
                <p className="text-gray-700">{f.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-sm text-gray-600">
            Still have questions? <a className="text-light-blue underline" href="/contact/">Contact us</a> or see <a className="text-light-blue underline" href="/how-it-works/">How It Works</a>.
          </div>
        </div>
      </section>
    </main>
  );
}
