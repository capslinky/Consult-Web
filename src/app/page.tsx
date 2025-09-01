import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e3a8a] mb-6 leading-tight text-center">
            Get the Legal Guidance You Need<br />
            <span className="text-[#3b82f6]">During Life&rsquo;s Most Difficult Times</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto leading-relaxed text-center md:text-left">
            When your family&rsquo;s future is at stake, you deserve an experienced Arizona attorney who understands what you&rsquo;re going through. Get personalized guidance with our comprehensive $500 virtual consultation.
          </p>
          
=======
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#1e3a8a] mb-6 leading-tight max-w-5xl mx-auto">
              Get the Legal Guidance You Need
              <span className="block text-[#3b82f6] mt-2">During Life&rsquo;s Most Difficult Times</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              When your family&rsquo;s future is at stake, you deserve an experienced Arizona attorney who understands what you&rsquo;re going through. Get personalized guidance with our comprehensive $500 virtual consultation.
            </p>
          </div>

>>>>>>> 4110bf2 (feat: comprehensive UI/UX improvements)
          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-sm text-gray-600 max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#10b981] rounded-full flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>15+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#10b981] rounded-full flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Arizona State Bar Member</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#10b981] rounded-full flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>100% Confidential</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto">
            <Link href="/book" className="bg-[#f59e0b] text-white hover:bg-[#d97706] focus:ring-2 focus:ring-[#f59e0b] focus:ring-offset-2 px-8 py-4 text-lg font-semibold rounded-md transition-all duration-200 focus:outline-none inline-flex items-center justify-center">
              Book Your Consultation Today
            </Link>
            <Link href="/how-it-works" className="bg-[#3b82f6] text-white hover:bg-[#2563eb] focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 px-8 py-4 text-lg font-semibold rounded-md transition-all duration-200 focus:outline-none inline-flex items-center justify-center">
              Learn How It Works
            </Link>
          </div>
          
          {/* Urgency Element */}
          <p className="mt-6 text-sm text-gray-600 text-center max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto">
            <strong className="text-[#f59e0b]">Limited consultation slots available this week</strong> - Most clients see clarity within 24 hours
          </p>
        </div>
      </section>

      {/* Features Section */}
<<<<<<< HEAD
      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-[#1e3a8a] mb-12">
            Why Choose Paradise Law AZ
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#3b82f6] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h4 className="text-xl font-semibold mb-2">Expert Attorneys</h4>
              <p className="text-gray-600">Experienced in Arizona family law with proven results</p>
            </div>
            <div className="text-center">
              <div className="bg-[#3b82f6] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h4 className="text-xl font-semibold mb-2">Virtual Consultations</h4>
              <p className="text-gray-600">Convenient online meetings from the comfort of your home</p>
            </div>
            <div className="text-center">
              <div className="bg-[#3b82f6] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h4 className="text-xl font-semibold mb-2">Money-Back Guarantee</h4>
              <p className="text-gray-600">100% satisfaction guaranteed or your money back</p>
=======
      <section className="bg-gray-50 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6">
              Why Choose Paradise Law AZ
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference with personalized service designed specifically for Arizona families
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Expert Attorneys Card */}
            <div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 text-center border-l-4 border-[#3b82f6]">
              <div className="bg-[#3b82f6] text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-[#1e3a8a]">Expert Attorneys</h4>
              <p className="text-gray-600 leading-relaxed">Over 15 years of Arizona family law expertise with a proven track record of successful outcomes</p>
            </div>

            {/* Virtual Consultations Card */}
            <div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 text-center border-l-4 border-[#f59e0b]">
              <div className="bg-[#f59e0b] text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                  <path fill="none" stroke="currentColor" strokeWidth="2" d="M4 4v4h4M20 16v-4h-4M2 12l8-8 8 8" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-[#1e3a8a]">Virtual Consultations</h4>
              <p className="text-gray-600 leading-relaxed">$500 affordable consultations conducted remotely from the comfort of your home</p>
            </div>

            {/* Money-Back Guarantee Card */}
            <div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 text-center border-l-4 border-[#10b981]">
              <div className="bg-[#10b981] text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2l2 2 4-4M13 13V9h3l-6 6zM9 15H3l6-6v4z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-[#1e3a8a]">Money-Back Guarantee</h4>
              <p className="text-gray-600 leading-relaxed">100% satisfaction guaranteed. If you're not completely satisfied, we refund your consultation fee</p>
            </div>
          </div>

          {/* Additional Trust Indicators */}
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-[#1e3a8a] rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h5 className="font-semibold text-[#1e3a8a] mb-2">Licensed & Insured</h5>
              <p className="text-sm text-gray-600">Fully licensed Arizona attorneys</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-[#1e3a8a] rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6z" />
                </svg>
              </div>
              <h5 className="font-semibold text-[#1e3a8a] mb-2">Personalized Service</h5>
              <p className="text-sm text-gray-600">Dedicated support throughout your case</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-[#1e3a8a] rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h5 className="font-semibold text-[#1e3a8a] mb-2">Client-Centered</h5>
              <p className="text-sm text-gray-600">Your needs and concerns come first</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-[#1e3a8a] rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.066a1 1 0 00.75.04L12 5.848l-1.856-.878zM4.25 9.913a1 1 0 00-.75.04L2.31 7.236a.999.999 0 01.501-1.055l5.726 3.52a1 1 0 00.894 0L16 7.442a.999.999 0 011.09.211L15.75 9.086a1 1 0 00-.75-.04l-1.393.692a1 1 0 01-.894 0L9.25 8.155a1 1 0 00-.894 0L7.05 8.831a.999.999 0 01-.894 0zM18 12.486v-4.27a.999.999 0 00-1-1.088L17.23 7.06a.999.999 0 011.09-.211L18.002 8v4l-1.372.693a1 1 0 11-.894-1.788L17 11.314v-1.032l-.508.508a1 1 0 11-1.414-1.414l1.372-.693zm-7.518 3.564a1 1 0 01-.59-1.741l.741-.741a1 1 0 011.414 1.414L9.776 14.76l.741.741z" />
                </svg>
              </div>
              <h5 className="font-semibold text-[#1e3a8a] mb-2">Experience Matters</h5>
              <p className="text-sm text-gray-600">Decades of family law success</p>
>>>>>>> 4110bf2 (feat: comprehensive UI/UX improvements)
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#1e3a8a] mb-4">
              What Our Clients Say
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how we&rsquo;ve helped Arizona families navigate their most challenging times
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#f59e0b]">
              <div className="mb-4">
                <div className="flex text-[#f59e0b] mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  &ldquo;Paradise Law made an incredibly stressful divorce process manageable. The virtual consultation saved me time and the guidance was exactly what I needed.&rdquo;
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#1e3a8a] rounded-full flex items-center justify-center text-white font-semibold mr-3">
                  S
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Sarah M.</p>
                  <p className="text-sm text-gray-600">Divorce Case</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#f59e0b]">
              <div className="mb-4">
                <div className="flex text-[#f59e0b] mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  &ldquo;Professional, knowledgeable, and compassionate. The attorney understood my custody concerns and provided clear direction for next steps.&rdquo;
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#1e3a8a] rounded-full flex items-center justify-center text-white font-semibold mr-3">
                  M
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Michael R.</p>
                  <p className="text-sm text-gray-600">Child Custody</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#f59e0b]">
              <div className="mb-4">
                <div className="flex text-[#f59e0b] mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  &ldquo;Worth every penny. The consultation gave me confidence and a solid plan. I knew exactly what to expect and how to proceed with my case.&rdquo;
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#1e3a8a] rounded-full flex items-center justify-center text-white font-semibold mr-3">
                  J
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Jennifer L.</p>
                  <p className="text-sm text-gray-600">Property Division</p>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-[#1e3a8a] mb-2">500+</div>
              <p className="text-gray-600">Families Helped</p>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-[#1e3a8a] mb-2">15+</div>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-[#1e3a8a] mb-2">95%</div>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-[#1e3a8a] mb-2">24hr</div>
              <p className="text-gray-600">Average Response</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#1e3a8a] text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-xl mb-8">Schedule your consultation today and get the legal guidance you need.</p>
          <Link href="/book" className="bg-[#f59e0b] text-white hover:bg-[#d97706] focus:ring-2 focus:ring-[#f59e0b] focus:ring-offset-2 px-8 py-4 text-lg font-semibold rounded-md transition-all duration-200 focus:outline-none inline-flex items-center justify-center">
            Book Your Consultation Now
          </Link>
        </div>
      </section>
    </>
  );
}
