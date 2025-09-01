import Link from 'next/link';

export default function FAQPage() {
  const faqs = [
    {
      question: "How much does a consultation cost?",
      answer: "Our virtual consultations are available for $500. This covers a comprehensive 30-minute discussion of your unique situation, assessment of next steps, and personalized legal guidance. Many clients find this initial consultation saves them thousands in legal costs by identifying the right path forward.",
      category: "pricing"
    },
    {
      question: "Are consultations confidential?",
      answer: "Absolutely. All communications with Paradise Law AZ are protected by attorney-client privilege. This means everything you share during your consultation is confidential and protected by law. This privilege begins at your first communication with us, not just when we start formal representation.",
      category: "legal"
    },
    {
      question: "Do you work with couples divorcing amicably?",
      answer: "Yes, we handle both contested and uncontested divorces. If both parties are in agreement on major issues like property division and custody, we can often complete the process efficiently and cost-effectively through uncontested proceedings, which typically take 2-3 months.",
      category: "divorce"
    },
    {
      question: "How long does a typical divorce take in Arizona?",
      answer: "Arizona divorce timelines vary widely. Uncontested divorces typically complete in 2-3 months, while contested divorces can take 6-18 months or longer depending on the issues involved. We work efficiently to resolve cases while protecting your interests and reaching fair outcomes.",
      category: "timeline"
    },
    {
      question: "What types of family law matters do you handle?",
      answer: "We specialize in all major family law matters in Arizona: divorce (both contested and uncontested), child custody and support, child visitation rights modifications, property division (including business valuations and retirement accounts), spousal support/alimony, and post-divorce modifications.",
      category: "practice"
    },
    {
      question: "Do you handle cases involving military families?",
      answer: "Yes, we have extensive experience with military divorce cases. We understand the unique challenges military families face, including jurisdiction issues, military pension division, VA benefits, and the Servicemembers Civil Relief Act requirements.",
      category: "military"
    },
    {
      question: "What should I bring to my consultation?",
      answer: "Please prepare your marriage certificate, any prenuptial/postnuptial agreements, recent tax returns, bank statements, property deeds, and any relevant court documents. For custody matters, bring school records, medical records, and any communications about parenting arrangements.",
      category: "preparation"
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes, we understand that legal matters can create financial stress. We offer flexible payment arrangements for retainer fees and can work with you to create manageable payment schedules. We also accept major credit cards, and the consultation deposit is applied toward your retainer if you retain us.",
      category: "payment"
    },
    {
      question: "What if my spouse has already filed for divorce?",
      answer: "If your spouse has already filed, it's important to respond to the petition within the required timeframe (usually 28 days in Arizona). Contact us immediately for an emergency consultation so we can protect your interests and ensure you don't miss important deadlines that could affect the outcome.",
      category: "emergency"
    },
    {
      question: "Are you licensed in Arizona?",
      answer: "Yes, Paradise Law AZ attorneys are fully licensed to practice law in Arizona. All our attorneys are members of the Arizona State Bar and adhere to the highest ethical standards. We have been serving Arizona families for over 15 years with excellent results.",
      category: "credentials"
    },
    {
      question: "Can you help with custody agreements I'm negotiating in mediation?",
      answer: "Yes, many couples use mediation for divorce, and we can provide invaluable support. We can help you prepare for mediation, review proposed agreements, advise on what positions to take, and assist with any related legal issues that can't be resolved through mediation alone.",
      category: "mediation"
    },
    {
      question: "What if I can't afford a lawyer?",
      answer: "We offer affordable consultation options and flexible payment plans for those who qualify. For individuals with very low income, we can refer you to legal aid organizations or provide information about pro bono services. Cost should never prevent you from getting the legal help you need.",
      category: "access"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Questions', count: faqs.length },
    { id: 'pricing', name: 'Pricing & Payment', count: faqs.filter(f => f.category === 'pricing').length },
    { id: 'legal', name: 'Legal Process', count: faqs.filter(f => f.category === 'legal').length },
    { id: 'timeline', name: 'Timeline', count: faqs.filter(f => f.category === 'timeline').length },
    { id: 'divorce', name: 'Divorce', count: faqs.filter(f => f.category === 'divorce').length },
    { id: 'practice', name: 'Our Practice', count: faqs.filter(f => f.category === 'practice').length },
    { id: 'credentials', name: 'Credentials', count: faqs.filter(f => f.category === 'credentials').length },
    { id: 'emergency', name: 'Urgent Situations', count: faqs.filter(f => f.category === 'emergency').length }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#1e3a8a] text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get answers to the most common questions about family law in Arizona.
            We&apos;re here to help you understand your options and make informed decisions.
          </p>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-[#f59e0b] mb-2">500+</div>
              <p className="text-blue-100">Consultation Questions Answered</p>
            </div>

            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-[#10b981] mb-2">15+</div>
              <p className="text-blue-100">Years of Experience</p>
            </div>

            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-[#3b82f6] mb-2">3K+</div>
              <p className="text-blue-100">Arizona Families Helped</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-12 px-4 bg-white shadow-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                className="px-6 py-3 bg-[#f8fafc] hover:bg-[#3b82f6] hover:text-white rounded-full text-gray-700 font-medium transition-all duration-200 border border-gray-200 hover:border-[#3b82f6]"
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-sm border-l-4 overflow-hidden hover:shadow-md transition-all duration-200 ${
                  faq.category === 'pricing' ? 'border-[#f59e0b]' :
                  faq.category === 'legal' ? 'border-[#10b981]' :
                  faq.category === 'credentials' ? 'border-[#1e3a8a]' :
                  'border-[#3b82f6]'
                }`}
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 select-none">
                    <h3 className="text-lg md:text-xl font-semibold text-[#1e3a8a] pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      <svg className="w-6 h-6 text-[#3b82f6] transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </summary>

                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed text-base">
                      {faq.answer}
                    </p>

                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        faq.category === 'pricing' ? 'bg-[#f59e0b]/10 text-[#f59e0b]' :
                        faq.category === 'legal' ? 'bg-[#10b981]/10 text-[#10b981]' :
                        faq.category === 'credentials' ? 'bg-[#1e3a8a]/10 text-[#1e3a8a]' :
                        'bg-[#3b82f6]/10 text-[#3b82f6]'
                      }`}>
                        {categories.find(cat => cat.id === faq.category)?.name}
                      </span>
                    </div>
                  </div>
                </details>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Every family law situation is unique. Our experienced attorneys are here to provide personalized guidance for your specific circumstances.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book/"
                className="bg-[#f59e0b] hover:bg-[#d97706] px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 inline-flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                Book Your Consultation ($500)
              </Link>

              <Link
                href="/contact/"
                className="bg-white text-[#1e3a8a] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 inline-flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Us
              </Link>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                100% Confidential
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Emergency Help Available
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Licensed Arizona Attorneys
              </div>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="w-16 h-16 bg-[#3b82f6] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[#1e3a8a] mb-3">Legal Resources</h4>
              <p className="text-gray-600 mb-4">Free guides and articles to help you understand your rights</p>
              <Link href="/resources/" className="text-[#3b82f6] hover:text-[#2563eb] font-medium">
                Browse Resources →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="w-16 h-16 bg-[#f59e0b] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[#1e3a8a] mb-3">Common Issues</h4>
              <p className="text-gray-600 mb-4">Find answers to frequently encountered family law situations</p>
              <a href="tel:4805550123" className="text-[#f59e0b] font-medium">
                Emergency Support →
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="w-16 h-16 bg-[#10b981] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[#1e3a8a] mb-3">Quick Consultation</h4>
              <p className="text-gray-600 mb-4">$500 virtual meeting to discuss your specific situation</p>
              <Link href="/book/" className="text-[#10b981] font-medium">
                Schedule Now →
              </Link>
            </div>
          </div>

          {/* Final Disclaimer */}
          <div className="mt-12 bg-[#f8fafc] rounded-lg p-6 border border-gray-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#f59e0b] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.733-.833-2.464 0L4.34 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Important Notice</h4>
                <p className="text-gray-600 text-sm">
                  This FAQ is for general informational purposes only and does not constitute legal advice. Every family law matter is unique and depends on specific facts and circumstances. For personalized advice, please schedule a consultation with one of our licensed Arizona attorneys. We encourage you to seek professional legal guidance for your individual situation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
