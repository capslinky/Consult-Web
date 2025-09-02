import Link from "next/link";
import type { Metadata } from "next";
import { canonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Special Circumstances | Paradise Law AZ",
  description:
    "Explore special Arizona family law circumstances: domestic violence, paternity, mediation, appeals, and enforcement.",
  alternates: { canonical: canonical('/practice-areas/special/') },
  openGraph: {
    title: "Special Circumstances | Paradise Law AZ",
    description: "Domestic violence, paternity, mediation, appeals, enforcement.",
    type: "website",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://azfamilylaw.wiki"}/practice-areas/special/`,
  },
};

export default function SpecialIndex() {
  const links = [
    { href: "/practice-areas/special/domestic-violence/", label: "Domestic Violence" },
    { href: "/practice-areas/special/paternity/", label: "Paternity" },
    { href: "/practice-areas/special/mediation/", label: "Mediation & ADR" },
    { href: "/practice-areas/special/appeals/", label: "Appeals & Post-Decree" },
    { href: "/practice-areas/special/enforcement/", label: "Enforcement Actions" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-navy to-navy-light py-20">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Special Circumstances</h1>
          <p className="text-xl text-white/90">Focused strategies for unique situations</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl grid md:grid-cols-2 gap-6">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="bg-white p-6 rounded-xl border hover:shadow-md transition-shadow">
              <span className="text-navy font-semibold">{l.label}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
