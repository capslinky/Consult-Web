import Link from 'next/link';

interface PageStatus {
  url: string;
  title: string;
  status: 'completed' | 'in-progress' | 'not-started' | 'needs-fix';
  notes?: string;
  lastUpdated?: string;
}

export const metadata = {
  title: 'Developer Sitemap - Progress Tracking | Paradise Law AZ',
  description: 'Real-time development progress tracking for Paradise Law AZ website.',
  robots: 'noindex,nofollow', // Hide from search engines
};

export default function DevSitemapPage() {
  const corePages: PageStatus[] = [
    { url: '/', title: 'Homepage', status: 'completed' },
    { url: '/about', title: 'About Attorney Paradise', status: 'completed' },
    { url: '/services', title: 'Virtual Consultation Service Overview', status: 'completed' },
    { url: '/how-it-works', title: 'Process & Technology Requirements', status: 'completed' },
    { url: '/pricing', title: 'Investment & Value Proposition', status: 'completed' },
    { url: '/book', title: 'Schedule Consultation (Calendly Integration)', status: 'not-started', notes: 'Needs Calendly integration' },
    { url: '/contact', title: 'Contact Information & Form', status: 'completed' },
  ];

  const divorcePages: PageStatus[] = [
    { url: '/practice-areas/divorce/uncontested', title: 'Uncontested Divorce', status: 'completed' },
    { url: '/practice-areas/divorce/contested', title: 'Contested Divorce', status: 'completed', notes: 'ESLint errors fixed' },
    { url: '/practice-areas/divorce/legal-separation', title: 'Legal Separation', status: 'completed', notes: 'URL differs from sitemap (separation)' },
    { url: '/practice-areas/divorce/military', title: 'Military Divorce', status: 'completed' },
    { url: '/practice-areas/divorce/high-asset', title: 'High-Asset Divorce', status: 'completed' },
  ];

  const custodyPages: PageStatus[] = [
    { url: '/practice-areas/custody', title: 'Child Custody Overview', status: 'completed', notes: 'URL differs from sitemap (child-custody)' },
    { url: '/practice-areas/custody/parental-rights', title: 'Parental Rights', status: 'completed', notes: 'URL differs from sitemap (parenting-plans)' },
    { url: '/practice-areas/custody/modifications', title: 'Custody Modifications', status: 'completed' },
    { url: '/practice-areas/custody/relocation', title: 'Relocation Cases', status: 'completed' },
    { url: '/practice-areas/custody/evaluations', title: 'Custody Evaluations', status: 'completed', notes: 'Not in original sitemap - added' },
    { url: '/practice-areas/custody/grandparents-rights', title: 'Grandparents\' Rights', status: 'not-started', notes: 'From sitemap - needs creation' },
  ];

  const financialPages: PageStatus[] = [
    { url: '/practice-areas/financial/child-support-spousal-support', title: 'Child Support & Spousal Support', status: 'completed', notes: 'Combined from 2 sitemap pages' },
    { url: '/practice-areas/financial/property-division', title: 'Property Division', status: 'completed' },
    { url: '/practice-areas/financial/debt-division', title: 'Debt Division', status: 'completed', notes: 'Added - not in original sitemap' },
    { url: '/practice-areas/financial/business-valuation', title: 'Business Valuation', status: 'completed', notes: 'Added - not in original sitemap' },
    { url: '/practice-areas/financial/retirement-investment-accounts', title: 'Retirement & Investment Accounts', status: 'completed', notes: 'Added - not in original sitemap' },
    { url: '/practice-areas/financial/prenuptial', title: 'Prenuptial Agreements', status: 'not-started', notes: 'From sitemap - needs creation' },
    { url: '/practice-areas/financial/postnuptial', title: 'Postnuptial Agreements', status: 'not-started', notes: 'From sitemap - needs creation' },
  ];

  const specialPages: PageStatus[] = [
    { url: '/practice-areas/special/domestic-violence', title: 'Domestic Violence', status: 'not-started', notes: 'From sitemap - needs creation' },
    { url: '/practice-areas/special/paternity', title: 'Paternity Cases', status: 'not-started', notes: 'From sitemap - needs creation' },
    { url: '/practice-areas/special/mediation', title: 'Mediation & ADR', status: 'not-started', notes: 'From sitemap - needs creation' },
    { url: '/practice-areas/special/appeals', title: 'Appeals & Post-Decree', status: 'not-started', notes: 'From sitemap - needs creation' },
    { url: '/practice-areas/special/enforcement', title: 'Enforcement Actions', status: 'not-started', notes: 'From sitemap - needs creation' },
  ];

  const resourcePages: PageStatus[] = [
    { url: '/resources', title: 'Resource Hub', status: 'not-started' },
    { url: '/resources/blog', title: 'Legal Blog & Articles', status: 'not-started' },
    { url: '/resources/guides', title: 'Downloadable Guides', status: 'not-started' },
    { url: '/resources/testimonials', title: 'Client Success Stories', status: 'not-started' },
    { url: '/resources/faq', title: 'Frequently Asked Questions', status: 'not-started' },
  ];

  const legalPages: PageStatus[] = [
    { url: '/legal/privacy', title: 'Privacy Policy', status: 'not-started' },
    { url: '/legal/terms', title: 'Terms of Service', status: 'not-started' },
    { url: '/legal/disclaimer', title: 'Legal Disclaimer', status: 'not-started' },
    { url: '/legal/cookie-policy', title: 'Cookie Policy', status: 'not-started' },
    { url: '/legal/refund-policy', title: 'Refund Policy', status: 'not-started' },
    { url: '/legal/attorney-advertising', title: 'Attorney Advertising Disclosure', status: 'not-started' },
  ];

  const utilityPages: PageStatus[] = [
    { url: '/404', title: 'Page Not Found', status: 'not-started' },
    { url: '/thank-you', title: 'Booking Confirmation', status: 'not-started' },
    { url: '/confirmation', title: 'Payment Confirmation', status: 'not-started' },
    { url: '/download-success', title: 'Guide Download Success', status: 'not-started' },
  ];

  const getStatusColor = (status: PageStatus['status']) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800';
      case 'needs-fix': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusCount = (pages: PageStatus[], status: PageStatus['status']) => 
    pages.filter(page => page.status === status).length;

  const allPages = [...corePages, ...divorcePages, ...custodyPages, ...financialPages, ...specialPages, ...resourcePages, ...legalPages, ...utilityPages];
  
  const stats = {
    total: allPages.length,
    completed: getStatusCount(allPages, 'completed'),
    inProgress: getStatusCount(allPages, 'in-progress'),
    needsFix: getStatusCount(allPages, 'needs-fix'),
    notStarted: getStatusCount(allPages, 'not-started'),
  };

  const PageSection = ({ title, pages }: { title: string; pages: PageStatus[] }) => (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-navy">{title}</h3>
        <div className="flex gap-2 text-sm">
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
            {getStatusCount(pages, 'completed')}/{pages.length} Complete
          </span>
        </div>
      </div>
      <div className="grid gap-3">
        {pages.map((page, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-white border rounded-lg">
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <Link 
                  href={page.url} 
                  className="text-navy hover:text-light-blue font-medium"
                  target={page.status === 'completed' ? '_blank' : '_self'}
                  rel={page.status === 'completed' ? 'noopener noreferrer' : ''}
                >
                  {page.url}
                </Link>
                <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(page.status)}`}>
                  {page.status.replace('-', ' ')}
                </span>
              </div>
              <p className="text-gray-600 text-sm mt-1">{page.title}</p>
              {page.notes && (
                <p className="text-orange-600 text-xs mt-1 italic">{page.notes}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-navy text-white py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Developer Sitemap</h1>
              <p className="text-white/90">Real-time progress tracking for Paradise Law AZ website</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gold">
                {Math.round((stats.completed / stats.total) * 100)}% Complete
              </div>
              <div className="text-sm text-white/80">
                {stats.completed} of {stats.total} pages
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl py-12">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-5 gap-4 mb-12">
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <div className="text-2xl font-bold text-navy">{stats.total}</div>
            <div className="text-gray-600">Total Pages</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <div className="text-2xl font-bold text-green-600">{stats.completed}</div>
            <div className="text-gray-600">Completed</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <div className="text-2xl font-bold text-yellow-600">{stats.inProgress}</div>
            <div className="text-gray-600">In Progress</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <div className="text-2xl font-bold text-red-600">{stats.needsFix}</div>
            <div className="text-gray-600">Needs Fix</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <div className="text-2xl font-bold text-gray-600">{stats.notStarted}</div>
            <div className="text-gray-600">Not Started</div>
          </div>
        </div>

        {/* Priority Issues */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-red-800 mb-4">⚠️ Priority Issues</h2>
          <ul className="space-y-2 text-red-700">
            <li>• URL inconsistencies between built pages and SITEMAP.md</li>
            <li>• Missing /book page with Calendly integration</li>
            <li>• 5 special circumstances practice area pages not started</li>
            <li>• All resource pages (blog, guides, testimonials, FAQ) missing</li>
            <li>• Legal compliance pages not created</li>
            <li>• Internal links may be pointing to incorrect URLs</li>
          </ul>
        </div>

        {/* Progress by Section */}
        <PageSection title="Core Pages (7 pages)" pages={corePages} />
        <PageSection title="Divorce & Separation (5 pages)" pages={divorcePages} />
        <PageSection title="Child Custody & Parenting (6 pages)" pages={custodyPages} />
        <PageSection title="Financial Matters (7 pages)" pages={financialPages} />
        <PageSection title="Special Circumstances (5 pages)" pages={specialPages} />
        <PageSection title="Resources (5 pages)" pages={resourcePages} />
        <PageSection title="Legal & Compliance (6 pages)" pages={legalPages} />
        <PageSection title="Utility Pages (4 pages)" pages={utilityPages} />

        {/* Quick Actions */}
        <div className="mt-12 bg-light-blue/10 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-navy mb-4">🚀 Recommended Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-navy mb-2">High Priority:</h3>
              <ul className="space-y-1 text-sm">
                <li>1. Fix internal link URLs throughout site</li>
                <li>2. Create /book page with Calendly integration</li>
                <li>3. Add missing special circumstances pages</li>
                <li>4. Implement UI/UX improvements</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-navy mb-2">Medium Priority:</h3>
              <ul className="space-y-1 text-sm">
                <li>1. Create resource pages (blog, guides, etc.)</li>
                <li>2. Add legal compliance pages</li>
                <li>3. Create utility pages (404, thank you, etc.)</li>
                <li>4. Update SITEMAP.md to match reality</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="text-center text-gray-500 text-sm mt-8">
          Last updated: {new Date().toLocaleString()}
        </div>
      </div>
    </main>
  );
}
