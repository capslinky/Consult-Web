import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

export const metadata = {
  title: 'Contested Divorce in Arizona | Paradise Law AZ Virtual Consultations',
  description: 'Expert legal representation for contested divorce in Arizona. $500 virtual consultation. Protect your rights when spouses disagree.',
};

export default function ContestedDivorcePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <section className="py-4 bg-gray-50 border-b">
        <div className="container mx-auto px-4 max-w-6xl">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Practice Areas', href: '/practice-areas' },
              { label: 'Divorce', href: '/practice-areas/divorce' },
              { label: 'Contested Divorce' }
            ]}
          />
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-navy to-navy-light py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <div className="inline-block bg-gold/10 text-gold px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Divorce & Separation
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contested Divorce in Arizona
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto mb-8 text-left">
              When spouses cannot agree on divorce terms, you need strong legal representation to protect your rights and secure a fair outcome.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="w-full sm:w-auto">
                  Book Your $500 Consultation
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white text-navy hover:bg-gray-100">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-navy mb-2">6-18 Months</div>
              <p className="text-gray-600">Typical Timeline</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-navy mb-2">$15,000+</div>
              <p className="text-gray-600">Average Total Cost</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-navy mb-2">Court Required</div>
              <p className="text-gray-600">Judge Decides</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-navy mb-2">Full Discovery</div>
              <p className="text-gray-600">Financial Disclosure</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Contested Divorce */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                What Is a Contested Divorce?
              </h2>
              <p className="text-gray-700 mb-6">
                A contested divorce occurs when spouses cannot agree on one or more major issues such as property division, child custody, support, or spousal maintenance. These cases require court intervention and often involve extensive legal proceedings.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <div>
                    <strong className="text-navy">Complex Legal Process</strong>
                    <p className="text-gray-600 text-sm mt-1">Formal court proceedings with discovery, depositions, and hearings</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="text-navy">Extended Timeline</strong>
                    <p className="text-gray-600 text-sm mt-1">6-18 months or longer depending on complexity</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  <div>
                    <strong className="text-navy">Higher Costs</strong>
                    <p className="text-gray-600 text-sm mt-1">Significantly more expensive due to extensive legal work</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-light-blue/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-navy mb-6">Common Contested Issues</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-700">Child custody and parenting time</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-700">Division of marital property</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-700">Child support amounts</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-700">Spousal maintenance (alimony)</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-700">Business valuations</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-700">Debt allocation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why You Need Legal Representation */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Why You Need Strong Legal Representation
            </h2>
            <p className="text-xl text-gray-600">
              Protect your rights and secure the best possible outcome for your future
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-navy mb-6">Protect Your Interests:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.99.99l-2.99 2.99-2.99-2.99" />
                  </svg>
                  <div>
                    <strong className="text-navy">Asset Protection</strong>
                    <p className="text-gray-600 text-sm mt-1">Ensure fair distribution of marital property and assets</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <div>
                    <strong className="text-navy">Parental Rights</strong>
                    <p className="text-gray-600 text-sm mt-1">Advocate for your relationship with your children</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  <div>
                    <strong className="text-navy">Financial Security</strong>
                    <p className="text-gray-600 text-sm mt-1">Secure appropriate support and maintenance</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-navy mb-6">Legal Expertise:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-light-blue mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <div>
                    <strong className="text-navy">Complex Procedures</strong>
                    <p className="text-gray-600 text-sm mt-1">Navigate court rules and legal requirements</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-light-blue mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <div>
                    <strong className="text-navy">Evidence Gathering</strong>
                    <p className="text-gray-600 text-sm mt-1">Thorough discovery and documentation</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-light-blue mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <div>
                    <strong className="text-navy">Skilled Negotiation</strong>
                    <p className="text-gray-600 text-sm mt-1">Strategic advocacy and settlement discussions</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">
              The Contested Divorce Process
            </h2>
            <p className="text-xl text-gray-600">
              Understanding what to expect during contested divorce proceedings
            </p>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-start gap-6 p-6 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-navy mb-3">Filing and Response</h3>
                <p className="text-gray-700">
                  One spouse files a Petition for Dissolution. The other spouse has 20-30 days to file a Response. If contested issues are raised, the case moves forward as contested.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row items-start gap-6 p-6 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-navy mb-3">Discovery Process</h3>
                <p className="text-gray-700">
                  Both parties exchange financial information, documents, and may conduct depositions. This phase can take several months depending on the complexity of assets and issues.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-start gap-6 p-6 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-navy mb-3">Temporary Orders</h3>
                <p className="text-gray-700">
                  The court may issue temporary orders for child custody, support, and use of marital property while the divorce is pending. These hearings typically occur within 60-90 days.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row items-start gap-6 p-6 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white font-bold text-xl">
                  4
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-navy mb-3">Settlement Negotiations</h3>
                <p className="text-gray-700">
                  Attempts to resolve issues through negotiation, mediation, or settlement conferences. Many contested cases settle before trial, saving time and money.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col md:flex-row items-start gap-6 p-6 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white font-bold text-xl">
                  5
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-navy mb-3">Trial (If Necessary)</h3>
                <p className="text-gray-700">
                  If settlement cannot be reached, the case goes to trial where a judge will make final decisions on all contested issues. Trials can last from one day to several weeks.
                </p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="flex flex-col md:flex-row items-start gap-6 p-6 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white font-bold text-xl">
                  6
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-navy mb-3">Final Decree</h3>
                <p className="text-gray-700">
                  The court issues a final Decree of Dissolution outlining all terms of the divorce. This becomes a legally binding court order that both parties must follow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Factors */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Understanding Contested Divorce Costs
            </h2>
            <p className="text-xl text-gray-600">
              Factors that affect the total cost of your contested divorce
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-navy mb-6">Cost Factors:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="text-navy">Length of Case</strong>
                    <p className="text-gray-600 text-sm mt-1">Longer cases require more attorney time and court appearances</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <strong className="text-navy">Complexity of Assets</strong>
                    <p className="text-gray-600 text-sm mt-1">Business valuations, real estate, and retirement accounts</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <div>
                    <strong className="text-navy">Custody Disputes</strong>
                    <p className="text-gray-600 text-sm mt-1">Child custody evaluations and expert witnesses</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <div>
                    <strong className="text-navy">Level of Conflict</strong>
                    <p className="text-gray-600 text-sm mt-1">High-conflict cases require more court appearances</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-light-blue/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-navy mb-6">Ways to Reduce Costs</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-light-blue mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Be organized and responsive</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-light-blue mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Gather documents promptly</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-light-blue mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Consider mediation for some issues</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-light-blue mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Focus on most important issues</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-light-blue mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Be realistic about outcomes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about contested divorce in Arizona
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-navy mb-3">
                How long does a contested divorce take?
              </h3>
              <p className="text-gray-600">
                Contested divorces typically take 6-18 months, but complex cases can take longer. The timeline depends on the issues involved, court schedules, and whether the case goes to trial.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-navy mb-3">
                Can a contested divorce become uncontested?
              </h3>
              <p className="text-gray-600">
                Yes, if parties reach agreement on all issues during the process, the case can convert to uncontested. Many contested cases settle before trial through negotiation or mediation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-navy mb-3">
                Do I need to go to trial?
              </h3>
              <p className="text-gray-600">
                Most contested divorces settle before trial. Only about 5-10% of divorce cases actually go to trial. Your attorney will work to negotiate a favorable settlement to avoid the expense and uncertainty of trial.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-navy mb-3">
                What if my spouse won&apos;t cooperate?
              </h3>
              <p className="text-gray-600">
                The court has tools to compel cooperation, including court orders for document production and sanctions for non-compliance. Your attorney can use discovery procedures to obtain necessary information.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-navy mb-3">
                How much will a contested divorce cost?
              </h3>
              <p className="text-gray-600">
                Contested divorces typically cost $15,000-$50,000+ depending on complexity and length. Court costs, expert witnesses, and extensive attorney time contribute to higher costs compared to uncontested divorces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Protect Your Rights in a Contested Divorce
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Don&apos;t face a contested divorce alone. Get experienced legal representation to secure the best outcome for your future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" className="w-full sm:w-auto">
                Book Your $500 Consultation
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white text-navy hover:bg-gray-100">
                Ask a Question
              </Button>
            </Link>
          </div>
          <p className="text-white/80 mt-8">
            Questions? Call <a href="tel:602-555-0123" className="text-gold hover:text-gold-light underline">602-555-0123</a> or{' '}
            <Link href="/contact" className="text-gold hover:text-gold-light underline">
              contact us online
            </Link>
          </p>
        </div>
      </section>

      {/* Related Practice Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Related Practice Areas
            </h2>
            <p className="text-xl text-gray-600">
              Explore other family law services we offer
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/practice-areas/divorce/uncontested/" className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-navy mb-3">Uncontested Divorce</h3>
              <p className="text-gray-600 mb-4">
                When both spouses agree on all terms of divorce.
              </p>
              <span className="text-gold font-semibold">Learn more →</span>
            </Link>

            <Link href="/practice-areas/custody/" className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-navy mb-3">Child Custody</h3>
              <p className="text-gray-600 mb-4">
                Legal decision-making and parenting time arrangements.
              </p>
              <span className="text-gold font-semibold">Learn more →</span>
            </Link>

            <Link href="/practice-areas/financial/child-support-spousal-support/" className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-navy mb-3">Spousal Maintenance</h3>
              <p className="text-gray-600 mb-4">
                Alimony and spousal support arrangements.
              </p>
              <span className="text-gold font-semibold">Learn more →</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
