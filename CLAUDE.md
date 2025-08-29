# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a family law virtual consultation website for paradiselawaz.com - a static, high-performance marketing site designed to convert visitors into paying customers for $500 virtual family law consultations.

### Business Goals
- Generate 20 paid consultations per month ($10,000 MRR)
- Achieve 2% visitor-to-customer conversion rate
- Maintain Customer Acquisition Cost <$100
- Page load time under 1 second

## Technology Stack

### Frontend
- **Framework**: Next.js with static export
- **UI Components**: React with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Build**: Static site generation

### Infrastructure
- **Hosting**: Vercel
- **CDN**: Automatic via Vercel
- **Deployment**: Git-based CI/CD

### Third-Party Integrations
- **Calendly**: Booking system (JavaScript embed)
- **Stripe**: Payment processing ($500 flat fee)
- **ConvertKit**: Email automation
- **Google Analytics**: Traffic analysis (gtag.js)
- **Hotjar**: User behavior tracking

## Development Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Export static site
npm run export

# Run type checking
npm run type-check

# Run linting
npm run lint

# Format code
npm run format
```

## Project Structure

```
/
├── app/                    # Next.js 14+ app directory
│   ├── (marketing)/       # Marketing pages layout group
│   │   ├── page.tsx       # Homepage
│   │   ├── about/
│   │   ├── services/
│   │   ├── pricing/
│   │   ├── how-it-works/
│   │   └── contact/
│   ├── practice-areas/    # 20 practice area pages
│   │   ├── divorce/       # 5 divorce-related pages
│   │   ├── custody/       # 5 custody-related pages
│   │   ├── financial/     # 5 financial matter pages
│   │   └── special/       # 5 special circumstance pages
│   ├── resources/
│   │   ├── blog/
│   │   ├── guides/
│   │   ├── testimonials/
│   │   └── faq/
│   ├── book/              # Booking flow
│   └── legal/             # Legal compliance pages
├── components/
│   ├── ui/                # Atomic design components
│   ├── sections/          # Page sections
│   ├── forms/             # Form components
│   ├── navigation/        # Nav components
│   └── practice-areas/    # Practice area specific
├── lib/                   # Utilities and helpers
├── styles/               # Global styles
├── content/              # Markdown content
│   ├── blog/            # Blog posts
│   └── practice-areas/  # Practice area content
└── public/               # Static assets
    ├── images/
    └── documents/        # PDF guides
```

## Key Implementation Requirements

### Performance
- Page load time <1 second
- Time to Interactive <2 seconds
- Lighthouse mobile score 90+
- Implement lazy loading for images
- Use Next.js Image component for optimization

### Conversion Optimization
- Multiple CTAs per page (minimum 3 on homepage)
- Sticky header with "Book Now" button
- Maximum 3 clicks to booking from any page
- Trust indicators: attorney credentials, testimonials, money-back guarantee
- Urgency elements: limited slots display, countdown timers

### SEO
- Implement schema markup for LegalService
- Generate XML sitemap
- Unique meta descriptions per page
- Clean URL structure with trailing slashes
- Local SEO optimization for Arizona

### Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- Minimum 4.5:1 color contrast
- Touch targets minimum 44x44px on mobile

## Design System

### Colors
- Primary: Navy blue (#1e3a8a)
- Secondary: Light blue (#3b82f6)
- Accent/CTA: Gold (#f59e0b)
- Success: Green (#10b981)
- Error: Red (#ef4444)

### Typography
- Headlines: Serif font
- Body: Sans-serif
- Base font size: 16px minimum
- Line height: 1.5-1.7 for body text

## Critical User Flows

### Primary: Homepage to Booking
1. Hero section with value proposition
2. Problem/agitation/solution framework
3. Service comparison table
4. Click "Book Now" CTA
5. Calendly embed for slot selection
6. Stripe payment integration
7. Confirmation page with next steps

### Email Capture
1. Offer free guide download
2. Capture email via ConvertKit form
3. Deliver guide automatically
4. Trigger 30-day nurture sequence

## Testing Checklist

Before any deployment:
- [ ] All forms submit correctly
- [ ] Calendly booking widget loads
- [ ] Stripe payment links work
- [ ] Mobile responsive on all breakpoints
- [ ] Page speed <1 second
- [ ] No console errors
- [ ] Analytics tracking verified

## Content Management

- Static pages use React components
- Blog posts stored as Markdown in `/content/blog/`
- PDF guides hosted in `/public/documents/`
- Testimonials hardcoded in components (no CMS)

## Legal Compliance

Required pages:
- Privacy Policy
- Terms of Service
- Attorney Advertising Disclosure
- Cookie Policy
- Refund Policy

All legal pages must be reviewed by attorney before deployment.

## Deployment Process

1. Push to main branch triggers Vercel deployment
2. Preview deployments for pull requests
3. Production deployment requires manual promotion
4. Environment variables stored in Vercel dashboard

## Key Metrics to Track

- Conversion rate (target: 2%)
- Page load speed (target: <1s)
- Booking abandonment rate (target: <30%)
- Mobile conversion rate (target: >1.5%)

## Important Notes

- Never commit API keys or secrets
- All user data flows through third-party services (Calendly, Stripe, ConvertKit)
- No database required - fully static site
- Prioritize conversion over features
- Mobile-first development approach
- 20 practice area pages are critical for SEO and lead generation
- Follow the ROADMAP.md for phased development
- Refer to SITEMAP.md for complete page structure