import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: 'How It Works | Paradise Law AZ Virtual Consultations',
  description: 'Learn how our virtual family law consultations work. Simple 4-step process from booking to resolution. Get expert legal advice from home.',
};

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-navy to-navy-light py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How Virtual Consultations Work
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Get expert family law advice from the comfort of your home in four simple steps
          </p>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">
            Your Path to Legal Clarity
          </h2>
          
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  1
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-navy mb-3">Book Your Consultation</h3>
                <p className="text-gray-700 mb-4">
                  Choose a convenient time slot from our online calendar. Available evenings and weekends to accommodate your schedule.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    Select date and time that works for you
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    Pay secure $500 flat fee via Stripe
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    Receive immediate confirmation email
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  2
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-navy mb-3">Prepare Your Documents</h3>
                <p className="text-gray-700 mb-4">
                  Gather relevant documents and information before your consultation to maximize our time together.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    Court orders and legal documents
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    Financial records (if applicable)
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    Timeline of events and key dates
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    List of questions and concerns
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  3
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-navy mb-3">Join Your Video Call</h3>
                <p className="text-gray-700 mb-4">
                  Connect with Attorney Anthony Paradise for your 60-minute consultation via secure video conference.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    Click the link sent to your email
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    Test your camera and microphone
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    Find a quiet, private space
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    Have your documents ready to share
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  4
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-navy mb-3">Receive Your Action Plan</h3>
                <p className="text-gray-700 mb-4">
                  Get clear guidance and next steps tailored to your specific situation.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    Written summary of consultation
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    Personalized legal strategy
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    Resource recommendations
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    Options for ongoing representation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">
            Technology Requirements
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Device</h3>
              <p className="text-gray-600">
                Computer, tablet, or smartphone with a camera and microphone. Desktop or laptop recommended for best experience.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Internet</h3>
              <p className="text-gray-600">
                Stable broadband connection (minimum 5 Mbps). Wired connection or strong WiFi signal recommended.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Software</h3>
              <p className="text-gray-600">
                Modern web browser (Chrome, Firefox, Safari, or Edge). No downloads required - we use secure browser-based video.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Preparation Guide */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">
            How to Prepare for Your Consultation
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-navy mb-6">Before Your Call</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-navy">Write down your goals</strong>
                    <p className="text-gray-600 mt-1">What do you hope to achieve? What&apos;s your ideal outcome?</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-navy">Create a timeline</strong>
                    <p className="text-gray-600 mt-1">List important dates and events in chronological order</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-navy">Organize documents</strong>
                    <p className="text-gray-600 mt-1">Have digital copies ready to screen share if needed</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-navy">List your questions</strong>
                    <p className="text-gray-600 mt-1">Prioritize your most important concerns</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-navy mb-6">During Your Call</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-navy">Be honest and complete</strong>
                    <p className="text-gray-600 mt-1">Attorney-client privilege protects your conversation</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-navy">Take notes</strong>
                    <p className="text-gray-600 mt-1">Write down important points and action items</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-navy">Ask for clarification</strong>
                    <p className="text-gray-600 mt-1">Don&apos;t hesitate to ask if something isn&apos;t clear</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-navy">Discuss next steps</strong>
                    <p className="text-gray-600 mt-1">Understand your options and timeline moving forward</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-navy mb-3">
                What if I need to reschedule?
              </h3>
              <p className="text-gray-600">
                You can reschedule your consultation up to 24 hours before your appointment time through the link in your confirmation email. Last-minute changes may be accommodated on a case-by-case basis.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-navy mb-3">
                Is my consultation confidential?
              </h3>
              <p className="text-gray-600">
                Yes, absolutely. Your consultation is protected by attorney-client privilege. We use secure, encrypted video conferencing to ensure your privacy. No recordings are made without your explicit consent.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-navy mb-3">
                What if I have technical difficulties?
              </h3>
              <p className="text-gray-600">
                We&apos;ll provide a phone number as backup. If video fails, we can continue by phone. Technical issues won&apos;t count against your consultation time - we&apos;ll ensure you get your full 60 minutes of legal advice.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-navy mb-3">
                Can I share documents during the call?
              </h3>
              <p className="text-gray-600">
                Yes! You can screen share documents during the video call, or email them to us before or after the consultation. We&apos;ll review them together and discuss their relevance to your case.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-navy mb-3">
                What happens after the consultation?
              </h3>
              <p className="text-gray-600">
                You&apos;ll receive a written summary of our discussion and recommended next steps within 24 hours. If you decide to retain our services for ongoing representation, the consultation fee is credited toward your retainer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Take the first step toward resolving your family law matter with expert guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" className="w-full sm:w-auto">
                Book Your Consultation
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white text-navy hover:bg-gray-100">
                View Services
              </Button>
            </Link>
          </div>
          <p className="text-white/80 mt-8">
            Questions? Call <a href="tel:602-555-0123" className="text-gold hover:text-gold-light underline">602-555-0123</a> or{' '}
            <Link href="/contact" className="text-gold hover:text-gold-light underline">
              contact us online
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
