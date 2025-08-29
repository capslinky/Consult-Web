import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Retirement & Investment Account Division in Arizona Divorce | Paradise Law AZ',
  description: 'Expert guidance on dividing retirement plans, 401(k)s, IRAs, pensions, and investment accounts in Arizona divorce. QDRO preparation. $500 virtual consultation.',
  keywords: 'retirement account division Arizona, QDRO Arizona, 401k divorce, pension division, IRA divorce Arizona, investment account division, virtual consultation',
  openGraph: {
    title: 'Retirement & Investment Account Division in Arizona Divorce | Paradise Law AZ',
    description: 'Expert guidance on dividing retirement plans and investment accounts in Arizona divorce proceedings. QDRO preparation and investment protection services.',
    type: 'website',
  },
};

export default function RetirementInvestmentAccountsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-light-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Retirement & Investment Account Division in Arizona
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Protecting your retirement security and investment future through strategic account division
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
                Free Retirement Account Review
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Retirement Account Quick Facts</h2>
            <p className="text-xl text-gray-600">Essential information about retirement and investment account division</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">QDRO Requirements</h3>
              <p className="text-gray-600">Qualified Domestic Relations Orders required for most retirement plans</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Tax-Deferred Growth</h3>
              <p className="text-gray-600">Strategic division to preserve tax advantages and avoid penalties</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Investment Protection</h3>
              <p className="text-gray-600">Safeguarding long-term investment strategies and portfolio growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Retirement Accounts in Arizona Divorce</h2>
            <p className="text-gray-700 mb-6">
              Retirement and investment accounts often represent the largest assets in divorce proceedings after the 
              family home. Arizona&apos;s community property laws require equitable division of retirement benefits 
              accumulated during marriage, but the division process is complex and requires specialized knowledge 
              to avoid costly tax penalties and preserve retirement security.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Types of Retirement Accounts Subject to Division</h3>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold text-navy mb-3">Employer-Sponsored Plans</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 401(k) and 403(b) plans</li>
                    <li>• Defined benefit pension plans</li>
                    <li>• 457 deferred compensation plans</li>
                    <li>• Thrift Savings Plans (TSP) for federal employees</li>
                    <li>• Employee Stock Ownership Plans (ESOPs)</li>
                    <li>• Profit-sharing and bonus plans</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-navy mb-3">Individual Accounts</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Traditional and Roth IRAs</li>
                    <li>• SEP-IRAs and SIMPLE IRAs</li>
                    <li>• Individual annuities</li>
                    <li>• Brokerage and investment accounts</li>
                    <li>• Stock options and restricted stock</li>
                    <li>• Cryptocurrency and digital assets</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Community vs. Separate Retirement Property</h3>
            <p className="text-gray-700 mb-4">
              Arizona law distinguishes between community and separate portions of retirement accounts:
            </p>
            
            <h4 className="text-xl font-semibold text-navy mb-3">Community Property Portions</h4>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Contributions made during marriage from community income</li>
              <li>Employer matching contributions during marriage</li>
              <li>Investment growth on community contributions</li>
              <li>Vesting of employer benefits during marriage</li>
              <li>Stock options granted or vested during marriage</li>
            </ul>

            <h4 className="text-xl font-semibold text-navy mb-3">Separate Property Portions</h4>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Pre-marital account balances and contributions</li>
              <li>Growth on separate property contributions</li>
              <li>Contributions from separate property income during marriage</li>
              <li>Inheritance or gifts of retirement funds</li>
              <li>Post-separation contributions and growth</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Qualified Domestic Relations Orders (QDROs)</h3>
            <p className="text-gray-700 mb-4">
              Most employer-sponsored retirement plans require a Qualified Domestic Relations Order (QDRO) to 
              effectuate the transfer of retirement benefits to a former spouse without triggering tax penalties.
            </p>
            
            <div className="bg-light-blue text-white p-4 rounded-lg mb-6">
              <h4 className="text-lg font-semibold mb-3">QDRO Requirements</h4>
              <ul className="space-y-2 text-sm">
                <li>• Must be approved by the court and plan administrator</li>
                <li>• Cannot require benefits not provided by the plan</li>
                <li>• Must specify exact division amounts or percentages</li>
                <li>• Includes detailed participant and alternate payee information</li>
                <li>• Addresses distribution timing and options</li>
                <li>• Considers survivor benefits and death benefits</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Valuation Challenges</h3>
            
            <h4 className="text-xl font-semibold text-navy mb-3">Defined Contribution Plans (401k, 403b)</h4>
            <p className="text-gray-700 mb-4">
              These plans have account balances that fluctuate with market performance. Valuation requires 
              determining the balance as of a specific date and calculating the community vs. separate portions 
              using contribution histories and growth allocation methods.
            </p>

            <h4 className="text-xl font-semibold text-navy mb-3">Defined Benefit Pension Plans</h4>
            <p className="text-gray-700 mb-4">
              Traditional pension plans provide monthly benefits based on years of service and salary history. 
              Valuation requires actuarial calculations considering life expectancy, early retirement options, 
              and survivor benefits.
            </p>

            <div className="bg-yellow-50 border border-gold rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-navy mb-3">⚠️ Stock Options and Restricted Stock</h3>
              <p className="text-gray-700 mb-3">
                Employee stock compensation presents unique challenges:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Unvested options may have uncertain future value</li>
                <li>Exercise timing affects tax consequences</li>
                <li>Volatility requires careful valuation timing</li>
                <li>Company restrictions on transfer or exercise</li>
                <li>Integration with overall compensation package</li>
                <li>Tax planning for option exercise strategies</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Tax Implications of Division</h3>
            <p className="text-gray-700 mb-4">
              Retirement account division has significant tax implications that must be carefully planned:
            </p>
            
            <div className="bg-navy text-white p-4 rounded-lg mb-6">
              <h4 className="text-lg font-semibold mb-3">Tax-Advantaged Transfers</h4>
              <ul className="space-y-2 text-sm">
                <li>• QDRO transfers generally avoid immediate taxation</li>
                <li>• Direct trustee-to-trustee transfers preserve tax deferral</li>
                <li>• Avoid early withdrawal penalties through proper procedures</li>
                <li>• Roth vs. traditional IRA considerations for transfers</li>
                <li>• Required minimum distribution (RMD) planning</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Division Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Retirement Account Division Process</h2>
            <p className="text-xl text-gray-600">Step-by-step guide to retirement account division</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: "Account Discovery & Inventory",
                  description: "Identify all retirement accounts, investment accounts, and deferred compensation benefits for both spouses. Gather statements, plan documents, and beneficiary information for comprehensive asset inventory."
                },
                {
                  step: 2,
                  title: "Valuation & Community Property Analysis",
                  description: "Determine account values as of valuation date and calculate community vs. separate property portions using contribution tracking methods. Consider market volatility and timing of valuations."
                },
                {
                  step: 3,
                  title: "Division Strategy Development",
                  description: "Develop tax-efficient division strategy considering account types, tax characteristics, and long-term retirement planning goals. Balance immediate needs with future retirement security."
                },
                {
                  step: 4,
                  title: "QDRO Preparation & Review",
                  description: "Draft qualified domestic relations orders for employer-sponsored plans, ensuring compliance with plan requirements and ERISA regulations. Submit for plan administrator pre-approval when possible."
                },
                {
                  step: 5,
                  title: "Court Approval & Implementation",
                  description: "Obtain court approval of division orders and coordinate with plan administrators for implementation. Monitor transfer processes and resolve any administrative issues that arise."
                },
                {
                  step: 6,
                  title: "Post-Division Management",
                  description: "Establish new accounts, update beneficiary designations, and implement investment strategies for divided assets. Plan for ongoing retirement savings and tax optimization."
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

      {/* Division Strategies */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Retirement Account Division Strategies</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-light-blue text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Present Value Division</h3>
              <ul className="space-y-2 text-sm">
                <li>• Immediate division based on current account values</li>
                <li>• Clean break with no ongoing financial ties</li>
                <li>• Each party manages their own retirement planning</li>
                <li>• Suitable for younger couples with substantial assets</li>
                <li>• Requires careful consideration of tax implications</li>
                <li>• May need offsetting assets for equitable division</li>
              </ul>
            </div>
            
            <div className="bg-navy text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Deferred Distribution</h3>
              <ul className="space-y-2 text-sm">
                <li>• Division occurs when benefits are actually received</li>
                <li>• Maintains ongoing financial connection</li>
                <li>• Shares investment risk and growth potential</li>
                <li>• Common for pension plans and unvested benefits</li>
                <li>• Requires ongoing administration and coordination</li>
                <li>• May include survivor benefit considerations</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gold text-navy rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">💡 Retirement Planning Considerations</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <ul className="space-y-1">
                <li>• Impact on long-term retirement security</li>
                <li>• Social Security benefit calculations</li>
                <li>• Healthcare and Medicare planning</li>
                <li>• Estate planning and beneficiary updates</li>
              </ul>
              <ul className="space-y-1">
                <li>• Tax diversification strategies (traditional vs. Roth)</li>
                <li>• Required minimum distribution planning</li>
                <li>• Integration with other retirement income sources</li>
                <li>• Professional investment management considerations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Retirement Account Division FAQ</h2>
          
          <div className="space-y-6">
            {[
              {
                question: "Do I need a QDRO for all retirement account divisions?",
                answer: "QDROs are required for most employer-sponsored retirement plans including 401(k)s, 403(b)s, and pension plans. IRAs and individual accounts typically use different transfer procedures that don't require QDROs but still need careful handling to avoid tax penalties."
              },
              {
                question: "What happens to unvested retirement benefits in divorce?",
                answer: "Unvested benefits that are earned during marriage are typically considered community property, but division may be deferred until vesting occurs. The court may award a percentage of future benefits or require present value calculations with risk adjustments."
              },
              {
                question: "How are stock options and restricted stock divided?",
                answer: "Stock options and restricted stock require careful analysis of grant dates, vesting schedules, and exercise restrictions. Community property portions are typically based on the service period during marriage, with division strategies varying based on vesting status and company policies."
              },
              {
                question: "Can I avoid taxes when dividing retirement accounts?",
                answer: "Properly executed transfers through QDROs or direct trustee-to-trustee transfers generally avoid immediate taxation. However, the receiving spouse becomes responsible for taxes when benefits are eventually withdrawn, making tax planning an important consideration."
              },
              {
                question: "What if my spouse withdraws retirement funds during divorce proceedings?",
                answer: "Unauthorized withdrawals from retirement accounts during divorce may be subject to reimbursement orders. Courts can issue restraining orders preventing asset depletion and may award additional compensation for tax consequences and lost growth potential."
              },
              {
                question: "How do I update beneficiaries after retirement account division?",
                answer: "After division, each party should promptly update beneficiary designations on all retirement accounts. This includes primary and contingent beneficiaries, and should be coordinated with overall estate planning and any child support or alimony obligations."
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
          <h2 className="text-3xl font-bold mb-6">Secure Your Retirement Future</h2>
          <p className="text-xl mb-8 opacity-90">
            Retirement account division requires specialized expertise to preserve your financial security and 
            avoid costly mistakes. Our experienced attorneys work with financial professionals to ensure 
            strategic division that protects your retirement goals and minimizes tax consequences.
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
              Free Retirement Review
            </Link>
          </div>
        </div>
      </section>

      {/* Related Practice Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Related Practice Areas</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/practice-areas/financial/property-division" className="group">
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
            
            <Link href="/practice-areas/financial/child-support-spousal-support" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2 group-hover:text-light-blue">Child & Spousal Support</h3>
                <p className="text-gray-600">Calculating and enforcing support obligations in Arizona.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
