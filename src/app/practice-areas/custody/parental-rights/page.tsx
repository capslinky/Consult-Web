import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Parental Rights in Arizona | Establishing & Protecting Your Rights | Paradise Law AZ',
  description: 'Protect your fundamental parental rights in Arizona. Learn about establishing paternity, defending against termination, and enforcing your rights as a parent.',
  keywords: 'parental rights Arizona, paternity establishment, termination defense, Arizona family law, virtual consultation',
  openGraph: {
    title: 'Parental Rights in Arizona | Paradise Law AZ',
    description: 'Expert guidance on establishing, protecting, and enforcing your fundamental parental rights in Arizona. Virtual consultation available.',
    type: 'website',
  },
};

export default function ParentalRightsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-light-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Parental Rights in Arizona
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Establishing, protecting, and enforcing your fundamental rights as a parent under Arizona law
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Parental Rights Quick Facts</h2>
            <p className="text-xl text-gray-600">Essential information about parental rights in Arizona</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.818-4.364a9 9 0 11-12.728 12.728 9 9 0 0112.728-12.728z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Constitutional Rights</h3>
              <p className="text-gray-600">Protected by 14th Amendment Due Process</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Paternity Establishment</h3>
              <p className="text-gray-600">Legal recognition of parent-child relationship</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Due Process Protection</h3>
              <p className="text-gray-600">Clear and convincing evidence required for termination</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Parental Rights in Arizona</h2>
            <p className="text-gray-700 mb-6">
              Parental rights are fundamental constitutional rights protected by the 14th Amendment&apos;s Due Process Clause. 
              In Arizona, these rights encompass the authority to make decisions about your child&apos;s upbringing, education, 
              medical care, and religious training. Understanding and protecting these rights is crucial for maintaining the 
              parent-child relationship and ensuring your voice is heard in custody and family law matters.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Core Parental Rights in Arizona</h3>
            
            <div className="bg-navy text-white p-6 rounded-lg mb-8">
              <h4 className="text-xl font-semibold mb-4">🏛️ Fundamental Parental Rights</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold mb-2">Decision-Making Rights</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Medical and healthcare decisions</li>
                    <li>• Educational choices and schooling</li>
                    <li>• Religious and moral guidance</li>
                    <li>• Extracurricular activities</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Relationship Rights</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Right to parenting time</li>
                    <li>• Right to communicate with child</li>
                    <li>• Right to discipline and guide</li>
                    <li>• Right to emotional relationship</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Establishing Paternity in Arizona</h3>
            <p className="text-gray-700 mb-4">
              For unmarried fathers, establishing paternity is the critical first step in securing parental rights:
            </p>
            
            <h4 className="text-xl font-semibold text-navy mb-3">Methods of Establishing Paternity</h4>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h5 className="text-lg font-semibold text-navy mb-2">Voluntary Acknowledgment</h5>
                <ul className="space-y-2 text-gray-700">
                  <li>• Both parents sign paternity affidavit</li>
                  <li>• Usually completed at hospital after birth</li>
                  <li>• Creates legal father-child relationship</li>
                  <li>• Can be revoked within 60 days</li>
                  <li>• Filed with Arizona Department of Health Services</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h5 className="text-lg font-semibold text-navy mb-2">Court-Ordered Paternity</h5>
                <ul className="space-y-2 text-gray-700">
                  <li>• Petition filed with family court</li>
                  <li>• DNA testing often required</li>
                  <li>• Court order establishes paternity</li>
                  <li>• Can include child support orders</li>
                  <li>• Opens door to custody proceedings</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Defending Against Parental Rights Termination</h3>
            <p className="text-gray-700 mb-4">
              Termination of parental rights is the most serious action a court can take, permanently severing the legal 
              parent-child relationship. Arizona requires clear and convincing evidence of specific statutory grounds:
            </p>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
              <h4 className="text-xl font-semibold text-red-800 mb-3">⚠️ Grounds for Termination</h4>
              <ul className="list-disc pl-6 text-red-700 space-y-2">
                <li>Abandonment of the child for at least six months</li>
                <li>Neglect or willful abuse of the child</li>
                <li>Mental illness or deficiency rendering parent unable to care for child</li>
                <li>Chronic substance abuse making parent unable to provide adequate care</li>
                <li>Felony conviction demonstrating moral unfitness</li>
                <li>Failure to remedy circumstances after court-ordered services</li>
                <li>Failure to maintain a normal parent-child relationship</li>
                <li>Relinquishment to adoption agency or foster care</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Rights Enforcement Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Protecting Your Parental Rights</h2>
            <p className="text-xl text-gray-600">Steps to establish and defend your parental rights</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: "Establish Legal Parentage",
                  description: "For biological fathers, establish paternity through voluntary acknowledgment or court order. For step-parents, consider adoption proceedings to gain legal rights."
                },
                {
                  step: 2,
                  title: "Document Parent-Child Relationship",
                  description: "Maintain records of your involvement in child's life, including photos, school records, medical appointments, and regular communication or visits."
                },
                {
                  step: 3,
                  title: "Seek Custody Orders",
                  description: "File for legal decision-making and parenting time orders to formalize your rights and responsibilities as a parent under Arizona law."
                },
                {
                  step: 4,
                  title: "Respond to Legal Actions",
                  description: "If facing termination proceedings or other challenges to your rights, respond promptly and obtain experienced legal representation immediately."
                },
                {
                  step: 5,
                  title: "Comply with Court Orders",
                  description: "Follow all court orders regarding parenting time, child support, counseling, or other requirements to demonstrate your commitment to the child."
                },
                {
                  step: 6,
                  title: "Maintain Ongoing Relationship",
                  description: "Actively participate in child's life through regular contact, involvement in activities, and consistent exercise of your parental rights and responsibilities."
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

      {/* Special Situations */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Special Parental Rights Situations</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-light-blue text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Unwed Fathers&apos; Rights</h3>
              <ul className="space-y-2 text-sm">
                <li>• Must establish paternity to gain legal rights</li>
                <li>• Can petition for custody and parenting time</li>
                <li>• Subject to same standards as married fathers</li>
                <li>• Should act quickly after learning of pregnancy/birth</li>
                <li>• May need to overcome maternal preference presumptions</li>
              </ul>
            </div>
            
            <div className="bg-navy text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Grandparents&apos; Rights</h3>
              <ul className="space-y-2 text-sm">
                <li>• Can petition for visitation in specific circumstances</li>
                <li>• Must overcome parental fundamental rights presumption</li>
                <li>• Requires showing visitation serves child&apos;s best interests</li>
                <li>• Available when parents divorce or separate</li>
                <li>• May be granted if parent dies</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border border-gold rounded-lg p-6">
            <h3 className="text-xl font-semibold text-navy mb-3">💡 Protecting Your Rights</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Establish paternity as early as possible if you are an unwed father</li>
              <li>Maintain detailed records of all interactions and involvement with your child</li>
              <li>Follow court orders precisely and document your compliance</li>
              <li>Address substance abuse, mental health, or other issues proactively</li>
              <li>Seek legal help immediately if threatened with termination proceedings</li>
              <li>Stay involved in your child&apos;s life even during difficult custody disputes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Termination Defense */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Defending Against Termination</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h3 className="text-2xl font-semibold text-navy mb-4">Termination Defense Strategies</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-navy mb-2">Challenge the Evidence</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Question the sufficiency of evidence</li>
                  <li>• Challenge witness credibility</li>
                  <li>• Present contrary evidence</li>
                  <li>• Demonstrate improvements made</li>
                  <li>• Show ongoing parent-child bond</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-navy mb-2">Assert Constitutional Rights</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Right to due process</li>
                  <li>• Right to counsel</li>
                  <li>• Right to confront witnesses</li>
                  <li>• Right to present evidence</li>
                  <li>• Right to appeal adverse decisions</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="text-lg font-semibold text-navy mb-2">Time-Sensitive Actions</h4>
              <p className="text-gray-700 text-sm">
                If you receive notice of termination proceedings, you typically have only 20 days to respond. 
                Failing to respond can result in default judgment terminating your parental rights. Contact an attorney immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Parental Rights FAQ</h2>
          
          <div className="space-y-6">
            {[
              {
                question: "What are the fundamental parental rights protected by law?",
                answer: "Fundamental parental rights include the right to make decisions about your child's upbringing, education, medical care, and religious training. These also include the right to parenting time, communication with your child, and maintaining an emotional relationship. These rights are protected by the 14th Amendment's Due Process Clause."
              },
              {
                question: "How do I establish paternity in Arizona?",
                answer: "Paternity can be established through voluntary acknowledgment (both parents sign an affidavit) or court order (involving DNA testing). Married men are presumed to be the father of children born during marriage. Establishing paternity is essential for unmarried fathers to gain legal rights and responsibilities."
              },
              {
                question: "Can my parental rights be terminated against my will?",
                answer: "Yes, but only under specific circumstances and with clear and convincing evidence. Arizona law requires proof of abandonment, neglect, abuse, mental illness, substance abuse, or other serious issues affecting your ability to parent. You have the right to legal representation and to contest the termination."
              },
              {
                question: "What should I do if I receive notice of termination proceedings?",
                answer: "Contact an attorney immediately. You typically have only 20 days to respond to termination proceedings. Failing to respond can result in default judgment. An experienced attorney can help you understand your rights, develop defense strategies, and represent you in court proceedings."
              },
              {
                question: "Do grandparents have rights to see their grandchildren in Arizona?",
                answer: "Grandparents can petition for visitation rights in specific circumstances, such as when parents divorce, separate, or one parent dies. However, courts must overcome the presumption that parents act in their children's best interests. Grandparents must prove that visitation serves the child's best interests."
              },
              {
                question: "How can I protect my parental rights during a custody dispute?",
                answer: "Document your involvement in your child's life, follow all court orders, maintain regular contact and communication, address any personal issues (substance abuse, mental health), and work with an experienced attorney to ensure your rights are protected throughout the legal process."
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
            Your parental rights are fundamental and deserve strong legal protection. Whether you need to establish paternity, 
            defend against termination, or enforce your existing rights, experienced legal representation is essential.
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
                <p className="text-gray-600">Establishing custody arrangements and parenting time schedules.</p>
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
            
            <Link href="/practice-areas/custody/evaluations" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v11a2 2 0 002 2h2m0-13h10a2 2 0 012 2v11a2 2 0 01-2 2H9m0-13v13" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2 group-hover:text-light-blue">Custody Evaluations</h3>
                <p className="text-gray-600">Professional assessments to determine best custody arrangements.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
