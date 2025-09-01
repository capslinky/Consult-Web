import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Business Valuation & Professional Practices in Arizona Divorce | Paradise Law AZ',
  description: 'Expert guidance on valuing and dividing business interests, professional practices, and closely-held companies in Arizona divorce. $500 virtual consultation.',
  keywords: 'business valuation Arizona, professional practice divorce, business division Arizona, closely held company, Arizona community property, virtual consultation',
  openGraph: {
    title: 'Business Valuation & Professional Practices in Arizona Divorce | Paradise Law AZ',
    description: 'Expert guidance on valuing and dividing business interests and professional practices during Arizona divorce proceedings. Virtual consultation available.',
    type: 'website',
  },
};

export default function BusinessValuationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-light-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Business Valuation & Professional Practices in Arizona
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Expert valuation and division of business interests, professional practices, and closely-held companies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book/"
                className="inline-flex items-center px-8 py-4 bg-gold text-navy font-semibold rounded-lg hover:bg-yellow-400 transition-colors duration-200"
              >
                Book Virtual Consultation - $500
              </Link>
              <Link
                href="/contact/"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-navy transition-colors duration-200"
              >
                Free Business Evaluation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Business Division Quick Facts</h2>
            <p className="text-xl text-gray-600">Essential information about business valuation in Arizona divorce</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Professional Appraisal</h3>
              <p className="text-gray-600">Certified business valuators determine fair market value</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Multiple Valuation Methods</h3>
              <p className="text-gray-600">Asset, income, and market approaches for accurate valuation</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Division Options</h3>
              <p className="text-gray-600">Buyout, sale, or continued co-ownership structures</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Business Interests in Arizona Divorce</h2>
            <p className="text-gray-700 mb-6">
              When one or both spouses own business interests, professional practices, or closely-held companies, 
              these assets must be properly valued and divided as part of the divorce proceedings. Arizona&apos;s 
              community property laws require equitable division of business interests acquired or enhanced 
              during marriage, making accurate valuation critical for fair outcomes.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Types of Business Interests in Divorce</h3>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold text-navy mb-3">Professional Practices</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Medical and dental practices</li>
                    <li>• Legal practices and law firms</li>
                    <li>• Accounting and financial services</li>
                    <li>• Veterinary and healthcare practices</li>
                    <li>• Consulting and advisory services</li>
                    <li>• Engineering and architecture firms</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-navy mb-3">Business Entities</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Sole proprietorships</li>
                    <li>• Partnerships and LLPs</li>
                    <li>• Limited liability companies (LLCs)</li>
                    <li>• Closely-held corporations</li>
                    <li>• Franchise operations</li>
                    <li>• Real estate investment companies</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Community vs. Separate Business Property</h3>
            <p className="text-gray-700 mb-4">
              Arizona law distinguishes between community and separate business interests:
            </p>
            
            <h4 className="text-xl font-semibold text-navy mb-3">Community Business Interests</h4>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Businesses started during marriage using community funds</li>
              <li>Growth in value of separate business due to community efforts</li>
              <li>Businesses where community labor or funds contributed to success</li>
              <li>Professional licenses and degrees earned during marriage</li>
              <li>Goodwill developed through community efforts and resources</li>
            </ul>

            <h4 className="text-xl font-semibold text-navy mb-3">Separate Business Interests</h4>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Businesses owned before marriage with no community contributions</li>
              <li>Gifts or inheritances of business interests received during marriage</li>
              <li>Business growth attributable solely to market forces</li>
              <li>Separate property used exclusively for business development</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Valuation Methods</h3>
            <p className="text-gray-700 mb-4">
              Professional business appraisers use three primary approaches to determine fair market value:
            </p>
            
            <div className="bg-light-blue text-white p-4 rounded-lg mb-6">
              <h4 className="text-lg font-semibold mb-3">Asset-Based Approach</h4>
              <ul className="space-y-2 text-sm">
                <li>• Book value of assets minus liabilities</li>
                <li>• Adjusted net worth method</li>
                <li>• Liquidation value if business would be sold</li>
                <li>• Replacement cost of assets</li>
                <li>• Fair market value of tangible and intangible assets</li>
              </ul>
            </div>

            <div className="bg-navy text-white p-4 rounded-lg mb-6">
              <h4 className="text-lg font-semibold mb-3">Income-Based Approach</h4>
              <ul className="space-y-2 text-sm">
                <li>• Capitalization of earnings method</li>
                <li>• Discounted cash flow analysis</li>
                <li>• Revenue multiplier methods</li>
                <li>• Adjusted earnings before interest, taxes, depreciation, and amortization (EBITDA)</li>
                <li>• Risk-adjusted discount rates for future earnings</li>
              </ul>
            </div>

            <div className="bg-gold text-navy p-4 rounded-lg mb-8">
              <h4 className="text-lg font-semibold mb-3">Market-Based Approach</h4>
              <ul className="space-y-2 text-sm">
                <li>• Comparable company sales and transactions</li>
                <li>• Industry valuation multiples</li>
                <li>• Market capitalization methods for similar businesses</li>
                <li>• Professional practice sale benchmarks</li>
                <li>• Economic data specific to industry and location</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Special Valuation Considerations</h3>
            
            <h4 className="text-xl font-semibold text-navy mb-3">Professional Goodwill</h4>
            <p className="text-gray-700 mb-4">
              Professional goodwill represents the value of a business beyond its tangible assets, including 
              reputation, client relationships, and earning potential. Arizona distinguishes between enterprise 
              goodwill (community property) and personal goodwill (separate property).
            </p>

            <h4 className="text-xl font-semibold text-navy mb-3">Key Person Discounts</h4>
            <p className="text-gray-700 mb-4">
              When a business depends heavily on one spouse&apos;s personal skills or relationships, the valuation 
              may include key person discounts reflecting the risk of reduced value without that individual&apos;s 
              continued involvement.
            </p>

            <div className="bg-yellow-50 border border-gold rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-navy mb-3">⚠️ Professional Practice Challenges</h3>
              <p className="text-gray-700 mb-3">
                Professional practices present unique valuation challenges:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Restrictions on ownership transfer due to professional licensing</li>
                <li>Non-compete agreements affecting business value</li>
                <li>Personal vs. enterprise goodwill distinctions</li>
                <li>Ongoing dependence on professional licenses and skills</li>
                <li>Client relationships that may not transfer to new ownership</li>
                <li>Professional liability and malpractice considerations</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Business Division Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Business Division Process in Arizona</h2>
            <p className="text-xl text-gray-600">Step-by-step guide to business interest division</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: "Business Interest Identification",
                  description: "Identify all business interests, ownership percentages, and involvement levels of each spouse. Document business structures, partnerships, and operating agreements that may affect division."
                },
                {
                  step: 2,
                  title: "Community vs. Separate Analysis",
                  description: "Determine which portions of business interests are community vs. separate property. Analyze contributions of community labor, funds, and efforts to business development and growth."
                },
                {
                  step: 3,
                  title: "Professional Business Appraisal",
                  description: "Engage certified business valuators to conduct comprehensive appraisals using appropriate valuation methods. Consider multiple approaches for complex businesses or professional practices."
                },
                {
                  step: 4,
                  title: "Division Option Assessment",
                  description: "Evaluate division alternatives including buyouts, continued co-ownership, sale to third parties, or liquidation. Consider tax implications and ongoing operational requirements."
                },
                {
                  step: 5,
                  title: "Financial Structure Planning",
                  description: "Develop payment structures for buyouts including cash payments, promissory notes, or asset trades. Address security interests, guarantees, and default provisions."
                },
                {
                  step: 6,
                  title: "Legal Documentation & Transfer",
                  description: "Execute necessary legal documents including buy-sell agreements, asset transfer documents, and corporate resolutions. Update business registrations and professional licenses as needed."
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

      {/* Division Options */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Business Division Options</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-light-blue text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Buyout Options</h3>
              <ul className="space-y-2 text-sm">
                <li>• One spouse buys out the other&apos;s interest</li>
                <li>• Lump sum cash payment at closing</li>
                <li>• Installment payments over time with interest</li>
                <li>• Asset trade-offs with other marital property</li>
                <li>• Third-party financing for buyout funds</li>
                <li>• Security interests in business assets</li>
              </ul>
            </div>
            
            <div className="bg-navy text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Alternative Structures</h3>
              <ul className="space-y-2 text-sm">
                <li>• Continued co-ownership with operating agreements</li>
                <li>• Sale to third party with proceeds division</li>
                <li>• Liquidation and asset distribution</li>
                <li>• Management buyout arrangements</li>
                <li>• Employee stock ownership plans (ESOPs)</li>
                <li>• Staged transition over specified time period</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-yellow-50 border border-gold rounded-lg p-6">
            <h3 className="text-xl font-semibold text-navy mb-3">💡 Tax Considerations for Business Division</h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700 text-sm">
              <ul className="space-y-1">
                <li>• Capital gains implications of business transfers</li>
                <li>• Section 1041 tax-free transfers between spouses</li>
                <li>• Depreciation recapture on business assets</li>
                <li>• Impact on business tax elections and status</li>
              </ul>
              <ul className="space-y-1">
                <li>• Installment sale treatment for buyout payments</li>
                <li>• Professional practice goodwill tax treatment</li>
                <li>• Estate planning implications of business interests</li>
                <li>• State tax considerations for business transfers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Business Valuation FAQ</h2>
          
          <div className="space-y-6">
            {[
              {
                question: "How is a professional practice valued differently from other businesses?",
                answer: "Professional practices require special consideration for personal vs. enterprise goodwill, licensing restrictions, and the professional's personal reputation and skills. The valuation must account for whether the practice's value depends on the specific professional's continued involvement."
              },
              {
                question: "Can my spouse get part of my business that I started before marriage?",
                answer: "If community funds or labor contributed to the business growth during marriage, your spouse may be entitled to the increase in value attributable to community contributions. The original value and any growth from separate property or market forces typically remains separate."
              },
              {
                question: "What if we can't agree on the business valuation?",
                answer: "Each party can hire their own business appraiser, and if valuations differ significantly, the court may order a neutral third appraiser. The court will consider all expert opinions and evidence in determining fair market value for division purposes."
              },
              {
                question: "How do buy-sell agreements affect divorce proceedings?",
                answer: "Existing buy-sell agreements may contain valuation formulas and transfer restrictions that affect the divorce division. However, Arizona courts can review whether such agreements are fair and enforceable in the divorce context, particularly if they undervalue the business interest."
              },
              {
                question: "What happens to business debt and liabilities?",
                answer: "Business debts and liabilities are considered alongside assets in the valuation and division process. The spouse retaining the business typically assumes related debts, but personal guarantees may require special attention and possible refinancing or release agreements."
              },
              {
                question: "Can I be forced to sell my business in a divorce?",
                answer: "Courts prefer to avoid forcing business sales that could harm value, but if no other equitable division is possible, or if continued co-ownership is unworkable, the court may order a sale with proceeds divided between the parties."
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
          <h2 className="text-3xl font-bold mb-6">Protect Your Business Interests</h2>
          <p className="text-xl mb-8 opacity-90">
            Business valuation and division require specialized expertise to ensure fair outcomes and protect your 
            financial interests. Our experienced attorneys work with certified appraisers to achieve equitable 
            business division while preserving business value and operational continuity.
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
              Free Business Evaluation
            </Link>
          </div>
        </div>
      </section>

      {/* Related Practice Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Related Practice Areas</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/practice-areas/financial/property-division/" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2H3v2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2 group-hover:text-light-blue">Property Division</h3>
                <p className="text-gray-600">Dividing marital assets and protecting your financial interests in divorce.</p>
              </div>
            </Link>
            
            <Link href="/practice-areas/financial/retirement-investment-accounts/" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2 group-hover:text-light-blue">Retirement Accounts</h3>
                <p className="text-gray-600">Dividing retirement plans and investment accounts in Arizona divorce.</p>
              </div>
            </Link>
            
            <Link href="/practice-areas/financial/debt-division/" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2 group-hover:text-light-blue">Debt Division</h3>
                <p className="text-gray-600">Strategic debt division and financial planning for your future.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
