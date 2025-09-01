import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: 'Pricing | $500 Virtual Family Law Consultations | Paradise Law AZ',
  description: 'Transparent flat fee pricing for virtual family law consultations. $500 gets you 60 minutes with an experienced Arizona family law attorney.',
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-navy to-navy-light py-20">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            No hourly rates, no surprise bills. Just one flat fee for comprehensive legal guidance.
          </p>
        </div>
      </section>

      {/* Main Pricing Card */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white border-4 border-gold rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gold p-6 text-center">
              <h2 className="text-2xl font-bold text-white mb-2">Virtual Family Law Consultation</h2>
              <p className="text-white/90">Everything you need to understand your legal options</p>
            </div>
            
            <div className="p-8 md:p-12 text-center">
              <div className="mb-8">
                <span className="text-6xl md:text-7xl font-bold text-navy">$500</span>
                <p className="text-xl text-gray-600 mt-2">One-time flat fee</p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-navy mb-6">What&apos;s Included:</h3>
                <div className="grid md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <strong className="text-navy">60-minute video consultation</strong>
                      <p className="text-gray-600 text-sm mt-1">Full hour with Attorney Anthony Paradise</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <strong className="text-navy">Case analysis & strategy</strong>
                      <p className="text-gray-600 text-sm mt-1">Comprehensive review of your situation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <strong className="text-navy">Document review</strong>
                      <p className="text-gray-600 text-sm mt-1">Analysis of your existing legal papers</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <strong className="text-navy">Written action plan</strong>
                      <p className="text-gray-600 text-sm mt-1">Detailed next steps delivered within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <strong className="text-navy">Resource recommendations</strong>
                      <p className="text-gray-600 text-sm mt-1">Forms, guides, and additional support options</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <strong className="text-navy">Follow-up email support</strong>
                      <p className="text-gray-600 text-sm mt-1">Brief questions answered for 7 days</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <Link href="/book/">
                  <Button size="lg" className="w-full sm:w-auto">
                    Book Your Consultation Now
                  </Button>
                </Link>
                <p className="text-sm text-gray-600 mt-3">
                  Secure payment via Stripe • Available evenings and weekends
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">
            Compare Your Options
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* DIY Option */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-navy mb-4">Do It Yourself</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-navy">$0-$200</span>
                <p className="text-gray-600">Court fees and forms</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-600 text-sm">No legal expertise</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-600 text-sm">High risk of mistakes</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-600 text-sm">Time-consuming research</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-600 text-sm">No strategy guidance</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 italic">
                &ldquo;You get what you pay for - often costly mistakes.&rdquo;
              </p>
            </div>

            {/* Our Service */}
            <div className="bg-gold text-white p-8 rounded-lg shadow-lg relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-navy text-white px-4 py-2 rounded-full text-sm font-semibold">
                  RECOMMENDED
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Virtual Consultation</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold">$500</span>
                <p className="text-white/90">One-time flat fee</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Expert legal analysis</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Personalized strategy</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Clear action plan</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Convenient from home</span>
                </li>
              </ul>
              <p className="text-sm italic">
                &ldquo;The perfect balance of expert guidance and affordability.&rdquo;
              </p>
            </div>

            {/* Traditional Attorney */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-navy mb-4">Traditional Attorney</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-navy">$350+/hr</span>
                <p className="text-gray-600">Plus $3,000-$5,000 retainer</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gold mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600 text-sm">Expert representation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-600 text-sm">High upfront costs</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-600 text-sm">Unpredictable billing</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-600 text-sm">Office appointments required</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 italic">
                &ldquo;Full representation when you need it, but often overkill.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Money-Back Guarantee */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="bg-light-blue/10 p-12 rounded-2xl">
            <div className="w-16 h-16 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-navy mb-6">
              100% Satisfaction Guarantee
            </h2>
            <p className="text-xl text-gray-700 mb-6">
              If you&apos;re not completely satisfied with your consultation, we&apos;ll refund your full $500 fee within 7 days.
            </p>
            <p className="text-gray-600">
              We&apos;re confident you&apos;ll find tremendous value in our consultation. Our guarantee ensures you have nothing to lose and everything to gain.
            </p>
          </div>
        </div>
      </section>

      {/* Payment Information */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">
            Payment Information
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-navy mb-6">Accepted Payment Methods</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-8 h-8 text-gold mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <div>
                    <strong className="text-navy">Credit & Debit Cards</strong>
                    <p className="text-gray-600 text-sm">Visa, MasterCard, American Express, Discover</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <svg className="w-8 h-8 text-gold mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  <div>
                    <strong className="text-navy">Digital Payments</strong>
                    <p className="text-gray-600 text-sm">Apple Pay, Google Pay, PayPal</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <svg className="w-8 h-8 text-gold mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div>
                    <strong className="text-navy">Secure Processing</strong>
                    <p className="text-gray-600 text-sm">256-bit SSL encryption via Stripe</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-navy mb-6">Billing Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Consultation Fee</span>
                  <span className="font-semibold text-navy">$500.00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Processing Fee</span>
                  <span className="font-semibold text-navy">$0.00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Taxes</span>
                  <span className="font-semibold text-navy">$0.00</span>
                </div>
                <div className="flex justify-between items-center py-4 text-xl font-bold text-navy">
                  <span>Total</span>
                  <span>$500.00</span>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  * Legal services are generally exempt from sales tax in Arizona. No hidden fees or surprise charges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">
            Pricing Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-navy mb-3">
                What if I need more than one consultation?
              </h3>
              <p className="text-gray-600">
                Each consultation is $500. However, if you decide to retain our services for ongoing representation, your consultation fee is credited toward your retainer. Many clients find one consultation sufficient for their immediate needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-navy mb-3">
                Can I get a refund if I cancel?
              </h3>
              <p className="text-gray-600">
                Yes, you can cancel and receive a full refund up to 24 hours before your scheduled consultation. After your consultation, our 7-day satisfaction guarantee applies if you&apos;re not completely satisfied with the service.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-navy mb-3">
                Do you offer payment plans?
              </h3>
              <p className="text-gray-600">
                The $500 consultation fee is due at the time of booking. For ongoing representation, we do offer payment plans and flexible arrangements based on your situation. We&apos;ll discuss options during your consultation if needed.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-navy mb-3">
                Is this covered by legal insurance?
              </h3>
              <p className="text-gray-600">
                Most legal insurance plans provide some coverage for consultations. We&apos;ll provide you with a detailed receipt that you can submit to your insurance provider for potential reimbursement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Invest in Your Family&apos;s Future
          </h2>
          <p className="text-xl text-white/90 mb-8">
            $500 for expert legal guidance that could save you thousands in mistakes and stress
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book/">
              <Button size="lg" className="w-full sm:w-auto">
                Book Your $500 Consultation
              </Button>
            </Link>
            <Link href="/how-it-works/">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white text-navy hover:bg-gray-100">
                How It Works
              </Button>
            </Link>
          </div>
          <p className="text-white/80 mt-8">
            Questions about pricing? Call <a href="tel:602-555-0123" className="text-gold hover:text-gold-light underline">602-555-0123</a>
          </p>
        </div>
      </section>
    </main>
  );
}
