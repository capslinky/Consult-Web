import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Matters | Paradise Law AZ",
  description:
    "Explore Arizona family law financial topics: support, property division, debt, business valuation, and retirement accounts.",
};

export default function FinancialIndex() {
  const links = [
    { href: "/practice-areas/financial/child-support-spousal-support/", label: "Child & Spousal Support" },
    { href: "/practice-areas/financial/property-division/", label: "Property Division" },
    { href: "/practice-areas/financial/debt-division/", label: "Debt Division" },
    { href: "/practice-areas/financial/business-valuation/", label: "Business Valuation" },
    { href: "/practice-areas/financial/retirement-investment-accounts/", label: "Retirement & Investment Accounts" },
    { href: "/practice-areas/financial/prenuptial/", label: "Prenuptial Agreements" },
    { href: "/practice-areas/financial/postnuptial/", label: "Postnuptial Agreements" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-navy to-navy-light py-20">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Financial Matters</h1>
          <p className="text-xl text-white/90">Support, assets, and financial planning</p>
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

