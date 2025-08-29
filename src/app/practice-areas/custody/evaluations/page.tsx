import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Custody Evaluations in Arizona | Child Custody Assessment | Paradise Law AZ',
  description: 'Understanding child custody evaluations in Arizona. Learn about the process, what evaluators assess, and how to prepare for your custody evaluation.',
  keywords: 'custody evaluation Arizona, child custody assessment, custody evaluator, Arizona family law, virtual consultation',
  openGraph: {
    title: 'Custody Evaluations in Arizona | Paradise Law AZ',
    description: 'Expert guidance on child custody evaluations in Arizona. Understand the process and prepare effectively. Virtual consultation available.',
    type: 'website',
  },
};

export default function CustodyEvaluationsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-light-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Custody Evaluations in Arizona
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Professional assessments to help courts determine the best custody arrangements for children
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Custody Evaluation Quick Facts</h2>
            <p className="text-xl text-gray-600">Key information about custody evaluations in Arizona</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v11a2 2 0 002 2h2m0-13h10a2 2 0 012 2v11a2 2 0 01-2 2H9m0-13v13" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Neutral Assessment</h3>
              <p className="text-gray-600">Independent professional evaluation</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">3-6 Month Process</h3>
              <p className="text-gray-600">Comprehensive evaluation timeline</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Best Interests Focus</h3>
              <p className="text-gray-600">Child-centered recommendations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Custody Evaluations</h2>
            <p className="text-gray-700 mb-6">
              A custody evaluation is a comprehensive assessment conducted by a mental health professional or social worker 
              to help the court determine what custody arrangement serves a child&apos;s best interests. Arizona courts may 
              order evaluations in contested custody cases, particularly when parents disagree about major custody issues, 
              there are concerns about parenting capacity, or allegations of abuse or neglect.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">When Are Custody Evaluations Ordered?</h3>
            
            <div className="bg-yellow-50 border border-gold rounded-lg p-6 mb-8">
              <h4 className="text-xl font-semibold text-navy mb-3">🏛️ Court-Ordered Evaluation Triggers</h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>High-conflict custody disputes with significant disagreement</li>
                <li>Allegations of child abuse, neglect, or domestic violence</li>
                <li>Concerns about a parent&apos;s mental health or substance abuse</li>
                <li>Questions about parenting capacity or fitness</li>
                <li>Requests for relocation with the child</li>
                <li>Complex family dynamics requiring professional assessment</li>
                <li>Child expressing strong preferences or showing signs of distress</li>
                <li>Need for expert recommendation on best custody arrangement</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">What Evaluators Assess</h3>
            <p className="text-gray-700 mb-4">
              Custody evaluators examine multiple factors to understand family dynamics and make recommendations:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-navy mb-3">Parent Assessment Areas</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Mental health and psychological stability</li>
                  <li>• Parenting skills and capacity</li>
                  <li>• History of substance abuse</li>
                  <li>• Criminal background and any safety concerns</li>
                  <li>• Living situation and stability</li>
                  <li>• Employment and financial resources</li>
                  <li>• Relationship with child and attachment</li>
                  <li>• Willingness to support other parent&apos;s relationship</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-navy mb-3">Child-Focused Factors</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Child&apos;s developmental and emotional needs</li>
                  <li>• Educational requirements and school performance</li>
                  <li>• Medical and special healthcare needs</li>
                  <li>• Social relationships and community ties</li>
                  <li>• Child&apos;s preferences (age-appropriate)</li>
                  <li>• Adjustment to current living arrangements</li>
                  <li>• Relationship quality with each parent</li>
                  <li>• Impact of proposed custody arrangements</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Types of Custody Evaluations</h3>
            <p className="text-gray-700 mb-4">
              Arizona recognizes different types of evaluations depending on the case needs:
            </p>
            
            <h4 className="text-xl font-semibold text-navy mb-3">Comprehensive Custody Evaluation</h4>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Full assessment of all family members and dynamics</li>
              <li>Multiple interviews, observations, and home visits</li>
              <li>Psychological testing and collateral interviews</li>
              <li>Review of records, documents, and background information</li>
              <li>Detailed written report with custody recommendations</li>
            </ul>

            <h4 className="text-xl font-semibold text-navy mb-3">Limited Scope Evaluation</h4>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Focuses on specific issues or concerns</li>
              <li>May address substance abuse, mental health, or parenting capacity</li>
              <li>Less comprehensive than full evaluation</li>
              <li>Shorter timeline and lower cost</li>
            </ul>

          </div>
        </div>
      </section>

      {/* Evaluation Process Steps */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Custody Evaluation Process</h2>
            <p className="text-xl text-gray-600">Step-by-step breakdown of the evaluation process</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: "Court Order & Evaluator Selection",
                  description: "Court orders custody evaluation and appoints neutral evaluator from approved list. Parents may agree on evaluator selection or court will assign one."
                },
                {
                  step: 2,
                  title: "Initial Interviews & Orientation",
                  description: "Evaluator meets with parents separately to explain process, obtain consent, and begin gathering background information and family history."
                },
                {
                  step: 3,
                  title: "Parent Interviews & Assessments",
                  description: "Comprehensive interviews with each parent, psychological testing if needed, and assessment of parenting skills, mental health, and capacity."
                },
                {
                  step: 4,
                  title: "Child Interviews & Observations",
                  description: "Age-appropriate interviews with children, observation of parent-child interactions, and assessment of child&apos;s needs and preferences."
                },
                {
                  step: 5,
                  title: "Collateral Information Gathering",
                  description: "Interviews with teachers, doctors, therapists, and other relevant parties. Review of school, medical, and legal records as needed."
                },
                {
                  step: 6,
                  title: "Home Visits & Environment Assessment",
                  description: "Evaluator visits each parent&apos;s home to assess living conditions, stability, and appropriateness for child care."
                },
                {
                  step: 7,
                  title: "Report Completion & Recommendations",
                  description: "Evaluator compiles comprehensive written report with findings, analysis, and specific custody and parenting time recommendations."
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

      {/* Preparing for Evaluation */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Preparing for Your Custody Evaluation</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-4">✅ Do&apos;s for Parents</h3>
              <ul className="space-y-2 text-green-700">
                <li>• Be honest and transparent with the evaluator</li>
                <li>• Focus on your child&apos;s best interests</li>
                <li>• Demonstrate active involvement in child&apos;s life</li>
                <li>• Show flexibility and willingness to co-parent</li>
                <li>• Organize relevant documents and records</li>
                <li>• Dress professionally for meetings</li>
                <li>• Arrive on time and be respectful</li>
                <li>• Address any personal issues proactively</li>
              </ul>
            </div>
            
            <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-red-800 mb-4">❌ Don&apos;ts for Parents</h3>
              <ul className="space-y-2 text-red-700">
                <li>• Don&apos;t badmouth or criticize the other parent</li>
                <li>• Don&apos;t coach your child on what to say</li>
                <li>• Don&apos;t lie or withhold important information</li>
                <li>• Don&apos;t be defensive or argumentative</li>
                <li>• Don&apos;t try to manipulate the process</li>
                <li>• Don&apos;t discuss the evaluation with your child</li>
                <li>• Don&apos;t ignore evaluator requests or deadlines</li>
                <li>• Don&apos;t contact evaluator outside of scheduled meetings</li>
              </ul>
            </div>
          </div>

          <div className="bg-light-blue text-white p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">💡 Evaluation Preparation Tips</h3>
            <ul className="space-y-2 text-sm">
              <li>• Document your involvement in your child&apos;s daily life, school activities, and healthcare</li>
              <li>• Prepare a timeline of important events and changes in your family situation</li>
              <li>• Gather character references from teachers, doctors, coaches, and community members</li>
              <li>• Address any substance abuse, mental health, or other concerns proactively</li>
              <li>• Create a stable, child-appropriate living environment for home visits</li>
              <li>• Work with your attorney to understand the process and prepare responses</li>
            </ul>
          </div>

          <div className="bg-navy text-white p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">🧒 Supporting Your Child During the Evaluation</h3>
            <ul className="space-y-2 text-sm">
              <li>• Explain the evaluation in age-appropriate terms</li>
              <li>• Reassure your child that they are not in trouble</li>
              <li>• Encourage honesty without coaching responses</li>
              <li>• Maintain normal routines and activities</li>
              <li>• Provide emotional support throughout the process</li>
              <li>• Consider therapy if your child shows signs of stress</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Costs and Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Evaluation Costs & Timeline</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-navy mb-4">Cost Factors</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Full Evaluation:</strong> $3,000 - $10,000+</li>
                <li>• <strong>Limited Scope:</strong> $1,500 - $5,000</li>
                <li>• <strong>Factors affecting cost:</strong></li>
                <li>&nbsp;&nbsp;- Number of family members</li>
                <li>&nbsp;&nbsp;- Complexity of issues</li>
                <li>&nbsp;&nbsp;- Geographic location</li>
                <li>&nbsp;&nbsp;- Evaluator&apos;s experience</li>
                <li>&nbsp;&nbsp;- Need for testing or specialists</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-navy mb-4">Timeline Expectations</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Full Evaluation:</strong> 3-6 months</li>
                <li>• <strong>Limited Scope:</strong> 1-3 months</li>
                <li>• <strong>Timeline factors:</strong></li>
                <li>&nbsp;&nbsp;- Evaluator&apos;s caseload</li>
                <li>&nbsp;&nbsp;- Family cooperation</li>
                <li>&nbsp;&nbsp;- Scheduling challenges</li>
                <li>&nbsp;&nbsp;- Complexity of issues</li>
                <li>&nbsp;&nbsp;- Need for additional information</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Custody Evaluation FAQ</h2>
          
          <div className="space-y-6">
            {[
              {
                question: "Who pays for the custody evaluation?",
                answer: "Typically, both parents split the cost of the evaluation equally, though the court may order a different arrangement based on financial circumstances. Some courts have sliding fee scales, and occasionally one parent may be ordered to pay the full cost."
              },
              {
                question: "Can I choose my own custody evaluator?",
                answer: "Courts usually have a list of approved evaluators. Parents may agree on a specific evaluator from this list, but the court makes the final decision. You cannot hire your own private evaluator for court purposes - it must be court-appointed to maintain neutrality."
              },
              {
                question: "What happens if I disagree with the evaluation recommendations?",
                answer: "You can object to the evaluator's recommendations and present contrary evidence at trial. However, courts give significant weight to professional evaluations. Your attorney can cross-examine the evaluator and present alternative expert testimony if needed."
              },
              {
                question: "Will my child have to talk to the evaluator?",
                answer: "Yes, age-appropriate interviews with children are a standard part of custody evaluations. The evaluator will use child-friendly techniques and focus on understanding the child's needs, relationships, and adjustment. Very young children may be observed rather than interviewed."
              },
              {
                question: "How long is the evaluation report valid?",
                answer: "Evaluation reports don't have set expiration dates, but their relevance decreases over time as circumstances change. Courts may order updated evaluations if significant time has passed or if there have been substantial changes in the family situation."
              },
              {
                question: "Can the evaluation be used in other legal proceedings?",
                answer: "Custody evaluations are specifically prepared for family court proceedings. While the information may be relevant to other cases, the evaluator's role is limited to the specific court case for which they were appointed. Separate evaluations may be needed for different legal matters."
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
          <h2 className="text-3xl font-bold mb-6">Navigate Your Custody Evaluation Confidently</h2>
          <p className="text-xl mb-8 opacity-90">
            Custody evaluations can significantly impact your case outcome. Having experienced legal guidance helps you 
            understand the process, prepare effectively, and protect your interests throughout the evaluation.
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
                <p className="text-gray-600">Understanding custody types, parenting time, and establishing orders.</p>
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
                <p className="text-gray-600">Changing existing custody orders when circumstances change.</p>
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
                <p className="text-gray-600">Moving with children when custody orders are in place.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
