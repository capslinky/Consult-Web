import Link from 'next/link';
import type { Metadata } from 'next';
import { canonical } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Privacy Policy | Paradise Law AZ',
  description: 'Privacy practices for paradiselawaz.com and virtual consultations.',
  robots: { index: true, follow: true },
  alternates: { canonical: canonical('/legal/privacy/') },
  openGraph: {
    title: 'Privacy Policy | Paradise Law AZ',
    description: 'Privacy practices for Paradise Law AZ.',
    type: 'article',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://azfamilylaw.wiki'}/legal/privacy/`,
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="bg-[#1e3a8a] text-white rounded-xl p-8 mb-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-blue-100 text-lg">
              How Paradise Law AZ protects your personal information and privacy.
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
          <span className="text-gray-600">Privacy Policy</span>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">Introduction</h2>
            <p className="text-gray-700 mb-4">
              At Paradise Law AZ, we are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you use our services or visit our website.
            </p>
            <p className="text-gray-700">
              By using our services or providing personal information, you agree to the collection and use of information in accordance with this policy.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">Information We Collect</h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>
            <p className="text-gray-700 mb-4">
              We may collect the following types of personal information:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Name, address, phone number, and email address</li>
              <li>Date of birth and Social Security number (as required for legal proceedings)</li>
              <li>Employment and financial information</li>
              <li>Case-specific details and documents related to your legal matter</li>
              <li>Communication history and consultation notes</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Technical Information</h3>
            <p className="text-gray-700 mb-4">
              We automatically collect certain information when you visit our website:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>IP address, browser type, and operating system</li>
              <li>Pages visited, time spent on site, and referring website</li>
              <li>Device information and screen resolution</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">How We Use Your Information</h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#3b82f6] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-semibold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Provide Legal Services</h3>
                  <p className="text-gray-700">Represent you in legal matters, communicate about your case, and provide consultation services.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#f59e0b] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-semibold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Client Communication</h3>
                  <p className="text-gray-700">Respond to questions, schedule appointments, send case updates, and provide legal advice.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#10b981] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-semibold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Case Management</h3>
                  <p className="text-gray-700">Organize and manage legal case information, court documents, and client files.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#8b5cf6] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-semibold">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Website Improvement</h3>
                  <p className="text-gray-700">Analyze website usage patterns to improve user experience and service quality.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">Information Sharing</h2>

            <p className="text-gray-700 mb-4">
              We are committed to protecting your confidentiality. Your information is shared only in the following circumstances:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#f8fafc] rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Required Disclosures</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Arizona State Bar Association</li>
                  <li>• Courts and legal authorities</li>
                  <li>• Law enforcement (when legally required)</li>
                  <li>• Court-appointed trustees or receivers</li>
                </ul>
              </div>

              <div className="bg-[#f8fafc] rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Service Providers</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Secure legal case management systems</li>
                  <li>• Electronic filing platforms</li>
                  <li>• Appointment scheduling software</li>
                  <li>• Technology security providers</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">Your Rights</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#10b981]/10 rounded-lg p-6">
                <div className="w-12 h-12 bg-[#10b981] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Right to Access</h3>
                <p className="text-gray-700 text-sm">Request a copy of personal information we hold about you.</p>
              </div>

              <div className="bg-[#3b82f6]/10 rounded-lg p-6">
                <div className="w-12 h-12 bg-[#3b82f6] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Right to Correct</h3>
                <p className="text-gray-700 text-sm">Request corrections to inaccurate or incomplete information.</p>
              </div>

              <div className="bg-[#f59e0b]/10 rounded-lg p-6">
                <div className="w-12 h-12 bg-[#f59e0b] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M10 5a3 3 0 00-3 3v3a3 3 0 006 0V8a3 3 0 00-3-3zM8 8a2 2 0 114 0v3a2 2 0 01-4 0V8z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Right to Withdraw</h3>
                <p className="text-gray-700 text-sm">Withdraw consent for communication or marketing activities.</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">Data Security</h2>
            <p className="text-gray-700 mb-4">
              We maintain appropriate technical and organizational measures to protect your personal information:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Encrypted communication and data storage</li>
              <li>Secure, password-protected computer systems</li>
              <li>Limited access to sensitive information</li>
              <li>Regular security updates and monitoring</li>
              <li>Physical security for sensitive documents</li>
              <li>Multi-factor authentication for attorney access</li>
            </ul>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">Cookies & Tracking</h2>
            <p className="text-gray-700 mb-4">
              Our website uses cookies and similar technologies to enhance your experience:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Essential Cookies</h3>
                <p className="text-gray-600 text-sm">
                  Required for basic website functionality, including secure consultations and appointment scheduling.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Analytics Cookies</h3>
                <p className="text-gray-600 text-sm">
                  Used to understand website usage patterns and improve service quality. No personal information collected.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">Children&apos;s Privacy</h2>
            <p className="text-gray-700">
              Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children under 18. If we become aware that we have collected such information, we will promptly delete it.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">International Users</h2>
            <p className="text-gray-700 mb-4">
              Our services are primarily intended for residents of Arizona. If you are accessing our services from outside Arizona, please be aware that your information may be transferred to, stored, and processed in Arizona where our servers are located.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">Changes to This Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &ldquo;Last updated&rdquo; date.
            </p>
            <p className="text-gray-700">
              Your continued use of our services after any such changes constitutes your acceptance of the updated Privacy Policy.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-[#f8fafc] rounded-lg p-6">
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#3b82f6] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 2a1 1 0 011-1h8a1 1 0 011 1v2H5V2zM2 5a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M2 7v8a2 2 0 002 2h8a2 2 0 002-2V7H2z" clipRule="evenodd" />
                  </svg>
                  <a href="mailto:privacy@paradisepassage.com" className="text-[#3b82f6] hover:text-[#2563eb]">
                    privacy@paradisepassage.com
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
              <strong>Attorney-Client Privilege:</strong> All communications with Paradise Law AZ are protected by attorney-client privilege and attorney work product doctrine.
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="mt-8 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/legal/terms" className="text-[#3b82f6] hover:text-[#2563eb] font-medium">
              Terms of Service
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
