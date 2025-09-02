import type { MetadataRoute } from 'next';
import { ensureTrailingSlash } from '@/lib/seo';

const base = ensureTrailingSlash(process.env.NEXT_PUBLIC_SITE_URL || 'https://azfamilylaw.wiki');

const core = ['/', '/how-it-works/', '/pricing/', '/book/', '/contact/'];
const services = ['/services/limited-scope/', '/services/full-representation/'];
const practiceDivorce = [
  '/practice-areas/divorce/',
  '/practice-areas/divorce/uncontested/',
  '/practice-areas/divorce/contested/',
  '/practice-areas/divorce/high-asset/',
  '/practice-areas/divorce/military/',
  '/practice-areas/divorce/legal-separation/',
];
const practiceCustody = [
  '/practice-areas/custody/',
  '/practice-areas/custody/parental-rights/',
  '/practice-areas/custody/modifications/',
  '/practice-areas/custody/relocation/',
  '/practice-areas/custody/evaluations/',
  '/practice-areas/custody/grandparents-rights/',
];
const practiceFinancial = [
  '/practice-areas/financial/',
  '/practice-areas/financial/child-support/',
  '/practice-areas/financial/spousal-maintenance/',
  '/practice-areas/financial/property-division/',
  '/practice-areas/financial/debt-division/',
  '/practice-areas/financial/business-valuation/',
  '/practice-areas/financial/retirement-investment-accounts/',
  '/practice-areas/financial/prenuptial/',
  '/practice-areas/financial/postnuptial/',
];
const practiceSpecial = [
  '/practice-areas/special/',
  '/practice-areas/special/domestic-violence/',
  '/practice-areas/special/paternity/',
  '/practice-areas/special/mediation/',
  '/practice-areas/special/appeals/',
  '/practice-areas/special/enforcement/',
];
const resources = [
  '/resources/',
  '/resources/blog/',
  '/resources/guides/',
  '/resources/faq/',
  '/resources/testimonials/',
];
const legal = [
  '/legal/',
  '/legal/privacy/',
  '/legal/terms/',
  '/legal/disclaimer/',
  '/legal/cookie-policy/',
  '/legal/refund-policy/',
  '/legal/attorney-advertising/',
];
const utility = ['/thank-you/', '/confirmation/', '/download-success/'];

const highPriority = new Set<string>(['/', '/book/', '/pricing/', '/how-it-works/']);
const practicePriority = new Set<string>([
  '/practice-areas/divorce/',
  '/practice-areas/custody/',
  '/practice-areas/financial/',
  '/practice-areas/special/',
]);

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    ...core,
    ...services,
    ...practiceDivorce,
    ...practiceCustody,
    ...practiceFinancial,
    ...practiceSpecial,
    ...resources,
    ...legal,
    ...utility,
  ];

  const now = new Date();

  return pages.map((path) => {
    const url = base.replace(/\/$/, '') + path;
    let priority = 0.6;
    if (path === '/') priority = 1.0;
    else if (highPriority.has(path)) priority = 0.9;
    else if (practicePriority.has(path) || path.startsWith('/practice-areas/')) priority = 0.8;
    else if (path.startsWith('/resources/')) priority = 0.6;
    else if (path.startsWith('/legal/')) priority = 0.5;
    else if (path === '/thank-you/' || path === '/confirmation/') priority = 0.4;

    return {
      url,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority,
    };
  });
}

// Ensure this route is statically exported in static export mode
export const dynamic = 'force-static';
export const revalidate = 86400; // 24 hours
