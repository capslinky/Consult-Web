import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f8fafc] to-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Success Animation */}
        <div className="text-center mb-12">
          <div className="relative inline-flex items-center justify-center w-32 h-32 mb-8">
            {/* Animated checkmark circle */}
            <div className="absolute inset-0 rounded-full border-4 border-[#10b981] animate-pulse"></div>
            <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-[#10b981] animate-spin"></div>
            <div className="relative z-10 w-24 h-24 bg-[#10b981] rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>

          {/* Main Success Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4">
            Thank You!
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6">
            Your consultation has been scheduled successfully
          </p>

          {/* Confirmation Details */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 max-w-2xl mx-auto">
            <div className="text-left">
              <h3 className="text-lg font-semibold text-[#1e3a8a] mb-4">Confirmation Details</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Appointment:</span>
                  <span className="font-medium text-[#1e3a8a]">Virtual Consultation</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium text-[#1e3a8a]">30 Minutes</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Cost:</span>
                  <span className="font-medium text-[#1e3a8a]">$500</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-600">Status:</span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#10b981] text-white">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Confirmed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-[#1e3a8a] mb-6 text-center">
            What's Next?
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#3b82f6] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-[#1e3a8a] mb-2">Confirmation Email</h4>
              <p className="text-gray-600">Check your inbox for appointment details, timing link, and preparation instructions.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#f59e0b] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-[#1e3a8a] mb-2">Prepare & Plan</h4>
              <p className="text-gray-600">Review your situation notes, gather documents, and prepare questions for your consultation.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#10b981] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-[#1e3a8a] mb-2">Virtual Meeting</h4>
              <p className="text-gray-600">Join your secure video consultation at the scheduled time from your preferred device.</p>
            </div>
          </div>
        </div>

        {/* Free Resources */}
        <div className="bg-[#f8fafc] rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4 text-center">
            🎉 Your Free Resources
          </h3>
          <p className="text-gray-600 mb-6 text-center">
            While you wait for your consultation, here are some valuable resources to get started:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-[#1e3a8a] mb-2">Arizona Divorce Process Guide</h4>
              <p className="text-gray-600 text-sm mb-4">Understand the typical timeline and steps involved in Arizona divorce proceedings.</p>
              <Link
                href="/resources/guides/arizona-divorce-process"
                className="inline-flex items-center text-[#3b82f6] hover:text-[#2563eb] font-medium"
              >
                Download Free Guide →
              </Link>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-[#1e3a8a] mb-2">Custody & Child Support Basics</h4>
              <p className="text-gray-600 text-sm mb-4">Essential information about Arizona custody laws and support calculations.</p>
              <Link
                href="/resources/guides/custody-fundamentals"
                className="inline-flex items-center text-[#3b82f6] hover:text-[#2563eb] font-medium"
              >
                Download Free Guide →
              </Link>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/resources"
            className="bg-[#3b82f6] text-white hover:bg-[#2563eb] px-8 py-4 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200 inline-flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.13-2.052-.382-3.016z" />
            </svg>
            Browse All Resources
          </Link>

          <Link
            href="/contact"
            className="bg-white text-[#3b82f6] border-2 border-[#3b82f6] hover:bg-[#3b82f6] hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Talk to Support
          </Link>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <h4 className="text-lg font-semibold text-[#1e3a8a] mb-2">Need to Make Changes?</h4>
          <p className="text-gray-600 mb-4">
            Questions about your appointment or need to reschedule?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:4805550123"
              className="text-[#3b82f6] hover:text-[#2563eb] font-medium inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call (480) 555-0123
            </a>
            <span className="text-gray-400">•</span>
            <Link
              href="/contact"
              className="text-[#3b82f6] hover:text-[#2563eb] font-medium"
            >
              Send us a message
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
