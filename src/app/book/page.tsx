'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';

export default function BookPage() {
  const [isReady, setIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [timezone, setTimezone] = useState<string>('');

  // Calendly integration
  useEffect(() => {
    trackEvent('book_page_view');
    setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone || '');

    const head = document.head;
    const script = document.createElement('script');

    script.innerHTML = `
      (function (C, A, L, D, Y, L, I, C, O) {
        C[A] = C[A] || function () { (C[A].q = C[A].q || []).push(arguments) };
        const l = D.createElement(L);
        l.src = Y + '/widget/embed.js';
        D.body.appendChild(l);
      })(window, 'Calendly', 'script', document, 'https://assets.calendly.com');
    `;

    script.onload = () => {
      setIsReady(true);
      setIsLoading(false);
      trackEvent('calendly_script_loaded');
    };

    script.onerror = () => {
      setIsLoading(false);
    };

    head.appendChild(script);

    const onMessage = (e: MessageEvent) => {
      const data = (e?.data ?? {}) as { event?: string; payload?: Record<string, unknown> };
      if (data && typeof data === 'object' && 'event' in data) {
        if (data.event === 'calendly.event_scheduled') {
          trackEvent('calendly_scheduled', { source: 'inline_widget', ...data.payload });
        } else if (data.event === 'calendly.profile_page_viewed') {
          trackEvent('calendly_viewed');
        } else if (data.event === 'calendly.date_and_time_selected') {
          trackEvent('calendly_datetime_selected');
        }
      }
    };
    window.addEventListener('message', onMessage);

    return () => {
      // Cleanup
      const calendlyWidgets = document.querySelectorAll('[data-testid="calendly-widget"]');
      calendlyWidgets.forEach(widget => widget.remove());

      const scripts = document.querySelectorAll('script[src*="calendly"]');
      scripts.forEach(script => script.remove());
      window.removeEventListener('message', onMessage);
    };
  }, []);

  const handleCalendlyInit = () => {
    if (window.Calendly) {
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/paradise-law-az/500-virtual-consultation',
        parentElement: document.getElementById('calendly-widget'),
        prefill: {},
        utm: {}
      });
    }
  };

  useEffect(() => {
    if (isReady) {
      handleCalendlyInit();
    }
  }, [isReady]);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#1e3a8a] text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Schedule Your Consultation
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Take the first step towards clarity and resolution. Book your $500 virtual consultation with Attorney Paradise today.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#10b981] rounded-full flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span>15+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#10b981] rounded-full flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Arizona State Bar Member</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#10b981] rounded-full flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span>100% Confidential</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Booking Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Booking Information */}
            <div className="lg:col-span-1 space-y-8">
              {/* Consultation Details */}
              <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-[#3b82f6]">
                <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">Your Consultation Includes:</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#3b82f6] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1e3a8a]">30-Minute Private Consultation</h3>
                      <p className="text-gray-600 text-sm">One-on-one meeting tailored to your specific situation</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#f59e0b] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1e3a8a]">Personal Strategy Development</h3>
                      <p className="text-gray-600 text-sm">Custom plan based on your unique circumstances</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#10b981] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1e3a8a]">Next Steps & Timeline</h3>
                      <p className="text-gray-600 text-sm">Clear roadmap of what to expect and when</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#8b5cf6] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1e3a8a]">Follow-Up Case Review</h3>
                      <p className="text-gray-600 text-sm">Quick follow-up to answer any remaining questions</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-gradient-to-br from-[#f59e0b] to-[#d97706] rounded-xl p-6 text-white shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">$500</div>
                  <div className="text-lg opacity-90">Virtual Consultation</div>
                  <div className="bg-white/20 rounded-lg p-4 mt-4">
                    <div className="text-sm">
                      <strong>Satisfaction Guaranteed:</strong><br />
                      Not satisfied? 100% refund
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Virtual */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">Why Virtual Consultation?</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#3b82f6] rounded-full"></span>
                    <span>Convenient from your home or office</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#3b82f6] rounded-full"></span>
                    <span>Extended business hours availability</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#10b981] rounded-full"></span>
                    <span>$300 less than in-person consultations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#10b981] rounded-full"></span>
                    <span>Save time and travel costs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#10b981] rounded-full"></span>
                    <span>Private and confidential meeting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#f59e0b] rounded-full"></span>
                    <span>Same quality legal service</span>
                  </div>
                </div>
              </div>

              {/* Have Questions? */}
              <div className="bg-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#1e3a8a] mb-3">Have Questions Before Booking?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  We&apos;re here to help! Reach out if you have any questions before scheduling your consultation.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-[#3b82f6] hover:text-[#2563eb] font-semibold"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Calendly Widget */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-[#1e3a8a] text-white p-4">
                  <h2 className="text-xl font-bold">Choose Your Consultation Time</h2>
                  <p className="text-blue-100 text-sm mt-1">Select from available 30-minute slots</p>
                </div>

            <div className="relative">
              {isLoading && (
                <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center z-10">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3b82f6] mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading booking calendar...</p>
                  </div>
                </div>
              )}
              {/* Booking Header Meta */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-3 p-3 border-b">
                <div className="text-sm text-gray-600">
                  {timezone ? (
                    <span>
                      Your timezone: <span className="font-medium text-gray-800">{timezone}</span>
                    </span>
                  ) : (
                    <span>We detect your local timezone automatically</span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-[#fef3c7] text-[#92400e] font-medium">
                    Satisfaction Guaranteed: 100% refund
                  </span>
                </div>
              </div>

              <div
                id="calendly-widget"
                className="min-h-[700px]"
              ></div>

                  {!isReady && !isLoading && (
                    <div className="p-8 text-center">
                      <div className="mb-4">
                        <svg className="w-16 h-16 text-gray-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Unable to Load Calendar</h3>
                      <p className="text-gray-600 mb-4">
                        There was an issue loading the booking calendar. Please contact us directly to schedule your consultation.
                      </p>
                      <Link
                        href="/contact"
                        onClick={() => trackEvent('contact_click', { source: 'calendly_error' })}
                        className="inline-flex items-center bg-[#3b82f6] text-white px-4 py-2 rounded-md hover:bg-[#2563eb] transition-colors"
                      >
                        Contact Us to Book
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-[#1e3a8a] mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-[#1e3a8a] mb-3">What&apos;s included in the $500 consultation?</h3>
              <p className="text-gray-600">
                Your virtual consultation includes a full 30-minute discussion about your legal situation,
                personalized strategy development, timeline planning, and follow-up email support.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-[#1e3a8a] mb-3">Do I need to prepare anything?</h3>
              <p className="text-gray-600">
                Simply have your calendar ready to book a time that works best for you.
                Bring any questions you have - that&apos;s what we&apos;re here for!
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-[#1e3a8a] mb-3">What if I&apos;m not satisfied with my consultation?</h3>
              <p className="text-gray-600">
                Your satisfaction is guaranteed. If you&apos;re not completely satisfied with your consultation,
                we offer a full refund of the $500 rate.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-[#1e3a8a] mb-3">Is this confidential?</h3>
              <p className="text-gray-600">
                Yes, all communications and consultations with attorney Paradise are completely confidential
                and protected by attorney-client privilege.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Extend window interface for Calendly
declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement | null;
        prefill: Record<string, unknown>;
        utm: Record<string, unknown>;
      }) => void;
    };
  }
}
