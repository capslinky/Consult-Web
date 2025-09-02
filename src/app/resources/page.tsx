import Link from 'next/link';
import type { Metadata } from 'next';
import { canonical } from '@/lib/seo';
import { CTABand } from '@/components/sections/CTABand';

export const metadata: Metadata = {
  title: 'Resources | Paradise Law AZ',
  description: 'Resource hub: legal guides, blog articles, testimonials, and FAQs for Arizona family law.',
  alternates: { canonical: canonical('/resources/') },
  openGraph: {
    title: 'Resources | Paradise Law AZ',
    description: 'Legal guides, articles, testimonials, and FAQs for Arizona family law.',
    type: 'website',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://azfamilylaw.wiki'}/resources/`,
  },
};

interface ResourceItem {
  title: string;
  description: string;
  type: 'guide' | 'blog' | 'video' | 'faq';
  slug: string;
  readTime?: number;
  downloadUrl?: string;
  featured: boolean;
}

export default function ResourcesPage() {
  const resourceCategories = [
    {
      title: 'Legal Guides & Downloads',
      description: 'Essential Arizona family law guides for your situation',
      icon: (
        <svg className="w-8 h-8 text-[#3b82f6]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.13-2.052-.382-3.016z" />
        </svg>
      ),
      resources: 4
    },
    {
      title: 'Blog Articles',
      description: 'Latest updates and insights on Arizona family law',
      icon: (
        <svg className="w-8 h-8 text-[#3b82f6]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M8.5 2C6.567 2 4.846 3.371 4.846 5s1.721 3 3.654 3h.002c.63 0 1.214-.38 1.442-1.09.22-.69-.186-1.41-.896-1.63C9.196 4.558 8.99 4 8.5 4s-.697.558-.697 1.28c0 .28.199.53.495.69a.5.5 0 0 0 .401 0c.296-.16.495-.41.495-.69C9.197 4.558 8.99 4 8.5 4s-.697.558-.697 1.28c0 .62.475 1.122 1.077 1.157C9.375 7.6 8.54 8 7.5 8S5.625 7.6 5.625 7c0-2.21 1.932-4 4.375-4s4.375 1.79 4.375 4c0 .622.475 1.123 1.077 1.158.108.024.217.042.327.042v.002c.63 0 1.214-.38 1.442-1.09.22-.69-.186-1.41-.896-1.63C12.804 4.558 12.597 4 12.097 4s-.697.558-.697 1.28c0 .62-.475 1.122-1.077 1.157C9.375 7.6 8.54 8 7.5 8S5.625 7.6 5.625 7c0-2.21 1.932-4 4.375-4s4.375 1.79 4.375 4c0 .225-.02.449-.06.67-.194.198-.334.45-.334.73 0 .062.003.124.01.185.011.159.025.316.04.47-.003.49 0 1.76 0 1.76 0 .75-.3 1.43-.876 1.86a2.5 2.5 0 0 0-1.374-.5c-1.5 0-2.75-.75-2.75-1.67 0-.834.75-1.5 1.67-1.5s1.67.666 1.67 1.5c0 .833-.75 1.5-1.67 1.5z" />
        </svg>
      ),
      resources: 12
    },
    {
      title: 'Success Stories',
      description: 'Real client experiences and outcomes',
      icon: (
        <svg className="w-8 h-8 text-[#3b82f6]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      resources: 8
    },
    {
      title: 'Frequently Asked Questions',
      description: 'Answers to common legal questions',
      icon: (
        <svg className="w-8 h-8 text-[#3b82f6]" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 011-1zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
        </svg>
      ),
      resources: 15
    }
  ];

  const featuredResources: ResourceItem[] = [
    {
      title: 'The Complete Arizona Divorce Guide (2025 Edition)',
      description: 'Everything you need to know about navigating divorce in Arizona - from filing to finalizing.',
      type: 'guide',
      slug: 'arizona-divorce-guide-2025',
      downloadUrl: '/downloads/arizona-divorce-guide-2025.pdf',
      featured: true
    },
    {
      title: 'Child Custody Timeline: What to Expect',
      description: 'Realistic timelines for Arizona child custody cases and what happens at each stage.',
      type: 'blog',
      slug: 'child-custody-timeline-arizona',
      readTime: 8,
      featured: true
    },
    {
      title: 'Protecting Assets During Divorce',
      description: 'Essential strategies to safeguard your financial future during separation.',
      type: 'video',
      slug: 'asset-protection-divorce',
      readTime: 5,
      featured: true
    },
    {
      title: 'Sarah\'s Story: Rebuilding After Divorce',
      description: 'How community property division affected family finances - real client experience.',
      type: 'blog',
      slug: 'sarah-divorce-story',
      readTime: 12,
      featured: true
    }
  ];

  const recentBlogPosts = [
    {
      title: 'Arizona Primary Residence Rules in Divorce',
      excerpt: 'Understanding who gets to keep the family home during separation.',
      date: '2025-08-28',
      readTime: 6,
      slug: 'primary-residence-rules-divorce'
    },
    {
      title: 'Spousal Support Calculator & Guidelines',
      excerpt: 'Factors considered in Arizona spousal maintenance awards.',
      date: '2025-08-25',
      readTime: 4,
      slug: 'spousal-support-calculator-guidelines'
    },
    {
      title: 'Grandparents\' Visitation Rights in Arizona',
      excerpt: 'When and how grandparents can seek court-ordered visitation.',
      date: '2025-08-22',
      readTime: 7,
      slug: 'grandparent-visitation-rights-arizona'
    }
  ];

  const resourceStats = [
    { number: '50+', label: 'Legal Guides Available' },
    { number: '200+', label: 'Clients Helped' },
    { number: '15K+', label: 'Questions Answered' },
    { number: '95%', label: 'Client Satisfaction' }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#1e3a8a] text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your Legal Resources Hub
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Access Arizona family law guides, latest updates, and stories from families like yours.
            All resources are free - your previous consultation purchase includes email support.
          </p>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mt-8">
            {resourceStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-[#f59e0b]">{stat.number}</div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* End-cap CTA */}
      <CTABand title="Want personalized guidance?" subtitle="A $500 consultation can save you time and stress—book now." />

      {/* Resource Categories Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">Browse Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find exactly what you need - from legal guides to community stories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resourceCategories.map((category, index) => (
              <Link
                key={index}
                href={`/resources/${category.title.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`}
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 text-center border-l-4 border-[#3b82f6] hover:border-[#f59e0b]"
              >
                <div className="flex justify-center mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-2 group-hover:text-[#f59e0b] transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {category.description}
                </p>
                <div className="text-sm text-gray-500">
                  {category.resources} resources available
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">Featured Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Start here for the most valuable legal information
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredResources.map((resource, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 hover:border-[#f59e0b]">
                {/* Resource Type Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    resource.type === 'guide' ? 'bg-green-100 text-green-800' :
                    resource.type === 'blog' ? 'bg-blue-100 text-blue-800' :
                    resource.type === 'video' ? 'bg-purple-100 text-purple-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {resource.type === 'guide' && '📗 Guide'}
                    {resource.type === 'blog' && '📝 Article'}
                    {resource.type === 'video' && '🎥 Video'}
                    {resource.type === 'faq' && '❓ FAQ'}
                  </span>
                  {resource.readTime && (
                    <span className="text-xs text-gray-500">{resource.readTime} min read</span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-[#1e3a8a] mb-3">
                  {resource.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {resource.description}
                </p>

                <div className="flex justify-between items-center">
                  {resource.downloadUrl ? (
                    <Link
                      href={resource.downloadUrl}
                      className="text-[#3b82f6] hover:text-[#f59e0b] text-sm font-medium flex items-center"
                    >
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586 12.293 7.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L7 10.586 5.707 9.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Download
                    </Link>
                  ) : (
                    <Link
                      href={`/resources/${resource.type}/${resource.slug}`}
                      className="text-[#3b82f6] hover:text-[#f59e0b] text-sm font-medium flex items-center"
                    >
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Read More
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-[#1e3a8a] mb-2">Recent Blog Posts</h2>
              <p className="text-gray-600">Stay informed with the latest Arizona family law updates</p>
            </div>
            <Link
              href="/resources/blog/"
              className="text-[#3b82f6] hover:text-[#f59e0b] font-medium"
            >
              View All Posts →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {recentBlogPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-.894.553L1.382 9H2v3a1 1 0 001 1v6a1 1 0 001 1h12a1 1 0 001-1v-6a1 1 0 001-1V9h.618l-3.724-6.447A1 1 0 0014 2H6zM13 4c0-.553-.448 0-1 0s-1 .447-1 1h3c0-.553-.448-1-1-1zm-9 1v3h2V5h7v3h2V5a1 1 0 00-1-1H6a1 1 0 00-.894.553L3 9h14l-2.106-3.447A1 1 0 0014 5H5z" clipRule="evenodd" />
                  </svg>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                  <span className="mx-2">•</span>
                  <span>{post.readTime} min read</span>
                </div>

                <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">
                  <Link
                    href={`/resources/blog/${post.slug}`}
                    className="hover:text-[#f59e0b] transition-colors"
                  >
                    {post.title}
                  </Link>
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <Link
                  href={`/resources/blog/${post.slug}`}
                  className="inline-flex items-center text-[#3b82f6] hover:text-[#f59e0b] font-medium"
                >
                  Read Article →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 bg-[#1e3a8a] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
          <p className="text-xl mb-8 text-blue-100">
            Get Arizona family law updates, new guides, and legal insights sent to your inbox
          </p>

          <div className="max-w-md mx-auto bg-white rounded-xl p-6 shadow-lg">
            <form className="space-y-4">
              <div>
                <label htmlFor="newsletter-email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="newsletter-email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold py-3 px-4 rounded-md transition-colors"
              >
                Subscribe to Updates
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">Popular Topics</h2>
            <p className="text-gray-600">Find answers to the most searched legal questions</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { topic: 'Arizona Divorce Process', articles: 15 },
              { topic: 'Child Custody Rights', articles: 22 },
              { topic: 'Property Division', articles: 18 },
              { topic: 'Spousal Support', articles: 12 },
              { topic: 'Parental Visitation', articles: 9 },
              { topic: 'Legal Separation', articles: 7 }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <Link
                  href={`/resources/search?q=${encodeURIComponent(item.topic)}`}
                  className="inline-block bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-[#f59e0b] border"
                >
                  <h3 className="text-lg font-bold text-[#1e3a8a] mb-2">{item.topic}</h3>
                  <p className="text-gray-600 text-sm">{item.articles} articles available</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">Need Personalized Help?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Get your questions answered with a $500 virtual consultation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book/"
              className="bg-[#f59e0b] text-white hover:bg-[#d97706] px-8 py-4 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200"
            >
              Schedule Your Consultation
            </Link>
            <Link
              href="/contact/"
              className="bg-white text-[#3b82f6] border-2 border-[#3b82f6] hover:bg-[#3b82f6] hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200"
            >
              Get Free Advice
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
