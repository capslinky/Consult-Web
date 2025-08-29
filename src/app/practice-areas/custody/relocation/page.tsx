import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Child Relocation & Move-Away Cases in Arizona | Paradise Law AZ',
  description: 'Need to move with your child or prevent relocation? Understand Arizona relocation laws, legal requirements, and court procedures for move-away cases.',
  keywords: 'child relocation Arizona, move away cases, custody relocation, Arizona family law, virtual consultation',
  openGraph: {
    title: 'Child Relocation & Move-Away Cases in Arizona | Paradise Law AZ',
    description: 'Expert guidance on child relocation and move-away cases in Arizona. Understand the legal process and protect your rights. Virtual consultation available.',
    type: 'website',
  },
};

export default function RelocationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-light-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Child Relocation & Move-Away Cases
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              When a parent needs to relocate with children, Arizona law requires court approval to modify custody arrangements
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Relocation Quick Facts</h2>
            <p className="text-xl text-gray-600">Key information about child relocation in Arizona</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Court Approval Required</h3>
              <p className="text-gray-600">Must petition court before relocating with child</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">60 Days Notice</h3>
              <p className="text-gray-600">Must provide notice before intended move</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Best Interests Standard</h3>
              <p className="text-gray-600">Court evaluates child&apos;s best interests in relocation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Child Relocation Law in Arizona</h2>
            <p className="text-gray-700 mb-6">
              Arizona law recognizes that parents may need to relocate for legitimate reasons, but also protects children&apos;s 
              relationships with both parents. When a parent with custody wishes to move more than 100 miles from the other 
              parent, or out of state, court approval is generally required. The court must balance the relocating parent&apos;s 
              reasons for moving against the impact on the child&apos;s relationship with the non-relocating parent.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">When Is Court Permission Required?</h3>
            
            <div className="bg-yellow-50 border border-gold rounded-lg p-6 mb-8">
              <h4 className="text-xl font-semibold text-navy mb-3">📍 Distance and Location Factors</h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>100+ Mile Rule:</strong> Moving more than 100 miles from the other parent typically requires court approval</li>
                <li><strong>Out-of-State Moves:</strong> Any relocation to another state generally requires permission</li>
                <li><strong>International Relocation:</strong> Moving to another country requires court approval and special considerations</li>
                <li><strong>Substantial Impact:</strong> Any move that significantly affects the other parent&apos;s parenting time</li>
                <li><strong>School District Changes:</strong> Moves requiring change in child&apos;s school district</li>
                <li><strong>Existing Orders:</strong> Any move that conflicts with current custody or parenting time orders</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Legal Requirements for Relocation</h3>
            <p className="text-gray-700 mb-4">
              Arizona law requires specific procedures for relocation requests:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-navy mb-3">Notice Requirements</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>60-Day Notice:</strong> Written notice to other parent</li>
                  <li>• <strong>Specific Information:</strong> Include destination, reasons, timeline</li>
                  <li>• <strong>Proposed Schedule:</strong> New parenting time arrangement</li>
                  <li>• <strong>Child&apos;s School:</strong> Educational plans and school information</li>
                  <li>• <strong>Contact Information:</strong> New address and phone numbers</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-navy mb-3">Court Filing Requirements</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Petition to Relocate:</strong> Formal court petition</li>
                  <li>• <strong>Supporting Documentation:</strong> Evidence supporting move</li>
                  <li>• <strong>Parenting Plan:</strong> Revised parenting time proposal</li>
                  <li>• <strong>Best Interests Evidence:</strong> How move benefits child</li>
                  <li>• <strong>Financial Information:</strong> Economic impact analysis</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Factors Courts Consider in Relocation Cases</h3>
            <p className="text-gray-700 mb-4">
              Arizona courts analyze multiple factors when determining whether to approve relocation:
            </p>
            
            <h4 className="text-xl font-semibold text-navy mb-3">Reasons for Relocation</h4>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Employment opportunities and career advancement</li>
              <li>Educational opportunities for parent or child</li>
              <li>Family support and extended family proximity</li>
              <li>Health and medical care needs</li>
              <li>Cost of living and financial benefits</li>
              <li>Personal safety and domestic violence concerns</li>
              <li>Remarriage and blended family considerations</li>
            </ul>

            <h4 className="text-xl font-semibold text-navy mb-3">Impact on Child and Family</h4>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Effect on child&apos;s relationship with non-relocating parent</li>
              <li>Educational benefits and opportunities at new location</li>
              <li>Child&apos;s emotional and psychological adjustment</li>
              <li>Extended family relationships and support systems</li>
              <li>Age and developmental needs of the child</li>
              <li>Child&apos;s preferences (if age-appropriate)</li>
              <li>Ability to maintain meaningful contact with both parents</li>
            </ul>

          </div>
        </div>
      </section>

      {/* Relocation Process Steps */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Relocation Process Steps</h2>
            <p className="text-xl text-gray-600">Navigate the relocation approval process effectively</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: "Evaluate Your Case & Prepare Evidence",
                  description: "Assess reasons for relocation, gather supporting documentation, and analyze impact on child's best interests. Consider employment offers, educational opportunities, and family support."
                },
                {
                  step: 2,
                  title: "Provide 60-Day Written Notice",
                  description: "Give proper written notice to other parent including destination, reasons for move, timeline, proposed parenting schedule, and child's educational plans."
                },
                {
                  step: 3,
                  title: "Attempt to Reach Agreement",
                  description: "Try to negotiate relocation agreement with other parent including modified parenting time, transportation arrangements, and holiday schedules before court involvement."
                },
                {
                  step: 4,
                  title: "File Petition for Relocation",
                  description: "If no agreement reached, file formal petition with court including all required documentation, evidence supporting move, and proposed parenting plan modifications."
                },
                {
                  step: 5,
                  title: "Court Proceedings & Hearings",
                  description: "Participate in court hearings where judge will consider evidence from both parents, potentially including custody evaluation or expert testimony."
                },
                {
                  step: 6,
                  title: "Court Decision & Modified Orders",
                  description: "Court issues decision either approving or denying relocation. If approved, court modifies custody orders to reflect new parenting arrangements and schedules."
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

      {/* Opposing Relocation */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Opposing a Relocation Request</h2>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-red-800 mb-4">🚫 Grounds for Opposing Relocation</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Child&apos;s Best Interests</h4>
                <ul className="space-y-1 text-red-700 text-sm">
                  <li>• Strong relationship with non-moving parent</li>
                  <li>• Educational advantages in current location</li>
                  <li>• Established community ties and friendships</li>
                  <li>• Extended family support systems</li>
                  <li>• Child&apos;s expressed preferences</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Questioning Move Motives</h4>
                <ul className="space-y-1 text-red-700 text-sm">
                  <li>• Attempt to interfere with other parent&apos;s relationship</li>
                  <li>• Lack of compelling reasons for relocation</li>
                  <li>• Alternative solutions available locally</li>
                  <li>• Financial motivations not in child&apos;s interest</li>
                  <li>• Pattern of non-cooperation with parenting time</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-light-blue text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Strategies to Oppose Relocation</h3>
              <ul className="space-y-2 text-sm">
                <li>• Document strong parent-child relationship</li>
                <li>• Gather evidence of child&apos;s local ties and adjustment</li>
                <li>• Present alternative solutions to moving parent&apos;s concerns</li>
                <li>• Show negative impact on child&apos;s education or development</li>
                <li>• Demonstrate your active involvement in child&apos;s life</li>
                <li>• Consider requesting custody evaluation if needed</li>
              </ul>
            </div>
            
            <div className="bg-navy text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Building Your Opposition Case</h3>
              <ul className="space-y-2 text-sm">
                <li>• School records showing child&apos;s success and involvement</li>
                <li>• Documentation of your parenting time and involvement</li>
                <li>• Character references from teachers, coaches, neighbors</li>
                <li>• Evidence of child&apos;s community connections</li>
                <li>• Professional testimony about impact of relocation</li>
                <li>• Financial analysis showing local opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Special Considerations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Special Relocation Considerations</h2>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-navy mb-4">International Relocation</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-navy mb-2">Additional Requirements</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Hague Convention considerations</li>
                    <li>• Passport and travel document issues</li>
                    <li>• Foreign jurisdiction enforcement challenges</li>
                    <li>• Cultural and language considerations</li>
                    <li>• International custody jurisdiction complexities</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-2">Protection Measures</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Security bonds or financial guarantees</li>
                    <li>• Surrender of passports to court</li>
                    <li>• Registration with U.S. Embassy</li>
                    <li>• Detailed visitation and communication plans</li>
                    <li>• Agreement to return for court proceedings</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-navy mb-4">Military Relocation</h3>
              <p className="text-gray-700 mb-3">
                Military families face unique relocation challenges due to deployment and permanent change of station (PCS) orders.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Military necessity may be compelling reason for court approval</li>
                <li>Temporary vs. permanent relocations have different legal standards</li>
                <li>Deployment schedules affect parenting time arrangements</li>
                <li>Military spouse may need to relocate for support systems</li>
                <li>Special provisions for maintaining parent-child relationships during service</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-navy mb-4">Emergency Relocation</h3>
              <div className="bg-yellow-100 border border-yellow-400 p-4 rounded mb-4">
                <h4 className="font-semibold text-yellow-800 mb-2">⚠️ When Emergency Relocation May Be Necessary</h4>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Immediate safety threats or domestic violence</li>
                  <li>• Urgent medical needs requiring specialized care</li>
                  <li>• Imminent job loss with limited local opportunities</li>
                  <li>• Natural disasters or emergency situations</li>
                </ul>
              </div>
              <p className="text-gray-700 text-sm">
                Emergency relocations may be permitted temporarily while formal court approval is sought, 
                but require immediate legal action to protect your rights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Relocation FAQ</h2>
          
          <div className="space-y-6">
            {[
              {
                question: "Can I move without court permission if I have sole custody?",
                answer: "Even with sole custody, you typically need court approval for significant relocations that would impact the other parent's parenting time or the child's relationship with the non-relocating parent. The distance and impact on existing arrangements determine whether permission is required."
              },
              {
                question: "What happens if I move without court approval?",
                answer: "Moving without required court permission can result in contempt of court charges, orders to return the child, loss of custody, and other serious legal consequences. It's considered a violation of existing court orders and can significantly harm your case."
              },
              {
                question: "How long does the relocation approval process take?",
                answer: "The timeline varies based on case complexity and court schedules, but typically takes 2-4 months from filing to decision. Emergency situations may be expedited, while contested cases with evaluations may take longer."
              },
              {
                question: "Can the other parent stop me from relocating?",
                answer: "The other parent can object to your relocation request and present evidence opposing the move. The court will consider both sides and make a decision based on the child's best interests. Having legitimate reasons and a solid plan improves your chances of approval."
              },
              {
                question: "What if my job requires me to relocate immediately?",
                answer: "You should seek emergency court orders for temporary relocation while pursuing formal approval. Document the employment necessity and file with the court as soon as possible. Moving without any court involvement, even for work, can have serious legal consequences."
              },
              {
                question: "How will relocation affect child support and parenting time?",
                answer: "Approved relocations typically require modifications to both child support (due to changed circumstances and costs) and parenting time arrangements. The court will establish new schedules that account for distance, travel costs, and maintaining meaningful relationships with both parents."
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
          <h2 className="text-3xl font-bold mb-6">Navigate Relocation Laws Effectively</h2>
          <p className="text-xl mb-8 opacity-90">
            Child relocation cases require careful legal planning and strong evidence presentation. Whether seeking 
            approval to move or opposing a relocation request, experienced representation is essential for protecting your rights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-flex items-center px-8 py-4 bg-gold text-navy font-semibold rounded-lg hover:bg-yellow-400 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v12a2 2 0 002 2z" />
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
                <p className="text-gray-600">Understanding custody arrangements and parenting time schedules.</p>
              </div>
            </Link>
            
            <Link href="/practice-areas/custody/modifications" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2 group-hover:text-light-blue">Custody Modifications</h3>
                <p className="text-gray-600">Modifying existing custody orders for changed circumstances.</p>
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
                <p className="text-gray-600">Professional assessments for complex custody cases.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
