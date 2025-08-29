import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Child Support & Spousal Support in Arizona | Paradise Law AZ Virtual Consultation',
  description: 'Expert guidance on child support calculations, spousal support (alimony), and enforcement in Arizona. Book a $500 virtual consultation today.',
  keywords: 'child support Arizona, spousal support, alimony Arizona, support calculations, Arizona family law, virtual consultation',
  openGraph: {
    title: 'Child Support & Spousal Support in Arizona | Paradise Law AZ',
    description: 'Expert guidance on child support and spousal support calculations and enforcement in Arizona. Protect your financial interests. Virtual consultation available.',
    type: 'website',
  },
};

export default function ChildSupportSpousalSupportPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-light-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Child Support & Spousal Support in Arizona
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Ensuring fair financial support calculations and enforcement with expert legal guidance
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
                Free Support Calculation Review
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Support Quick Facts</h2>
            <p className="text-xl text-gray-600">Essential information about financial support in Arizona</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Child Support Guidelines</h3>
              <p className="text-gray-600">Standard calculations based on income and parenting time</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Spousal Maintenance</h3>
              <p className="text-gray-600">Duration and amount based on marriage length and need</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Enforcement Options</h3>
              <p className="text-gray-600">Wage garnishment, asset seizure, contempt proceedings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Financial Support in Arizona</h2>
            <p className="text-gray-700 mb-6">
              Arizona family law ensures that children receive adequate financial support and that spouses may receive maintenance 
              when appropriate. Child support follows state guidelines based on both parents&apos; incomes and parenting time, while spousal 
              support is determined by factors including marriage duration, earning capacity, and financial need.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Arizona Child Support Guidelines</h3>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold text-navy mb-3">Income Calculation</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Gross monthly income from all sources</li>
                    <li>• Salary, wages, tips, and bonuses</li>
                    <li>• Self-employment and business income</li>
                    <li>• Investment and rental income</li>
                    <li>• Unemployment and disability benefits</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-navy mb-3">Adjustments & Credits</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Parenting time adjustments</li>
                    <li>• Health insurance premiums</li>
                    <li>• Childcare expenses</li>
                    <li>• Other children support obligations</li>
                    <li>• Extraordinary expenses</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Child Support Calculation Factors</h3>
            <p className="text-gray-700 mb-4">
              Arizona uses the &quot;Income Shares Model&quot; which considers:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Combined adjusted gross income of both parents</li>
              <li>Number of children requiring support</li>
              <li>Amount of parenting time each parent has</li>
              <li>Cost of health insurance for the children</li>
              <li>Childcare expenses necessary for employment</li>
              <li>Special needs of the child requiring additional expenses</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Spousal Support (Maintenance) in Arizona</h3>
            <p className="text-gray-700 mb-4">
              Spousal support may be awarded when one spouse lacks sufficient property or earning ability to meet reasonable needs.
            </p>
            
            <h4 className="text-xl font-semibold text-navy mb-3">Factors for Awarding Maintenance</h4>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Standard of living established during marriage</li>
              <li>Duration of the marriage</li>
              <li>Age and employment history of the spouse seeking maintenance</li>
              <li>Earning ability of each spouse</li>
              <li>Physical and emotional condition affecting earning ability</li>
              <li>Time necessary for education or training to become self-sufficient</li>
              <li>Excessive or abnormal expenditures, destruction, or concealment of assets</li>
              <li>Distribution of marital property</li>
              <li>Ability of paying spouse to meet their own needs while paying maintenance</li>
            </ul>

            <h4 className="text-xl font-semibold text-navy mb-3">Duration Guidelines</h4>
            <div className="bg-light-blue text-white p-4 rounded-lg mb-6">
              <ul className="space-y-2">
                <li>• Marriage under 5 years: Up to 50% of marriage length</li>
                <li>• Marriage 5-10 years: Up to 60% of marriage length</li>
                <li>• Marriage 10-15 years: Up to 70% of marriage length</li>
                <li>• Marriage 15-20 years: Up to 80% of marriage length</li>
                <li>• Marriage over 20 years: Indefinite duration possible</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Support Process Steps */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Support Order Process in Arizona</h2>
            <p className="text-xl text-gray-600">Step-by-step guide to establishing support orders</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: "Financial Disclosure",
                  description: "Complete detailed financial affidavits documenting all income sources, expenses, assets, and debts. Both parties must provide recent tax returns, pay stubs, and bank statements."
                },
                {
                  step: 2,
                  title: "Income Verification",
                  description: "Gather employment records, business financial statements, and documentation of all income sources. Self-employed individuals need additional business documentation."
                },
                {
                  step: 3,
                  title: "Support Calculations",
                  description: "Apply Arizona Child Support Guidelines and evaluate spousal support factors. Calculate preliminary support amounts using official worksheets and guidelines."
                },
                {
                  step: 4,
                  title: "Negotiation & Mediation",
                  description: "Attempt to reach agreement on support amounts through negotiation or mediation. Consider deviations from guidelines when appropriate circumstances exist."
                },
                {
                  step: 5,
                  title: "Court Review & Approval",
                  description: "Submit proposed support orders to court for review. Judge ensures calculations follow guidelines and orders are in children&apos;s best interests."
                },
                {
                  step: 6,
                  title: "Order Entry & Enforcement",
                  description: "Final support orders are entered and become legally binding. Enforcement mechanisms like income withholding orders are established automatically."
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

      {/* Support Enforcement */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Support Enforcement Options</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-light-blue text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Administrative Enforcement</h3>
              <ul className="space-y-2 text-sm">
                <li>• Income withholding orders</li>
                <li>• Asset seizure and garnishment</li>
                <li>• Credit bureau reporting</li>
                <li>• Driver&apos;s license suspension</li>
                <li>• Professional license suspension</li>
                <li>• Passport denial or revocation</li>
              </ul>
            </div>
            
            <div className="bg-navy text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Court Enforcement</h3>
              <ul className="space-y-2 text-sm">
                <li>• Contempt of court proceedings</li>
                <li>• Jail time for willful non-payment</li>
                <li>• Additional fines and penalties</li>
                <li>• Property liens and seizure</li>
                <li>• Business income garnishment</li>
                <li>• Attorney fees and court costs</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-yellow-50 border border-gold rounded-lg p-6">
            <h3 className="text-xl font-semibold text-navy mb-3">💡 Support Modification Guidelines</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Support can be modified when circumstances substantially and continuously change</li>
              <li>Changes in income of 15% or more may justify modification</li>
              <li>Job loss, promotion, or career change can trigger review</li>
              <li>Changes in parenting time may affect child support calculations</li>
              <li>Medical emergencies or extraordinary expenses may warrant adjustment</li>
              <li>Three years since last order allows for review regardless of change</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Support FAQ</h2>
          
          <div className="space-y-6">
            {[
              {
                question: "How long does child support last in Arizona?",
                answer: "Child support typically continues until the child turns 18 and graduates high school, or age 19 if still in high school. Support may extend longer for children with disabilities or if the child attends college (though college support isn&apos;t automatically required)."
              },
              {
                question: "Can child support be modified if my income changes?",
                answer: "Yes, child support can be modified when there&apos;s a substantial and continuing change in circumstances. Generally, a change in income of 15% or more, or three years since the last order, can justify a modification review."
              },
              {
                question: "What happens if I lose my job and can&apos;t pay support?",
                answer: "You should immediately file for a modification of your support order. Support obligations don&apos;t automatically stop when you lose employment, and unpaid support accumulates as a debt with interest. The court may adjust payments based on your new circumstances."
              },
              {
                question: "Is spousal support guaranteed in divorce?",
                answer: "No, spousal support isn&apos;t automatic. The court considers factors like marriage duration, each spouse&apos;s earning capacity, standard of living during marriage, and ability to be self-supporting. Many divorces don&apos;t include spousal support orders."
              },
              {
                question: "Can I agree to pay less than the guideline child support amount?",
                answer: "Generally no. Arizona courts rarely approve child support below the guideline amount because it&apos;s considered the minimum necessary to meet the child&apos;s needs. Deviations require specific circumstances and court approval."
              },
              {
                question: "What if the other parent hides income or assets?",
                answer: "Courts have extensive powers to discover hidden income and assets through subpoenas, depositions, and forensic accounting. Hiding assets or income can result in sanctions, including being ordered to pay the other party&apos;s attorney fees and additional support."
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
          <h2 className="text-3xl font-bold mb-6">Secure Fair Financial Support</h2>
          <p className="text-xl mb-8 opacity-90">
            Support calculations and enforcement require experienced legal representation to protect your financial interests. 
            Our attorneys will ensure you receive or pay the appropriate support amount under Arizona law.
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
              Free Support Review
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
            
            <Link href="/practice-areas/financial/debt-division" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2 group-hover:text-light-blue">Debt Division</h3>
                <p className="text-gray-600">Managing marital debts and financial obligations in divorce proceedings.</p>
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
