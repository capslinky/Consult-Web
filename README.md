# Paradise Law AZ - Family Law Virtual Consultation Website

A high-performance marketing website for Paradise Law AZ, designed to convert visitors into paying customers for $500 virtual family law consultations.

## Overview

This Next.js application provides a complete virtual consultation booking platform for family law services in Arizona, featuring:

- 20+ practice area pages optimized for SEO
- Integrated booking system with Calendly
- Stripe payment processing (planned)
- Email automation with ConvertKit (planned)
- Performance-optimized with static site generation
- Mobile-first responsive design
- WCAG 2.1 AA accessibility compliance

## Technology Stack

- **Framework**: Next.js 15.5.2 with App Router
- **Styling**: Tailwind CSS v4
- **Type Safety**: TypeScript
- **Deployment**: Vercel
- **Domain**: azfamilylaw.wiki

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/capslinky/Consult-Web.git
cd Consult-Web
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables:
```bash
cp .env.example .env.local
```

4. Update `.env.local` with your configuration (note: payments/email are planned, not implemented yet):
```
NEXT_PUBLIC_SITE_URL=https://azfamilylaw.wiki
NEXT_PUBLIC_GA_ID=your_google_analytics_id
NEXT_PUBLIC_HOTJAR_ID=your_hotjar_id
CALENDLY_URL=your_calendly_url
STRIPE_PUBLIC_KEY=your_stripe_public_key
STRIPE_SECRET_KEY=your_stripe_secret_key
CONVERTKIT_API_KEY=your_convertkit_api_key
CONVERTKIT_FORM_ID=your_convertkit_form_id
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

```bash
npm run dev         # Start development server
npm run build       # Build for production
npm run start       # Start production server
npm run export      # Export static site
npm run lint        # Run ESLint
npm run type-check  # Run TypeScript type checking
npm run format      # Format code with Prettier
```

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── (marketing)/        # Marketing pages
│   ├── practice-areas/     # 20 practice area pages
│   ├── resources/          # Blog, guides, FAQ
│   ├── book/               # Booking flow
│   └── legal/              # Legal pages
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── sections/           # Page sections
│   ├── forms/              # Form components
│   ├── navigation/         # Navigation components
│   └── practice-areas/     # Practice area specific
├── lib/                    # Utilities and helpers (planned)
├── content/                # Markdown content (planned)
└── styles/                 # Global styles
```

## Component Library

The project includes a custom component library:

- **Button**: Primary, secondary, outline, and ghost variants
- **Input**: Text input with validation states
- **Select**: Dropdown
- **Textarea**: Resizable text area
- **Header**: Responsive navigation with mobile menu

## Design System

### Colors

- **Primary (Navy)**: #1e3a8a
- **Secondary (Light Blue)**: #3b82f6
- **Accent (Gold)**: #f59e0b
- **Success**: #10b981
- **Error**: #ef4444

### Typography

- **Headings**: Serif font (Georgia)
- **Body**: Sans-serif (system fonts)
- **Base size**: 16px minimum
- **Line height**: 1.6

## Performance Targets

- Page load time: <1 second
- Lighthouse mobile score: 90+
- Time to Interactive: <2 seconds
- Conversion rate: 2%

## Deployment

The site is configured for automatic deployment on Vercel:

1. Push to main branch triggers deployment
2. Preview deployments for pull requests
3. Production deployment at azfamilylaw.wiki

## Testing

```bash
npm run test        # Run unit tests (coming soon)
npm run test:e2e    # Run end-to-end tests (coming soon)
```

## Documentation

- [Product Requirements (PRD.MD)](./PRD.MD) - Business requirements and specifications
- [Roadmap (ROADMAP.md)](./ROADMAP.md) - Development phases and timeline
- [Site Map (SITEMAP.md)](./SITEMAP.md) - Complete page structure
- [Tasks (TASKS.md)](./TASKS.md) - Detailed task breakdown (464 tasks)
- [Claude Instructions (CLAUDE.md)](./CLAUDE.md) - AI assistant guidelines

## Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Ensure all tests pass
4. Submit a pull request

## License

This project is proprietary and confidential. All rights reserved by Paradise Law AZ.

## Support

For technical support, contact the development team.

---

Built with ❤️ for Paradise Law AZ
