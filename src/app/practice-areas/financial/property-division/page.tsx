import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Property Division & Asset Protection in Arizona | Paradise Law AZ Virtual Consultation',
  description: 'Expert guidance on marital property division, asset protection, and community property laws in Arizona. Book a $500 virtual consultation today.',
  keywords: 'property division Arizona, asset protection, community property, marital assets, Arizona divorce law, virtual consultation',
  openGraph: {
    title: 'Property Division & Asset Protection in Arizona | Paradise Law AZ',
    description: 'Expert guidance on property division and asset protection in Arizona divorces. Protect your financial interests with experienced legal counsel.',
    type: 'website',
  },
};

export default function PropertyDivisionPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-light-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Property Division & Asset Protection in Arizona
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Protecting your assets and ensuring fair distribution of marital property under Arizona law
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book"
                className="inline-flex items-center px-8 py-4 bg-gold text-navy font-semibold rounded-lg hover:bg-yellow-400 transition-colors duration-200"
              >
                Book Virtual Consultation - $500
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-navy transition-colors duration-200"
              >
                Free Asset Review
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Property Division Quick Facts</h2>
            <p className="text-xl text-gray-600">Essential information about property division in Arizona</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2H3v2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Community Property State</h3>
              <p className="text-gray-600">Equal division of marital assets and debts</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Separate Property Protection</h3>
              <p className="text-gray-600">Pre-marital and inherited assets remain separate</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Professional Valuation</h3>
              <p className="text-gray-600">Complex assets require expert appraisal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Property Division in Arizona</h2>
            <p className="text-gray-700 mb-6">
              Arizona is a community property state, meaning that most assets and debts acquired during marriage are considered 
              jointly owned and must be divided equitably (usually equally) upon divorce. However, separate property owned before 
              marriage or acquired by gift or inheritance remains with the original owner, making proper classification crucial 
              to protecting your assets.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Community vs. Separate Property</h3>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold text-navy mb-3">Community Property</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Assets acquired during marriage</li>
                    <li>• Income earned by either spouse</li>
                    <li>• Property purchased with community funds</li>
                    <li>• Business interests developed during marriage</li>
                    <li>• Retirement benefits earned during marriage</li>
                    <li>• Debts incurred for family benefit</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-navy mb-3">Separate Property</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Property owned before marriage</li>
                    <li>• Gifts received individually</li>
                    <li>• Inheritance received by one spouse</li>
                    <li>• Property acquired after service of divorce</li>
                    <li>• Proceeds from separate property sales</li>
                    <li>• Personal injury awards (with exceptions)</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Common Property Division Challenges</h3>
            <p className="text-gray-700 mb-4">
              Complex property division issues require careful legal analysis:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Commingled Assets:</strong> When separate property is mixed with community property</li>
              <li><strong>Increased Value:</strong> Appreciation of separate property during marriage</li>
              <li><strong>Business Valuation:</strong> Determining value of closely-held businesses or professional practices</li>
              <li><strong>Hidden Assets:</strong> Discovering concealed or undisclosed property</li>
              <li><strong>Retirement Accounts:</strong> Dividing 401(k)s, pensions, and other retirement benefits</li>
              <li><strong>Real Estate:</strong> Determining whether to sell or award property to one party</li>
              <li><strong>Stock Options:</strong> Valuing and dividing unvested stock compensation</li>
              <li><strong>Debt Allocation:</strong> Deciding responsibility for marital debts and obligations</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Asset Protection Strategies</h3>
            <p className="text-gray-700 mb-4">
              Protecting your assets during divorce requires proactive planning and documentation:
            </p>
            
            <h4 className="text-xl font-semibold text-navy mb-3">Documentation and Evidence</h4>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Maintain clear records of separate property acquisition dates and sources</li>
              <li>Keep inheritance documentation, gift letters, and pre-marital account statements</li>
              <li>Document any transmutation or agreement changing property character</li>
              <li>Preserve evidence of property improvements made with separate funds</li>
              <li>Track commingled accounts and property investments carefully</li>
            </ul>

            <h4 className="text-xl font-semibold text-navy mb-3">Valuation Methods</h4>
            <div className="bg-light-blue text-white p-4 rounded-lg mb-6">
              <ul className="space-y-2">
                <li>• <strong>Fair Market Value:</strong> Price willing buyer would pay willing seller</li>
                <li>• <strong>Appraisal Date:</strong> Usually date of trial or settlement</li>
                <li>• <strong>Professional Appraisers:</strong> Required for real estate, businesses, collectibles</li>
                <li>• <strong>Financial Experts:</strong> Necessary for complex investment portfolios</li>
                <li>• <strong>Forensic Accounting:</strong> Used when hidden assets suspected</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Property Division Process Steps */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Property Division Process in Arizona</h2>
            <p className="text-xl text-gray-600">Step-by-step guide to dividing marital assets</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: "Asset Discovery & Disclosure",
                  description: "Complete comprehensive disclosure of all assets, debts, and property interests. Include detailed financial affidavits, account statements, and property documentation for full transparency."
                },
                {
                  step: 2,
                  title: "Property Classification",
                  description: "Determine which assets are community property versus separate property. Analyze acquisition dates, funding sources, and any commingling or transmutation of property character."
                },
                {
                  step: 3,
                  title: "Professional Valuations",
                  description: "Obtain expert appraisals for complex assets including real estate, businesses, professional practices, collectibles, and retirement accounts requiring specialized valuation expertise."
                },
                {
                  step: 4,
                  title: "Division Negotiations",
                  description: "Negotiate property division through direct negotiation or mediation, considering tax consequences, liquidity needs, and practical aspects of asset distribution and ongoing management."
                },
                {
                  step: 5,
                  title: "Settlement Agreement",
                  description: "Document agreed-upon property division in comprehensive settlement agreement specifying exact assets, transfer procedures, and ongoing responsibilities for each party."
                },
                {
                  step: 6,
                  title: "Transfer Implementation",
                  description: "Execute property transfers through deeds, account transfers, qualified domestic relations orders (QDROs), and other legal instruments to complete the division process."
                }
              ].map((item) => (
                <div key={item.step} className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Complex Assets */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Complex Asset Division</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-light-blue text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">High-Value Assets</h3>
              <ul className="space-y-2 text-sm">
                <li>• Multiple residential properties</li>
                <li>• Commercial real estate investments</li>
                <li>• Business ownership interests</li>
                <li>• Professional practices and goodwill</li>
                <li>• Stock options and restricted shares</li>
                <li>• Art, collectibles, and luxury items</li>
              </ul>
            </div>
            
            <div className="bg-navy text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Retirement & Benefits</h3>
              <ul className="space-y-2 text-sm">
                <li>• 401(k) and 403(b) accounts</li>
                <li>• Defined benefit pension plans</li>
                <li>• Individual Retirement Accounts (IRAs)</li>
                <li>• Military retirement benefits</li>
                <li>• Deferred compensation plans</li>
                <li>• Health savings accounts (HSAs)</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-yellow-50 border border-gold rounded-lg p-6">
            <h3 className="text-xl font-semibold text-navy mb-3">💡 Asset Protection Tips</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Keep detailed records of all separate property and its sources</li>
              <li>Avoid commingling separate funds with community property when possible</li>
              <li>Consider prenuptial or postnuptial agreements for asset protection</li>
              <li>Understand tax consequences of different property division scenarios</li>
              <li>Document any agreements about property characterization during marriage</li>
              <li>Maintain professional relationships with qualified appraisers and financial advisors</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Property Division FAQ</h2>
          
          <div className="space-y-6">
            {[
              {
                question: "What happens to the family home in an Arizona divorce?",
                answer: "The family home can be sold and proceeds divided, awarded to one spouse (who may need to buy out the other&apos;s interest), or temporarily awarded to the spouse with primary custody. The decision depends on financial circumstances, child custody, and whether there&apos;s sufficient equity to facilitate a buyout."
              },
              {
                question: "How are businesses valued and divided in divorce?",
                answer: "Business valuation typically requires a professional appraiser who considers factors like revenue, assets, market conditions, and goodwill. The business may be awarded to one spouse with an offset to the other, sold and proceeds divided, or both parties may retain ownership interests."
              },
              {
                question: "Can separate property become community property?",
                answer: "Yes, through commingling (mixing with community funds) or transmutation (agreement to change character). For example, if you deposit inheritance money into a joint account and use it for family expenses, it may lose its separate character."
              },
              {
                question: "What if my spouse hides assets during divorce?",
                answer: "Arizona courts have broad powers to discover hidden assets through subpoenas, depositions, and forensic accounting. Spouses who hide assets can face severe sanctions, including being ordered to pay the other party&apos;s attorney fees and losing their share of the hidden property."
              },
              {
                question: "How are retirement accounts divided in Arizona?",
                answer: "Retirement accounts are typically divided based on the portion earned during marriage. A Qualified Domestic Relations Order (QDRO) is usually required to divide 401(k)s and pensions without tax penalties. IRAs can be divided through direct transfer."
              },
              {
                question: "Can we agree on our own property division?",
                answer: "Yes, spouses can reach their own agreement on property division, but it must be fair and disclosed to the court. The judge will review the agreement to ensure it&apos;s not unconscionable and that both parties understand their rights before approving it."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-navy mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-navy to-light-blue text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Protect Your Financial Future</h2>
          <p className="text-xl mb-8 opacity-90">
            Property division significantly impacts your long-term financial security. Our experienced attorneys will protect 
            your assets and ensure you receive your fair share under Arizona community property law.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-flex items-center px-8 py-4 bg-gold text-navy font-semibold rounded-lg hover:bg-yellow-400 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Virtual Consultation - $500
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-navy transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Free Asset Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* Related Practice Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Related Practice Areas</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/practice-areas/financial/child-support-spousal-support" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2 group-hover:text-light-blue">Support Orders</h3>
                <p className="text-gray-600">Child support and spousal support calculations and enforcement.</p>
              </div>
            </Link>
            
            <Link href="/practice-areas/financial/debt-division" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2 group-hover:text-light-blue">Debt Division</h3>
                <p className="text-gray-600">Managing marital debts and financial obligations in divorce.</p>
              </div>
            </Link>
            
            <Link href="/practice-areas/financial/business-valuation" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2 group-hover:text-light-blue">Business Valuation</h3>
                <p className="text-gray-600">Valuing and dividing business interests and professional practices.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
