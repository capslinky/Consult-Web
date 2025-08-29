import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Child Custody & Parenting Time in Arizona | Paradise Law AZ Virtual Consultation',
  description: 'Protect your parental rights with expert guidance on child custody, parenting time, and visitation in Arizona. Book a $500 virtual consultation today.',
  keywords: 'child custody Arizona, parenting time, visitation rights, Arizona family law, virtual consultation',
  openGraph: {
    title: 'Child Custody & Parenting Time in Arizona | Paradise Law AZ',
    description: 'Expert guidance on child custody and parenting time in Arizona. Protect your parental rights and children\'s best interests. Virtual consultation available.',
    type: 'website',
  },
};

export default function ChildCustodyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-light-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Child Custody & Parenting Time in Arizona
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Protecting your parental rights and your children&apos;s best interests with compassionate, expert legal guidance
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Child Custody Quick Facts</h2>
            <p className="text-xl text-gray-600">Essential information about child custody in Arizona</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Best Interests Standard</h3>
              <p className="text-gray-600">Child&apos;s welfare is the primary factor</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Parenting Time</h3>
              <p className="text-gray-600">Equal time presumption applies</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Joint Legal Custody</h3>
              <p className="text-gray-600">Preferred arrangement in Arizona</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Child Custody in Arizona</h2>
            <p className="text-gray-700 mb-6">
              Arizona family law recognizes two types of custody: legal custody (decision-making authority) and physical custody (where the child lives). 
              The court&apos;s primary concern is always the best interests of the child, and Arizona law presumes that joint legal custody and 
              equal parenting time serve children&apos;s best interests when both parents are fit and capable.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Types of Custody in Arizona</h3>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold text-navy mb-3">Legal Custody (Decision-Making)</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Medical and healthcare decisions</li>
                    <li>• Educational choices and schooling</li>
                    <li>• Religious upbringing</li>
                    <li>• Extracurricular activities</li>
                    <li>• Major life decisions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-navy mb-3">Physical Custody (Parenting Time)</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Where child primarily lives</li>
                    <li>• Daily care and supervision</li>
                    <li>• Overnight stays and weekends</li>
                    <li>• Holiday and vacation time</li>
                    <li>• School-year vs. summer schedules</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Best Interests of the Child Factors</h3>
            <p className="text-gray-700 mb-4">
              Arizona courts consider numerous factors when determining custody arrangements:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>The past, present, and potential future relationship between parent and child</li>
              <li>The interaction and interrelationship between the child and parents, siblings, and others</li>
              <li>The child&apos;s adjustment to home, school, and community</li>
              <li>The mental and physical health of all individuals involved</li>
              <li>Which parent is more likely to allow frequent and meaningful contact with the other parent</li>
              <li>Whether there is a history of domestic violence or child abuse</li>
              <li>The nature and extent of coercion or duress used to obtain agreement</li>
              <li>Whether a parent has been convicted of knowingly providing false information</li>
              <li>Whether a parent has committed domestic violence</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Parenting Time Schedules</h3>
            <p className="text-gray-700 mb-4">
              Arizona offers several standard parenting time schedules, but courts can customize arrangements based on family needs:
            </p>
            
            <h4 className="text-xl font-semibold text-navy mb-3">Equal Parenting Time (50/50)</h4>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Week-on/week-off schedule</li>
              <li>2-2-3 rotation (alternating 2 days, 2 days, 3 days)</li>
              <li>Split week schedule with midweek exchanges</li>
            </ul>

            <h4 className="text-xl font-semibold text-navy mb-3">Primary/Secondary Schedule</h4>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Every other weekend plus one weeknight</li>
              <li>Extended summer parenting time</li>
              <li>Alternating holidays and school breaks</li>
              <li>Modified schedules for young children</li>
            </ul>

          </div>
        </div>
      </section>

      {/* Custody Process Steps */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Child Custody Process in Arizona</h2>
            <p className="text-xl text-gray-600">Step-by-step guide to establishing custody orders</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: "File Petition for Custody",
                  description: "File petition with the court establishing jurisdiction and requesting specific custody arrangements. Include temporary orders if immediate protection is needed."
                },
                {
                  step: 2,
                  title: "Serve Legal Documents",
                  description: "Properly serve the other parent with custody papers. They have 20 days to respond with their counter-petition or agreement."
                },
                {
                  step: 3,
                  title: "Parenting Plan Development",
                  description: "Create detailed parenting plans addressing decision-making, time-sharing, holidays, transportation, and communication between parents."
                },
                {
                  step: 4,
                  title: "Mediation or Negotiation",
                  description: "Attempt to resolve custody disputes through mediation or negotiation before proceeding to trial. Many courts require mediation first."
                },
                {
                  step: 5,
                  title: "Custody Evaluation (If Needed)",
                  description: "Court may order professional custody evaluation if parents cannot agree. Evaluator interviews parents, children, and relevant parties."
                },
                {
                  step: 6,
                  title: "Final Custody Order",
                  description: "Court issues final custody order establishing legal decision-making authority and parenting time schedule. Order is legally binding and enforceable."
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

      {/* Parenting Plans */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Essential Parenting Plan Components</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-light-blue text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Decision-Making Authority</h3>
              <ul className="space-y-2 text-sm">
                <li>• Medical and dental care decisions</li>
                <li>• Educational choices and school selection</li>
                <li>• Religious and cultural upbringing</li>
                <li>• Extracurricular activity participation</li>
                <li>• Mental health treatment decisions</li>
              </ul>
            </div>
            
            <div className="bg-navy text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Parenting Time Details</h3>
              <ul className="space-y-2 text-sm">
                <li>• Regular weekly schedule</li>
                <li>• Holiday and vacation time division</li>
                <li>• Summer schedule variations</li>
                <li>• Transportation responsibilities</li>
                <li>• Pick-up and drop-off procedures</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-yellow-50 border border-gold rounded-lg p-6">
            <h3 className="text-xl font-semibold text-navy mb-3">💡 Parenting Plan Best Practices</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Be specific about times, dates, and locations to avoid confusion</li>
              <li>Include communication methods and frequency between parent and child</li>
              <li>Address technology use, screen time, and social media guidelines</li>
              <li>Plan for dispute resolution procedures when disagreements arise</li>
              <li>Consider the child&apos;s developmental needs and age-appropriate schedules</li>
              <li>Build in flexibility for special occasions and changing circumstances</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Child Custody FAQ</h2>
          
          <div className="space-y-6">
            {[
              {
                question: "What is the difference between legal and physical custody?",
                answer: "Legal custody (decision-making) refers to the authority to make major decisions about your child's life, including medical, educational, and religious choices. Physical custody (parenting time) refers to where the child lives and spends their time. You can have joint legal custody while having different physical custody arrangements."
              },
              {
                question: "Does Arizona favor mothers or fathers in custody cases?",
                answer: "No. Arizona law is gender-neutral and does not favor mothers or fathers. Courts make decisions based solely on the best interests of the child, considering factors like each parent's relationship with the child, ability to provide care, and willingness to support the other parent's relationship with the child."
              },
              {
                question: "Can a child choose which parent to live with?",
                answer: "Arizona law doesn't specify an age when children can choose, but courts may consider a mature child's preference as one factor. The weight given to the child's preference depends on their age, maturity level, and reasons for the preference. The court's primary concern remains the child's best interests."
              },
              {
                question: "What if the other parent violates the custody order?",
                answer: "Custody order violations are serious matters. You can file a motion for contempt of court, request makeup parenting time, or seek modification of the order. Documented violations can impact future custody decisions. It's important to follow proper legal procedures rather than taking matters into your own hands."
              },
              {
                question: "How often can custody orders be modified?",
                answer: "Custody orders can be modified when there's a substantial and continuing change in circumstances affecting the child's best interests. Arizona requires waiting at least one year after the original order before seeking modifications, except in cases involving endangerment or other urgent circumstances."
              },
              {
                question: "What role do grandparents have in custody cases?",
                answer: "Grandparents can petition for visitation rights in Arizona under specific circumstances, such as when the child's parents divorce, one parent dies, or the child was born out of wedlock. Grandparents must prove that visitation serves the child's best interests and won't interfere with the parent-child relationship."
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
          <h2 className="text-3xl font-bold mb-6">Protect Your Parental Rights</h2>
          <p className="text-xl mb-8 opacity-90">
            Child custody cases require experienced legal representation to protect your rights and your children&apos;s best interests. 
            Our compassionate attorneys understand the emotional challenges and will fight for the best possible outcome for your family.
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
            <Link href="/practice-areas/custody/modifications" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2 group-hover:text-light-blue">Custody Modifications</h3>
                <p className="text-gray-600">Changing existing custody orders when circumstances change significantly.</p>
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
            
            <Link href="/practice-areas/custody/relocation" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2 group-hover:text-light-blue">Relocation Cases</h3>
                <p className="text-gray-600">Moving with children when custody orders are in place requires court approval.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
