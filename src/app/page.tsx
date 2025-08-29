import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">
            Expert Family Law Consultations
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Get personalized legal guidance from experienced Arizona family law attorneys. 
            Virtual consultations available for $500.
          </p>
          <Button variant="primary" size="lg">
            Schedule Your Consultation
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-[#1e3a8a] mb-12">
            Why Choose Paradise Law AZ
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#3b82f6] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h4 className="text-xl font-semibold mb-2">Expert Attorneys</h4>
              <p className="text-gray-600">Experienced in Arizona family law with proven results</p>
            </div>
            <div className="text-center">
              <div className="bg-[#3b82f6] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h4 className="text-xl font-semibold mb-2">Virtual Consultations</h4>
              <p className="text-gray-600">Convenient online meetings from the comfort of your home</p>
            </div>
            <div className="text-center">
              <div className="bg-[#3b82f6] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h4 className="text-xl font-semibold mb-2">Money-Back Guarantee</h4>
              <p className="text-gray-600">100% satisfaction guaranteed or your money back</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#1e3a8a] text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-xl mb-8">Schedule your consultation today and get the legal guidance you need.</p>
          <Button variant="primary" size="lg">
            Book Your Consultation Now
          </Button>
        </div>
      </section>
    </>
  );
}
