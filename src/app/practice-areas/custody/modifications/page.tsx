import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Custody Modifications in Arizona | Change Existing Custody Orders | Paradise Law AZ',
  description: 'Need to modify your custody order in Arizona? Learn about the legal requirements, process, and timeline for changing custody arrangements. Virtual consultation available.',
  keywords: 'custody modification Arizona, change custody order, modify parenting time, Arizona family law, virtual consultation',
  openGraph: {
    title: 'Custody Modifications in Arizona | Paradise Law AZ',
    description: 'Expert guidance on modifying existing custody orders in Arizona. Protect your rights when circumstances change. Virtual consultation available.',
    type: 'website',
  },
};

export default function CustodyModificationsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-light-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Custody Modifications in Arizona
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              When life changes, custody orders may need to change too. Get expert help modifying your custody arrangement.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Custody Modification Quick Facts</h2>
            <p className="text-xl text-gray-600">Key information about modifying custody orders in Arizona</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">One Year Rule</h3>
              <p className="text-gray-600">Must wait 1 year after original order (exceptions apply)</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Substantial Change</h3>
              <p className="text-gray-600">Must prove substantial and continuing change</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Best Interests</h3>
              <p className="text-gray-600">Modification must serve child&apos;s best interests</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Custody Modifications in Arizona</h2>
            <p className="text-gray-700 mb-6">
              Life circumstances change, and sometimes existing custody orders no longer serve your family&apos;s best interests. 
              Arizona law allows for modification of custody orders, but requires specific legal standards to be met. The court 
              must find that there has been a substantial and continuing change in circumstances and that the proposed modification 
              serves the child&apos;s best interests.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">When Can You Modify a Custody Order?</h3>
            
            <div className="bg-yellow-50 border border-gold rounded-lg p-6 mb-8">
              <h4 className="text-xl font-semibold text-navy mb-3">⚖️ Legal Requirements for Modification</h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>One-Year Waiting Period:</strong> Generally must wait one year after the original custody order</li>
                <li><strong>Substantial Change:</strong> Must demonstrate a substantial and continuing change in circumstances</li>
                <li><strong>Best Interests:</strong> Proposed modification must serve the child&apos;s best interests</li>
                <li><strong>No Endangerment Exception:</strong> Can file immediately if child&apos;s physical, mental, moral, or emotional health is endangered</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Common Reasons for Custody Modifications</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-navy mb-3">Parent-Related Changes</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Job relocation or major employment changes</li>
                  <li>• Remarriage or new domestic relationship</li>
                  <li>• Substance abuse or addiction issues</li>
                  <li>• Mental health deterioration</li>
                  <li>• Criminal conviction or incarceration</li>
                  <li>• Failure to follow existing court orders</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-navy mb-3">Child-Related Changes</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Child&apos;s educational or special needs</li>
                  <li>• Significant change in child&apos;s preferences</li>
                  <li>• Health issues requiring specific care</li>
                  <li>• Child&apos;s adjustment problems with current arrangement</li>
                  <li>• Age-related developmental changes</li>
                  <li>• Extracurricular activity conflicts</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Types of Custody Modifications</h3>
            <p className="text-gray-700 mb-4">
              Arizona courts can modify various aspects of custody orders:
            </p>
            
            <h4 className="text-xl font-semibold text-navy mb-3">Legal Decision-Making Changes</h4>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Converting from joint to sole legal custody (or vice versa)</li>
              <li>Modifying specific decision-making areas (medical, educational, religious)</li>
              <li>Adding tie-breaking provisions for deadlocked decisions</li>
            </ul>

            <h4 className="text-xl font-semibold text-navy mb-3">Parenting Time Adjustments</h4>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Changing from equal time to primary/secondary schedule (or vice versa)</li>
              <li>Modifying weekend, holiday, and vacation schedules</li>
              <li>Adjusting transportation responsibilities</li>
              <li>Changing pick-up and drop-off locations or procedures</li>
              <li>Adding or removing supervised visitation requirements</li>
            </ul>

          </div>
        </div>
      </section>

      {/* Modification Process Steps */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Custody Modification Process</h2>
            <p className="text-xl text-gray-600">Step-by-step guide to modifying existing custody orders</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: "Evaluate Your Case",
                  description: "Assess whether your situation meets legal requirements for modification. Document substantial changes in circumstances and gather supporting evidence."
                },
                {
                  step: 2,
                  title: "File Petition to Modify",
                  description: "File petition for modification with the court, clearly stating the changes requested and reasons. Include supporting documentation and evidence."
                },
                {
                  step: 3,
                  title: "Serve Other Parent",
                  description: "Properly serve the other parent with modification papers. They have 20 days to respond with agreement, counter-petition, or objection."
                },
                {
                  step: 4,
                  title: "Attempt Resolution",
                  description: "Try to reach agreement through negotiation or mediation. Many courts require good-faith attempts at resolution before trial."
                },
                {
                  step: 5,
                  title: "Court Proceedings",
                  description: "If no agreement is reached, present your case to the court. Judge will consider evidence, witness testimony, and best interests factors."
                },
                {
                  step: 6,
                  title: "Modified Order Issued",
                  description: "Court issues modified custody order if legal standards are met. New order supersedes previous order and is immediately enforceable."
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

      {/* Emergency Modifications */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Emergency Custody Modifications</h2>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-red-800 mb-4">🚨 When Emergency Action is Needed</h3>
            <p className="text-red-700 mb-4">
              Emergency modifications can be sought immediately (without waiting one year) when a child&apos;s physical, 
              mental, moral, or emotional health is seriously endangered by the current custody arrangement.
            </p>
            <h4 className="text-lg font-semibold text-red-800 mb-2">Emergency Situations Include:</h4>
            <ul className="list-disc pl-6 text-red-700 space-y-1">
              <li>Physical abuse or credible threats of abuse</li>
              <li>Severe neglect or endangerment</li>
              <li>Substance abuse affecting child safety</li>
              <li>Domestic violence in the home</li>
              <li>Mental health crisis affecting parenting ability</li>
              <li>Criminal activity exposing child to danger</li>
            </ul>
          </div>

          <div className="bg-light-blue text-white p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">💡 Emergency Modification Tips</h3>
            <ul className="space-y-2 text-sm">
              <li>• Document everything with photos, recordings, and written records</li>
              <li>• Report abuse to authorities and obtain police reports</li>
              <li>• Keep children safe as the immediate priority</li>
              <li>• File emergency motions as soon as possible</li>
              <li>• Be prepared for temporary emergency hearings with short notice</li>
              <li>• Follow all existing court orders until modified by the court</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Evidence and Documentation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Building Your Case for Modification</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-navy mb-4">Essential Documentation</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Current custody order and any modifications</li>
                <li>• Evidence of substantial change in circumstances</li>
                <li>• School records and academic performance</li>
                <li>• Medical and mental health records</li>
                <li>• Employment records and pay stubs</li>
                <li>• Communication logs with other parent</li>
                <li>• Police reports or protective orders</li>
                <li>• Child&apos;s activities and schedule documentation</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-navy mb-4">Witness Support</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Teachers and school counselors</li>
                <li>• Healthcare providers and therapists</li>
                <li>• Childcare providers and babysitters</li>
                <li>• Family members and close friends</li>
                <li>• Coaches and activity leaders</li>
                <li>• Neighbors and community members</li>
                <li>• Professional evaluators or experts</li>
                <li>• Child custody investigators</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Custody Modification FAQ</h2>
          
          <div className="space-y-6">
            {[
              {
                question: "How long does the custody modification process take?",
                answer: "The timeline varies based on case complexity and court schedules. Simple agreed-upon modifications may take 30-60 days. Contested modifications requiring hearings can take 3-6 months or longer. Emergency modifications can be heard within days if child safety is at risk."
              },
              {
                question: "Can I modify custody if the other parent moves to another state?",
                answer: "Yes, relocation by either parent can be grounds for modification. If the other parent moves without court permission, it may violate the existing order. You can petition for modification to address changed circumstances, potentially including jurisdiction changes between states."
              },
              {
                question: "What happens if the other parent agrees to the modification?",
                answer: "If both parents agree to custody changes, you can file a stipulated modification with the court. This is faster and less expensive than contested modifications. The court will still review the agreement to ensure it serves the child's best interests before approving."
              },
              {
                question: "Can I modify custody without a lawyer?",
                answer: "While you can represent yourself, custody modifications involve complex legal standards and procedures. Having experienced legal representation significantly improves your chances of success and helps protect your rights throughout the process."
              },
              {
                question: "How much does it cost to modify a custody order?",
                answer: "Costs vary based on case complexity and whether it's contested. Filing fees typically range from $300-500. Attorney fees depend on the amount of work required. Contested cases requiring extensive litigation will cost more than agreed-upon modifications."
              },
              {
                question: "What if my ex violates the custody order while modification is pending?",
                answer: "Existing custody orders remain in effect during modification proceedings. If the other parent violates the current order, you can file for contempt of court while your modification case is pending. Document all violations as they may support your modification request."
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
          <h2 className="text-3xl font-bold mb-6">Ready to Modify Your Custody Order?</h2>
          <p className="text-xl mb-8 opacity-90">
            Don&apos;t let outdated custody arrangements harm your family&apos;s wellbeing. Our experienced attorneys 
            can help you navigate the modification process and protect your parental rights when circumstances change.
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z" />
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
            <Link href="/practice-areas/custody" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2 group-hover:text-light-blue">Child Custody</h3>
                <p className="text-gray-600">Understanding custody types, parenting time, and establishing initial orders.</p>
              </div>
            </Link>
            
            <Link href="/practice-areas/custody/parental-rights" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.818-4.364a9 9 0 11-12.728 12.728 9 9 0 0112.728-12.728z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2 group-hover:text-light-blue">Parental Rights</h3>
                <p className="text-gray-600">Establishing, protecting, and enforcing your fundamental parental rights.</p>
              </div>
            </Link>
            
            <Link href="/practice-areas/custody/evaluations" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v11a2 2 0 002 2h2m0-13h10a2 2 0 012 2v11a2 2 0 01-2 2H9m0-13v13" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2 group-hover:text-light-blue">Custody Evaluations</h3>
                <p className="text-gray-600">Professional evaluations to help courts determine best custody arrangements.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
