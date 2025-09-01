import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Design */}
        <div className="mb-8">
          <div className="text-9xl md:text-[12rem] font-bold text-gray-200 leading-none mb-2">
            404
          </div>
          <div className="text-2xl md:text-4xl font-bold text-[#1e3a8a] mb-4">
            Page Not Found
          </div>
          <div className="w-24 h-1 bg-[#f59e0b] mx-auto mb-6"></div>
        </div>

        {/* Message */}
        <h1 className="text-3xl md:text-5xl font-bold text-[#1e3a8a] mb-4">
          Oops! This page doesn't exist
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto">
          We can't find the page you're looking for. It might have been moved,
          deleted, or you entered the wrong URL.
        </p>

        {/* Search Box (placeholder for future functionality) */}
        <div className="max-w-md mx-auto mb-8">
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="What are you looking for?"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
              readOnly
            />
            <button
              type="submit"
              className="bg-[#3b82f6] text-white px-6 py-3 rounded-r-md hover:bg-[#2563eb] transition-colors"
              disabled
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </button>
          </form>
        </div>

        {/* Primary Action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="bg-[#f59e0b] text-white hover:bg-[#d97706] px-8 py-4 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200 inline-flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-8 8a1 1 0 001.414 1.414L4 10.414V15a3 3 0 003-3V9a.5.5 0 011 0v3a4 4 0 01-4 4h1v1a2 2 0 002 2h.586a1 1 0 001-1v-4.586l.293.293a1 1 0 001.414-1.414l-8-8z" />
            </svg>
            Back to Homepage
          </Link>

          <Link
            href="/resources"
            className="bg-white text-[#3b82f6] border-2 border-[#3b82f6] hover:bg-[#3b82f6] hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.13-2.052-.382-3.016z" />
            </svg>
            Browse Resources
          </Link>
        </div>

        {/* Popular Pages */}
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1e3a8a] mb-6">Looking for Something Specific?</h2>
          <p className="text-gray-600 mb-6">Try one of these popular pages instead:</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
            <div className="space-y-3">
              <h3 className="font-semibold text-[#1e3a8a] text-sm uppercase tracking-wide mb-3">
                Services
              </h3>
              <Link href="/practice-areas/divorce" className="block text-gray-600 hover:text-[#3b82f6] py-1 text-sm">
                Divorce Law
              </Link>
              <Link href="/practice-areas/custody" className="block text-gray-600 hover:text-[#3b82f6] py-1 text-sm">
                Child Custody
              </Link>
              <Link href="/practice-areas/financial" className="block text-gray-600 hover:text-[#3b82f6] py-1 text-sm">
                Property Division
              </Link>
              <Link href="/services" className="block text-gray-600 hover:text-[#3b82f6] py-1 text-sm">
                All Practice Areas
              </Link>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-[#1e3a8a] text-sm uppercase tracking-wide mb-3">
                Resources
              </h3>
              <Link href="/resources/guides" className="block text-gray-600 hover:text-[#3b82f6] py-1 text-sm">
                Legal Guides
              </Link>
              <Link href="/resources/blog" className="block text-gray-600 hover:text-[#3b82f6] py-1 text-sm">
                Legal Blog
              </Link>
              <Link href="/resources/testimonials" className="block text-gray-600 hover:text-[#3b82f6] py-1 text-sm">
                Client Stories
              </Link>
              <Link href="/resources/faq" className="block text-gray-600 hover:text-[#3b82f6] py-1 text-sm">
                FAQ
              </Link>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-[#1e3a8a] text-sm uppercase tracking-wide mb-3">
                Quick Help
              </h3>
              <Link href="/book" className="block text-gray-600 hover:text-[#f59e0b] py-1 text-sm font-medium">
                Book Consultation
              </Link>
              <Link href="/contact" className="block text-gray-600 hover:text-[#3b82f6] py-1 text-sm">
                Contact Us
              </Link>
              <Link href="/about" className="block text-gray-600 hover:text-[#3b82f6] py-1 text-sm">
                About Attorney
              </Link>
              <div className="border-t border-gray-200 pt-2 mt-3">
                <span className="text-xs text-gray-500">Emergency Help:</span><br />
                <span className="text-[#3b82f6] font-medium">(480) 555-0123</span>
              </div>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-12 bg-[#f8fafc] rounded-xl p-8 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">Still Need Help?</h3>
          <p className="text-gray-600 mb-4">
            Can't find what you're looking for? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:4805550123"
              className="bg-[#10b981] text-white hover:bg-[#059669] px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Us Now
            </a>
            <Link
              href="/contact"
              className="bg-[#3b82f6] text-white hover:bg-[#2563eb] px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Send Message
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
