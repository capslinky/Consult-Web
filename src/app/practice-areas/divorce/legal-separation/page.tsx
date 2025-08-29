import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Legal Separation in Arizona | Paradise Law AZ Virtual Consultation',
  description: 'Understand legal separation vs divorce in Arizona. Get expert guidance on the process, requirements, benefits, and costs. Book a $500 virtual consultation today.',
  keywords: 'legal separation Arizona, separation vs divorce, Arizona family law, virtual consultation',
  openGraph: {
    title: 'Legal Separation in Arizona | Paradise Law AZ',
    description: 'Expert guidance on legal separation in Arizona. Understand the process, benefits, and requirements. Virtual consultation available.',
    type: 'website',
  },
};

export default function LegalSeparationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-light-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Legal Separation in Arizona
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Understanding your options: Legal separation vs. divorce and what&apos;s right for your situation
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Legal Separation Quick Facts</h2>
            <p className="text-xl text-gray-600">Essential information about legal separation in Arizona</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Processing Time</h3>
              <p className="text-gray-600">60-90 days for uncontested cases</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Residency Requirement</h3>
              <p className="text-gray-600">90 days in Arizona</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Marital Status</h3>
              <p className="text-gray-600">Remain legally married</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Legal Separation in Arizona?</h2>
            <p className="text-gray-700 mb-6">
              Legal separation in Arizona allows married couples to live apart and establish formal agreements regarding 
              property division, child custody, and support while remaining legally married. Unlike divorce, legal 
              separation does not terminate the marriage, which can be important for religious, insurance, or personal reasons.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Legal Separation vs. Divorce: Key Differences</h3>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold text-navy mb-3">Legal Separation</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Remain legally married</li>
                    <li>• Cannot remarry</li>
                    <li>• May maintain spousal benefits (insurance, Social Security)</li>
                    <li>• Same legal process as divorce</li>
                    <li>• Can convert to divorce later</li>
                    <li>• Religious considerations accommodated</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-navy mb-3">Divorce</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Marriage is terminated</li>
                    <li>• Free to remarry</li>
                    <li>• Spousal benefits typically end</li>
                    <li>• Same legal process as separation</li>
                    <li>• Final resolution</li>
                    <li>• Complete legal independence</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Who Should Consider Legal Separation?</h3>
            <p className="text-gray-700 mb-4">
              Legal separation may be the right choice if you:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Have religious or moral objections to divorce</li>
              <li>Want to maintain spousal benefits (health insurance, Social Security)</li>
              <li>Need time to decide if reconciliation is possible</li>
              <li>Want tax advantages of married filing status</li>
              <li>Have immigration concerns that divorce might complicate</li>
              <li>Prefer not to wait for divorce residency requirements</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Requirements for Legal Separation in Arizona</h3>
            <p className="text-gray-700 mb-4">
              To file for legal separation in Arizona, you must meet these requirements:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Either spouse must be a resident of Arizona for at least 90 days</li>
              <li>The marriage is not &quot;irretrievably broken&quot; (unlike divorce)</li>
              <li>File a Petition for Legal Separation with the court</li>
              <li>Serve your spouse with the legal documents</li>
              <li>Complete financial disclosures</li>
              <li>Attend court hearings as required</li>
            </ul>

          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Legal Separation Process in Arizona</h2>
            <p className="text-xl text-gray-600">Step-by-step guide to filing for legal separation</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: "File Petition for Legal Separation",
                  description: "Complete and file the legal separation petition with the appropriate Arizona court, including grounds for separation and relief sought."
                },
                {
                  step: 2,
                  title: "Serve Your Spouse",
                  description: "Legally serve your spouse with the separation papers through an authorized process server or sheriff&apos;s office."
                },
                {
                  step: 3,
                  title: "Financial Disclosure",
                  description: "Both parties complete comprehensive financial affidavits detailing income, assets, debts, and expenses."
                },
                {
                  step: 4,
                  title: "Negotiate Settlement",
                  description: "Work out agreements on property division, child custody, spousal maintenance, and child support through negotiation or mediation."
                },
                {
                  step: 5,
                  title: "Court Review",
                  description: "Submit your separation agreement to the court for review and approval. May require a brief court appearance."
                },
                {
                  step: 6,
                  title: "Final Decree",
                  description: "Receive the final Decree of Legal Separation, which establishes your legal rights and obligations while separated."
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

      {/* Cost Factors */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Cost of Legal Separation in Arizona</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-light-blue text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Court Costs & Filing Fees</h3>
              <ul className="space-y-2">
                <li>• Filing fee: $349-$399</li>
                <li>• Service fees: $50-$100</li>
                <li>• Certified copies: $26 each</li>
                <li>• Total court costs: $400-$600</li>
              </ul>
            </div>
            
            <div className="bg-navy text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Attorney Fees</h3>
              <ul className="space-y-2">
                <li>• Uncontested: $1,500-$3,000</li>
                <li>• Contested: $5,000-$15,000+</li>
                <li>• Mediation: $1,000-$3,000</li>
                <li>• Hourly rates: $250-$450</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-yellow-50 border border-gold rounded-lg p-6">
            <h3 className="text-xl font-semibold text-navy mb-3">💡 Cost-Saving Tips</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Start with a virtual consultation to understand your options</li>
              <li>Consider mediation for disputed issues</li>
              <li>Prepare financial documents in advance</li>
              <li>Work toward an uncontested separation when possible</li>
              <li>Use limited scope representation for specific issues</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {[
              {
                question: "Can I convert a legal separation to a divorce later?",
                answer: "Yes, Arizona allows you to convert a legal separation to a divorce at any time after the separation decree is entered. The process is relatively straightforward and doesn&apos;t require re-litigating property division or custody issues already resolved."
              },
              {
                question: "Do I need to live separately during legal separation?",
                answer: "While there&apos;s no legal requirement to live separately, most couples do choose to live apart. The separation decree will address living arrangements and any restrictions on contact or shared residences."
              },
              {
                question: "Can I date other people during legal separation?",
                answer: "Technically, since you&apos;re still married, dating could be considered adultery. However, this rarely affects legal separation proceedings. It&apos;s best to discuss your specific situation with an attorney."
              },
              {
                question: "Will I still be entitled to my spouse&apos;s Social Security benefits?",
                answer: "Yes, because you remain legally married, you may still be eligible for spousal Social Security benefits, unlike with divorce where this typically ends."
              },
              {
                question: "How long does legal separation take in Arizona?",
                answer: "Uncontested legal separations typically take 60-90 days from filing to final decree. Contested cases involving disputes over property, custody, or support can take 6 months to 2 years or more."
              },
              {
                question: "Is legal separation cheaper than divorce?",
                answer: "The legal process and costs are essentially the same as divorce. However, you might save money by maintaining joint insurance coverage and other married benefits that would end with divorce."
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
          <h2 className="text-3xl font-bold mb-6">Get Expert Guidance on Legal Separation</h2>
          <p className="text-xl mb-8 opacity-90">
            Understand your options and make informed decisions about your future. Our experienced Arizona family law attorneys 
            provide clear guidance tailored to your unique situation.
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
            <Link href="/practice-areas/divorce/uncontested" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2 group-hover:text-light-blue">Uncontested Divorce</h3>
                <p className="text-gray-600">Streamlined divorce process when spouses agree on all terms.</p>
              </div>
            </Link>
            
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
            
            <Link href="/practice-areas/custody" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2 group-hover:text-light-blue">Child Custody</h3>
                <p className="text-gray-600">Protecting your parental rights and your children&apos;s best interests.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
