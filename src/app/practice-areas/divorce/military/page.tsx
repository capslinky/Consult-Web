import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Military Divorce in Arizona | Paradise Law AZ Virtual Consultation',
  description: 'Navigate military divorce complexities in Arizona. Expert guidance on SCRA protections, military retirement division, deployment issues. Book a $500 virtual consultation today.',
  keywords: 'military divorce Arizona, SCRA protections, military retirement division, Arizona family law, virtual consultation',
  openGraph: {
    title: 'Military Divorce in Arizona | Paradise Law AZ',
    description: 'Expert guidance on military divorce in Arizona. Navigate SCRA protections, retirement division, and deployment challenges. Virtual consultation available.',
    type: 'website',
  },
};

export default function MilitaryDivorcePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-light-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Military Divorce in Arizona
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Navigate the unique challenges of military divorce with expert guidance on SCRA, retirement benefits, and more
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Military Divorce Quick Facts</h2>
            <p className="text-xl text-gray-600">Essential information about military divorce in Arizona</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.818-4.364a9 9 0 11-12.728 12.728 9 9 0 0112.728-12.728z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">SCRA Protection</h3>
              <p className="text-gray-600">60-day automatic stay available</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Retirement Benefits</h3>
              <p className="text-gray-600">10/10 rule may apply</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Jurisdiction</h3>
              <p className="text-gray-600">Multiple state/federal options</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Military Divorce in Arizona</h2>
            <p className="text-gray-700 mb-6">
              Military divorce involves unique federal and state law complexities that civilian divorces don&apos;t face. From 
              Servicemembers Civil Relief Act (SCRA) protections to military retirement benefit division, navigating a military 
              divorce requires specialized knowledge of both Arizona family law and federal military regulations.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Servicemembers Civil Relief Act (SCRA) Protections</h3>
            <p className="text-gray-700 mb-4">
              The SCRA provides important protections for active-duty military members facing divorce proceedings:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Automatic Stay:</strong> 60-day delay of proceedings if military duties prevent participation</li>
              <li><strong>Default Judgment Protection:</strong> Prevention of default judgments against deployed service members</li>
              <li><strong>Court Appointment:</strong> Right to have an attorney appointed in certain circumstances</li>
              <li><strong>Reopening Cases:</strong> Ability to reopen cases decided during deployment</li>
              <li><strong>Stay Extensions:</strong> Additional delays may be granted for continued military obligations</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Military Retirement and Benefits Division</h3>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="text-xl font-semibold text-navy mb-3">The 10/10 Rule</h4>
              <p className="text-gray-700 mb-4">
                For direct payment from the Defense Finance and Accounting Service (DFAS), the marriage must have 
                overlapped with at least 10 years of creditable military service. However, this doesn&apos;t limit 
                the court&apos;s ability to divide retirement benefits - it only affects the payment method.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-navy mb-2">Meets 10/10 Rule</h5>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Direct DFAS payments to ex-spouse</li>
                    <li>• Automatic cost-of-living adjustments</li>
                    <li>• Simplified enforcement</li>
                    <li>• Survivor benefits available</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-navy mb-2">Doesn&apos;t Meet 10/10 Rule</h5>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Service member pays ex-spouse directly</li>
                    <li>• Court order required for enforcement</li>
                    <li>• May require separate COLA adjustments</li>
                    <li>• More complex to enforce</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Unique Military Divorce Considerations</h3>
            
            <h4 className="text-xl font-semibold text-navy mb-3">Deployment and Custody Issues</h4>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Military Family Life Act protections against custody changes due to deployment</li>
              <li>Temporary custody modifications during deployment periods</li>
              <li>Virtual visitation and communication plans</li>
              <li>R&R (Rest & Recuperation) leave considerations</li>
            </ul>

            <h4 className="text-xl font-semibold text-navy mb-3">Base Housing and Relocations</h4>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>On-base housing termination procedures</li>
              <li>PCS (Permanent Change of Station) move considerations</li>
              <li>Geographic restrictions in custody orders</li>
              <li>Military clause provisions in agreements</li>
            </ul>

            <h4 className="text-xl font-semibold text-navy mb-3">Benefits and Allowances</h4>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Basic Allowance for Housing (BAH) calculations</li>
              <li>Commissary and PX privileges (20/20/20 rule)</li>
              <li>TRICARE medical benefits continuation</li>
              <li>VA disability compensation (generally not divisible)</li>
              <li>Thrift Savings Plan (TSP) division</li>
            </ul>

          </div>
        </div>
      </section>

      {/* Military Divorce Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Military Divorce Process in Arizona</h2>
            <p className="text-xl text-gray-600">Specialized steps for military divorces</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: "Determine Jurisdiction",
                  description: "Establish whether to file in Arizona, the service member's home state, or state of legal residence. Consider which jurisdiction offers the most favorable laws."
                },
                {
                  step: 2,
                  title: "File Petition & Military Affidavit",
                  description: "File divorce petition along with required military affidavit stating whether spouse is in military service and their current duty status."
                },
                {
                  step: 3,
                  title: "Military Service and SCRA Compliance",
                  description: "Serve papers according to military regulations. Active duty members may invoke SCRA protections for stays or delays."
                },
                {
                  step: 4,
                  title: "Financial Discovery",
                  description: "Gather military pay statements, benefits information, retirement statements, and TSP account details for comprehensive asset evaluation."
                },
                {
                  step: 5,
                  title: "Negotiate Military-Specific Issues",
                  description: "Address retirement division, survivor benefits, military housing, deployment schedules, and custody arrangements unique to military families."
                },
                {
                  step: 6,
                  title: "Draft Military Clause Provisions",
                  description: "Include specific language for PCS moves, deployment modifications, military retirement division, and benefit continuation in final agreements."
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

      {/* Jurisdiction Options */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Jurisdiction Options for Military Divorce</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-light-blue text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Arizona (Residence State)</h3>
              <ul className="space-y-2 text-sm">
                <li>• Where you currently live</li>
                <li>• 90-day residency required</li>
                <li>• Familiar local courts</li>
                <li>• Community property state</li>
              </ul>
            </div>
            
            <div className="bg-navy text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Home of Record</h3>
              <ul className="space-y-2 text-sm">
                <li>• Service member&apos;s home state</li>
                <li>• May have favorable laws</li>
                <li>• Family/support nearby</li>
                <li>• Potential tax advantages</li>
              </ul>
            </div>
            
            <div className="bg-gold text-navy p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Legal Residence</h3>
              <ul className="space-y-2 text-sm">
                <li>• State for tax/voting purposes</li>
                <li>• May retain while stationed elsewhere</li>
                <li>• Could offer better laws</li>
                <li>• Long-term planning benefits</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-yellow-50 border border-gold rounded-lg p-6">
            <h3 className="text-xl font-semibold text-navy mb-3">⚖️ Choosing the Right Jurisdiction</h3>
            <p className="text-gray-700 mb-3">
              The choice of jurisdiction can significantly impact property division, alimony, child support, and custody arrangements. 
              Factors to consider include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Community property vs. equitable distribution states</li>
              <li>Alimony/maintenance duration and calculation methods</li>
              <li>Child support guidelines and calculations</li>
              <li>Military retirement division approaches</li>
              <li>Custody relocation restrictions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Military Divorce FAQ</h2>
          
          <div className="space-y-6">
            {[
              {
                question: "Can my ex-spouse get part of my military retirement if we weren&apos;t married for 10 years?",
                answer: "Yes. The 10/10 rule only affects how payments are made, not whether retirement can be divided. Courts can award portions of military retirement regardless of marriage length, but payments under 10 years must be made directly by the service member rather than through DFAS."
              },
              {
                question: "What happens if I&apos;m deployed during my divorce proceedings?",
                answer: "You can request a stay under the SCRA, which typically grants a 60-day delay. Additional extensions may be available. You can also participate remotely in many proceedings or have an attorney represent you. The court cannot enter a default judgment against you while you&apos;re deployed."
              },
              {
                question: "Will my ex-spouse lose military benefits after divorce?",
                answer: "It depends on the 20/20/20 rule. If married 20+ years, overlapping 20+ years of service, with 20+ years at divorce, full benefits continue. 20/20/15 provides one year of TRICARE. Otherwise, benefits typically end immediately upon divorce finalization."
              },
              {
                question: "Can my custody order be changed because of my military deployment?",
                answer: "No. The Military Family Life Act prohibits courts from using deployment alone as grounds for permanent custody changes. However, temporary modifications during deployment are allowed, with custody reverting upon return from deployment."
              },
              {
                question: "Is VA disability compensation subject to division in divorce?",
                answer: "Generally, no. VA disability compensation is typically not considered marital property and cannot be divided. However, VA benefits may be considered when calculating alimony or support obligations in some jurisdictions."
              },
              {
                question: "How is BAH (Basic Allowance for Housing) treated in divorce?",
                answer: "BAH is considered income for child support and alimony calculations. The \"with dependents\" rate may continue during divorce proceedings, but typically changes to \"without dependents\" rate after divorce finalization unless children live with the service member."
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
          <h2 className="text-3xl font-bold mb-6">Specialized Military Divorce Representation</h2>
          <p className="text-xl mb-8 opacity-90">
            Military divorces require specialized knowledge of federal regulations and state laws. Our experienced attorneys understand 
            the unique challenges military families face and provide expert guidance tailored to your situation.
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2 group-hover:text-light-blue">Child Custody</h3>
                <p className="text-gray-600">Protecting your parental rights and your children&apos;s best interests during and after divorce.</p>
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
          </div>
        </div>
      </section>
    </div>
  );
}
