import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: 'Uncontested Divorce in Arizona | Paradise Law AZ Virtual Consultations',
  description: 'Expert guidance for uncontested divorce in Arizona. $500 virtual consultation. Simple, fast, and affordable when both parties agree.',
};

export default function UncontestedDivorcePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1e3a8a] to-[#2563eb] py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <div className="inline-block bg-[#f59e0b]/10 text-[#f59e0b] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Divorce & Separation
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Uncontested Divorce in Arizona
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              When you and your spouse agree on the terms, an uncontested divorce can be completed quickly and affordably. Get expert guidance to ensure everything is done correctly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="w-full sm:w-auto">
                  Book Your $500 Consultation
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white text-[#1e3a8a] hover:bg-gray-100">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#1e3a8a] mb-2">60-90 Days</div>
              <p className="text-gray-600">Typical Timeline</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#1e3a8a] mb-2">$500-1,500</div>
              <p className="text-gray-600">Court Costs</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#1e3a8a] mb-2">Both Agree</div>
              <p className="text-gray-600">Key Requirement</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#1e3a8a] mb-2">Less Stress</div>
              <p className="text-gray-600">Than Contested</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Uncontested Divorce */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1e3a8a] mb-6">
                What Is an Uncontested Divorce?
              </h2>
              <p className="text-gray-700 mb-6">
                An uncontested divorce occurs when both spouses agree on all major issues including property division, debt allocation, child custody, child support, and spousal maintenance. This collaborative approach can save significant time, money, and emotional stress.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#f59e0b] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[#1e3a8a]">Mutual Agreement</strong>
                    <p className="text-gray-600 text-sm mt-1">Both parties agree on all terms without court intervention</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#f59e0b] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[#1e3a8a]">Faster Process</strong>
                    <p className="text-gray-600 text-sm mt-1">Completed in 60-90 days vs. 6-12+ months for contested</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#f59e0b] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[#1e3a8a]">Lower Cost</strong>
                    <p className="text-gray-600 text-sm mt-1">Significantly less expensive than contested divorce</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#3b82f6]/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-[#1e3a8a] mb-6">Benefits of Uncontested Divorce</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#3b82f6] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  <span className="text-gray-700">Save thousands in legal fees</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#3b82f6] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Complete process in 2-3 months</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#3b82f6] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span className="text-gray-700">Minimize emotional trauma</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#3b82f6] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="text-gray-700">Protect children from conflict</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#3b82f6] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Maintain privacy and dignity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">
              Requirements for Uncontested Divorce
            </h2>
            <p className="text-xl text-gray-600">
              Both spouses must agree on all major issues for an uncontested divorce
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-[#1e3a8a] mb-6">Agreement Required On:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#f59e0b] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <div>
                    <strong className="text-[#1e3a8a]">Property Division</strong>
                    <p className="text-gray-600 text-sm mt-1">How to divide marital assets and debts</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#f59e0b] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <div>
                    <strong className="text-[#1e3a8a]">Child Custody & Parenting Time</strong>
                    <p className="text-gray-600 text-sm mt-1">Legal decision-making and parenting schedules</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#f59e0b] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  <div>
                    <strong className="text-[#1e3a8a]">Child Support</strong>
                    <p className="text-gray-600 text-sm mt-1">Financial support amount and payment terms</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#f59e0b] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <div>
                    <strong className="text-[#1e3a8a]">Spousal Maintenance</strong>
                    <p className="text-gray-600 text-sm mt-1">Alimony amount, duration, and terms</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-[#1e3a8a] mb-6">Basic Eligibility:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#3b82f6] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="text-[#1e3a8a]">Arizona Residency</strong>
                    <p className="text-gray-600 text-sm mt-1">One spouse must live in Arizona for 90+ days</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#3b82f6] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="text-[#1e3a8a]">Irretrievable Breakdown</strong>
                    <p className="text-gray-600 text-sm mt-1">Marriage cannot be saved</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#3b82f6] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="text-[#1e3a8a]">No Domestic Violence</strong>
                    <p className="text-gray-600 text-sm mt-1">No history of abuse or coercion</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#3b82f6] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="text-[#1e3a8a]">Full Disclosure</strong>
                    <p className="text-gray-600 text-sm mt-1">Complete financial transparency required</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">
              The Uncontested Divorce Process
            </h2>
            <p className="text-xl text-gray-600">
              Step-by-step guide to completing your uncontested divorce in Arizona
            </p>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-start gap-6 p-6 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#f59e0b] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-[#1e3a8a] mb-3">Reach Agreement</h3>
                <p className="text-gray-700">
                  Work with your spouse to agree on all terms including property division, child custody, support, and spousal maintenance. Consider mediation if needed to reach consensus.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row items-start gap-6 p-6 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#f59e0b] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-[#1e3a8a] mb-3">Prepare Documents</h3>
                <p className="text-gray-700">
                  File the Petition for Dissolution of Marriage and other required forms with the court. Serve your spouse or have them sign an Acceptance of Service.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-start gap-6 p-6 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#f59e0b] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-[#1e3a8a] mb-3">Wait 60 Days</h3>
                <p className="text-gray-700">
                  Arizona requires a 60-day waiting period from the date of service before the divorce can be finalized. Use this time to complete any remaining paperwork.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row items-start gap-6 p-6 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#f59e0b] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  4
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-[#1e3a8a] mb-3">Finalize Divorce</h3>
                <p className="text-gray-700">
                  Submit the Decree of Dissolution and any other final documents. If everything is in order, the judge will sign the decree and your divorce is final.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about uncontested divorce in Arizona
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#1e3a8a] mb-3">
                How long does an uncontested divorce take?
              </h3>
              <p className="text-gray-600">
                An uncontested divorce typically takes 60-90 days to complete. The minimum waiting period is 60 days from the date of service, but additional time may be needed for paperwork processing and court scheduling.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#1e3a8a] mb-3">
                Can we use the same attorney?
              </h3>
              <p className="text-gray-600">
                No, one attorney cannot represent both spouses due to conflicts of interest. However, one spouse can hire an attorney while the other represents themselves, or both can hire separate attorneys to review the agreement.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#1e3a8a] mb-3">
                What if we disagree on something later?
              </h3>
              <p className="text-gray-600">
                If you disagree on any issue before filing, it becomes a contested divorce. If you reach agreement, you can proceed with an uncontested divorce. Minor disagreements can often be resolved through mediation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#1e3a8a] mb-3">
                Do we need to go to court?
              </h3>
              <p className="text-gray-600">
                In most uncontested cases, you won&apos;t need to appear in court. The judge will review your paperwork and sign the decree if everything is in order. However, some courts may require a brief hearing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#1e3a8a] mb-3">
                How much will it cost?
              </h3>
              <p className="text-gray-600">
                Court filing fees range from $500-1,500 depending on your county and whether you have children. Attorney fees vary but are significantly lower for uncontested cases since less work is required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When Uncontested May Not Work */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
            <div className="text-center mb-8">
              <svg className="w-12 h-12 text-red-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L5.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <h2 className="text-3xl font-bold text-red-900 mb-4">
                When Uncontested Divorce May Not Be Appropriate
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-red-900 mb-4">Complex Situations:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-red-800">Significant assets or complex property division</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-red-800">Business ownership or professional practices</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-red-800">Retirement accounts or pension plans</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-red-800">Hidden assets or financial deception</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-red-900 mb-4">Safety Concerns:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-red-800">History of domestic violence</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-red-800">Power imbalances or coercion</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-red-800">Substance abuse issues</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-red-800">Child safety concerns</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-red-800 mb-4">
                If any of these situations apply, you may need a contested divorce or additional legal protection.
              </p>
              <Link href="/practice-areas/divorce/contested">
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                  Learn About Contested Divorce
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1e3a8a]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Uncontested Divorce?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get expert guidance to ensure your uncontested divorce is completed correctly and efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" className="w-full sm:w-auto">
                Book Your $500 Consultation
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white text-[#1e3a8a] hover:bg-gray-100">
                Ask a Question
              </Button>
            </Link>
          </div>
          <p className="text-white/80 mt-8">
            Questions? Call <a href="tel:602-555-0123" className="text-[#f59e0b] hover:text-[#f59e0b]/80 underline">602-555-0123</a> or{' '}
            <Link href="/contact" className="text-[#f59e0b] hover:text-[#f59e0b]/80 underline">
              contact us online
            </Link>
          </p>
        </div>
      </section>

      {/* Related Practice Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">
              Related Practice Areas
            </h2>
            <p className="text-xl text-gray-600">
              Explore other family law services we offer
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/practice-areas/divorce/contested" className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-[#1e3a8a] mb-3">Contested Divorce</h3>
              <p className="text-gray-600 mb-4">
                When spouses cannot agree on terms and need court intervention.
              </p>
              <span className="text-[#f59e0b] font-semibold">Learn more →</span>
            </Link>

            <Link href="/practice-areas/custody/child-custody" className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-[#1e3a8a] mb-3">Child Custody</h3>
              <p className="text-gray-600 mb-4">
                Legal decision-making and parenting time arrangements.
              </p>
              <span className="text-[#f59e0b] font-semibold">Learn more →</span>
            </Link>

            <Link href="/practice-areas/financial/property-division" className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-[#1e3a8a] mb-3">Property Division</h3>
              <p className="text-gray-600 mb-4">
                Fair distribution of marital assets and debts.
              </p>
              <span className="text-[#f59e0b] font-semibold">Learn more →</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
