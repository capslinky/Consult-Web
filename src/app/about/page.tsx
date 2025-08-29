import { Button } from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Paradise Law AZ - Experienced Family Law Attorneys',
  description: 'Meet our experienced Arizona family law attorneys. Over 20 years of combined experience helping families navigate divorce, custody, and financial matters.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1e3a8a] to-[#3b82f6] text-white py-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Paradise Law AZ</h1>
          <p className="text-xl max-w-3xl">
            Dedicated to providing compassionate, expert legal guidance for Arizona families 
            during life&apos;s most challenging transitions.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#1e3a8a] mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-4">
                Paradise Law AZ exists to make quality family law representation accessible to 
                everyone in Arizona. We believe that every family deserves expert legal guidance 
                during difficult times, regardless of their location or circumstances.
              </p>
              <p className="text-lg text-gray-700">
                Through virtual consultations, we remove the barriers of distance and time, 
                providing professional legal advice when you need it most.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#1e3a8a] mb-6">Our Values</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#f59e0b] mr-3">✓</span>
                  <div>
                    <h3 className="font-semibold mb-1">Accessibility</h3>
                    <p className="text-gray-600">Legal help available anywhere in Arizona</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f59e0b] mr-3">✓</span>
                  <div>
                    <h3 className="font-semibold mb-1">Transparency</h3>
                    <p className="text-gray-600">Clear pricing and honest communication</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f59e0b] mr-3">✓</span>
                  <div>
                    <h3 className="font-semibold mb-1">Compassion</h3>
                    <p className="text-gray-600">Understanding and empathetic approach</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f59e0b] mr-3">✓</span>
                  <div>
                    <h3 className="font-semibold mb-1">Excellence</h3>
                    <p className="text-gray-600">Highest standards of legal service</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Attorney Profile */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1e3a8a] mb-12">Meet Your Attorney</h2>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <div className="bg-gray-300 rounded-lg h-64 mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Attorney Photo</span>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-xl mb-2">John Paradise, Esq.</h3>
                  <p className="text-gray-600">Lead Family Law Attorney</p>
                </div>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-4">Professional Background</h3>
                <ul className="space-y-2 mb-6">
                  <li>• Over 15 years of family law experience</li>
                  <li>• Licensed to practice in Arizona since 2009</li>
                  <li>• Member of the State Bar of Arizona</li>
                  <li>• Member of the Family Law Section</li>
                  <li>• Certified Family Law Specialist</li>
                  <li>• Trained mediator and collaborative law practitioner</li>
                </ul>
                <h3 className="text-2xl font-bold mb-4">Education</h3>
                <ul className="space-y-2 mb-6">
                  <li>• J.D., Arizona State University Sandra Day O&apos;Connor College of Law</li>
                  <li>• B.A., Psychology, University of Arizona</li>
                </ul>
                  <p className="text-gray-700">
                    &ldquo;I believe every family deserves compassionate, expert legal guidance during 
                    challenging times. My goal is to help you navigate the legal process with 
                    confidence and achieve the best possible outcome for your family.&rdquo;
                  </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1e3a8a] mb-12">
            Why Choose Paradise Law AZ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#3b82f6] text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💼</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Proven Experience</h3>
              <p className="text-gray-600">
                Over 500 successful family law cases handled with care and expertise
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#3b82f6] text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Virtual Convenience</h3>
              <p className="text-gray-600">
                Meet from anywhere in Arizona - no travel or time off work required
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#3b82f6] text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Transparent Pricing</h3>
              <p className="text-gray-600">
                Flat $500 consultation fee with money-back satisfaction guarantee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1e3a8a] text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Expert Legal Guidance?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule your virtual consultation today and take the first step toward 
            resolving your family law matter with confidence.
          </p>
          <Button variant="primary" size="lg">
            Schedule Your Consultation
          </Button>
        </div>
      </section>
    </>
  );
}
