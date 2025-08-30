import { Button } from '@/components/ui/Button';

export const metadata = {
  title: 'Book Your Virtual Consultation - Paradise Law AZ',
  description: 'Schedule your $500 virtual family law consultation with experienced Arizona attorneys. Book online in minutes.',
  robots: {
    index: false, // Don't index booking page
  }
};

export default function BookPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1e3a8a] to-[#2563eb] py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Book Your Virtual Consultation
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Get expert Arizona family law guidance from the comfort of your home
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 inline-block">
              <div className="text-3xl font-bold text-[#f59e0b] mb-2">$500</div>
              <p className="text-lg opacity-90">Complete Consultation</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Get Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">
              What You&apos;ll Get in Your Consultation
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive legal guidance tailored to your specific situation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#3b82f6] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1e3a8a] mb-3">Case Assessment</h3>
              <p className="text-gray-600">
                Thorough review of your situation and potential legal options
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#3b82f6] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1e3a8a] mb-3">Action Plan</h3>
              <p className="text-gray-600">
                Clear next steps and timeline for your specific case
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#3b82f6] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1e3a8a] mb-3">Q&A Session</h3>
              <p className="text-gray-600">
                45-60 minutes to ask all your legal questions
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#3b82f6] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1e3a8a] mb-3">Cost Estimate</h3>
              <p className="text-gray-600">
                Realistic projection of potential legal costs and fees
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#3b82f6] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1e3a8a] mb-3">Resources</h3>
              <p className="text-gray-600">
                Relevant forms, guides, and next steps documentation
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#3b82f6] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1e3a8a] mb-3">Follow-up</h3>
              <p className="text-gray-600">
                One follow-up email with action items and recommendations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Booking Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">
              Schedule Your Consultation
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Choose a time that works best for you. Payment is processed securely through Stripe.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#10b981] rounded-full flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#10b981] rounded-full flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>100% Confidential</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#10b981] rounded-full flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Money-Back Guarantee</span>
              </div>
            </div>
          </div>

          {/* Calendly Embed Placeholder */}
          <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center">
            <div className="max-w-md mx-auto">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">
                Calendly Integration Coming Soon
              </h3>
              <p className="text-gray-600 mb-6">
                The booking calendar will be integrated here. For now, please call to schedule your consultation.
              </p>
              <div className="space-y-3">
                <a 
                  href="tel:602-555-0123" 
                  className="block bg-[#f59e0b] text-white hover:bg-[#d97706] focus:ring-2 focus:ring-[#f59e0b] focus:ring-offset-2 px-8 py-4 text-lg font-semibold rounded-md transition-all duration-200 focus:outline-none"
                >
                  Call Now: (602) 555-0123
                </a>
                <p className="text-sm text-gray-500">
                  Available Monday - Friday, 8 AM - 6 PM MST
                </p>
              </div>
            </div>
          </div>

          {/* Alternative Contact Options */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Prefer to discuss your case first? We&rsquo;re here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:info@paradiselawaz.com" 
                className="bg-[#3b82f6] text-white hover:bg-[#2563eb] focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 px-6 py-3 font-semibold rounded-md transition-all duration-200 focus:outline-none inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Email
              </a>
              <a 
                href="/contact" 
                className="border-2 border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white focus:ring-2 focus:ring-[#1e3a8a] focus:ring-offset-2 px-6 py-3 font-semibold rounded-md transition-all duration-200 focus:outline-none inline-flex items-center justify-center"
              >
                Contact Form
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">
              Consultation Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our virtual consultations
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#1e3a8a] mb-3">
                How long is the consultation?
              </h3>
              <p className="text-gray-600">
                Virtual consultations typically last 45-60 minutes, giving you plenty of time to discuss your situation and ask questions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#1e3a8a] mb-3">
                What do I need to prepare?
              </h3>
              <p className="text-gray-600">
                Come prepared with any relevant documents (court papers, agreements, financial statements) and a list of your questions. We&rsquo;ll send you a preparation checklist after booking.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#1e3a8a] mb-3">
                Is the consultation confidential?
              </h3>
              <p className="text-gray-600">
                Yes, absolutely. All consultations are protected by attorney-client privilege and completely confidential.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#1e3a8a] mb-3">
                What if I&apos;m not satisfied?
              </h3>
              <p className="text-gray-600">
                We offer a 100% money-back guarantee. If you&rsquo;re not completely satisfied with your consultation, we&rsquo;ll refund your full payment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#1e3a8a] mb-3">
                Can you represent me after the consultation?
              </h3>
              <p className="text-gray-600">
                Yes, if we&rsquo;re a good fit and you&rsquo;d like to proceed with representation, we can discuss engagement terms during or after your consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#1e3a8a]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get the Legal Guidance You Need Today
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Don&rsquo;t navigate your family law matter alone. Get expert guidance in just one call.
          </p>
          <a 
            href="tel:602-555-0123" 
            className="bg-[#f59e0b] text-white hover:bg-[#d97706] focus:ring-2 focus:ring-[#f59e0b] focus:ring-offset-2 px-8 py-4 text-xl font-semibold rounded-md transition-all duration-200 focus:outline-none inline-flex items-center justify-center"
          >
            Call Now to Book: (602) 555-0123
          </a>
          <p className="text-white/80 mt-6 text-sm">
            Available Monday - Friday, 8 AM - 6 PM MST
          </p>
        </div>
      </section>
    </main>
  );
}
