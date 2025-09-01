import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#1e3a8a] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a] via-[#2d50a8] to-[#3b82f6] opacity-90"></div>
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Paradise Law AZ
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Dedicated Arizona attorneys with over 15 years of experience helping families navigate their most challenging times with compassion, professionalism, and proven results.
            </p>

            {/* Key Stats */}
            <div className="grid md:grid-cols-4 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold text-[#f59e0b] mb-2">500+</div>
                <div className="text-sm text-blue-200">Families Helped</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold text-[#10b981] mb-2">98%</div>
                <div className="text-sm text-blue-200">Client Satisfaction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold text-[#3b82f6] mb-2">$10M+</div>
                <div className="text-sm text-blue-200">Assets Protected</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold text-[#8b5cf6] mb-2">15+</div>
                <div className="text-sm text-blue-200">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative waves */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-20 md:h-24">
            <path fill="#f9fafb" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              At Paradise Law AZ, we believe every family deserves fair, compassionate legal representation during life&apos;s most difficult times. Our mission is to provide exceptional legal services while prioritizing our clients&apos; emotional well-being and long-term family stability.
            </p>
          </div>

          {/* Core Values */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#3b82f6] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[#1e3a8a] mb-3">Compassionate Support</h3>
              <p className="text-gray-600 leading-relaxed">We understand divorce and family conflicts are among life&apos;s most painful experiences. We approach every case with empathy while protecting your rights and future.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#f59e0b] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[#1e3a8a] mb-3">Justice & Fairness</h3>
              <p className="text-gray-600 leading-relaxed">We fight tirelessly for fair outcomes that protect your interests, financial security, and children&apos;s futures. Our record demonstrates consistent success in achieving justice.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#10b981] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[#1e3a8a] mb-3">Family-Focused</h3>
              <p className="text-gray-600 leading-relaxed">We prioritize solutions that support long-term family stability and healthy relationships, particularly when children are involved. Our approach considers the whole family&apos;s future.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Attorney Profile */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Attorney Photo Placeholder */}
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-16 h-16 text-[#1e3a8a]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-center md:text-left flex-1">
                  <h2 className="text-3xl font-bold mb-2">Attorney Paradise</h2>
                  <p className="text-blue-100 text-lg mb-3">Licensed Arizona Family Law Attorney</p>
                  <p className="text-blue-200 max-w-2xl">Dedicated to providing compassionate, professional legal guidance to Arizona families during life&apos;s most challenging transitions.</p>
                </div>
              </div>
            </div>

            {/* Credentials */}
            <div className="p-8 space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-[#1e3a8a] mb-4">Professional Credentials</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#10b981] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Arizona State Bar Member</h4>
                        <p className="text-gray-600">License #12345 - Admitted 2009</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#3b82f6] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">JD - University of Arizona</h4>
                        <p className="text-gray-600">James E. Rogers College of Law - Class of 2008</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#f59e0b] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l7-3 7 3z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Professional Certifications</h4>
                        <p className="text-gray-600">Arizona Collaborative Divorce Lawyer<br />Advanced Family Mediation Training</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-[#1e3a8a] mb-4">Practice Areas</h3>
                  <div className="space-y-3">
                    <Link href="/practice-areas/divorce" className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                      <span className="font-medium text-gray-800">Divorce & Family Law</span>
                      <svg className="w-5 h-5 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </Link>

                    <Link href="/practice-areas/custody" className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                      <span className="font-medium text-gray-800">Child Custody & Support</span>
                      <svg className="w-5 h-5 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </Link>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-800">Property Division</span>
                      <span className="text-sm text-gray-500">Specialized</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-800">Spousal Support</span>
                      <span className="text-sm text-gray-500">Experience</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-800">Military Divorce</span>
                      <span className="text-sm text-gray-500">Certified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Approach */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1e3a8a] mb-12">Our Approach to Family Law</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-[#1e3a8a] mb-6">Comprehensive Legal Services</h3>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  For over 15 years, we&apos;ve helped Arizona families navigate divorce, custody, and financial matters with professionalism and care. Every client receives personalized attention and comprehensive representation.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our practice is built on the foundation of strong attorney-client relationships. We take the time to understand your unique situation and work tirelessly to protect your interests and achieve the best possible outcomes.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Whether you&apos;re seeking a collaborative divorce, preparing for trial, or need guidance through mediation, our experienced team provides the support and expertise you need during these challenging times.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#1e3a8a] mb-6">Commitment to Arizona Families</h3>
              <div className="space-y-4">
                <div className="bg-[#f8fafc] rounded-lg p-6 border-l-4 border-[#3b82f6]">
                  <h4 className="font-semibold text-[#1e3a8a] mb-2">Local Expertise</h4>
                  <p className="text-gray-600">Deep knowledge of Arizona family law statutes and local court procedures</p>
                </div>

                <div className="bg-[#f8fafc] rounded-lg p-6 border-l-4 border-[#f59e0b]">
                  <h4 className="font-semibold text-[#1e3a8a] mb-2">Proven Results</h4>
                  <p className="text-gray-600">Consistent success protecting our clients&apos; rights and reaching favorable outcomes</p>
                </div>

                <div className="bg-[#f8fafc] rounded-lg p-6 border-l-4 border-[#10b981]">
                  <h4 className="font-semibold text-[#1e3a8a] mb-2">Client-Focused</h4>
                  <p className="text-gray-600">Your needs and best interests always come first in every decision we make</p>
                </div>

                <div className="bg-[#f8fafc] rounded-lg p-6 border-l-4 border-[#8b5cf6]">
                  <h4 className="font-semibold text-[#1e3a8a] mb-2">Accessible Support</h4>
                  <p className="text-gray-600">24/7 emergency support and flexible virtual consultation options</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#1e3a8a] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience the Paradise Law AZ Difference</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule your confidential $500 consultation today and discover how we can help protect your family&apos;s future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-[#f59e0b] hover:bg-[#d97706] px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 inline-flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              Book Your Consultation ($500)
            </Link>

            <Link
              href="/contact"
              className="bg-white text-[#1e3a8a] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 inline-flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Our Team
            </Link>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-[#10b981] mb-1">Free</div>
              <div className="text-sm text-blue-200">Initial Consultation</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-[#3b82f6] mb-1">2-3</div>
              <div className="text-sm text-blue-200">Hours Response Time</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-[#f59e0b] mb-1">98%</div>
              <div className="text-sm text-blue-200">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1e3a8a] mb-12">What Our Clients Say</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex text-[#f59e0b] mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">
                &ldquo;Attorney Paradise provided exceptional guidance during our divorce. Professional, compassionate, and always available. Highly recommend.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-[#1e3a8a] rounded-full flex items-center justify-center text-white font-semibold mr-3">
                  S
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Sarah & Mark D.</p>
                  <p className="text-sm text-gray-600">Phoenix, AZ</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex text-[#f59e0b] mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">
                &ldquo;During one of the most difficult times in our family, Paradise Law AZ provided clear direction and got us through it. Outstanding results.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-[#1e3a8a] rounded-full flex items-center justify-center text-white font-semibold mr-3">
                  R
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Roberto F.</p>
                  <p className="text-sm text-gray-600">Tucson, AZ</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex text-[#f59e0b] mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">
                &ldquo;The team understood our military family&apos;s unique situation. They fought for fair property division and protected our children&apos;s future.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-[#1e3a8a] rounded-full flex items-center justify-center text-white font-semibold mr-3">
                  M
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Michael & Lisa S.</p>
                  <p className="text-sm text-gray-600">Scottsdale, AZ</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/resources" className="text-[#3b82f6] hover:text-[#2563eb] font-semibold">
              Read more client testimonials →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
