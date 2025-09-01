import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Practice Areas | Paradise Law AZ",
  description:
    "Explore our Arizona family law practice areas: divorce, child custody, financial matters, and special circumstances.",
};

const sections = [
  {
    title: "Divorce & Separation",
    items: [
      { href: "/practice-areas/divorce/uncontested/", label: "Uncontested Divorce" },
      { href: "/practice-areas/divorce/contested/", label: "Contested Divorce" },
      { href: "/practice-areas/divorce/legal-separation/", label: "Legal Separation" },
      { href: "/practice-areas/divorce/high-asset/", label: "High-Asset Divorce" },
      { href: "/practice-areas/divorce/military/", label: "Military Divorce" },
    ],
  },
  {
    title: "Child Custody & Parenting",
    items: [
      { href: "/practice-areas/custody/", label: "Child Custody Overview" },
      { href: "/practice-areas/custody/parental-rights/", label: "Parental Rights" },
      { href: "/practice-areas/custody/modifications/", label: "Custody Modifications" },
      { href: "/practice-areas/custody/relocation/", label: "Relocation Cases" },
      { href: "/practice-areas/custody/evaluations/", label: "Custody Evaluations" },
    ],
  },
  {
    title: "Financial Matters",
    items: [
      { href: "/practice-areas/financial/child-support-spousal-support/", label: "Child & Spousal Support" },
      { href: "/practice-areas/financial/property-division/", label: "Property Division" },
      { href: "/practice-areas/financial/debt-division/", label: "Debt Division" },
      { href: "/practice-areas/financial/business-valuation/", label: "Business Valuation" },
      { href: "/practice-areas/financial/retirement-investment-accounts/", label: "Retirement & Investment Accounts" },
    ],
  },
  {
    title: "Special Circumstances",
    items: [
      { href: "/practice-areas/special/domestic-violence/", label: "Domestic Violence" },
      { href: "/practice-areas/special/paternity/", label: "Paternity Cases" },
      { href: "/practice-areas/special/mediation/", label: "Mediation & ADR" },
      { href: "/practice-areas/special/appeals/", label: "Appeals & Post-Decree" },
      { href: "/practice-areas/special/enforcement/", label: "Enforcement Actions" },
    ],
  },
];

export default function PracticeAreasIndex() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-navy to-navy-light py-20">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Practice Areas
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Expert guidance across the full spectrum of Arizona family law
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-10">
            {sections.map((section) => (
              <div key={section.title} className="bg-white p-8 rounded-xl shadow-sm border">
                <h2 className="text-2xl font-bold text-navy mb-4">{section.title}</h2>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-light-blue hover:text-light-blue-dark underline-offset-2 hover:underline"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

