import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#1e3a8a] text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get In Touch With Paradise Law AZ
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Our experienced team is here to help you navigate your legal challenges.
            Contact us today for a confidential consultation.
          </p>

          {/* Quick Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="w-12 h-12 bg-[#f59e0b] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-blue-100">(480) 555-0123</p>
              <p className="text-sm text-blue-200 mt-1">Emergency Legal Help Available 24/7</p>
            </div>

            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="w-12 h-12 bg-[#10b981] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-blue-100">info@paradisepassage.com</p>
              <p className="text-sm text-blue-200 mt-1">We respond within 24 hours</p>
            </div>

            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="w-12 h-12 bg-[#8b5cf6] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-blue-100">Phoenix, Arizona</p>
              <p className="text-sm text-blue-200 mt-1">Virtual meetings available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-[#1e3a8a] mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="caseType" className="block text-sm font-medium text-gray-700 mb-2">
                    Type of Case
                  </label>
                  <select
                    id="caseType"
                    name="caseType"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                  >
                    <option value="">Select your situation...</option>
                    <option value="divorce">Divorce & Family Law</option>
                    <option value="custody">Child Custody</option>
                    <option value="financial">Property Division</option>
                    <option value="other">Other Legal Matter</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent resize-vertical"
                    placeholder="Please describe your situation and how we can help you..."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consented"
                    name="consented"
                    required
                    className="mt-1 h-4 w-4 text-[#3b82f6] border-gray-300 rounded focus:ring-[#3b82f6]"
                  />
                  <label htmlFor="consented" className="text-sm text-gray-700">
                    I understand that any information I provide is confidential as a prospective client,
                    protected by attorney-client privilege once retained, and will be used only to assess
                    my legal situation. I agree to the <Link href="/legal/privacy" className="text-[#3b82f6] hover:text-[#2563eb]">Privacy Policy</Link> and <Link href="/legal/terms" className="text-[#3b82f6] hover:text-[#2563eb]">Terms of Service</Link>.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#f59e0b] text-white hover:bg-[#d97706] px-6 py-4 rounded-lg font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-200"
                >
                  Send Message Securely
                </button>
              </form>
            </div>

            {/* Information Sidebar */}
            <div className="space-y-8">
              {/* Quick Links */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-[#1e3a8a] mb-6">Quick Actions</h3>
                <div className="space-y-4">
                  <Link
                    href="/book"
                    className="flex items-center gap-4 p-4 bg-[#3b82f6]/10 hover:bg-[#3b82f6]/20 rounded-lg transition-colors group"
                  >
                    <div className="w-12 h-12 bg-[#3b82f6] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1e3a8a]">Book Consultation</h4>
                      <p className="text-sm text-gray-600">$500 Virtual Meeting</p>
                    </div>
                  </Link>

                  <Link
                    href="/resources"
                    className="flex items-center gap-4 p-4 bg-[#10b981]/10 hover:bg-[#10b981]/20 rounded-lg transition-colors group"
                  >
                    <div className="w-12 h-12 bg-[#10b981] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1e3a8a]">Browse Resources</h4>
                      <p className="text-sm text-gray-600">Legal Guides & Articles</p>
                    </div>
                  </Link>

                  <a
                    href="tel:4805550123"
                    className="flex items-center gap-4 p-4 bg-[#f59e0b]/10 hover:bg-[#f59e0b]/20 rounded-lg transition-colors group"
                  >
                    <div className="w-12 h-12 bg-[#f59e0b] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1e3a8a]">Call Emergency</h4>
                      <p className="text-sm text-gray-600">(480) 555-0123</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-6">Why Choose Paradise Law AZ?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#10b981] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Licensed Arizona Attorneys</h4>
                      <p className="text-sm text-gray-600">15+ years of experience in Arizona family law</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#3b82f6] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">100% Confidential</h4>
                      <p className="text-sm text-gray-600">Attorney-client privilege protects your information</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#f59e0b] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Money-Back Guarantee</h4>
                      <p className="text-sm text-gray-600">100% satisfaction or your consultation fee refunded</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#8b5cf6] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"></path>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Virtual Consultations</h4>
                      <p className="text-sm text-gray-600">Convenient online meetings from any location</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">How quickly will you respond?</h4>
                    <p className="text-sm text-gray-600">We respond to all inquiries within 24 hours during business days.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Do consultations cost anything?</h4>
                    <p className="text-sm text-gray-600">$500 virtual consultation fee covers personalized legal guidance.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Are communications confidential?</h4>
                    <p className="text-sm text-gray-600">Yes, information you provide is protected by attorney-client privilege.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="bg-[#1e3a8a] text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Serving Clients Throughout Arizona</h2>
            <p className="text-blue-100">
              We provide comprehensive legal services for families across the state,
              with offices and virtual consultations available statewide.
            </p>
          </div>

          {/* Service Areas */}
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <h3 className="text-2xl font-bold text-[#f59e0b] mb-2">Phoenix</h3>
              <p className="text-blue-100">Maricopa County</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#f59e0b] mb-2">Tucson</h3>
              <p className="text-blue-100">Pima County</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#f59e0b] mb-2">Scottsdale</h3>
              <p className="text-blue-100">Greater Phoenix Area</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#f59e0b] mb-2">Statewide</h3>
              <p className="text-blue-100">Virtual Consultations</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
