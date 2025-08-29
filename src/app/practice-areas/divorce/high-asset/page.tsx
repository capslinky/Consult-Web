import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'High-Asset Divorce in Arizona | Paradise Law AZ Virtual Consultation',
  description: 'Navigate complex high-asset divorce in Arizona. Expert guidance on business valuation, property division, tax implications. Book a $500 virtual consultation today.',
  keywords: 'high-asset divorce Arizona, complex property division, business valuation, Arizona family law, virtual consultation',
  openGraph: {
    title: 'High-Asset Divorce in Arizona | Paradise Law AZ',
    description: 'Expert guidance on high-asset divorce in Arizona. Navigate complex property division, business valuations, and tax implications. Virtual consultation available.',
    type: 'website',
  },
};

export default function HighAssetDivorcePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-light-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              High-Asset Divorce in Arizona
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Protecting your wealth with expert guidance on complex property division, business valuation, and tax strategies
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
                Free Case Evaluation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">High-Asset Divorce Quick Facts</h2>
            <p className="text-xl text-gray-600">Essential information about complex asset division in Arizona</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Asset Threshold</h3>
              <p className="text-gray-600">Typically $1M+ in marital assets</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Business Valuation</h3>
              <p className="text-gray-600">Professional appraisals required</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Tax Implications</h3>
              <p className="text-gray-600">Complex capital gains considerations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding High-Asset Divorce in Arizona</h2>
            <p className="text-gray-700 mb-6">
              High-asset divorces involve significant wealth and complex financial structures that require specialized legal expertise. 
              In Arizona&apos;s community property system, these cases often involve intricate business valuations, multiple property types, 
              sophisticated investment portfolios, and substantial tax implications that can significantly impact both parties&apos; financial futures.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">What Defines a High-Asset Divorce?</h3>
            <p className="text-gray-700 mb-4">
              While there&apos;s no official threshold, high-asset divorces typically involve:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Combined marital assets exceeding $1 million</li>
              <li>Ownership interests in businesses or professional practices</li>
              <li>Complex investment portfolios (stocks, bonds, hedge funds, private equity)</li>
              <li>Multiple real estate properties or commercial real estate</li>
              <li>Significant retirement accounts or deferred compensation</li>
              <li>Intellectual property or royalty interests</li>
              <li>International assets or offshore accounts</li>
              <li>Stock options, restricted stock, or executive compensation packages</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Unique Challenges in High-Asset Divorce</h3>
            
            <h4 className="text-xl font-semibold text-navy mb-3">Asset Identification and Valuation</h4>
            <p className="text-gray-700 mb-4">
              High-asset cases require comprehensive financial discovery to identify and properly value all marital assets:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li><strong>Business Interests:</strong> Professional appraisals using income, market, and asset approaches</li>
              <li><strong>Real Estate:</strong> Current market valuations for residential and commercial properties</li>
              <li><strong>Investment Accounts:</strong> Fair market value of complex securities and alternative investments</li>
              <li><strong>Personal Property:</strong> Appraisals for art, collectibles, jewelry, and luxury items</li>
              <li><strong>Hidden Assets:</strong> Forensic accounting to uncover concealed or transferred assets</li>
            </ul>

            <h4 className="text-xl font-semibold text-navy mb-3">Business Ownership Complications</h4>
            <p className="text-gray-700 mb-4">
              When one or both spouses own businesses, additional complexities arise:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Determining separate vs. community property interests</li>
              <li>Valuing closely-held businesses or professional practices</li>
              <li>Addressing goodwill and other intangible assets</li>
              <li>Managing business operations during divorce proceedings</li>
              <li>Considering buy-out options vs. continued co-ownership</li>
            </ul>

            <h4 className="text-xl font-semibold text-navy mb-3">Tax Considerations</h4>
            <p className="text-gray-700 mb-6">
              High-asset divorces involve significant tax implications that can dramatically affect the true value of settlements:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Capital gains tax on asset transfers and sales</li>
              <li>Tax basis step-up considerations for inherited property</li>
              <li>Retirement account distribution penalties and taxes</li>
              <li>Business sale or restructuring tax consequences</li>
              <li>Alimony tax treatment changes under current law</li>
              <li>Estate and gift tax planning implications</li>
            </ul>

          </div>
        </div>
      </section>

      {/* Asset Protection Strategies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Asset Protection Strategies</h2>
            <p className="text-xl text-gray-600">Safeguarding your financial interests during high-asset divorce</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: "Immediate Financial Documentation",
                  description: "Secure and organize all financial records, business documents, tax returns, and account statements before your spouse becomes aware of divorce proceedings."
                },
                {
                  step: 2,
                  title: "Asset Freeze and Protection",
                  description: "Implement legal measures to prevent asset dissipation, including temporary restraining orders and account monitoring to preserve marital estate."
                },
                {
                  step: 3,
                  title: "Professional Team Assembly",
                  description: "Engage forensic accountants, business valuation experts, tax advisors, and financial planners to ensure comprehensive asset analysis and protection."
                },
                {
                  step: 4,
                  title: "Business Continuity Planning",
                  description: "Develop strategies to maintain business operations and value during proceedings, including management succession and operational agreements."
                },
                {
                  step: 5,
                  title: "Tax-Efficient Division Strategy",
                  description: "Structure asset division to minimize tax consequences and maximize after-tax value for both parties through strategic timing and transfer methods."
                },
                {
                  step: 6,
                  title: "Privacy and Confidentiality",
                  description: "Utilize confidentiality agreements and protective orders to maintain privacy around business operations and personal financial information."
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

      {/* Valuation Methods */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Business Valuation Methods</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-light-blue text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Income Approach</h3>
              <ul className="space-y-2 text-sm">
                <li>• Discounted cash flow analysis</li>
                <li>• Capitalization of earnings</li>
                <li>• Based on future income potential</li>
                <li>• Best for profitable businesses</li>
              </ul>
            </div>
            
            <div className="bg-navy text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Market Approach</h3>
              <ul className="space-y-2 text-sm">
                <li>• Comparable company analysis</li>
                <li>• Recent transaction multiples</li>
                <li>• Industry-specific metrics</li>
                <li>• Relies on market data availability</li>
              </ul>
            </div>
            
            <div className="bg-gold text-navy p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Asset Approach</h3>
              <ul className="space-y-2 text-sm">
                <li>• Net asset value method</li>
                <li>• Liquidation value approach</li>
                <li>• Tangible asset focus</li>
                <li>• Conservative valuation method</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-yellow-50 border border-gold rounded-lg p-6">
            <h3 className="text-xl font-semibold text-navy mb-3">🏢 Choosing the Right Valuation Method</h3>
            <p className="text-gray-700 mb-3">
              The appropriate valuation method depends on the business type, industry, profitability, and available data. 
              Professional business appraisers often use multiple approaches to arrive at a fair value range.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Service businesses: Often valued using income approach</li>
              <li>Asset-heavy businesses: May emphasize asset approach</li>
              <li>Publicly traded comparables: Support market approach</li>
              <li>Unique businesses: May require hybrid methodologies</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Common High-Asset Issues */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Common High-Asset Divorce Issues</h2>
          
          <div className="space-y-6">
            {[
              {
                issue: "Business Ownership and Management",
                description: "Determining how to handle shared business interests, whether through buy-outs, continued partnership, or forced sale, while maintaining business operations and value."
              },
              {
                issue: "Stock Options and Executive Compensation",
                description: "Properly valuing and dividing unvested stock options, restricted stock units, deferred compensation plans, and other executive benefit packages."
              },
              {
                issue: "Multiple Properties and Real Estate",
                description: "Managing the division of primary residences, vacation homes, rental properties, and commercial real estate, including mortgage and tax considerations."
              },
              {
                issue: "International Assets and Offshore Accounts",
                description: "Identifying and valuing foreign assets, addressing currency fluctuations, international tax obligations, and compliance with disclosure requirements."
              },
              {
                issue: "Complex Investment Portfolios",
                description: "Dividing sophisticated investments including hedge funds, private equity, venture capital, derivatives, and other alternative investments with liquidity restrictions."
              },
              {
                issue: "Intellectual Property Rights",
                description: "Valuing and allocating patents, trademarks, copyrights, royalties, and other intellectual property that may generate ongoing income streams."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-navy mb-3">{item.issue}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">High-Asset Divorce FAQ</h2>
          
          <div className="space-y-6">
            {[
              {
                question: "How long do high-asset divorces typically take?",
                answer: "High-asset divorces generally take 12-24 months or longer, depending on the complexity of assets, level of cooperation between parties, and need for multiple expert valuations. Business valuations alone can take 3-6 months to complete properly."
              },
              {
                question: "Can I protect assets I owned before marriage?",
                answer: "Separate property (assets owned before marriage) generally remains separate, but complications arise if separate assets were commingled with marital assets or if separate businesses increased in value due to marital efforts. Proper documentation is crucial."
              },
              {
                question: "How are stock options divided in divorce?",
                answer: "Stock options are typically divided based on when they were earned. Options earned during marriage are community property, while pre-marital options remain separate. Unvested options require special handling and may need continued employment conditions."
              },
              {
                question: "What if my spouse is hiding assets?",
                answer: "Forensic accountants can trace hidden assets through bank records, tax returns, and business documents. Courts have broad discovery powers and can impose severe sanctions for asset concealment, including awarding the hidden assets entirely to the innocent spouse."
              },
              {
                question: "How are business debts handled in high-asset divorce?",
                answer: "Business debts are typically allocated based on who benefits from the business operations. Personal guarantees on business loans can complicate matters. The court considers debt allocation as part of the overall property division to achieve equity."
              },
              {
                question: "Should I sell the business or buy out my spouse?",
                answer: "This depends on your ability to finance a buyout, your desire to continue business operations, and tax implications of each option. Sometimes structured payouts over time or percentage ownership arrangements work better than immediate buyouts or forced sales."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
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
            High-asset divorces require sophisticated legal strategies and expert financial analysis. Our experienced team understands 
            the complexities of wealth preservation and can help you navigate this challenging process while protecting your interests.
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
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibred rounded-lg hover:bg-white hover:text-navy transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Free Case Evaluation
            </Link>
          </div>
        </div>
      </section>

      {/* Related Practice Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Related Practice Areas</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/practice-areas/divorce/contested" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2 group-hover:text-light-blue">Contested Divorce</h3>
                <p className="text-gray-600">Complex divorce cases involving disputed issues requiring court intervention.</p>
              </div>
            </Link>
            
            <Link href="/practice-areas/financial" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2 group-hover:text-light-blue">Financial Matters</h3>
                <p className="text-gray-600">Property division, spousal support, and complex financial issues in family law.</p>
              </div>
            </Link>
            
            <Link href="/practice-areas/special" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.818-4.364a9 9 0 11-12.728 12.728 9 9 0 0112.728-12.728z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2 group-hover:text-light-blue">Special Circumstances</h3>
                <p className="text-gray-600">Unique family law situations requiring specialized legal expertise and strategies.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
