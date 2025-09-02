import Link from 'next/link';
import type { Metadata } from 'next';
import { canonical } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Terms of Service | Paradise Law AZ',
  description: 'Website and service terms for Paradise Law AZ.',
  alternates: { canonical: canonical('/legal/terms/') },
  openGraph: {
    title: 'Terms of Service | Paradise Law AZ',
    description: 'Website and service terms for Paradise Law AZ.',
    type: 'article',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://azfamilylaw.wiki'}/legal/terms/`,
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="bg-[#1e3a8a] text-white rounded-xl p-8 mb-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-blue-100 text-lg">
              Legal terms and conditions for using Paradise Law AZ services.
            </p>
            <div className="text-sm text-blue-200 mt-4">
              <strong>Last updated:</strong> January 15, 2025
            </div>
          </div>
        </div>

        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link href="/" className="text-[#3b82f6] hover:text-[#2563eb]">Home</Link>
          <span className="mx-2 text-gray-400">→</span>
          <Link href="/legal/" className="text-[#3b82f6] hover:text-[#2563eb]">Legal</Link>
          <span className="mx-2 text-gray-400">→</span>
          <span className="text-gray-600">Terms of Service</span>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">Agreement to Terms</h2>
            <p className="text-gray-700 mb-4">
              Welcome to Paradise Law AZ. These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you and Paradise Law AZ (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) regarding your use of our website and services.
            </p>
            <p className="text-gray-700">
              By accessing or using our website, booking consultations, or purchasing services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">Legal Services Disclaimer</h2>

            <div className="bg-[#f8fafc] rounded-lg p-6 border-l-4 border-[#f59e0b]">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#f59e0b] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Important Legal Notice</h3>
                  <p className="text-gray-700 mb-3">
                    The information provided on this website is for general informational purposes only and does not constitute legal advice. All legal advice provided during consultations is protected by attorney-client privilege.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Prior results do not guarantee similar outcomes. Each case is unique and depends on its individual facts and circumstances.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">User Eligibility</h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Requirements</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>You must be at least 18 years old to use our services</li>
              <li>You must have the legal capacity to enter into binding agreements</li>
              <li>You must provide accurate and complete information when booking consultations</li>
              <li>You must be seeking legal services in good faith</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Prohibited Uses</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Using our services for unlawful purposes</li>
              <li>Providing false or misleading information</li>
              <li>Attempting to circumvent security measures</li>
              <li>Interfering with service availability</li>
            </ul>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">Website Services</h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#3b82f6] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-semibold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Consultation Booking</h3>
                  <p className="text-gray-700">Virtual consultations are conducted via secure video conferencing platforms. You are responsible for ensuring you have the necessary equipment and internet connection.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#f59e0b] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-semibold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Resource Access</h3>
                  <p className="text-gray-700">Free legal resources are provided for informational purposes only. Downloads and use of these resources are subject to separate terms of use.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#10b981] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-semibold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Communication Support</h3>
                  <p className="text-gray-700">Email and telephone support is available during business hours for consultation scheduling and general inquiries.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">Payment Terms</h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Consultation Fees</h3>
            <p className="text-gray-700 mb-4">
              Virtual consultations are priced at $500. Payment is due at the time of booking and is non-refundable under normal circumstances (see refund policy below).
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Payment Methods</h3>
            <p className="text-gray-700 mb-4">
              We accept major credit cards, debit cards, and other secure payment methods as available through our payment processor. All payments are processed securely and in compliance with PCI DSS standards.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Refund Policy</h3>
            <p className="text-gray-700 mb-4">
              Consultation fees are non-refundable unless we are unable to provide the scheduled services due to reasons within our control. You may reschedule your consultation up to 24 hours in advance at no charge.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">Attorney-Client Relationship</h2>

            <p className="text-gray-700 mb-4">
              A formal attorney-client relationship is established when you engage Paradise Law AZ for legal representation. This involves:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#f8fafc] rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">During Consultation</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Confidentiality protection</li>
                  <li>• Legal advice specific to your situation</li>
                  <li>• Case assessment and recommendations</li>
                  <li>• Next steps guidance</li>
                </ul>
              </div>

              <div className="bg-[#f8fafc] rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Continued Relationship</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Ongoing legal representation (if retained)</li>
                  <li>• Court filing and advocacy</li>
                  <li>• Negotiation and settlement discussions</li>
                  <li>• Case management and updates</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">Intellectual Property</h2>

            <p className="text-gray-700 mb-4">
              The Paradise Law AZ website and its content are protected by copyright and other intellectual property laws:
            </p>

            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Website content, design, and functionality are owned by Paradise Law AZ</li>
              <li>Legal guides and articles may be used for personal reference only</li>
              <li>Distribution or commercial use without permission is prohibited</li>
              <li>Firm trademarks and branding are protected</li>
            </ul>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">Right of Publicity</h2>

            <p className="text-gray-700 mb-4">
              Client testimonials, success stories, and other forms of endorsement require written permission for use. Paradise Law AZ reserves the right to use de-identified case information for educational and promotional purposes.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">Website Availability</h2>

            <p className="text-gray-700 mb-4">
              While we strive to maintain uninterrupted service, we do not guarantee that the website will be available at all times or free from errors. We may temporarily suspend services for maintenance or other reasons as needed.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">Dispute Resolution</h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Arbitration Agreement</h3>
            <p className="text-gray-700 mb-4">
              Any disputes arising from these Terms or our services shall be resolved through binding arbitration in accordance with Arizona law. The arbitration shall be conducted in Maricopa County, Arizona.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Governing Law</h3>
            <p className="text-gray-700 mb-4">
              These Terms are governed by and construed in accordance with the laws of the State of Arizona, without regard to conflict of law principles.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">Limitation of Liability</h2>

            <p className="text-gray-700 mb-4">
              To the maximum extent permitted by law, Paradise Law AZ shall not be liable for:
            </p>

            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Consequential, indirect, incidental, or special damages</li>
              <li>Loss of profits, revenue, or data</li>
              <li>Claims arising from attorney malpractice (subject to legal malpractice statutes)</li>
              <li>Third-party claims or actions</li>
            </ul>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">Changes to Terms</h2>

            <p className="text-gray-700 mb-4">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services constitutes acceptance of the modified Terms.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">Contact Information</h2>

            <p className="text-gray-700 mb-4">
              For questions about these Terms of Service, please contact us:
            </p>

            <div className="bg-[#f8fafc] rounded-lg p-6">
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#3b82f6] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a href="mailto:legal@paradisepassage.com" className="text-[#3b82f6] hover:text-[#2563eb]">
                    legal@paradisepassage.com
                  </a>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#3b82f6] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <a href="tel:4805550123" className="text-[#3b82f6] hover:text-[#2563eb]">
                    (480) 555-0123
                  </a>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-[#3b82f6] mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div className="text-gray-600">
                    Paradise Law AZ<br />
                    Phoenix, Arizona
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Disclaimer */}
        <div className="mt-8 bg-[#f8fafc] rounded-lg p-6 text-center">
          <div className="text-sm text-gray-500">
            <p>
              <strong>Attorney Advertising:</strong> This advertisement is designed for general information only and does not constitute legal advice. Each case is unique and results depend on individual circumstances.
            </p>
            <p className="mt-2">
              Licensed in Arizona. Bar number: #12345 (Arizona State Bar Association).
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="mt-8 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/legal/privacy" className="text-[#3b82f6] hover:text-[#2563eb] font-medium">
              Privacy Policy
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/legal/disclaimer" className="text-[#3b82f6] hover:text-[#2563eb] font-medium">
              Legal Disclaimer
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/contact" className="text-[#3b82f6] hover:text-[#2563eb] font-medium">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
