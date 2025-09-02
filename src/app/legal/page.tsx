import Link from "next/link";
import type { Metadata } from "next";
import { canonical } from "@/lib/seo";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Legal Policies | Paradise Law AZ",
  description: "Read our Privacy Policy, Terms of Service, Disclaimer, Cookie Policy, Refund Policy, and Attorney Advertising Disclosure.",
  alternates: { canonical: canonical('/legal/') },
  openGraph: {
    title: "Legal Policies | Paradise Law AZ",
    description: "Privacy, Terms, Disclaimer, Cookie Policy, Refund Policy, and Advertising Disclosure.",
    type: "website",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://azfamilylaw.wiki"}/legal/`,
  },
};

export default function LegalIndex() {
  const links = [
    { href: "/legal/privacy/", label: "Privacy Policy" },
    { href: "/legal/terms/", label: "Terms of Service" },
    { href: "/legal/disclaimer/", label: "Legal Disclaimer" },
    { href: "/legal/cookie-policy/", label: "Cookie Policy" },
    { href: "/legal/refund-policy/", label: "Refund Policy" },
    { href: "/legal/attorney-advertising/", label: "Attorney Advertising" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-navy to-navy-light py-16">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-4xl font-bold text-white">Legal Policies</h1>
          <p className="text-white/90 mt-2">Transparency about how we operate and protect your data</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl grid md:grid-cols-2 gap-6">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border p-6 rounded-xl hover:shadow-md transition-shadow">
              <span className="text-navy font-semibold">{l.label}</span>
            </Link>
          ))}
        </div>
      </section>
      <CTABand title="Transparency first. Ready to move forward?" subtitle="Book your $500 consultation or learn how the process works." />
    </main>
  );
}
