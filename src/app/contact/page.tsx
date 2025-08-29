import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Select } from '@/components/ui/Select';

export const metadata = {
  title: 'Contact Us | Paradise Law AZ Family Law Virtual Consultations',
  description: 'Contact Paradise Law AZ for virtual family law consultations. Multiple ways to reach us including phone, email, and online contact form.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-navy to-navy-light py-20">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Ready to discuss your family law matter? We&apos;re here to help with multiple convenient ways to connect.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-navy mb-3">Call Us</h3>
              <p className="text-gray-600 mb-4">
                Speak directly with our team for immediate assistance
              </p>
              <a href="tel:602-555-0123" className="text-2xl font-bold text-gold hover:text-gold-light">
                (602) 555-0123
              </a>
              <p className="text-sm text-gray-500 mt-2">
                Monday - Friday: 8am - 6pm<br />
                Saturday: 9am - 2pm
              </p>
            </div>

            {/* Email */}
            <div className="text-center">
              <div className="w-16 h-16 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-navy mb-3">Email Us</h3>
              <p className="text-gray-600 mb-4">
                Send us detailed information about your case
              </p>
              <a href="mailto:contact@paradiselawaz.com" className="text-xl font-bold text-gold hover:text-gold-light">
                contact@paradiselawaz.com
              </a>
              <p className="text-sm text-gray-500 mt-2">
                We respond within 24 hours<br />
                during business days
              </p>
            </div>

            {/* Book Online */}
            <div className="text-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-navy mb-3">Book Online</h3>
              <p className="text-gray-600 mb-4">
                Schedule your consultation directly from our calendar
              </p>
              <Link href="/book">
                <Button className="mb-2">
                  Book Consultation
                </Button>
              </Link>
              <p className="text-sm text-gray-500 mt-2">
                Available evenings &<br />
                weekends
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we&apos;ll get back to you within 24 hours
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
            <form className="space-y-6">
              {/* Name Fields */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-navy mb-2">
                    First Name *
                  </label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-navy mb-2">
                    Last Name *
                  </label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    placeholder="Your last name"
                  />
                </div>
              </div>

              {/* Contact Fields */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(602) 555-0123"
                  />
                </div>
              </div>

              {/* Case Type */}
              <div>
                <label htmlFor="caseType" className="block text-sm font-semibold text-navy mb-2">
                  Type of Legal Matter *
                </label>
                <Select
                  id="caseType"
                  name="caseType"
                  required
                  options={[
                    { value: '', label: 'Please select...' },
                    { value: 'divorce', label: 'Divorce' },
                    { value: 'custody', label: 'Child Custody' },
                    { value: 'support', label: 'Child Support' },
                    { value: 'spousal-support', label: 'Spousal Support' },
                    { value: 'property', label: 'Property Division' },
                    { value: 'paternity', label: 'Paternity' },
                    { value: 'protection-order', label: 'Protection Orders' },
                    { value: 'adoption', label: 'Adoption' },
                    { value: 'modification', label: 'Order Modification' },
                    { value: 'other', label: 'Other Family Law Matter' }
                  ]}
                />
              </div>

              {/* Urgency */}
              <div>
                <label htmlFor="urgency" className="block text-sm font-semibold text-navy mb-2">
                  How urgent is your matter?
                </label>
                <Select
                  id="urgency"
                  name="urgency"
                  options={[
                    { value: '', label: 'Please select...' },
                    { value: 'immediate', label: 'Immediate - Court date within 2 weeks' },
                    { value: 'urgent', label: 'Urgent - Need help within 1 month' },
                    { value: 'soon', label: 'Soon - Within 2-3 months' },
                    { value: 'planning', label: 'Planning ahead - No immediate deadline' }
                  ]}
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
                  Tell us about your situation *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Please provide details about your family law matter. The more information you share, the better we can help you during our consultation."
                />
                <p className="text-sm text-gray-500 mt-2">
                  * This information is confidential and protected by attorney-client privilege
                </p>
              </div>

              {/* Preferred Contact */}
              <div>
                <label className="block text-sm font-semibold text-navy mb-3">
                  Preferred Contact Method
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="phone"
                      className="mr-3 text-gold focus:ring-gold"
                    />
                    <span className="text-gray-700">Phone Call</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="email"
                      defaultChecked
                      className="mr-3 text-gold focus:ring-gold"
                    />
                    <span className="text-gray-700">Email</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="text"
                      className="mr-3 text-gold focus:ring-gold"
                    />
                    <span className="text-gray-700">Text Message</span>
                  </label>
                </div>
              </div>

              {/* Best Time */}
              <div>
                <label htmlFor="bestTime" className="block text-sm font-semibold text-navy mb-2">
                  Best time to contact you
                </label>
                <Select
                  id="bestTime"
                  name="bestTime"
                  options={[
                    { value: '', label: 'Please select...' },
                    { value: 'morning', label: 'Morning (8am - 12pm)' },
                    { value: 'afternoon', label: 'Afternoon (12pm - 5pm)' },
                    { value: 'evening', label: 'Evening (5pm - 8pm)' },
                    { value: 'anytime', label: 'Anytime during business hours' }
                  ]}
                />
              </div>

              {/* Newsletter */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  className="mt-1 mr-3 text-gold focus:ring-gold"
                />
                <label htmlFor="newsletter" className="text-sm text-gray-700">
                  I&apos;d like to receive helpful tips and updates about Arizona family law (you can unsubscribe anytime)
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full md:w-auto"
                >
                  Send Message
                </Button>
                <p className="text-sm text-gray-600 mt-3">
                  By submitting this form, you agree to our{' '}
                  <Link href="/legal/privacy-policy" className="text-gold hover:text-gold-light underline">
                    Privacy Policy
                  </Link>
                  {' '}and consent to be contacted about your inquiry.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">
            Office Information
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-navy mb-6">Paradise Law AZ</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <strong className="text-navy block">Mailing Address</strong>
                    <p className="text-gray-600">
                      123 N Central Avenue<br />
                      Suite 456<br />
                      Phoenix, AZ 85004
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <strong className="text-navy block">Phone</strong>
                    <a href="tel:602-555-0123" className="text-gold hover:text-gold-light">
                      (602) 555-0123
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <strong className="text-navy block">Email</strong>
                    <a href="mailto:contact@paradiselawaz.com" className="text-gold hover:text-gold-light">
                      contact@paradiselawaz.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="text-navy block">Office Hours</strong>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00am - 6:00pm<br />
                      Saturday: 9:00am - 2:00pm<br />
                      Sunday: By appointment only
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-navy mb-6">Virtual Consultations</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <strong className="text-navy block">Video Conferencing</strong>
                    <p className="text-gray-600">
                      Secure, browser-based video calls<br />
                      No software downloads required
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <strong className="text-navy block">Available Times</strong>
                    <p className="text-gray-600">
                      Evenings and weekends available<br />
                      Early morning appointments by request
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div>
                    <strong className="text-navy block">Privacy & Security</strong>
                    <p className="text-gray-600">
                      HIPAA-compliant platform<br />
                      End-to-end encryption
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  </svg>
                  <div>
                    <strong className="text-navy block">Service Areas</strong>
                    <p className="text-gray-600">
                      Serving all of Arizona<br />
                      Licensed in all Arizona courts
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="py-12 bg-red-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L5.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <h3 className="text-xl font-semibold text-red-900">Emergency Legal Situations</h3>
          </div>
          <p className="text-red-800 mb-4">
            If you are in immediate physical danger or need emergency protection, please contact:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:911" className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700">
              Call 911 - Emergency Services
            </a>
            <a href="tel:1-800-799-7233" className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700">
              1-800-799-SAFE - Domestic Violence Hotline
            </a>
          </div>
          <p className="text-sm text-red-700 mt-4">
            For non-emergency urgent legal matters, call our office at (602) 555-0123
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Don&apos;t navigate family law alone. Get expert guidance for your unique situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" className="w-full sm:w-auto">
                Book Your Consultation
              </Button>
            </Link>
            <a href="tel:602-555-0123">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white text-navy hover:bg-gray-100">
                Call Now: (602) 555-0123
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
