import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Debt Division & Financial Planning in Arizona Divorce | Paradise Law AZ',
  description: 'Expert guidance on dividing marital debts and financial planning during divorce in Arizona. Protect your credit and financial future. $500 virtual consultation.',
  keywords: 'debt division Arizona, marital debt, financial planning divorce, Arizona community property, credit protection, virtual consultation',
  openGraph: {
    title: 'Debt Division & Financial Planning in Arizona Divorce | Paradise Law AZ',
    description: 'Expert guidance on dividing marital debts and protecting your financial future during Arizona divorce proceedings. Virtual consultation available.',
    type: 'website',
  },
};

export default function DebtDivisionPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-light-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Debt Division & Financial Planning in Arizona
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Strategic debt management and financial planning to protect your credit and future
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book"
                className="inline-flex items-center px-8 py-4 bg-gold text-navy font-semibold rounded-lg hover:bg-yellow-400 transition-colors duration-200"
              >
                Book Virtual Consultation - $500
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-navy transition-colors duration-200"
              >
                Free Debt Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Debt Division Quick Facts</h2>
            <p className="text-xl text-gray-600">Essential information about debt management in Arizona divorce</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Community Debt</h3>
              <p className="text-gray-600">Debts acquired during marriage are generally shared equally</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Credit Protection</h3>
              <p className="text-gray-600">Strategies to protect your credit score during and after divorce</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Financial Planning</h3>
              <p className="text-gray-600">Strategic planning for your post-divorce financial future</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Debt Division in Arizona</h2>
            <p className="text-gray-700 mb-6">
              In Arizona&apos;s community property system, debts acquired during marriage are generally considered community 
              debts and must be divided equitably between spouses. Understanding the distinction between community and 
              separate debts is crucial for protecting your financial future and credit rating.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Community vs. Separate Debt Classification</h3>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold text-navy mb-3">Community Debts</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Debts incurred during marriage</li>
                    <li>• Joint credit cards and loans</li>
                    <li>• Mortgage on marital home</li>
                    <li>• Business debts for community business</li>
                    <li>• Tax obligations during marriage</li>
                    <li>• Medical bills during marriage</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-navy mb-3">Separate Debts</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Debts from before marriage</li>
                    <li>• Individual credit accounts not used for marriage</li>
                    <li>• Student loans (complex rules apply)</li>
                    <li>• Debts from separate business ventures</li>
                    <li>• Post-separation individual expenses</li>
                    <li>• Debts related to separate property</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Arizona Debt Division Principles</h3>
            <p className="text-gray-700 mb-4">
              Arizona courts follow these key principles when dividing marital debts:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Community debts are divided equitably (usually equally) between spouses</li>
              <li>Each spouse retains responsibility for their separate debts</li>
              <li>The spouse keeping an asset often assumes the related debt</li>
              <li>Courts consider each spouse&apos;s ability to pay when assigning debts</li>
              <li>Future earning capacity and property distribution affect debt allocation</li>
              <li>Joint accounts may require special attention for credit protection</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Common Types of Marital Debt</h3>
            
            <h4 className="text-xl font-semibold text-navy mb-3">Credit Card Debt</h4>
            <p className="text-gray-700 mb-4">
              Credit card debt incurred during marriage is typically community debt, even if only one spouse&apos;s name 
              is on the account, if the debt was used for community purposes like household expenses, family needs, 
              or joint activities.
            </p>

            <h4 className="text-xl font-semibold text-navy mb-3">Mortgage & Home Equity Debt</h4>
            <p className="text-gray-700 mb-4">
              The mortgage and any home equity loans on the marital residence are community debts. The spouse who 
              keeps the home typically assumes the mortgage obligation, though both remain liable to the lender 
              until refinanced.
            </p>

            <h4 className="text-xl font-semibold text-navy mb-3">Auto Loans & Personal Loans</h4>
            <p className="text-gray-700 mb-4">
              Vehicle loans and personal loans obtained during marriage are community debts. The spouse keeping 
              the vehicle usually assumes the related loan, but cross-indemnification may be necessary.
            </p>

            <div className="bg-yellow-50 border border-gold rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-navy mb-3">⚠️ Student Loan Considerations</h3>
              <p className="text-gray-700 mb-3">
                Student loans have complex classification rules in Arizona:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Loans for education before marriage are typically separate debt</li>
                <li>Loans during marriage may be community debt if both spouses benefited</li>
                <li>Community funds used for loan payments may create reimbursement rights</li>
                <li>Post-graduation income increases may affect property division</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Credit Protection Strategies</h3>
            <p className="text-gray-700 mb-4">
              Protecting your credit during divorce requires proactive steps:
            </p>
            
            <div className="bg-light-blue text-white p-4 rounded-lg mb-6">
              <h4 className="text-lg font-semibold mb-3">Immediate Credit Protection Steps</h4>
              <ul className="space-y-2 text-sm">
                <li>• Close joint credit accounts to prevent new debt</li>
                <li>• Remove authorized user status from spouse&apos;s accounts</li>
                <li>• Notify creditors of pending divorce proceedings</li>
                <li>• Establish individual credit accounts in your name only</li>
                <li>• Monitor credit reports regularly for unauthorized activity</li>
                <li>• Consider credit freezes if needed for protection</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Debt Division Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Debt Division Process in Arizona</h2>
            <p className="text-xl text-gray-600">Step-by-step guide to managing debt division</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: "Complete Debt Inventory",
                  description: "Create comprehensive list of all debts including balances, payment terms, and creditor information. Gather statements for all accounts, loans, and obligations incurred before and during marriage."
                },
                {
                  step: 2,
                  title: "Classify Community vs. Separate",
                  description: "Determine which debts are community (marital) and which are separate based on when incurred and how used. This classification affects who becomes responsible for each debt."
                },
                {
                  step: 3,
                  title: "Assess Financial Capacity",
                  description: "Evaluate each spouse's ability to handle debt payments based on income, assets received, and ongoing expenses. Consider future earning potential and financial stability."
                },
                {
                  step: 4,
                  title: "Develop Division Strategy",
                  description: "Create equitable debt division plan considering asset allocation, income levels, and practical payment ability. Match debt responsibility with asset retention when possible."
                },
                {
                  step: 5,
                  title: "Implement Credit Protection",
                  description: "Close joint accounts, establish individual credit, and implement protective measures. Notify creditors of divorce and new payment arrangements as needed."
                },
                {
                  step: 6,
                  title: "Execute Legal Agreements",
                  description: "Formalize debt division through divorce decree with indemnification clauses. Include provisions for refinancing requirements and default protections."
                }
              ].map((item) => (
                <div key={item.step} className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Financial Planning */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Post-Divorce Financial Planning</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-light-blue text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Immediate Financial Steps</h3>
              <ul className="space-y-2 text-sm">
                <li>• Create new individual budget based on changed circumstances</li>
                <li>• Establish emergency fund for unexpected expenses</li>
                <li>• Update insurance coverage and beneficiaries</li>
                <li>• Revise estate planning documents and wills</li>
                <li>• Set up new banking accounts in your name only</li>
                <li>• Review and adjust investment strategies</li>
              </ul>
            </div>
            
            <div className="bg-navy text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Long-Term Financial Goals</h3>
              <ul className="space-y-2 text-sm">
                <li>• Rebuild credit score if impacted by divorce</li>
                <li>• Plan for retirement with reduced household income</li>
                <li>• Consider career development or income enhancement</li>
                <li>• Evaluate housing needs and affordability</li>
                <li>• Plan for children&apos;s future expenses and education</li>
                <li>• Build wealth independence strategies</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gold text-navy rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">💡 Financial Planning Tips</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <ul className="space-y-1">
                <li>• Work with financial planner experienced in divorce</li>
                <li>• Consider tax implications of debt division agreements</li>
                <li>• Plan for potential support payment modifications</li>
                <li>• Understand COBRA and health insurance transitions</li>
              </ul>
              <ul className="space-y-1">
                <li>• Review retirement account division impact</li>
                <li>• Consider debt consolidation options if beneficial</li>
                <li>• Plan for home refinancing or sale timing</li>
                <li>• Build professional support network for guidance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Debt Division FAQ</h2>
          
          <div className="space-y-6">
            {[
              {
                question: "Am I responsible for my spouse's credit card debt?",
                answer: "If the debt was incurred during marriage and used for community purposes (household expenses, family needs), it's likely community debt that both spouses share responsibility for, even if only one name is on the account. Pre-marital debt typically remains separate."
              },
              {
                question: "What happens to joint credit accounts during divorce?",
                answer: "Joint accounts should be closed to prevent new debt accumulation. Existing balances become part of the debt division process. Both parties remain liable to creditors until accounts are paid off or refinanced, regardless of divorce decree terms."
              },
              {
                question: "Can I be held responsible for debts assigned to my ex-spouse?",
                answer: "Yes, if your name is on the original debt, creditors can still pursue you for payment even if the divorce decree assigns the debt to your ex-spouse. You would then need to seek reimbursement from your ex-spouse through contempt proceedings."
              },
              {
                question: "How do we handle the mortgage on our marital home?",
                answer: "Options include selling the home and splitting proceeds/debt, one spouse buying out the other and refinancing, or temporary arrangements. The spouse keeping the home typically assumes the mortgage, but both remain liable until refinanced."
              },
              {
                question: "Should I pay off debt before divorce or divide it?",
                answer: "This depends on your specific situation. Paying off high-interest debt might be beneficial, but depleting assets to pay debt could affect property division. Consult with your attorney about the best strategy for your circumstances."
              },
              {
                question: "What if my spouse hid debts or opened secret accounts?",
                answer: "Arizona courts take concealment of debts seriously. Hidden debts may be assigned entirely to the spouse who concealed them. Discovery procedures can uncover hidden debts, and penalties may include attorney fees and other sanctions."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-navy mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-navy to-light-blue text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Protect Your Financial Future</h2>
          <p className="text-xl mb-8 opacity-90">
            Strategic debt division and financial planning are essential for your post-divorce financial security. 
            Our experienced attorneys will help you navigate debt division while protecting your credit and future interests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-flex items-center px-8 py-4 bg-gold text-navy font-semibold rounded-lg hover:bg-yellow-400 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Virtual Consultation - $500
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-navy transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Free Debt Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* Related Practice Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Related Practice Areas</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/practice-areas/financial/property-division" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2H3v2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2 group-hover:text-light-blue">Property Division</h3>
                <p className="text-gray-600">Dividing marital assets and protecting your financial interests in divorce.</p>
              </div>
            </Link>
            
            <Link href="/practice-areas/financial/child-support-spousal-support" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2 group-hover:text-light-blue">Child & Spousal Support</h3>
                <p className="text-gray-600">Calculating and enforcing support obligations in Arizona.</p>
              </div>
            </Link>
            
            <Link href="/practice-areas/financial/business-valuation" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2 group-hover:text-light-blue">Business Valuation</h3>
                <p className="text-gray-600">Valuing and dividing business interests and professional practices.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
