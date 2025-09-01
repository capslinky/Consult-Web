import { Button } from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Family Law Services - Paradise Law AZ Virtual Consultations',
  description: 'Comprehensive family law services including divorce, child custody, property division, and more. Virtual consultations available throughout Arizona for $500.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1e3a8a] to-[#3b82f6] text-white py-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">Our Services</h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto leading-relaxed text-left">
            Expert legal guidance for all aspects of family law. Get personalized advice 
            tailored to your unique situation through our convenient virtual consultations.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4 text-center">
              Comprehensive Family Law Solutions
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto leading-relaxed text-left">
              Our virtual consultation service covers all areas of Arizona family law. 
              During your session, we&apos;ll discuss your specific situation, explain your 
              legal options, and provide a clear path forward.
            </p>
          </div>

          {/* Main Service Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-[#f59e0b] text-3xl mb-4">⚖️</div>
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">Divorce</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li>• Uncontested divorce</li>
                <li>• Contested divorce</li>
                <li>• Legal separation</li>
                <li>• High-asset divorce</li>
                <li>• Military divorce</li>
              </ul>
              <Button variant="outline" size="sm" className="w-full" aria-label="Explore divorce services">
                Explore Divorce Services
              </Button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-[#f59e0b] text-3xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">Child Custody</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li>• Custody arrangements</li>
                <li>• Parenting plans</li>
                <li>• Custody modifications</li>
                <li>• Relocation cases</li>
                <li>• Grandparents&apos; rights</li>
              </ul>
              <Button variant="outline" size="sm" className="w-full" aria-label="Explore child custody services">
                Explore Child Custody Services
              </Button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-[#f59e0b] text-3xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">Financial Matters</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li>• Child support</li>
                <li>• Spousal maintenance</li>
                <li>• Property division</li>
                <li>• Prenuptial agreements</li>
                <li>• Postnuptial agreements</li>
              </ul>
              <Button variant="outline" size="sm" className="w-full" aria-label="Explore financial matters">
                Explore Financial Matters
              </Button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-[#f59e0b] text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">Protection Orders</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li>• Domestic violence cases</li>
                <li>• Orders of protection</li>
                <li>• Emergency orders</li>
                <li>• Safety planning</li>
                <li>• Victim advocacy</li>
              </ul>
              <Button variant="outline" size="sm" className="w-full" aria-label="Explore protection orders">
                Explore Protection Orders
              </Button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-[#f59e0b] text-3xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">Alternative Resolution</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li>• Mediation services</li>
                <li>• Collaborative divorce</li>
                <li>• Settlement negotiations</li>
                <li>• Arbitration</li>
                <li>• Conflict resolution</li>
              </ul>
              <Button variant="outline" size="sm" className="w-full" aria-label="Explore alternative dispute resolution">
                Explore Mediation & ADR
              </Button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-[#f59e0b] text-3xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">Post-Decree Issues</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li>• Appeals</li>
                <li>• Enforcement actions</li>
                <li>• Modifications</li>
                <li>• Contempt proceedings</li>
                <li>• Paternity cases</li>
              </ul>
              <Button variant="outline" size="sm" className="w-full" aria-label="Explore post-decree issues">
                Explore Post-Decree Issues
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1e3a8a] mb-12">
            How Our Virtual Consultation Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#3b82f6] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="font-semibold mb-2">Book Online</h3>
              <p className="text-gray-600 text-sm">
                Schedule your consultation at a time that works for you
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#3b82f6] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="font-semibold mb-2">Make Payment</h3>
              <p className="text-gray-600 text-sm">
                Secure payment of $500 flat fee through Stripe
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#3b82f6] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="font-semibold mb-2">Meet Virtually</h3>
              <p className="text-gray-600 text-sm">
                Join your video consultation from anywhere in Arizona
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#3b82f6] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="font-semibold mb-2">Get Guidance</h3>
              <p className="text-gray-600 text-sm">
                Receive expert advice and a clear action plan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1e3a8a] mb-12">
            What&apos;s Included in Your Consultation
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <span className="text-[#10b981] text-2xl mr-3">✓</span>
                <div>
                  <h3 className="font-semibold mb-1">Case Assessment</h3>
                  <p className="text-gray-600">Thorough review of your situation and legal standing</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-[#10b981] text-2xl mr-3">✓</span>
                <div>
                  <h3 className="font-semibold mb-1">Legal Options</h3>
                  <p className="text-gray-600">Clear explanation of all available legal pathways</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-[#10b981] text-2xl mr-3">✓</span>
                <div>
                  <h3 className="font-semibold mb-1">Strategy Development</h3>
                  <p className="text-gray-600">Customized approach tailored to your goals</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-[#10b981] text-2xl mr-3">✓</span>
                <div>
                  <h3 className="font-semibold mb-1">Timeline & Process</h3>
                  <p className="text-gray-600">Realistic expectations for your case timeline</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-[#10b981] text-2xl mr-3">✓</span>
                <div>
                  <h3 className="font-semibold mb-1">Cost Estimation</h3>
                  <p className="text-gray-600">Transparent discussion of potential legal fees</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-[#10b981] text-2xl mr-3">✓</span>
                <div>
                  <h3 className="font-semibold mb-1">Next Steps</h3>
                  <p className="text-gray-600">Clear action plan and immediate steps to take</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-[#10b981] text-2xl mr-3">✓</span>
                <div>
                  <h3 className="font-semibold mb-1">Document Review</h3>
                  <p className="text-gray-600">Analysis of relevant documents you provide</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-[#10b981] text-2xl mr-3">✓</span>
                <div>
                  <h3 className="font-semibold mb-1">Q&A Session</h3>
                  <p className="text-gray-600">Answers to all your specific questions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1e3a8a] text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get Started Today</h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto leading-relaxed">
            Don&apos;t wait to get the legal guidance you need. Schedule your virtual 
            consultation now and take control of your family law matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Book Your Consultation
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#1e3a8a]">
              View Practice Areas
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
